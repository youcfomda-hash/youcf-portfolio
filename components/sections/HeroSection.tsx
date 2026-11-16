"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLanguage } from "@/components/ui/LanguageProvider";

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function buildPortraitParticles(src: string) {
  const img = await loadImage(src);
  const scale = Math.min(760 / img.width, 760 / img.height, 1);
  const w = Math.max(1, Math.round(img.width * scale));
  const h = Math.max(1, Math.round(img.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvas 2D context unavailable");

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);

  const data = ctx.getImageData(0, 0, w, h).data;
  const positions: number[] = [];
  const scatters: number[] = [];
  const colors: number[] = [];
  const meta: number[] = [];

  const depthSpan = 0.35 * w;
  const halfW = w / 2;
  const halfH = h / 2;

  const smoothstep = (edge0: number, edge1: number, val: number) => {
    const t = Math.max(0, Math.min(1, (val - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  };

  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const idx = (y * w + x) * 4;
      if (data[idx + 3] < 130) continue;

      let r = data[idx] / 255;
      let g = data[idx + 1] / 255;
      let b = data[idx + 2] / 255;
      const lum = (r + g + b) / 3;
      if (lum < 0.012) continue;

      const px = x - halfW;
      const py = halfH - y;
      const nx = px / halfW;
      const ny = (y - halfH) / halfH;

      // Smooth outer background transition without altering or washing out original orange saturation
      const bottomFade = smoothstep(0.01, 0.10, (h - y) / h);
      const bgFade = smoothstep(0.008, 0.035, lum);
      const envFade = bottomFade * bgFade;
      if (envFade < 0.01) continue;

      r = r * envFade;
      g = g * envFade;
      b = b * envFade;

      const normDist = Math.min(1, Math.hypot(nx, ny));
      const pseudoDepth = (1 - normDist * 0.65) * 0.6 + lum * 0.4;
      const pz = (pseudoDepth - 0.5) * depthSpan;

      positions.push(px, py, pz);
      colors.push(r, g, b);

      const sx = 2 * Math.random() - 1 + px / w;
      const sy = 2 * Math.random() - 1 + py / h;
      const sz = 2 * Math.random() - 1;
      const sLen = Math.hypot(sx, sy, sz) || 1;
      const sMag = 0.4 + 0.8 * Math.random();
      scatters.push((sx / sLen) * sMag, (sy / sLen) * sMag, (sz / sLen) * sMag);

      const baseAlpha = 0.96 * envFade;
      const order = Math.min(1, 0.5 * (1 - pseudoDepth) + 0.5 * normDist);
      meta.push(baseAlpha, order);

      if (positions.length / 3 >= 500000) break;
    }
    if (positions.length / 3 >= 500000) break;
  }

  return {
    positions: new Float32Array(positions),
    scatters: new Float32Array(scatters),
    colors: new Float32Array(colors),
    data: new Float32Array(meta),
    count: positions.length / 3,
    sampleWidth: w,
    sampleHeight: h,
  };
}

const textShadow = "0 2px 20px rgba(0,0,0,0.8)";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { content: siteContent } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let disposed = false;
    let rafId = 0;
    let renderer: THREE.WebGLRenderer | null = null;
    let geometry: THREE.BufferGeometry | null = null;
    let material: THREE.ShaderMaterial | null = null;
    let points: THREE.Points | null = null;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -2000, 2000);

    let targetScroll = 0;
    let currentScroll = 0;

    const getSize = () => ({
      w: canvas.clientWidth || window.innerWidth,
      h: canvas.clientHeight || window.innerHeight,
    });

    let cleanupListeners = () => {};

    (async () => {
      let particleData;
      try {
        particleData = await buildPortraitParticles(
          siteContent.hero.portraitImage
        );
      } catch {
        return;
      }
      if (disposed) return;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
      });

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      const { w, h } = getSize();
      renderer.setSize(w, h, false);

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particleData.positions, 3)
      );
      geometry.setAttribute(
        "aScatter",
        new THREE.BufferAttribute(particleData.scatters, 3)
      );
      geometry.setAttribute(
        "aColor",
        new THREE.BufferAttribute(particleData.colors, 3)
      );
      geometry.setAttribute(
        "aData",
        new THREE.BufferAttribute(particleData.data, 2)
      );

      const calcScale = (sw: number, sh: number) =>
        Math.min(0.84 * sh, 0.88 * sw) / particleData.sampleHeight;

      material = new THREE.ShaderMaterial({
        uniforms: {
          uScale: { value: calcScale(w, h) },
          uOffsetY: { value: 0.025 * h },
          uScroll: { value: 0 },
          uDisperse: { value: 2.8 * Math.max(w, h) },
          uSize: { value: 2.8 },
          uPixelRatio: { value: dpr },
        },
        vertexShader: `
          uniform float uScale;
          uniform float uOffsetY;
          uniform float uScroll;
          uniform float uDisperse;
          uniform float uSize;
          uniform float uPixelRatio;

          attribute vec3 aScatter;
          attribute vec3 aColor;
          attribute vec2 aData;

          varying float vAlpha;
          varying vec3 vColor;

          void main() {
            float baseAlpha = aData.x;
            float order     = aData.y;
            vColor = aColor;

            vec3 p = position * uScale;
            p.y += uOffsetY;

            float g = clamp((uScroll - 0.05) / 0.35, 0.0, 1.0);
            float delay = (1.0 - order) * 0.45;
            float pd = clamp((g - delay) / max(1.0 - delay, 0.001), 0.0, 1.0);
            pd = pd * pd;

            p += aScatter * uDisperse * pd;

            vAlpha = baseAlpha * (1.0 - smoothstep(0.85, 1.0, uScroll) * 0.5);

            vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            gl_PointSize = uSize * uPixelRatio * (1.0 + 0.5 * pd);
          }
        `,
        fragmentShader: `
          precision mediump float;

          varying float vAlpha;
          varying vec3 vColor;

          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float softEdge = smoothstep(0.5, 0.16, d);
            gl_FragColor = vec4(vColor, vAlpha * softEdge);
          }
        `,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);

      const updateCam = () => {
        const s = getSize();
        camera.left = -s.w / 2;
        camera.right = s.w / 2;
        camera.top = s.h / 2;
        camera.bottom = -s.h / 2;
        camera.updateProjectionMatrix();
      };
      updateCam();

      const onResize = () => {
        if (!renderer || !material) return;
        const s = getSize();
        renderer.setSize(s.w, s.h, false);
        updateCam();
        material.uniforms.uScale.value = calcScale(s.w, s.h);
        material.uniforms.uOffsetY.value = 0.025 * s.h;
        material.uniforms.uDisperse.value = 2.8 * Math.max(s.w, s.h);
      };

      const onScroll = () => {
        if (prefersReducedMotion) return;
        const vh = window.innerHeight || 1;
        targetScroll = Math.min(Math.max(window.scrollY / vh, 0), 1);
      };

      onScroll();
      window.addEventListener("resize", onResize);
      window.addEventListener("scroll", onScroll, { passive: true });

      const animate = () => {
        if (disposed || !renderer || !material) return;
        rafId = requestAnimationFrame(animate);
        currentScroll += (targetScroll - currentScroll) * 0.12;
        material.uniforms.uScroll.value = currentScroll;
        renderer.render(scene, camera);
      };
      animate();

      cleanupListeners = () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll);
      };
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      cleanupListeners();
      if (points) scene.remove(points);
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--bg-primary)",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 40,
          willChange: "transform",
          pointerEvents: "none",
        }}
      />

      <div
        className="herop-top"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 41,
          padding: "96px 48px 0",
          fontFamily: "var(--font-space-mono)",
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: "0.08em",
          color: "var(--text-primary)",
          textShadow,
        }}
      >
        {siteContent.hero.topLabel}
      </div>

      <div
        className="herop-roles"
        style={{
          position: "absolute",
          left: 0,
          bottom: "22.5vh",
          zIndex: 41,
          padding: "0 48px",
        }}
      >
        {siteContent.hero.roles.map((role, idx) => (
          <div
            key={role}
            style={{
              fontFamily: "var(--font-orbitron)",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color:
                idx === siteContent.hero.roles.length - 1
                  ? "var(--accent-rust)"
                  : "var(--text-primary)",
              textShadow,
            }}
          >
            {role}
          </div>
        ))}
      </div>

      <div
        className="herop-metrics"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--border-subtle)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 42,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
        }}
      >
        {siteContent.hero.metrics.map((m, idx) => (
          <div
            key={m.label}
            className="herop-metric-cell"
            style={{
              padding: "24px 48px",
              borderRight:
                idx < 3 ? "1px solid var(--border-subtle)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 900,
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              {m.num}
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 11,
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .herop-top { padding: 100px 24px 0 !important; font-size: 12px !important; }
          .herop-roles { padding: 0 24px !important; bottom: 26vh !important; }
          .herop-metrics { grid-template-columns: repeat(2, 1fr) !important; }
          .herop-metric-cell { padding: 16px 18px !important; border-bottom: 1px solid var(--border-subtle); }
        }
      `}</style>
    </section>
  );
}

