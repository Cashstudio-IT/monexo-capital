import type { Metadata } from "next";
import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const tasaOrbiter = localFont({
  src: [
    { path: '../public/fonts/TASAOrbiter-Regular.ttf', weight: '400' },
    { path: '../public/fonts/TASAOrbiter-Medium.ttf', weight: '500' },
    { path: '../public/fonts/TASAOrbiter-SemiBold.ttf', weight: '600' },
    { path: '../public/fonts/TASAOrbiter-Bold.ttf', weight: '700' },
    { path: '../public/fonts/TASAOrbiter-ExtraBold.ttf', weight: '800' },
  ],
  variable: '--font-tasa-orbiter',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: {
    default: "Monexo Capital",
    template: "%s | Monexo Capital",
  },
  description: "Trade across global markets with Monexo Capital. Access indices, stocks, commodities, and currencies with institutional-grade technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tasaOrbiter.variable} ${workSans.variable}`}>
      <body
        className="font-sans"
        suppressHydrationWarning
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
