"use client";

import { useState } from "react";
import { Link2, ClipboardPaste, Download, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeatureChips } from "./FeatureChips";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { resolveVideo } from "@/lib/api-client";
import type { VideoData } from "@/types/video";

interface UrlInputBarProps {
  onResolved: (video: VideoData) => void;
  onError: (message: string) => void;
}

export function UrlInputBar({ onResolved, onError }: UrlInputBarProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch {
      onError("Could not access clipboard. Please paste manually.");
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      onError("Please paste a TikTok URL first.");
      return;
    }

    setLoading(true);
    onError("");

    try {
      const video = await resolveVideo(url.trim());
      onResolved(video);
    } catch (err) {
      onError(err instanceof Error ? err.message : "Failed to resolve video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-2">
        <Badge variant="primary" className="gap-1.5 py-1 px-3">
          <Sparkles className="w-3 h-3 text-primary-light" />
          <span className="text-[10px] text-primary-light font-medium">
            The #1 TikTok Downloader Loved by Millions
          </span>
        </Badge>
      </div>

      <h1 className="text-2xl lg:text-[2rem] text-white text-center font-bold mb-2 tracking-tight leading-tight">
        Download TikToks{" "}
        <span className="text-gradient-velocity">without limits.</span>
      </h1>

      <p className="text-xs lg:text-sm text-on-surface-variant text-center max-w-md mx-auto mb-4 leading-relaxed">
        Save TikTok videos instantly in HD. No watermark. No account needed.
      </p>

      <div className="max-w-3xl mx-auto w-full">
        <div className="glass rounded-xl p-1.5 ring-1 ring-secondary/15">
          <div className="flex flex-col sm:flex-row items-stretch gap-1.5">
            <div className="flex-1 flex items-center gap-2.5 input-glass px-3.5 py-2.5 rounded-lg">
              <Link2 className="w-4 h-4 text-secondary shrink-0" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleDownload()}
                placeholder="Paste TikTok URL here..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-on-surface-variant/55 outline-none min-w-0 font-mono"
              />
              <button
                type="button"
                onClick={handlePaste}
                className="flex items-center gap-1 text-xs font-medium text-on-surface-variant hover:text-secondary transition-colors shrink-0"
              >
                <ClipboardPaste className="w-3.5 h-3.5" />
                Paste
              </button>
            </div>

            <Button
              onClick={handleDownload}
              disabled={loading}
              className="rounded-lg px-6 py-2.5 shrink-0 text-sm"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {loading ? "Resolving..." : "Download"}
            </Button>
          </div>

          {loading && (
            <div className="px-1 pt-2">
              <ProgressBar indeterminate />
            </div>
          )}
        </div>
      </div>

      <FeatureChips />
    </div>
  );
}
