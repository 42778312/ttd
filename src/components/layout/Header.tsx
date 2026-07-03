import { SHORTCUT_URL } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { HomeLogoLink } from "@/components/layout/HomeLogoLink";
import { Smartphone } from "lucide-react";

type HeaderProps = {
  onHomeClick?: () => void;
};

export function Header({ onHomeClick }: HeaderProps) {
  return (
    <header className="relative z-20 px-gutter pt-safe pb-3 shrink-0">
      <div className="max-w-container mx-auto flex items-center justify-between gap-2">
        <HomeLogoLink onHomeClick={onHomeClick}>
          <Logo />
          <span className="hidden sm:block text-[10px] label-caps text-muted-foreground">
            TikTok Downloader
          </span>
        </HomeLogoLink>

        <nav className="flex items-center gap-1 shrink-0">
          <Button variant="ghost" size="sm" asChild className="hidden xs:inline-flex">
            <Link href={SHORTCUT_URL}>Shortcut</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={SHORTCUT_URL} aria-label="Get Shortcut">
              <Smartphone />
              <span className="hidden sm:inline">Get Shortcut</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
