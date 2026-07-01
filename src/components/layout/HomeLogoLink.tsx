"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type HomeLogoLinkProps = {
  className?: string;
  children: React.ReactNode;
  onHomeClick?: () => void;
};

export function HomeLogoLink({ className, children, onHomeClick }: HomeLogoLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          onHomeClick?.();
        }
      }}
    >
      {children}
    </Link>
  );
}
