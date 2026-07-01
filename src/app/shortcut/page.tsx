import Link from "next/link";
import {
  Shield,
  Zap,
  Gift,
  Download,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { BackgroundGlow } from "@/components/layout/BackgroundGlow";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ShortcutPageHeader } from "@/components/shortcut/ShortcutPageHeader";
import { IphoneFlowShowcase } from "@/components/shortcut/IphoneFlowMockup";
import { ShortcutInstallCta } from "@/components/shortcut/ShortcutInstallCta";
import {
  SHORTCUT_FEATURES,
  SHORTCUT_INSTALL_STEPS,
  STATS,
} from "@/lib/constants";

const FEATURE_ICONS = {
  shield: Shield,
  zap: Zap,
  gift: Gift,
  download: Download,
} as const;

export default function ShortcutLandingPage() {
  const shortcutStat = STATS.find((s) => s.label === "Shortcut Downloads");

  return (
    <main className="min-h-screen text-on-surface relative">
      <BackgroundGlow />
      <ShortcutPageHeader />

      <div className="relative z-10 max-w-container mx-auto px-gutter pb-16">
        {/* Hero */}
        <section className="pt-8 pb-14 text-center">
          <p className="label-caps text-[10px] text-secondary mb-4">
            Free iPhone Shortcut · No account required
          </p>
          <h1 className="text-headline-xl md:text-[56px] font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
            Download TikToks from your{" "}
            <span className="text-gradient-velocity">Share menu</span>
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
            <strong className="text-white font-medium">TTD</strong> is a free
            TikTok downloader built for iPhone. Install our Shortcut once, then
            save any video to Photos — watermark-free, in HD — without opening a
            browser.
          </p>
          <div className="flex flex-col items-center">
            <ShortcutInstallCta />
          </div>
          {shortcutStat && (
            <p className="mt-6 text-sm text-on-surface-variant">
              Trusted by{" "}
              <span className="text-gradient-primary font-semibold">
                {shortcutStat.value}
              </span>{" "}
              shortcut installs worldwide
            </p>
          )}
        </section>

        {/* iPhone flow screenshots */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <p className="label-caps text-[10px] text-secondary mb-2">How it works</p>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold text-white">
              Three taps. That&apos;s it.
            </h2>
            <p className="text-body-sm text-on-surface-variant mt-3 max-w-md mx-auto">
              Here&apos;s exactly what happens on your iPhone when you use the
              TTD Shortcut.
            </p>
          </div>
          <GlassCard elevated className="py-8 sm:py-12 px-4 sm:px-8">
            <IphoneFlowShowcase />
          </GlassCard>
        </section>

        {/* Install steps */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <p className="label-caps text-[10px] text-secondary mb-2">Installation</p>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold text-white">
              Get started in under a minute
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {SHORTCUT_INSTALL_STEPS.map((step, i) => (
              <GlassCard key={step.title} className="flex flex-col h-full">
                <span className="w-8 h-8 rounded-full bg-gradient-velocity text-sm font-bold text-white flex items-center justify-center mb-4">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed flex-1">
                  {step.description}
                </p>
              </GlassCard>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <ShortcutInstallCta />
          </div>
          <p className="text-center mt-4 text-xs text-on-surface-variant/70">
            Need to build it yourself?{" "}
            <Link
              href="/shortcut/setup"
              className="text-secondary hover:underline"
            >
              Advanced manual setup
            </Link>
          </p>
        </section>

        {/* SaaS branding / features */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <p className="label-caps text-[10px] text-secondary mb-2">Why TTD</p>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold text-white">
              Built like a product, not a hack
            </h2>
            <p className="text-body-sm text-on-surface-variant mt-3 max-w-lg mx-auto">
              TTD is a modern downloader service — fast API, clean output, and a
              Shortcut that feels native on iOS. No sketchy apps. No login walls.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {SHORTCUT_FEATURES.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon];
              return (
                <GlassCard key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Social proof */}
        <section className="mb-16">
          <GlassCard elevated className="text-center py-10 px-6">
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg font-semibold text-white mb-2">
              &quot;The iPhone shortcut is a game changer. One tap download!&quot;
            </p>
            <p className="text-sm text-on-surface-variant">
              — @mike_t · 1,203 videos saved with TTD
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-white/10">
              {STATS.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-gradient-primary">
                    {stat.value}
                  </p>
                  <p className="text-[10px] label-caps text-on-surface-variant/70 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <GlassCard className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white mb-1">
                Requirements
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                iPhone with iOS 15 or later. Shortcuts app (pre-installed). An
                internet connection when sharing a TikTok link. TTD connects to
                our API to resolve and download videos — no data is stored on
                our servers.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Bottom CTA */}
        <section className="text-center">
          <h2 className="text-headline-lg-mobile font-bold text-white mb-4">
            Ready to download faster?
          </h2>
          <p className="text-body-sm text-on-surface-variant mb-6 max-w-md mx-auto">
            Install the TTD Shortcut now, or use our web downloader on any device.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <ShortcutInstallCta />
            <Link href="/">
              <Button variant="secondary" className="rounded-xl px-8 py-3">
                Open Web Downloader
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
