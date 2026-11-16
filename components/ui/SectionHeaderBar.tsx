import React from "react";
import { siteContent } from "@/data/content";

export default function SectionHeaderBar({
  name,
  jp,
  num,
}: {
  name: string;
  jp: string;
  num: string;
}) {
  const style: React.CSSProperties = {
    fontFamily: "var(--font-space-mono)",
    fontSize: 11,
    color: "var(--text-muted)",
    letterSpacing: "0.15em",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "80px",
        paddingBottom: "16px",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <span style={style}>
        © {name} {jp}
      </span>
      <span style={style}>
        ({siteContent.brand.name} — {num})
      </span>
    </div>
  );
}

