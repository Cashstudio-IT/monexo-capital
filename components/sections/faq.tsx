"use client";

import { useState } from "react";

const faqs = [
    {
        question: "How do I begin trading with your company?",
        answer: "Getting started is easy—create an account, complete verification, deposit funds, and you'll be ready to trade a wide range of markets.",
    },
    {
        question: "Do you offer a demo account?",
        answer: "Yes. Our demo account allows you to practice with virtual funds, explore the platform, and refine your strategies with zero risk.",
    },
    {
        question: "What kind of trader support do you provide?",
        answer: "We offer 24/7 support via live chat, email, and phone to assist with technical issues, account questions, and trading inquiries.",
    },
    {
        question: "How secure is my personal information?",
        answer: "Security is our top priority. We use advanced encryption and robust security measures to safeguard your data and financial transactions.",
    },
    {
        question: "Do you provide educational resources?",
        answer: "Absolutely. Access tutorials, webinars, expert insights, and market analysis designed to help you grow your trading knowledge and confidence.",
    },
    {
        question: "Which trading platforms are available?",
        answer: "We provide leading trading platforms equipped with powerful tools, advanced charting, and mobile access—so you can trade anytime, anywhere.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#EEECE8] text-[#2b2421]">
            <div className="mx-auto max-w-3xl px-6 py-24">
                {/* Header */}
                <div className="text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#a88643]">
                        HELPFUL ANSWERS
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                        Have a question? Find
                        <br />
                        answers here
                    </h2>
                    <p className="mt-5 text-sm leading-relaxed text-[#2b2421]/65 sm:text-base">
                        Whether you're just getting started or looking for clarity, this guide
                        will walk you through our services and their key features.
                    </p>
                </div>

                {/* Accordion */}
                <div className="mt-14 space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={faq.question}
                                className="rounded-lg border border-[#d6d3cd] bg-white"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="text-[15px] font-semibold">
                                        {faq.question}
                                    </span>
                                    <span className="ml-4 shrink-0 text-xl text-[#2b2421]/50">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-5">
                                        <p className="text-sm leading-relaxed text-[#2b2421]/65">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
