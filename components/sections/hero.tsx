// src/components/sections/hero.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
    const chipsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onScroll() {
            if (!chipsRef.current) return;
            const scrollY = window.scrollY;
            const windowH = window.innerHeight;
            // progress 0 → 1 over the first viewport height of scroll
            const progress = Math.min(scrollY / (windowH * 0.6), 1);

            chipsRef.current.style.opacity = `${1 - progress}`;
            chipsRef.current.style.transform = `translateY(${progress * 120}px)`;
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#05030E] text-white">
            {/* TOP background image area */}
            <div className="relative h-screen w-full">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/hero/markets-bg.jpg)" }}
                />

                {/* Dark overlay + dotted texture */}
                <div className="absolute inset-0 bg-black/55" />
                <div
                    className="absolute inset-0 opacity-35"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                        backgroundSize: "14px 14px",
                        backgroundPosition: "0 0",
                    }}
                />

                {/* Corner gold sweeps */}
                <div className="pointer-events-none absolute -left-40 top-[-220px] h-[520px] w-[520px] rounded-full bg-[#A98743]/35 blur-[90px]" />
                <div className="pointer-events-none absolute -right-48 top-[-260px] h-[620px] w-[620px] rounded-full bg-[#A98743]/45 blur-[110px]" />

                {/* Floating chips — scroll-animated */}
                <div
                    ref={chipsRef}
                    className="pointer-events-none absolute inset-0 hidden md:block transition-none will-change-[transform,opacity]"
                >
                    {/* LEFT — top to bottom: 500, google, gold */}
                    <div className="absolute left-[4%] top-[18%] rotate-[-12deg]">
                        <ImageChip src="/images/hero/500.png" alt="S&P 500" />
                    </div>
                    <div className="absolute left-[8%] top-[42%] rotate-[8deg]">
                        <ImageChip src="/images/hero/google.png" alt="Google" />
                    </div>
                    <div className="absolute left-[3%] top-[64%] rotate-[-6deg]">
                        <ImageChip src="/images/hero/gold.png" alt="Gold" />
                    </div>

                    {/* RIGHT — top to bottom: nvda, 100, oil */}
                    <div className="absolute right-[4%] top-[18%] rotate-[10deg]">
                        <ImageChip src="/images/hero/nvda.png" alt="NVIDIA" />
                    </div>
                    <div className="absolute right-[8%] top-[42%] rotate-[-8deg]">
                        <ImageChip src="/images/hero/100.png" alt="100" />
                    </div>
                    <div className="absolute right-[3%] top-[64%] rotate-[6deg]">
                        <ImageChip src="/images/hero/oil.png" alt="Oil" />
                    </div>
                </div>

                {/* Title + CTAs */}
                <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center pb-[36vh]">
                    <h1 className="text-[56px] font-semibold tracking-tight text-white md:text-[74px]" style={{ lineHeight: 1.1 }}>
                        Trade across
                        <br />
                        markets <span className="text-[#A98743]">without</span>
                        <br />
                        <span className="text-[#A98743]">limits</span>
                    </h1>

                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                        <Link
                            href="/register"
                            className="inline-flex h-12 items-center justify-center bg-[#A98743] px-10 text-[13px] font-semibold text-white"
                        >
                            Register
                        </Link>

                        <Link
                            href="/demo"
                            className="inline-flex h-12 items-center justify-center border border-[#A98743] px-10 text-[13px] font-semibold text-white"
                        >
                            Risk Free Demo
                        </Link>
                    </div>
                </div>
            </div>

            {/* MIDDLE video block — pulled up into the hero fold */}
            <div className="relative -mt-[36vh] pb-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.65)]">
                        <video
                            className="w-full object-cover"
                            style={{ aspectRatio: "16/9" }}
                            autoPlay
                            muted
                            playsInline
                            loop
                            preload="metadata"
                        >
                            <source src="/videos/markets.mp4" type="video/mp4" />
                        </video>

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ImageChip({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.55)]">
            <img src={src} alt={alt} className="h-10 w-10 object-contain" draggable={false} />
        </div>
    );
}
