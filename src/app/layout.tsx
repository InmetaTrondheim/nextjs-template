import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { LayoutProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "A Next.js starter template with TypeScript, Tailwind CSS, and ESLint.",
};

export default function RootLayout({
  children,
}: LayoutProps<{
  query: string | string[];
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased", inter.className)}>{children}</body>
    </html>
  );
}
