import type { Metadata } from "next";
import Link from "next/link";
import MarketsTemplate from "@/components/pages/markets";
import StocksSection from "@/components/sections/stocks";

export const metadata: Metadata = { title: "Stocks" };

export default function StocksPage() {
    return (
        <>
            {/* 🔥 VIDEO HERO SECTION */}
            <section className="relative h-[65vh] min-h-[520px] w-full overflow-hidden flex items-center justify-center text-center bg-black">

                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/stocks-hero.mov" type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/65" />

                {/* Content */}
                <div className="relative z-10 px-6 max-w-4xl">
                    <p className="text-xs tracking-[0.3em] text-white/80 uppercase mb-6">
                        MONEXO CAPITAL
                    </p>

                    <h1 className="text-[52px] md:text-[72px] leading-[1.05] font-semibold text-[#9E7C3E]">
                        Stocks Trading
                    </h1>

                    <p className="mt-6 text-[15px] md:text-[16px] text-white/80 max-w-2xl mx-auto leading-7">
                        Trade shares of leading global companies with fast execution,
                        transparent pricing, and institutional-grade tools.
                    </p>

                    <Link
                        href="/register"
                        className="mt-10 inline-flex items-center justify-center border border-[#9E7C3E] px-10 py-3 text-sm font-medium text-[#9E7C3E] transition hover:bg-[#9E7C3E] hover:text-black"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

            {/* PAGE CONTENT */}
            <StocksSection />
        </>
    );
}