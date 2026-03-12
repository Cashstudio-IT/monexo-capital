import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Download Platform" };

const platforms = [
    {
        name: "MetaTrader 5 for Windows",
        desc: "Full-featured desktop trading with advanced charting, automated trading, and multi-asset support.",
        icon: WindowsIcon,
        href: "#",
    },
    {
        name: "MetaTrader 5 for macOS",
        desc: "Native Mac experience with the same powerful tools, indicators, and execution speed.",
        icon: AppleIcon,
        href: "#",
    },
    {
        name: "MetaTrader 5 for Android",
        desc: "Trade on the go with real-time quotes, interactive charts, and full order management.",
        icon: AndroidIcon,
        href: "#",
    },
    {
        name: "MetaTrader 5 for iOS",
        desc: "Seamless mobile trading optimized for iPhone and iPad with all essential tools.",
        icon: AppleIcon,
        href: "#",
    },
    {
        name: "MetaTrader 5 Web Terminal",
        desc: "Access your account directly from any browser — no downloads or installations needed.",
        icon: GlobeIcon,
        href: "#",
    },
];

export default function DownloadPlatform() {
    return (
        <section className="bg-[#EEECE8] text-[#2b2421]">
            <div className="mx-auto max-w-6xl px-6 py-24">
                {/* Header */}
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#a88643]">
                        DOWNLOAD PLATFORM
                    </p>

                    <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                        Trade Anywhere.
                        <br />
                        On Any Device.
                    </h1>

                    <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/65 sm:text-base">
                        Download MetaTrader 5 for your preferred device and start trading
                        global markets with powerful tools, real-time data, and lightning-fast
                        execution.
                    </p>
                </div>

                {/* Platform Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {platforms.map((p) => (
                        <div
                            key={p.name}
                            className="flex flex-col rounded-xl border border-[#d6d3cd] bg-white p-8"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#a88643]/10 text-[#a88643]">
                                <p.icon className="h-6 w-6" />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>

                            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#2b2421]/60">
                                {p.desc}
                            </p>

                            <Link
                                href={p.href}
                                className="mt-6 inline-flex h-11 w-full items-center justify-center bg-[#a88643] text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Download
                            </Link>
                        </div>
                    ))}
                </div>

                {/* MT5 Image + Info */}
                <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
                    <div className="relative flex justify-center lg:justify-start">
                        <img
                            src="/images/platform/mt5-phones.png"
                            alt="MetaTrader 5 mobile trading"
                            className="max-w-[420px] object-contain"
                            draggable={false}
                        />
                    </div>

                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                            Professional Trading.
                            <br />
                            Without Compromise.
                        </h2>

                        <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/75 sm:text-base">
                            Trade on industry-leading platforms like{" "}
                            <span className="font-semibold text-black">MetaTrader 5</span>{" "}
                            engineered for speed, stability, and precision across all market
                            conditions.
                        </p>

                        <ul className="mt-8 space-y-4 text-sm sm:text-base">
                            {[
                                "Lightning-fast execution",
                                "Multi-asset trading from one interface",
                                "Advanced charting & analytical tools",
                                "Real-time pricing & market data",
                                "Seamless access across desktop, web, and mobile",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1 text-[#a88643]">&#10003;</span>
                                    <span className="text-[#2b2421]/85">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WindowsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3 5.548l7.182-0.986v6.944H3V5.548zm0 12.904l7.182 0.986v-6.932H3v5.946zm7.982 1.098L21 21v-7.494h-10.018v6.044zm0-14.1v6.056H21V3l-10.018 1.45z" />
        </svg>
    );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );
}

function AndroidIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
        </svg>
    );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}
