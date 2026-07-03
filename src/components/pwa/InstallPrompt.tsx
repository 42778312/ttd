"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "ttd-pwa-install-dismissed";

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (localStorage.getItem(DISMISS_KEY)) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
    setDeferredPrompt(null);
  };

  const install = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    dismiss();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none">
      <div className="max-w-container mx-auto pointer-events-auto">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card/95 backdrop-blur-md p-3 shadow-lg">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">Install TTD</p>
            <p className="text-xs text-muted-foreground truncate">
              Add to your home screen for quick access
            </p>
          </div>
          <Button size="sm" onClick={install} className="shrink-0">
            <Download />
            Install
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={dismiss}
            className="shrink-0"
            aria-label="Dismiss install prompt"
          >
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
}
