import type { ResolveResponse } from "@/types/video";

const TIKWM_BASE =
  process.env.TIKWM_API_BASE ?? "https://www.tikwm.com/api/";

type TikwmResponse = {
  code: number;
  msg?: string;
  data?: {
    id: string;
    title: string;
    author?: { unique_id?: string; nickname?: string };
    cover: string;
    play: string;
    hdplay?: string;
    duration?: number;
  };
};

export async function resolveViaTikwm(url: string): Promise<ResolveResponse> {
  const apiUrl = `${TIKWM_BASE}?url=${encodeURIComponent(url)}&hd=1`;

  const res = await fetch(apiUrl, {
    headers: { "User-Agent": "TTD/1.0" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("TikTok API unavailable. Please try again.");
  }

  const json: TikwmResponse = await res.json();

  if (json.code !== 0 || !json.data) {
    throw new Error(json.msg ?? "Could not resolve this TikTok URL.");
  }

  const { data } = json;
  const author =
    data.author?.unique_id ?? data.author?.nickname ?? "unknown";

  return {
    id: String(data.id),
    title: data.title ?? "TikTok Video",
    author,
    cover: data.cover,
    downloadUrl: data.hdplay ?? data.play,
    duration: data.duration,
  };
}
