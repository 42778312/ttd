import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="TTD"
      width={120}
      height={32}
      className={cn("h-7 w-auto", className)}
      priority
    />
  );
}
