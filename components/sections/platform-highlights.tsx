export default function PlatformHighlights() {
    return (
        <section className="bg-[#EEECE8] text-[#2b2421]">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT IMAGE */}
                    <div className="relative flex justify-center lg:justify-start">
                        <img
                            src="/images/platform/mt5-phones.png"
                            alt="MetaTrader 5 mobile trading app"
                            className="max-w-[420px] object-contain"
                            draggable={false}
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="max-w-xl">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#2b2421]/70">
                            PLATFORM HIGHLIGHTS
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                            Professional Trading.
                            <br />
                            Without Compromise.
                        </h2>

                        <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/75 sm:text-base">
                            Trade on industry-leading platforms like{" "}
                            <span className="font-semibold text-black">
                                MetaTrader 5
                            </span>{" "}
                            engineered for speed, stability, and precision across all market conditions.
                        </p>

                        {/* Feature List */}
                        <ul className="mt-8 space-y-4 text-sm sm:text-base">
                            {[
                                "Lightning-fast execution",
                                "Multi-asset trading from one interface",
                                "Advanced charting & analytical tools",
                                "Real-time pricing & market data",
                                "Seamless access across desktop, web, and mobile",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1 text-[#a88643]">✓</span>
                                    <span className="text-[#2b2421]/85">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="mt-10">
                            <a
                                href="/signup"
                                className="inline-flex h-12 items-center justify-center border border-[#a88643] px-10 text-sm font-semibold text-[#a88643] transition hover:bg-[#a88643] hover:text-white"
                            >
                                Start Trading
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
