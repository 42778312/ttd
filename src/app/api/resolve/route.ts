import { NextRequest, NextResponse } from "next/server";
import { isValidTikTokUrl, normalizeTikTokUrl } from "@/lib/tiktok";
import { resolveViaTikwm } from "@/lib/providers/tikwm";
import { rateLimit } from "@/lib/rate-limit";

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

async function handleResolve(url: string) {
  const normalized = normalizeTikTokUrl(url);

  if (!isValidTikTokUrl(normalized)) {
    return NextResponse.json(
      { error: "Invalid TikTok URL. Please paste a valid link." },
      { status: 400 }
    );
  }

  const video = await resolveViaTikwm(normalized);
  return NextResponse.json(video);
}

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  const { allowed } = rateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json(
      { error: "Missing url parameter." },
      { status: 400 }
    );
  }

  try {
    return await handleResolve(url);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to resolve video.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const { allowed } = rateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const url = body?.url;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Missing url in request body." },
        { status: 400 }
      );
    }

    return await handleResolve(url);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to resolve video.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
