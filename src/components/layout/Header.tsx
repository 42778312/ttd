import { SHORTCUT_URL } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { HomeLogoLink } from "@/components/layout/HomeLogoLink";
import { Smartphone } from "lucide-react";

type HeaderProps = {
  onHomeClick?: () => void;
};

export function Header({ onHomeClick }: HeaderProps) {
  return (
    <header className="relative z-20 px-gutter pt-3 pb-1 shrink-0">
      <div className="max-w-container mx-auto">
        <div className="glass rounded-xl px-4 py-2 flex items-center justify-between">
          <HomeLogoLink onHomeClick={onHomeClick}>
            <Logo />
            <span className="hidden sm:block text-[9px] label-caps text-on-surface-variant/70">
              TikTok Downloader
            </span>
          </HomeLogoLink>

          <nav className="flex items-center gap-2">
            <Link
              href={SHORTCUT_URL}
              className="text-xs font-medium text-on-surface-variant hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/[0.04]"
            >
              Shortcut
            </Link>
            <Link href={SHORTCUT_URL}>
              <Button className="rounded-full px-3 py-1.5 text-xs gap-1">
                <Smartphone className="w-3 h-3" />
                Shortcut
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
