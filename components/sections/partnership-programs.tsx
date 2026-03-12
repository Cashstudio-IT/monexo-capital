export default function PartnershipPrograms() {
    return (
        <section className="bg-[#EEECE8] text-[#2b2421]">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#2b2421]/70">
                            PARTNERSHIP PROGRAMS
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                            Grow Your Business
                            <br />
                            with Monexo Capital
                        </h2>

                        <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/75 sm:text-base">
                            Become an{" "}
                            <span className="font-semibold text-black">
                                Introducing Broker (IB)
                            </span>{" "}
                            with Monexo Capital and unlock scalable earning opportunities. Our
                            partnership model is built for long-term growth, transparency, and
                            support.
                        </p>

                        {/* Feature List */}
                        <ul className="mt-8 space-y-4 text-sm sm:text-base">
                            {[
                                "Competitive, tier-based rebates",
                                "Multi-asset trading from one interface",
                                "Advanced charting & analytical tools",
                                "Real-time pricing & market data",
                                "Seamless access across desktop, web, and mobile",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1 text-[#a88643]">✓</span>
                                    <span className="font-medium text-[#2b2421]/85">{item}</span>
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

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">
                        <img
                            src="/images/smart-trading/laptop.png"
                            alt="Trading platform on multiple devices"
                            className="max-w-full object-contain"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
