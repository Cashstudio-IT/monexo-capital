import Link from "next/link";

export default function CtaBanner() {
    return (
        <section className="relative text-white">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/hero/markets-bg.jpg)" }}
            />
            <div className="absolute inset-0 bg-black/65" />

            <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    Start Trading With A Leading Broker
                </h2>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/register"
                        className="inline-flex h-12 items-center justify-center bg-[#a88643] px-10 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Open Live Account
                    </Link>

                    <Link
                        href="/demo"
                        className="inline-flex h-12 items-center justify-center border border-white px-10 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        Try Risk Free Demo
                    </Link>
                </div>
            </div>
        </section>
    );
}
