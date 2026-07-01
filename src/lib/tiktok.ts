const TIKTOK_PATTERNS = [
  /tiktok\.com\/@[\w.-]+\/video\/(\d+)/,
  /tiktok\.com\/t\/(\w+)/,
  /vm\.tiktok\.com\/(\w+)/,
  /vt\.tiktok\.com\/(\w+)/,
  /tiktok\.com\/v\/(\d+)/,
];

export function isValidTikTokUrl(url: string): boolean {
  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace(/^www\./, "");
    if (!host.includes("tiktok.com")) return false;
    return TIKTOK_PATTERNS.some((pattern) => pattern.test(url)) || host.includes("tiktok.com");
  } catch {
    return false;
  }
}

export function extractTikTokUrl(text: string): string | null {
  const urlMatch = text.match(/https?:\/\/[^\s]+/);
  if (!urlMatch) return null;
  const url = urlMatch[0].replace(/[.,!?]+$/, "");
  return isValidTikTokUrl(url) ? url : null;
}

export function normalizeTikTokUrl(url: string): string {
  return url.trim();
}
