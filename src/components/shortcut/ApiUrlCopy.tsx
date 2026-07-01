"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface ApiUrlCopyProps {
  url: string;
}

export function ApiUrlCopy({ url }: ApiUrlCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text manually
    }
  };

  return (
    <div className="relative">
      <code className="block bg-black/30 rounded-xl p-4 pr-14 text-sm font-mono text-secondary break-all border border-white/8">
        {url}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg glass glass-hover text-on-surface-variant hover:text-white transition-colors"
        aria-label="Copy API URL"
      >
        {copied ? (
          <Check className="w-4 h-4 text-secondary" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
