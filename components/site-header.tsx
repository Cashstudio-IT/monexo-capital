"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type IconProps = React.SVGProps<SVGSVGElement>;

function ChevronDownIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function BarChartIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
            <path d="M4 20V10" />
            <path d="M12 20V4" />
            <path d="M20 20v-7" />
            <path d="M3 20h18" />
        </svg>
    );
}

function CandlestickIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
            <path d="M7 5v14" />
            <rect x="5" y="8" width="4" height="6" />
            <path d="M17 4v16" />
            <rect x="15" y="10" width="4" height="5" />
        </svg>
    );
}

function CoinsIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
            <ellipse cx="12" cy="6" rx="6" ry="3" />
            <path d="M6 6v6c0 1.66 2.69 3 6 3s6-1.34 6-3V6" />
            <path d="M6 12v6c0 1.66 2.69 3 6 3s6-1.34 6-3v-6" />
        </svg>
    );
}

function DollarIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
            <path d="M12 3v18" />
            <path d="M16.5 7.5c0-1.93-2.01-3.5-4.5-3.5s-4.5 1.57-4.5 3.5S9.51 11 12 11s4.5 1.57 4.5 3.5S14.49 18 12 18s-4.5-1.57-4.5-3.5" />
        </svg>
    );
}

type MarketItem = {
    title: string;
    href: string;
    description: string;
    icon: React.ReactNode;
};

export default function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const closeTimer = useRef<number | null>(null);

    const cancelClose = () => {
        if (closeTimer.current) {
            window.clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const scheduleClose = () => {
        cancelClose();
        closeTimer.current = window.setTimeout(() => setOpen(false), 180);
    };

    const markets: MarketItem[] = useMemo(
        () => [
            {
                title: "Indices",
                href: "/indices",
                description:
                    "Indices represent the performance of a group of stocks within a specific market or sector.",
                icon: <BarChartIcon className="h-5 w-5" />,
            },
            {
                title: "Stocks",
                href: "/stocks",
                description:
                    "Stock trading involves buying and selling shares of publicly listed companies.",
                icon: <CandlestickIcon className="h-5 w-5" />,
            },
            {
                title: "Commodities",
                href: "/commodities",
                description:
                    "Trade global commodities with precision, transparency, and institutional-grade execution.",
                icon: <CoinsIcon className="h-5 w-5" />,
            },
            {
                title: "Currencies",
                href: "/currencies",
                description:
                    "Access the global foreign exchange market with speed, transparency, and institutional-grade execution.",
                icon: <DollarIcon className="h-5 w-5" />,
            },
        ],
        [],
    );

    // Close on outside click
    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!wrapRef.current) return;
            if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
        }
        function onEsc(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onEsc);
        };
    }, []);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur" ref={wrapRef}>
            {/* Top bar with nav */}
            <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-8 xl:px-12">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="MONEXO"
                        width={140}
                        height={40}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>

                {/* Nav */}
                <nav className="hidden items-center gap-8 md:flex" style={{ fontFamily: 'var(--font-work-sans), "Work Sans", sans-serif' }}>
                    <Link
                        href="/"
                        className={[
                            "text-[15px] font-medium transition",
                            isActive("/") ? "text-white" : "text-white/75 hover:text-white",
                        ].join(" ")}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className={[
                            "text-[15px] font-medium transition",
                            isActive("/about") ? "text-white" : "text-white/75 hover:text-white",
                        ].join(" ")}
                    >
                        About
                    </Link>

                    {/* Markets dropdown trigger */}
                    <div
                        onMouseEnter={() => {
                            cancelClose();
                            setOpen(true);
                        }}
                        onMouseLeave={scheduleClose}
                    >
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            className={[
                                "inline-flex items-center gap-1.5 text-[15px] font-medium transition",
                                isActive("/indices") || isActive("/stocks") || isActive("/commodities") || isActive("/currencies")
                                    ? "text-[#9E7C3E]"
                                    : "text-white/75 hover:text-white",
                            ].join(" ")}
                            aria-haspopup="menu"
                            aria-expanded={open}
                        >
                            Markets
                            <ChevronDownIcon className={["h-4 w-4 transition", open ? "rotate-180" : ""].join(" ")} />
                        </button>
                    </div>

                    <Link
                        href="/download-platform"
                        className={[
                            "text-[15px] font-medium transition",
                            isActive("/download-platform") ? "text-white" : "text-white/75 hover:text-white",
                        ].join(" ")}
                    >
                        Download Platform
                    </Link>

                    <Link
                        href="/contact"
                        className={[
                            "text-[15px] font-medium transition",
                            isActive("/contact") ? "text-white" : "text-white/75 hover:text-white",
                        ].join(" ")}
                    >
                        Contact
                    </Link>
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-5" style={{ fontFamily: 'var(--font-work-sans), "Work Sans", sans-serif' }}>
                    <Link
                        href="/login"
                        className="hidden text-[15px] font-medium text-white/75 hover:text-white md:inline-flex"
                    >
                        Log In
                    </Link>

                    <Link
                        href="/register"
                        className="inline-flex h-10 items-center justify-center bg-[#9E7C3E] px-5 text-[15px] font-semibold text-white transition hover:opacity-90"
                    >
                        Open an Account
                    </Link>
                </div>
            </div>

            {/* Full-width mega menu panel — positioned outside the constrained container */}
            {open && (
                <div
                    className="absolute left-0 right-0 top-full w-full"
                    onMouseEnter={() => {
                        cancelClose();
                        setOpen(true);
                    }}
                    onMouseLeave={scheduleClose}
                >
                    {/* Dark overlay background spanning full width */}
                    <div className="w-full bg-[#0B0B0B] border-t border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                        {/* Constrained inner content to match the navbar alignment */}
                        <div className="mx-auto max-w-[1400px] px-8 xl:px-12 py-8">
                            <div className="grid grid-cols-12 gap-8">
                                {/* Left: markets list */}
                                <div className="col-span-7">
                                    <div className="text-sm font-semibold text-white mb-6">Markets</div>

                                    <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                                        {markets.map((m) => (
                                            <Link
                                                key={m.title}
                                                href={m.href}
                                                onClick={() => setOpen(false)}
                                                className="group flex items-start gap-4"
                                            >
                                                <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-black">
                                                    {m.icon}
                                                </div>

                                                <div>
                                                    <div className="text-[15px] font-semibold text-white group-hover:text-[#9E7C3E] transition">
                                                        {m.title}
                                                    </div>
                                                    <p className="mt-1 text-[12.5px] leading-5 text-white/60">
                                                        {m.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: updates card */}
                                <div className="col-span-5">
                                    <div className="text-sm font-semibold text-white mb-6">Updates</div>

                                    <div className="relative overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/10">
                                        <div className="relative h-[210px] w-full">
                                            {/* Replace with your actual image path */}
                                            <Image
                                                src="/images/menu/updates.jpg"
                                                alt="Updates"
                                                fill
                                                className="object-cover"
                                                priority={false}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-black/10" />
                                        </div>

                                        {/* Small CTA on image */}
                                        <div className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 text-white">
                                            →
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}