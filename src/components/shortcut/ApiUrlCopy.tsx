"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <code className="block bg-muted rounded-lg p-4 pr-14 text-sm font-mono text-secondary break-all border border-border">
        {url}
      </code>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleCopy}
        className="absolute top-3 right-3"
        aria-label="Copy API URL"
      >
        {copied ? (
          <Check className="text-secondary" />
        ) : (
          <Copy />
        )}
      </Button>
    </div>
  );
}
