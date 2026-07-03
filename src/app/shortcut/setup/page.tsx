import Link from "next/link";
import { ArrowLeft, Smartphone, Share2, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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

function StepNumber({ n }: { n: number }) {
  return (
    <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-[11px] font-medium text-primary-foreground flex items-center justify-center">
      {n}
    </span>
  );
}

export default function ShortcutSetupPage() {
  const apiExample = SITE_URL
    ? `${SITE_URL}/api/resolve?url=TIKTOK_URL`
    : "https://your-domain.com/api/resolve?url=TIKTOK_URL";

  return (
    <main className="min-h-dvh flex flex-col text-foreground relative">
      <BackgroundGlow />
      <ShortcutPageHeader />
      <div className="relative z-10 max-w-container mx-auto px-gutter py-8 pb-safe">
        <Button variant="outline" size="sm" asChild className="mb-10">
          <Link href="/shortcut">
            <ArrowLeft />
            Back to Shortcut
          </Link>
        </Button>

        <div className="flex items-start gap-4 mb-3">
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Smartphone className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <p className="label-caps text-[10px] text-muted-foreground mb-1">Advanced Setup</p>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-semibold text-foreground">
              Build the shortcut manually
            </h1>
          </div>
        </div>

        <p className="text-body-md text-muted-foreground mb-10 max-w-xl leading-relaxed">
          For power users who prefer to build their own shortcut in the Shortcuts
          app. Most users should use the{" "}
          <Link href="/shortcut" className="text-secondary hover:underline">
            one-tap install page
          </Link>{" "}
          instead.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <GlassCard>
            <h2 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center">
                <Share2 className="w-4 h-4 text-primary" />
              </div>
              Share Sheet setup
            </h2>
            <ol className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3 p-3 rounded-lg">
                <StepNumber n={1} />
                Enable &quot;Show in Share Sheet&quot; in shortcut details
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg">
                <StepNumber n={2} />
                Set accepted types to URLs and Safari web pages
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg">
                <StepNumber n={3} />
                Name the shortcut &quot;TTD&quot; so it appears in the Share menu
              </li>
            </ol>
          </GlassCard>

          <GlassCard>
            <h2 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center">
                <Download className="w-4 h-4 text-secondary" />
              </div>
              Shortcut actions
            </h2>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Open the <strong className="text-foreground">Shortcuts</strong> app on
              iPhone, create a new shortcut, and add these actions:
            </p>
            <ol className="space-y-2">
              {SHORTCUT_ACTIONS.map((item) => (
                <li
                  key={item.step}
                  className="text-xs text-muted-foreground border-l-2 border-border pl-4 py-2"
                >
                  <span className="text-foreground font-medium font-mono text-[11px]">
                    {item.action}
                  </span>
                  <span className="block opacity-70 mt-0.5 leading-relaxed">{item.detail}</span>
                </li>
              ))}
            </ol>
          </GlassCard>
        </div>

        <GlassCard elevated className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
            </div>
            API endpoint for Shortcuts
          </h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Use this URL in the &quot;Get Contents of URL&quot; action (replace
            TIKTOK_URL with the Shortcut variable):
          </p>
          <ApiUrlCopy url={apiExample} />
        </GlassCard>

        <Button asChild>
          <Link href="/shortcut">Back to Shortcut</Link>
        </Button>
      </div>
    </main>
  );
}
