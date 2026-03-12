export default function OurPlatform() {
    return (
        <section className="bg-[#EEECE8] text-[#2b2421]">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#a88643]">
                            OUR PLATFORM
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                            Smart, Powerful Trading
                            <br />
                            Technology
                        </h2>

                        <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/75 sm:text-base">
                            MT5 delivers advanced trading capabilities, powerful tools, and
                            exceptional flexibility.
                        </p>

                        <ul className="mt-8 space-y-4 text-sm sm:text-base">
                            {[
                                "Access to 13000+ assets.",
                                "Access full trading history & market depth (DOM)",
                                "One-click trading & EA support.",
                                "3 chart types, 21 timeframes.",
                                "38 indicators, 44 tools, custom charts.",
                                "MT5 guides, micro lots, extra order types.",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#a88643]/15 text-[#a88643]">
                                        <CheckIcon />
                                    </span>
                                    <span className="font-medium text-[#2b2421]/85">{item}</span>
                                </li>
                            ))}
                        </ul>
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
    );
}

function CheckIcon() {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
        </svg>
    );
}
