import Link from "next/link";
import { ArrowLeft, Smartphone, Share2, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { BackgroundGlow } from "@/components/layout/BackgroundGlow";
import { ApiUrlCopy } from "@/components/shortcut/ApiUrlCopy";
import { ShortcutPageHeader } from "@/components/shortcut/ShortcutPageHeader";

const SHORTCUT_ACTIONS = [
  { step: 1, action: "Receive", detail: "URLs and Text from Share Sheet" },
  { step: 2, action: "Get URLs from Input", detail: "Extract the TikTok link" },
  { step: 3, action: "Get Contents of URL", detail: "GET your-domain.com/api/resolve?url=[URL]" },
  { step: 4, action: "Get Dictionary Value", detail: "Key: downloadUrl" },
  { step: 5, action: "Get Contents of URL", detail: "Fetch the video file" },
  { step: 6, action: "Save to Photo Album", detail: "Save watermark-free video" },
  { step: 7, action: "Show Notification", detail: "Downloaded by TTD" },
];

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export default function ShortcutSetupPage() {
  const apiExample = SITE_URL
    ? `${SITE_URL}/api/resolve?url=TIKTOK_URL`
    : "https://your-domain.com/api/resolve?url=TIKTOK_URL";

  return (
    <main className="min-h-screen text-on-surface relative">
      <BackgroundGlow />
      <ShortcutPageHeader />
      <div className="relative z-10 max-w-container mx-auto px-gutter py-8">
        <Link
          href="/shortcut"
          className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-white mb-10 transition-colors glass rounded-xl px-4 py-2.5 glass-hover"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shortcut
        </Link>

        <div className="flex items-start gap-4 mb-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-primary-glow/40 shrink-0">
            <Smartphone className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="label-caps text-[10px] text-secondary mb-1">Advanced Setup</p>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-bold text-white">
              Build the shortcut manually
            </h1>
          </div>
        </div>

        <p className="text-body-md text-on-surface-variant mb-10 max-w-xl leading-relaxed">
          For power users who prefer to build their own shortcut in the Shortcuts
          app. Most users should use the{" "}
          <Link href="/shortcut" className="text-secondary hover:underline">
            one-tap install page
          </Link>{" "}
          instead.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <GlassCard>
            <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                <Share2 className="w-4 h-4 text-primary-light" />
              </div>
              Share Sheet setup
            </h2>
            <ol className="space-y-3 text-sm text-on-surface-variant leading-relaxed">
              <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors">
                <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-velocity text-[11px] font-bold text-white flex items-center justify-center">
                  1
                </span>
                Enable &quot;Show in Share Sheet&quot; in shortcut details
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors">
                <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-velocity text-[11px] font-bold text-white flex items-center justify-center">
                  2
                </span>
                Set accepted types to URLs and Safari web pages
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors">
                <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-velocity text-[11px] font-bold text-white flex items-center justify-center">
                  3
                </span>
                Name the shortcut &quot;TTD&quot; so it appears in the Share menu
              </li>
            </ol>
          </GlassCard>

          <GlassCard>
            <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Download className="w-4 h-4 text-secondary" />
              </div>
              Shortcut actions
            </h2>
            <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">
              Open the <strong className="text-white">Shortcuts</strong> app on
              iPhone, create a new shortcut, and add these actions:
            </p>
            <ol className="space-y-2">
              {SHORTCUT_ACTIONS.map((item) => (
                <li
                  key={item.step}
                  className="text-xs text-on-surface-variant border-l-2 border-secondary/40 pl-4 py-2 hover:bg-white/[0.03] rounded-r-xl transition-colors"
                >
                  <span className="text-white font-medium font-mono text-[11px]">
                    {item.action}
                  </span>
                  <span className="block opacity-70 mt-0.5 leading-relaxed">{item.detail}</span>
                </li>
              ))}
            </ol>
          </GlassCard>
        </div>

        <GlassCard elevated className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
            </div>
            API endpoint for Shortcuts
          </h2>
          <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
            Use this URL in the &quot;Get Contents of URL&quot; action (replace
            TIKTOK_URL with the Shortcut variable):
          </p>
          <ApiUrlCopy url={apiExample} />
        </GlassCard>

        <Link href="/shortcut">
          <Button className="rounded-xl px-8">Back to Shortcut</Button>
        </Link>
      </div>
    </main>
  );
}
