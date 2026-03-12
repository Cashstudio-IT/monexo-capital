export default function MonexoIntroSection() {
    return (
        <section className="bg-black text-white">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                    {/* LEFT COLUMN */}
                    <div className="order-2 space-y-8 lg:order-1">
                        {/* Top image (cube) */}
                        <div className="hidden overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 md:block">
                            <img
                                src="/images/hero/cube-left.jpg"
                                alt="Trading technology cube"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Bottom-left copy */}
                        <div className="max-w-xl">
                            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                                Trade global markets <br className="hidden sm:block" />
                                with{" "}
                                <span className="text-[#c5a24d]">smart technology.</span>
                            </h2>

                            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                                Our infrastructure is designed to provide transparent access to global
                                markets through stable platforms and professional trading tools.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="order-1 space-y-8 lg:order-2">
                        {/* Top-right copy */}
                        <div className="pt-2">
                            <p className="text-xs font-semibold tracking-[0.18em] text-white/70">
                                WELCOME TO MONEXO CAPITAL
                            </p>

                            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                                Your capital deserves <br className="hidden sm:block" />
                                precision, transparency, <br className="hidden sm:block" />
                                and opportunity.
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                                Monexo Capital delivers a powerful trading ecosystem combining advanced
                                technology, transparent execution, and multi-asset access. Backed by expert
                                support and institutional-grade infrastructure, we help traders operate
                                confidently and efficiently in global markets.
                            </p>
                        </div>

                        {/* Bottom image (globe) */}
                        <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                            <img
                                src="/images/hero/globe-right.jpg"
                                alt="Global markets"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
