import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function About() {
    return (
        <>
            {/* Hero — full viewport height */}
            <section className="relative flex min-h-[80vh] flex-col text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/images/about/about.jpeg)" }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#c5a24d]">
                        ABOUT MONEXO CAPITAL
                    </p>

                    <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl">
                        Designed for Impact.{" "}
                        <span className="text-[#c5a24d]">Built for Precision.</span>
                    </h1>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-flex h-12 items-center justify-center border border-white/40 px-10 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            View More
                        </Link>
                    </div>
                </div>

            </section>

            {/* Intro */}
            <section className="bg-[#EEECE8] text-[#2b2421]">
                <div className="mx-auto max-w-4xl px-6 py-24 text-center">
                    <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                        <span className="text-[#2b2421]">
                            Monexo Capital is a professional trading firm{" "}
                        </span>
                        <span className="text-[#2b2421]/50">
                            built on precision, discipline, and strategic execution.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-[#2b2421]/60 sm:text-base">
                        We bring together advanced trading infrastructure, analytical depth,
                        and a client-first philosophy to deliver a professional-grade trading
                        environment across global financial markets.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="bg-[#EEECE8] text-[#2b2421]">
                <div className="mx-auto max-w-6xl px-6 pb-24">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-xl bg-[#e2dfda] p-8">
                            <PrecisionIcon className="h-12 w-12 text-[#2b2421]" />
                            <h3 className="mt-6 text-xl font-semibold">Precision Over Emotion</h3>
                            <p className="mt-3 text-sm leading-relaxed text-[#2b2421]/60">
                                Markets move fast. We move deliberately.
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#e2dfda] p-8">
                            <StructureIcon className="h-12 w-12 text-[#2b2421]" />
                            <h3 className="mt-6 text-xl font-semibold">Structure Over Speculation</h3>
                            <p className="mt-3 text-sm leading-relaxed text-[#2b2421]/60">
                                Defined models. Controlled exposure. Calculated decisions.
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#e2dfda] p-8">
                            <PerformanceIcon className="h-12 w-12 text-[#2b2421]" />
                            <h3 className="mt-6 text-xl font-semibold">Performance Over Promises</h3>
                            <p className="mt-3 text-sm leading-relaxed text-[#2b2421]/60">
                                Results are built through systems—not slogans.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Trading Environment */}
            <section className="bg-[#EEECE8] text-[#2b2421]">
                <div className="mx-auto max-w-6xl px-6 py-24">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* LEFT */}
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                                Our Trading
                                <br />
                                Environment
                            </h2>

                            <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/65 sm:text-base">
                                We provide access to global financial markets through modern,
                                high-performance infrastructure built for stability and speed.
                            </p>

                            <p className="mt-6 text-sm font-medium sm:text-base">
                                Our ecosystem is designed to deliver:
                            </p>

                            <ul className="mt-4 space-y-3 text-sm sm:text-base">
                                {[
                                    "Advanced execution technology",
                                    "Secure operational architecture",
                                    "Structured risk management frameworks",
                                    "Transparent processes",
                                    "Professional-grade support",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2b2421]" />
                                        <span className="text-[#2b2421]/80">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-8 text-sm italic leading-relaxed text-[#2b2421]/60 sm:text-base">
                                Every layer of our operation is aligned for consistency and control.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex justify-center lg:justify-end">
                            <img
                                src="/images/smart-trading/mobile.png"
                                alt="MT5 mobile trading platform"
                                className="max-w-[480px] object-contain"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach to Capital */}
            <section className="bg-white text-[#2b2421]">
                <div className="mx-auto max-w-6xl px-6 py-24">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* LEFT IMAGE */}
                        <div className="relative flex justify-center lg:justify-start">
                            <img
                                src="/images/smart-trading/mobile.png"
                                alt="MT5 trading charts on mobile"
                                className="max-w-[480px] object-contain"
                                draggable={false}
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                                Our Approach to
                                <br />
                                Capital
                            </h2>

                            <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/80 sm:text-base">
                                Capital is not just money.
                                <br />
                                It represents trust, ambition, and responsibility.
                            </p>

                            <p className="mt-6 text-sm font-medium sm:text-base">
                                That is why our approach is built around:
                            </p>

                            <ul className="mt-4 space-y-3 text-sm sm:text-base">
                                {[
                                    "Risk discipline first",
                                    "Data-driven market analysis",
                                    "Systematic execution",
                                    "Long-term sustainability",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2b2421]" />
                                        <span className="text-[#2b2421]/80">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-8 text-sm leading-relaxed text-[#2b2421]/65 sm:text-base">
                                We aim to preserve before we pursue.
                                <br />
                                We manage before we multiply.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Focus Areas */}
            <section className="bg-white text-[#2b2421]">
                <div className="mx-auto max-w-6xl px-6 py-24">
                    <div className="grid items-start gap-16 lg:grid-cols-2">
                        {/* LEFT */}
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                                Our Focus Areas
                            </h2>

                            <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/70 sm:text-base" style={{ textAlign: "justify" }}>
                                Monexo Capital offers access to global financial markets through a
                                secure, performance-driven trading platform. Our services are
                                designed to support traders at every stage—whether they are refining
                                strategies, scaling performance, or navigating volatile market
                                conditions.
                            </p>

                            <p className="mt-6 text-sm font-medium sm:text-base">
                                Our core focus areas include:
                            </p>
                        </div>

                        {/* RIGHT — 2x2 Grid */}
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="rounded-xl bg-[#e8e5e0] p-8">
                                <MarketAccessIcon className="h-12 w-12 text-[#2b2421]" />
                                <h3 className="mt-8 text-lg font-semibold leading-snug">
                                    Multi-asset market access
                                </h3>
                            </div>

                            <div className="rounded-xl bg-[#e8e5e0] p-8">
                                <Support24Icon className="h-12 w-12 text-[#2b2421]" />
                                <h3 className="mt-8 text-lg font-semibold leading-snug">
                                    Professional operational and technical support
                                </h3>
                            </div>

                            <div className="rounded-xl bg-[#e8e5e0] p-8">
                                <TransparentPricingIcon className="h-12 w-12 text-[#2b2421]" />
                                <h3 className="mt-8 text-lg font-semibold leading-snug">
                                    Transparent pricing and execution
                                </h3>
                            </div>

                            <div className="rounded-xl bg-[#e8e5e0] p-8">
                                <InfrastructureIcon className="h-12 w-12 text-[#2b2421]" />
                                <h3 className="mt-8 text-lg font-semibold leading-snug">
                                    Stable, high-performance trading infrastructure
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function MarketAccessIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="6" y="10" width="36" height="28" rx="3" />
            <path d="M14 30V22" />
            <path d="M22 30V18" />
            <path d="M30 30V14" />
        </svg>
    );
}

function Support24Icon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 28c-3 0-4-1-4-4v-4c0-8.84 7.16-16 16-16s16 7.16 16 16v4c0 3-1 4-4 4" />
            <path d="M12 24v8a4 4 0 0 0 4 4h2" />
            <path d="M36 24v8a4 4 0 0 1-4 4h-2" />
            <circle cx="36" cy="14" r="6" fill="none" />
            <text x="32" y="17.5" fontSize="9" fill="currentColor" stroke="none" fontWeight="bold">24</text>
        </svg>
    );
}

function TransparentPricingIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="24" cy="24" r="16" />
            <path d="M24 16v16" />
            <path d="M28 20c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4 1.79 4 4-1.79 4-4 4-4-1.79-4-4" />
        </svg>
    );
}

function InfrastructureIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="8" y="8" width="32" height="12" rx="3" />
            <rect x="8" y="28" width="32" height="12" rx="3" />
            <path d="M24 20v8" />
            <circle cx="16" cy="14" r="2" fill="currentColor" stroke="none" />
            <circle cx="16" cy="34" r="2" fill="currentColor" stroke="none" />
            <path d="M28 14h8" />
            <path d="M28 34h8" />
        </svg>
    );
}

function PrecisionIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="6" y="6" width="16" height="20" rx="2" />
            <path d="M10 12h8M10 16h6M10 20h8" />
            <rect x="26" y="12" width="16" height="20" rx="2" />
            <path d="M30 18h8M30 22h6M30 26h8" />
            <path d="M22 16l4-4" />
        </svg>
    );
}

function StructureIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="8" y="8" width="32" height="32" rx="4" />
            <path d="M8 18h32M8 28h32M18 8v32M28 8v32" />
            <circle cx="13" cy="13" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="23" cy="23" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="33" cy="33" r="1.5" fill="currentColor" stroke="none" />
        </svg>
    );
}

function PerformanceIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="8" y="6" width="32" height="36" rx="4" />
            <path d="M16 6v36" />
            <path d="M8 16h32" />
            <path d="M22 24l4 4 8-8" />
            <circle cx="12" cy="11" r="1.5" fill="currentColor" stroke="none" />
        </svg>
    );
}
