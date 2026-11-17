import { NextResponse } from "next/server";

const DEFAULT_WEBHOOK_URL =
  "https://youcf-vision.hawiyat.org/webhook/youcf-portfolio-contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({ ok: res.ok }));
    return NextResponse.json({ ok: res.ok, data });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
