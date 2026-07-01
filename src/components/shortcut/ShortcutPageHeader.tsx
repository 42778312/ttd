import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { HomeLogoLink } from "@/components/layout/HomeLogoLink";
import { Download } from "lucide-react";

export function ShortcutPageHeader() {
  return (
    <header className="relative z-20 px-gutter pt-4 pb-2">
      <div className="max-w-container mx-auto">
        <div className="glass rounded-xl px-4 py-2.5 flex items-center justify-between">
          <HomeLogoLink>
            <Logo />
            <span className="text-[9px] label-caps text-on-surface-variant/70">
              iPhone Shortcut
            </span>
          </HomeLogoLink>

          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xs font-medium text-on-surface-variant hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/[0.04] hidden sm:block"
            >
              Web Downloader
            </Link>
            <Link href="/">
              <Button variant="secondary" className="rounded-full px-3 py-1.5 text-xs gap-1">
                <Download className="w-3 h-3" />
                <span className="hidden sm:inline">Open TTD</span>
                <span className="sm:hidden">TTD</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
