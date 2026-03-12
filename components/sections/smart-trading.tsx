const items = [
    {
        title: "Indices",
        desc: "Global indices with refined execution and comprehensive market access.",
        icon: "/images/smart-trading/indices.png",
    },
    {
        title: "Stocks",
        desc: "Global equities with refined execution and comprehensive market access.",
        icon: "/images/smart-trading/stocks.png",
    },
    {
        title: "Commodities",
        desc: "Energy and precious metals with refined execution and comprehensive market access.",
        icon: "/images/smart-trading/commodities.png",
    },
    {
        title: "Currencies",
        desc: "Major global currencies with refined execution and comprehensive market access.",
        icon: "/images/smart-trading/currencies.png",
    },
];

export default function SmartTrading() {
    return (
        <section className="bg-[#EEECE8] text-[#121212]">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-14 lg:grid-cols-[1.1fr_1.2fr] lg:items-start">
                    {/* LEFT */}
                    <div className="max-w-xl">
                        <p className="text-xs font-semibold tracking-[0.18em] text-[#1a1a1a]/80">
                            SMART TRADING
                        </p>

                        <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                            All Your Trading Needs.
                            <br />
                            One Powerful Platform
                        </h2>

                        <p className="mt-5 text-sm leading-relaxed text-[#1a1a1a]/70 sm:text-base">
                            Trade across global markets with a single, secure account. Monexo Capital
                            offers seamless access to major asset classes, backed by institutional-grade
                            technology and dedicated support.
                        </p>

                        <div className="mt-8">
                            <a
                                href="/signup"
                                className="inline-flex h-12 items-center justify-center rounded-none bg-[#a88643] px-10 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Start Trading
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2 lg:pt-6">
                        {items.map((item) => (
                            <div key={item.title} className="max-w-xs">
                                <div className="h-28 w-28">
                                    <img
                                        src={item.icon}
                                        alt={`${item.title} icon`}
                                        className="h-full w-full object-contain"
                                        draggable={false}
                                    />
                                </div>

                                <h3 className="mt-5 text-[22px] font-normal" style={{ lineHeight: "32px", letterSpacing: "0.5px" }}>{item.title}</h3>

                                <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/65">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
