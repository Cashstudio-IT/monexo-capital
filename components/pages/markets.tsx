import Link from "next/link";
import type { ReactNode } from "react";

type MarketsTemplateProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  heroVideoSrc?: string;
  heroImageSrc?: string;
  children?: ReactNode;
};

export default function MarketsTemplate({
  title,
  eyebrow = "MONEXO CAPITAL",
  description,
  ctaLabel = "Get Started",
  ctaHref = "/register",
  heroVideoSrc,
  heroImageSrc,
  children,
}: MarketsTemplateProps) {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <section className="relative flex min-h-[420px] h-[60vh] items-center justify-center overflow-hidden text-center">
        {heroVideoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            aria-hidden="true"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        ) : null}

        {heroImageSrc ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
            aria-hidden="true"
          />
        ) : null}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex max-w-4xl flex-col items-center px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-white/80">{eyebrow}</p>
          <h1 className="mt-3 font-tasa text-5xl font-semibold tracking-tight text-[#9E7C3E] sm:text-7xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80">{description}</p>
          ) : null}

          <Link
            href={ctaHref}
            className="mt-10 inline-flex items-center justify-center border border-[#9E7C3E] px-12 py-3 text-sm font-medium text-[#9E7C3E] transition hover:bg-[#9E7C3E] hover:text-black"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>

      {children}
    </main>
  );
}
