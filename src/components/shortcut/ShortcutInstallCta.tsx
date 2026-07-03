"use client";

import Link from "next/link";
import { Smartphone, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ICLOUD_SHORTCUT_URL } from "@/lib/constants";

export function ShortcutInstallCta({ className }: { className?: string }) {
  const hasIcloudLink = ICLOUD_SHORTCUT_URL.startsWith("http");

  if (hasIcloudLink) {
    return (
      <div className={className}>
        <a href={ICLOUD_SHORTCUT_URL} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="w-full sm:w-auto">
            <Smartphone />
            Add TTD Shortcut to iPhone
            <ExternalLink className="opacity-70" />
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">
          Opens in the Shortcuts app. Tap &quot;Add Shortcut&quot; to install.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <Link href="/shortcut/setup">
        <Button size="lg" className="w-full sm:w-auto">
          <Smartphone />
          Set up TTD Shortcut
          <ArrowRight />
        </Button>
      </Link>
      <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">
        Follow the setup guide to add TTD to your Share menu.
      </p>
    </div>
  );
}
