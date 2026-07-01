import { NextRequest, NextResponse } from "next/server";

const ALLOWED_HOSTS = [
  "tiktokcdn.com",
  "tiktokcdn-us.com",
  "tiktokv.com",
  "muscdn.com",
  "byteoversea.com",
  "ibyteimg.com",
];

function isAllowedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ALLOWED_HOSTS.some(
      (host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`)
    );
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  const videoUrl = req.nextUrl.searchParams.get("url");
  const filename = req.nextUrl.searchParams.get("filename") ?? "tiktok-video.mp4";

  if (!videoUrl) {
    return NextResponse.json({ error: "Missing url parameter." }, { status: 400 });
  }

  if (!isAllowedUrl(videoUrl)) {
    return NextResponse.json({ error: "URL not allowed." }, { status: 403 });
  }

  try {
    const upstream = await fetch(videoUrl, {
      headers: { "User-Agent": "TTD/1.0" },
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Failed to fetch video." },
        { status: 502 }
      );
    }

    const contentType =
      upstream.headers.get("content-type") ?? "video/mp4";

    return new NextResponse(upstream.body, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to proxy video." },
      { status: 502 }
    );
  }
}
