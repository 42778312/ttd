import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TTD iPhone Shortcut — Download TikToks from your Share menu",
  description:
    "Install the free TTD iPhone Shortcut. Share any TikTok video, tap TTD, and save watermark-free HD videos to Photos in seconds. No browser needed.",
};

export default function ShortcutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
