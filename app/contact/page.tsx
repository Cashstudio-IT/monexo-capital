import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path d="M10 18h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

function IconPin(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M12 21s7-5.25 7-11a7 7 0 1 0-14 0c0 5.75 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
        </svg>
    );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="m6.5 7.5 5.5 4 5.5-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Contact() {
    return (
        <section className="bg-[#EEECE8] text-[#2b2421]">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
                    {/* LEFT — Info */}
                    <div className="max-w-lg">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#a88643]">
                            CONTACT US
                        </p>

                        <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                            Have inquiries?
                            <br />
                            Reach out to us!
                        </h1>

                        <p className="mt-6 text-sm leading-relaxed text-[#2b2421]/60 sm:text-base">
                            We are here to assist you with any questions or concerns you may
                            have. Feel free to reach out to us anytime.
                        </p>

                        <ul className="mt-10 space-y-6">
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 text-[#a88643]">
                                    <IconPhone className="h-5 w-5" />
                                </span>
                                <span className="text-sm sm:text-base">+44 800 086 8188</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 text-[#a88643]">
                                    <IconPin className="h-5 w-5" />
                                </span>
                                <span className="text-sm sm:text-base">
                                    Suite 19, 12 Alexander Kazbegi Ave, Tbilisi, Georgia
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 text-[#a88643]">
                                    <IconMail className="h-5 w-5" />
                                </span>
                                <span className="text-sm sm:text-base">info@monexocapital.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT — Form */}
                    <form className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="text-sm font-semibold">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="mt-2 h-12 w-full rounded-full border border-[#d6d3cd] bg-white px-5 text-sm text-[#2b2421] outline-none placeholder:text-[#2b2421]/40 focus:border-[#a88643]"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="mt-2 h-12 w-full rounded-full border border-[#d6d3cd] bg-white px-5 text-sm text-[#2b2421] outline-none placeholder:text-[#2b2421]/40 focus:border-[#a88643]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Phone</label>
                            <input
                                type="tel"
                                placeholder="Enter your number"
                                className="mt-2 h-12 w-full rounded-full border border-[#d6d3cd] bg-white px-5 text-sm text-[#2b2421] outline-none placeholder:text-[#2b2421]/40 focus:border-[#a88643]"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Enter your message"
                                className="mt-2 w-full rounded-2xl border border-[#d6d3cd] bg-white px-5 py-4 text-sm text-[#2b2421] outline-none placeholder:text-[#2b2421]/40 focus:border-[#a88643]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex h-12 items-center justify-center bg-[#a88643] px-10 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
