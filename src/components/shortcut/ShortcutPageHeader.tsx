import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { HomeLogoLink } from "@/components/layout/HomeLogoLink";
import { Download } from "lucide-react";

export function ShortcutPageHeader() {
  return (
    <header className="relative z-20 px-gutter pt-safe pb-3 shrink-0">
      <div className="max-w-container mx-auto flex items-center justify-between gap-2">
        <HomeLogoLink>
          <Logo />
          <span className="hidden xs:block text-[10px] label-caps text-muted-foreground">
            iPhone Shortcut
          </span>
        </HomeLogoLink>

        <nav className="flex items-center gap-1 shrink-0">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/">Web Downloader</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <Download />
              <span className="hidden xs:inline">Open TTD</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
