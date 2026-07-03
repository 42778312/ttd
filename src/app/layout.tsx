import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import { InstallPrompt } from "@/components/pwa/InstallPrompt";
import { SwRegistrar } from "@/components/pwa/SwRegistrar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TTD — Download TikToks without limits",
  description:
    "Save TikTok videos instantly in HD quality. No watermark. No account. Join millions of users who download every day.",
  applicationName: "TTD",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TTD",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#141313",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="font-sans h-full overflow-x-hidden">
        {children}
        <InstallPrompt />
        <SwRegistrar />
      </body>
    </html>
  );
}
