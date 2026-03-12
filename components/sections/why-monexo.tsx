const cards = [
    {
        title: "Lightning-Fast Execution",
        desc: "Designed for precision trading in dynamic market conditions.",
    },
    {
        title: "13000+ Instruments",
        desc: "Access global indices, stocks, commodities, and currencies.",
    },
    {
        title: "MetaTrader 5 Access",
        desc: "Trade on an industry-leading platform trusted by professionals worldwide.",
    },
    {
        title: "Transparent Trading Conditions",
        desc: "Clear pricing, competitive spreads, and no unnecessary complexity.",
    },
    {
        title: "Secure Environment",
        desc: "Robust systems supporting a disciplined and reliable trading experience.",
    },
    {
        title: "Dedicated Client Support",
        desc: "Professional assistance to guide and support your trading journey.",
    },
];

export default function WhyMonexo() {
    return (
        <section className="relative text-white">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/hero/markets-bg.jpg)" }}
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative mx-auto max-w-6xl px-6 py-24">
                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold leading-tight sm:text-5xl">
                    Why Traders Prefer Monexo Capital?
                </h2>

                {/* Grid */}
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-xl border border-white/10 bg-black/80 p-8 backdrop-blur"
                        >
                            <h3 className="text-lg font-semibold text-[#c5a24d]">
                                {card.title}
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-white/70">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
