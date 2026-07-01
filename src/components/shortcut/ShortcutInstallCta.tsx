"use client";

import Link from "next/link";
import { Smartphone, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ICLOUD_SHORTCUT_URL } from "@/lib/constants";

export function ShortcutInstallCta({ className }: { className?: string }) {
  const hasIcloudLink = ICLOUD_SHORTCUT_URL.startsWith("http");

  if (hasIcloudLink) {
    return (
      <div className={className}>
        <a href={ICLOUD_SHORTCUT_URL} target="_blank" rel="noopener noreferrer">
          <Button className="rounded-xl px-8 py-3 text-base w-full sm:w-auto">
            <Smartphone className="w-5 h-5" />
            Add TTD Shortcut to iPhone
            <ExternalLink className="w-4 h-4 opacity-70" />
          </Button>
        </a>
        <p className="text-xs text-on-surface-variant/70 mt-3 text-center sm:text-left">
          Opens in the Shortcuts app. Tap &quot;Add Shortcut&quot; to install.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <Link href="/shortcut/setup">
        <Button className="rounded-xl px-8 py-3 text-base w-full sm:w-auto">
          <Smartphone className="w-5 h-5" />
          Set up TTD Shortcut
          <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
      <p className="text-xs text-on-surface-variant/70 mt-3 text-center sm:text-left">
        Follow the setup guide to add TTD to your Share menu.
      </p>
    </div>
  );
}
