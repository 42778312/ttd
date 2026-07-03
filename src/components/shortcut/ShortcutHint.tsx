import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";
import { SHORTCUT_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ShortcutHint({ className }: { className?: string }) {
  return (
    <Button variant="outline" size="sm" asChild className={cn("shrink-0", className)}>
      <Link href={SHORTCUT_URL}>
        <Smartphone />
        On iPhone? Get the TTD Shortcut
        <ArrowRight />
      </Link>
    </Button>
  );
}
