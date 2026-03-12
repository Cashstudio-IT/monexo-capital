"use client";

import { useState, useEffect, useRef } from "react";

/* ── Ticker data ── */
const tickerItems = [
    { symbol: "GBP/USD", price: "1.3420", change: "-0.03%", down: true },
    { symbol: "BTC", price: "69,854.93", change: "-0.50%", down: true },
    { symbol: "ETH", price: "2,047.25", change: "-0.21%", down: true },
    { symbol: "Gold", price: "5,176.48", change: "-0.31%", down: true },
    { symbol: "Silver", price: "85.757", change: "-2.92%", down: true },
    { symbol: "AAPL", price: "260.81", change: "+0.01%", down: false },
    { symbol: "TSLA", price: "341.80", change: "+1.24%", down: false },
    { symbol: "AMZN", price: "198.42", change: "+0.67%", down: false },
    { symbol: "MSFT", price: "422.15", change: "-0.18%", down: true },
];

/* ── Market card data ── */
interface MarketCard {
    symbol: string;
    name: string;
    price: string;
    change: string;
    pct: string;
    down: boolean;
    sparkline: number[];
}

type Tab = "INDICES" | "STOCKS" | "COMMODITIES" | "CURRENCIES";

const indicesCards: MarketCard[] = [
    { symbol: "SPX", name: "S&P 500", price: "6,766.60", change: "-25.80", pct: "-0.38%", down: true, sparkline: [68, 67, 69, 68, 70, 69, 67, 66, 68, 67, 65, 66, 67, 66, 65] },
    { symbol: "NDX", name: "NASDAQ 100", price: "24,930.80", change: "-57.80", pct: "-0.23%", down: true, sparkline: [50, 52, 51, 53, 55, 54, 52, 53, 51, 50, 49, 50, 48, 49, 48] },
    { symbol: "DJI", name: "Dow Jones", price: "43,840.91", change: "+127.55", pct: "+0.29%", down: false, sparkline: [40, 41, 40, 42, 43, 42, 44, 43, 45, 44, 46, 45, 44, 45, 46] },
    { symbol: "FTSE", name: "FTSE 100", price: "8,721.40", change: "+32.15", pct: "+0.37%", down: false, sparkline: [85, 86, 84, 87, 86, 88, 87, 89, 88, 87, 88, 89, 90, 89, 90] },
    { symbol: "DAX", name: "DAX 40", price: "22,543.80", change: "-87.20", pct: "-0.39%", down: true, sparkline: [60, 62, 61, 60, 58, 59, 57, 58, 56, 57, 55, 56, 54, 55, 54] },
    { symbol: "NKY", name: "Nikkei 225", price: "37,120.33", change: "-245.60", pct: "-0.66%", down: true, sparkline: [75, 74, 76, 73, 72, 74, 71, 72, 70, 71, 69, 70, 68, 69, 68] },
    { symbol: "HSI", name: "Hang Seng", price: "23,145.80", change: "+112.40", pct: "+0.49%", down: false, sparkline: [22, 23, 22, 24, 23, 25, 26, 25, 27, 26, 28, 27, 28, 29, 28] },
    { symbol: "ASX", name: "ASX 200", price: "8,456.20", change: "-18.90", pct: "-0.22%", down: true, sparkline: [84, 85, 83, 84, 82, 83, 81, 82, 80, 81, 80, 79, 80, 79, 78] },
];

const stocksCards: MarketCard[] = [
    { symbol: "AAPL", name: "Apple Inc", price: "260.81", change: "+0.03", pct: "+0.01%", down: false, sparkline: [255, 257, 256, 258, 260, 259, 261, 260, 259, 261, 260, 262, 261, 260, 261] },
    { symbol: "MSFT", name: "Microsoft", price: "422.15", change: "-0.76", pct: "-0.18%", down: true, sparkline: [425, 424, 426, 423, 424, 422, 423, 421, 422, 420, 421, 419, 420, 421, 422] },
    { symbol: "NVDA", name: "NVIDIA Corp", price: "131.20", change: "+2.45", pct: "+1.90%", down: false, sparkline: [120, 122, 124, 123, 126, 125, 128, 127, 129, 128, 130, 129, 131, 130, 131] },
    { symbol: "TSLA", name: "Tesla Inc", price: "341.80", change: "+4.19", pct: "+1.24%", down: false, sparkline: [330, 332, 331, 334, 333, 336, 335, 338, 337, 339, 338, 340, 339, 341, 342] },
    { symbol: "AMZN", name: "Amazon", price: "198.42", change: "+1.32", pct: "+0.67%", down: false, sparkline: [192, 193, 194, 193, 195, 194, 196, 195, 197, 196, 198, 197, 199, 198, 198] },
    { symbol: "GOOG", name: "Alphabet", price: "176.30", change: "-1.15", pct: "-0.65%", down: true, sparkline: [180, 179, 181, 178, 179, 177, 178, 176, 177, 175, 176, 175, 176, 175, 176] },
    { symbol: "META", name: "Meta", price: "582.40", change: "+3.80", pct: "+0.66%", down: false, sparkline: [570, 572, 574, 573, 576, 575, 578, 577, 580, 579, 581, 580, 582, 581, 582] },
    { symbol: "SHEL", name: "Shell PLC", price: "62.40", change: "+0.35", pct: "+0.56%", down: false, sparkline: [59, 60, 59, 61, 60, 62, 61, 63, 62, 63, 62, 63, 62, 63, 62] },
];

const commoditiesCards: MarketCard[] = [
    { symbol: "XAU/USD", name: "Gold", price: "5,176.48", change: "-16.20", pct: "-0.31%", down: true, sparkline: [5100, 5120, 5140, 5130, 5160, 5150, 5180, 5170, 5190, 5180, 5200, 5190, 5185, 5180, 5176] },
    { symbol: "XAG/USD", name: "Silver", price: "85.757", change: "-2.58", pct: "-2.92%", down: true, sparkline: [90, 89, 91, 88, 89, 87, 88, 86, 87, 85, 86, 85, 86, 85, 86] },
    { symbol: "WTI", name: "Crude Oil WTI", price: "71.24", change: "+0.86", pct: "+1.22%", down: false, sparkline: [68, 69, 68, 70, 69, 71, 70, 72, 71, 72, 71, 72, 71, 72, 71] },
    { symbol: "BRENT", name: "Brent Crude", price: "74.82", change: "+0.64", pct: "+0.86%", down: false, sparkline: [72, 73, 72, 74, 73, 75, 74, 76, 75, 76, 75, 76, 75, 75, 75] },
    { symbol: "NG", name: "Natural Gas", price: "3.142", change: "-0.058", pct: "-1.81%", down: true, sparkline: [3.3, 3.28, 3.32, 3.25, 3.27, 3.22, 3.24, 3.19, 3.21, 3.18, 3.20, 3.17, 3.16, 3.15, 3.14] },
    { symbol: "HG", name: "Copper", price: "4.528", change: "+0.032", pct: "+0.71%", down: false, sparkline: [4.45, 4.46, 4.47, 4.46, 4.48, 4.47, 4.49, 4.50, 4.51, 4.50, 4.52, 4.51, 4.53, 4.52, 4.53] },
    { symbol: "XPT/USD", name: "Platinum", price: "1,024.50", change: "-8.30", pct: "-0.80%", down: true, sparkline: [1050, 1045, 1048, 1040, 1042, 1035, 1038, 1030, 1032, 1028, 1030, 1026, 1028, 1025, 1024] },
    { symbol: "XPD/USD", name: "Palladium", price: "982.40", change: "+12.60", pct: "+1.30%", down: false, sparkline: [950, 955, 952, 960, 958, 965, 962, 970, 968, 975, 972, 978, 976, 980, 982] },
];

const currenciesCards: MarketCard[] = [
    { symbol: "EUR/USD", name: "Euro / Dollar", price: "1.0842", change: "-0.0012", pct: "-0.11%", down: true, sparkline: [1.09, 1.088, 1.091, 1.087, 1.086, 1.088, 1.085, 1.086, 1.084, 1.085, 1.083, 1.084, 1.083, 1.084, 1.084] },
    { symbol: "GBP/USD", name: "Pound / Dollar", price: "1.3420", change: "-0.0004", pct: "-0.03%", down: true, sparkline: [1.34, 1.341, 1.339, 1.342, 1.340, 1.341, 1.339, 1.340, 1.341, 1.340, 1.342, 1.341, 1.342, 1.341, 1.342] },
    { symbol: "USD/JPY", name: "Dollar / Yen", price: "149.82", change: "+0.34", pct: "+0.23%", down: false, sparkline: [148, 148.5, 149, 148.8, 149.2, 149, 149.5, 149.3, 149.8, 149.5, 150, 149.7, 150.2, 149.8, 149.8] },
    { symbol: "USD/CHF", name: "Dollar / Franc", price: "0.8812", change: "-0.0008", pct: "-0.09%", down: true, sparkline: [0.885, 0.884, 0.886, 0.883, 0.884, 0.882, 0.883, 0.881, 0.882, 0.880, 0.881, 0.880, 0.881, 0.880, 0.881] },
    { symbol: "AUD/USD", name: "Aussie / Dollar", price: "0.6548", change: "+0.0008", pct: "+0.12%", down: false, sparkline: [0.65, 0.651, 0.652, 0.651, 0.653, 0.652, 0.654, 0.653, 0.655, 0.654, 0.656, 0.655, 0.656, 0.655, 0.655] },
    { symbol: "USD/CAD", name: "Dollar / Loonie", price: "1.3645", change: "+0.0018", pct: "+0.13%", down: false, sparkline: [1.36, 1.361, 1.362, 1.361, 1.363, 1.362, 1.364, 1.363, 1.365, 1.364, 1.366, 1.365, 1.366, 1.365, 1.365] },
    { symbol: "EUR/GBP", name: "Euro / Pound", price: "0.8580", change: "+0.0006", pct: "+0.07%", down: false, sparkline: [0.855, 0.856, 0.855, 0.857, 0.856, 0.858, 0.857, 0.859, 0.858, 0.859, 0.858, 0.859, 0.858, 0.859, 0.858] },
    { symbol: "NZD/USD", name: "Kiwi / Dollar", price: "0.5982", change: "-0.0010", pct: "-0.17%", down: true, sparkline: [0.602, 0.601, 0.603, 0.600, 0.601, 0.599, 0.600, 0.598, 0.599, 0.597, 0.598, 0.597, 0.598, 0.597, 0.598] },
];

const tabData: Record<Tab, MarketCard[]> = {
    INDICES: indicesCards,
    STOCKS: stocksCards,
    COMMODITIES: commoditiesCards,
    CURRENCIES: currenciesCards,
};

/* ── Inline sparkline SVG ── */
function MiniSpark({ data, down }: { data: number[]; down: boolean }) {
    const w = 80;
    const h = 32;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    const d = data
        .map((v, i) => {
            const x = (i / (data.length - 1)) * w;
            const y = h - ((v - min) / range) * h;
            return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ");

    const color = down ? "#ef4444" : "#22c55e";

    return (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="shrink-0">
            <defs>
                <linearGradient id={`sg-${down ? "d" : "u"}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={`${d} L${w},${h} L0,${h} Z`} fill={`url(#sg-${down ? "d" : "u"})`} />
            <path d={d} fill="none" stroke={color} strokeWidth="1.5" />
        </svg>
    );
}

/* ── Main component ── */
export default function MarketOverview() {
    const [tab, setTab] = useState<Tab>("INDICES");
    const tickerRef = useRef<HTMLDivElement>(null);

    const cards = tabData[tab];

    // Auto-scroll ticker
    useEffect(() => {
        const el = tickerRef.current;
        if (!el) return;
        let raf: number;
        let pos = 0;

        function animate() {
            pos += 0.4;
            if (el && pos >= el.scrollWidth / 2) pos = 0;
            if (el) el.scrollLeft = pos;
            raf = requestAnimationFrame(animate);
        }

        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section className="bg-[#0a0c10] text-white">
            {/* Ticker strip */}
            <div className="relative border-b border-white/[0.06] overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0a0c10]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0a0c10]" />
                <div ref={tickerRef} className="mx-auto flex max-w-6xl gap-10 overflow-hidden whitespace-nowrap px-6 py-3.5">
                    {[...tickerItems, ...tickerItems].map((t, i) => (
                        <span key={`${t.symbol}-${i}`} className="inline-flex items-center gap-2 text-[13px]">
                            <span className="font-semibold text-white/80">{t.symbol}</span>
                            <span className="tabular-nums text-white/50">{t.price}</span>
                            <span className={`tabular-nums ${t.down ? "text-red-400/80" : "text-emerald-400/80"}`}>
                                {t.change} {t.down ? "▾" : "▴"}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 py-14">
                {/* Tabs */}
                <div className="mb-10 flex items-center gap-2">
                    {(["INDICES", "STOCKS", "COMMODITIES", "CURRENCIES"] as Tab[]).map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`rounded-full px-5 py-2 text-[13px] font-semibold tracking-wide transition ${
                                tab === t
                                    ? "bg-[#a88643] text-white"
                                    : "bg-white/[0.04] text-white/40 hover:bg-white/[0.08] hover:text-white/70"
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Cards grid */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((c) => (
                        <div
                            key={c.symbol}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-white/[0.12] hover:bg-white/[0.04]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[13px] font-semibold text-white/90">{c.symbol}</p>
                                    <p className="mt-0.5 text-[11px] text-white/35">{c.name}</p>
                                </div>
                                <span
                                    className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                                        c.down
                                            ? "bg-red-500/10 text-red-400"
                                            : "bg-emerald-500/10 text-emerald-400"
                                    }`}
                                >
                                    {c.pct}
                                </span>
                            </div>

                            {/* Price */}
                            <p className="mt-4 text-2xl font-semibold tabular-nums tracking-tight" style={{ lineHeight: 1 }}>
                                {c.price}
                            </p>
                            <p className={`mt-1.5 text-xs tabular-nums ${c.down ? "text-red-400/70" : "text-emerald-400/70"}`}>
                                {c.change}
                            </p>

                            {/* Sparkline */}
                            <div className="mt-4">
                                <MiniSpark data={c.sparkline} down={c.down} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
