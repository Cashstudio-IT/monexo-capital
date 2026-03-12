const plans = [
    {
        name: "Standard Account",
        icon: "/images/home/standard.png",
        deposit: "2,500",
        color: "standard" as const,
        features: [
            { text: "Leverage : Upto 500*", included: true },
            { text: "Stop Out : 30%", included: true },
            { text: "Tight Spreads", included: true },
            { text: "No Personal Account Manager", included: false },
        ],
    },
    {
        name: "Premium Account",
        icon: "/images/home/premium.png",
        deposit: "5,000",
        color: "premium" as const,
        features: [
            { text: "Leverage : Upto 500*", included: true },
            { text: "Stop Out : 30%", included: true },
            { text: "Tight Spreads", included: true },
            { text: "Premium Relationship Team", included: true },
        ],
    },
    {
        name: "Platinum Account",
        icon: "/images/home/platinum.png",
        deposit: "25,000",
        color: "platinum" as const,
        features: [
            { text: "Leverage : Upto 500*", included: true },
            { text: "Stop Out : 20%", included: true },
            { text: "Tight Spreads", included: true },
            { text: "Dedicated Relationship Manager", included: true },
        ],
    },
];

const btnStyles = {
    standard:
        "bg-[#9e9e9e] text-white hover:bg-[#888]",
    premium:
        "bg-[#00bcd4] text-white hover:bg-[#00a5bb]",
    platinum:
        "bg-[#a88643] text-white hover:bg-[#917536]",
};

const nameStyles = {
    standard: "text-[#2b2421]",
    premium: "text-[#00bcd4]",
    platinum: "text-[#a88643]",
};

const borderStyles = {
    standard: "border-[#e0ddd8]",
    premium: "border-[#00bcd4]",
    platinum: "border-[#a88643]",
};

const bgStyles = {
    standard: "bg-[#e8e5e0]",
    premium: "bg-[#F0FBFD]",
    platinum: "bg-[#FBF9F5]",
};

export default function Pricing() {
    return (
        <section className="bg-[#EEECE8] text-[#2b2421]">
            <div className="mx-auto max-w-6xl px-6 py-24">
                {/* Header */}
                <div className="text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#2b2421]/70">
                        CHOOSE YOU PLAN
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                        Choose the Account That Fits Your Strategy
                    </h2>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`flex flex-col border p-8 ${borderStyles[plan.color]} ${bgStyles[plan.color]}`}
                        >
                            {/* Icon */}
                            <div className="h-24 w-24">
                                <img
                                    src={plan.icon}
                                    alt={plan.name}
                                    className="h-full w-full object-contain"
                                    draggable={false}
                                />
                            </div>

                            {/* Name & subtitle */}
                            <h3 className={`mt-6 text-[26px] font-normal ${nameStyles[plan.color]}`} style={{ lineHeight: "36px", letterSpacing: "0.5px" }}>
                                {plan.name}
                            </h3>
                            <p className="mt-1.5 text-[13px] text-[#2b2421]/50">
                                Stock, Indices, Energy, Metals &amp; Currencies
                            </p>

                            {/* Price */}
                            <div className="mt-8 flex items-baseline gap-1.5 pb-8">
                                <span className="text-[54px] font-medium" style={{ lineHeight: 1, letterSpacing: "-2px" }}>
                                    ${plan.deposit}
                                </span>
                                <span className="text-[15px] text-[#2b2421]/50">/ min deposit</span>
                            </div>

                            {/* Features */}
                            <ul className="flex-1 space-y-4">
                                {plan.features.map((f) => (
                                    <li key={f.text} className="flex items-center gap-3 text-[14px]">
                                        {f.included ? (
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#a88643]/20 text-[#a88643]">
                                                <CheckIcon />
                                            </span>
                                        ) : (
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2b2421]/10 text-[#2b2421]/40">
                                                <XIcon />
                                            </span>
                                        )}
                                        <span className={f.included ? "text-[#2b2421]/80" : "text-[#2b2421]/40"}>
                                            {f.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="/register"
                                className={`mt-10 inline-flex h-12 w-full items-center justify-center text-sm font-semibold transition ${btnStyles[plan.color]}`}
                            >
                                Open Account
                            </a>
                        </div>
                    ))}
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

function XIcon() {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
            <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
        </svg>
    );
}
