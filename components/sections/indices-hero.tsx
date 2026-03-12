"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const ChevronIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6.3" className="w-3 h-3 fill-current">
        <path d="M3.5,6.3L0.3,3.5c-0.4-0.4-0.4-1-0.1-1.4c0.4-0.4,1-0.4,1.4-0.1l1.9,1.7l3.8-3.4c0.4-0.4,1-0.3,1.4,0.1s0.3,1-0.1,1.4 L3.5,6.3z" />
    </svg>
);

const RegulatedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="m12.001,12.821l8.442-8.385c.587-.583,1.538-.58,2.121.007.584.588.58,1.538-.008,2.122l-8.441,8.385c-.708.704-1.64,1.056-2.572,1.056s-1.857-.35-2.566-1.049l-2.475-2.447c-.589-.582-.595-1.532-.012-2.121.582-.589,1.533-.595,2.121-.012l2.474,2.446c.252.249.664.25.916-.001Zm10.499-2.321c-.828,0-1.5.671-1.5,1.5,0,.076-.021.188-.118.285l-2.442,2.442c-.281.281-.439.663-.439,1.061v1.712c0,.275-.225.5-.5.5h-1.712c-.397,0-.779.158-1.061.439l-2.442,2.442c-.158.156-.412.156-.57,0l-2.442-2.442c-.281-.281-.663-.439-1.061-.439h-1.712c-.275,0-.5-.225-.5-.5v-1.712c0-.397-.158-.779-.439-1.061l-2.442-2.442c-.098-.098-.118-.209-.118-.285s.021-.187.118-.285l2.442-2.443c.281-.281.439-.663.439-1.061v-1.712c0-.276.225-.5.5-.5h1.712c.397,0,.779-.158,1.061-.439l2.442-2.442c.158-.157.412-.157.57,0l2.442,2.442c.586.586,1.535.586,2.121,0,.586-.585.586-1.536,0-2.121l-2.442-2.442c-1.326-1.327-3.486-1.327-4.812,0l-2.003,2.003h-1.091c-1.93,0-3.5,1.57-3.5,3.5v1.091l-2.003,2.003c-.643.643-.997,1.497-.997,2.406s.354,1.764.997,2.406l2.003,2.003v1.091c0,1.93,1.57,3.5,3.5,3.5h1.091l2.003,2.003c.663.663,1.535.995,2.406.995s1.743-.332,2.406-.995l2.003-2.003h1.091c1.93,0,3.5-1.57,3.5-3.5v-1.091l2.002-2.002c.644-.643.998-1.498.998-2.407,0-.829-.672-1.5-1.5-1.5Z" />
    </svg>
);

const ZeroCommissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12,19c-2.757,0-5-2.243-5-5v-4c0-2.757,2.243-5,5-5s5,2.243,5,5v4c0,2.757-2.243,5-5,5Zm0-11c-1.103,0-2,.897-2,2v4c0,1.103,.897,2,2,2s2-.897,2-2v-4c0-1.103-.897-2-2-2Zm0,16C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-21C7.037,3,3,7.037,3,12s4.037,9,9,9,9-4.037,9-9S16.963,3,12,3Z" />
    </svg>
);

const TradingPlatformIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M16,7H8c-.55,0-1,.45-1,1v8c0,.55,.45,1,1,1h8c.55,0,1-.45,1-1V8c0-.55-.45-1-1-1Zm-1,8h-6v-6h6v6Zm8-4c.55,0,1-.45,1-1s-.45-1-1-1h-1v-2h1c.55,0,1-.45,1-1s-.45-1-1-1h-1.42c-.5-1.15-1.43-2.07-2.58-2.58V1c0-.55-.45-1-1-1s-1,.45-1,1v1h-2V1c0-.55-.45-1-1-1s-1,.45-1,1v1h-2V1c0-.55-.45-1-1-1s-1,.45-1,1v1h-2V1c0-.55-.45-1-1-1s-1,.45-1,1v1.42c-1.15,.5-2.07,1.43-2.58,2.58H1c-.55,0-1,.45-1,1s.45,1,1,1h1v2H1c-.55,0-1,.45-1,1s.45,1,1,1h1v2H1c-.55,0-1,.45-1,1s.45,1,1,1h1v2H1c-.55,0-1,.45-1,1s.45,1,1,1h1.42c.5,1.15,1.43,2.07,2.58,2.58v1.42c0,.55,.45,1,1,1s1-.45,1-1v-1h2v1c0,.55,.45,1,1,1s1-.45,1-1v-1h2v1c0,.55,.45,1,1,1s1-.45,1-1v-1h2v1c0,.55,.45,1,1,1s1-.45,1-1v-1.42c1.15-.5,2.07-1.43,2.58-2.58h1.42c.55,0,1-.45,1-1s-.45-1-1-1h-1v-2h1c.55,0,1-.45,1-1s-.45-1-1-1h-1v-2h1Zm-6,9H7c-1.65,0-3-1.35-3-3V7c0-1.65,1.35-3,3-3h10c1.65,0,3,1.35,3,3v10c0,1.65-1.35,3-3,3Z" />
    </svg>
);

const FastExecutionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M4.16,20.809A4.168,4.168,0,0,1,0,16.648v-9.3A4.157,4.157,0,0,1,6.615,4L9.527,6.135A4.159,4.159,0,0,1,15.962,4L22.3,8.648a4.156,4.156,0,0,1,0,6.7L15.963,20a4.16,4.16,0,0,1-6.436-2.135L6.615,20A4.14,4.14,0,0,1,4.16,20.809Zm6.688-7.272a1.5,1.5,0,0,1,1.5,1.5v1.611a1.157,1.157,0,0,0,1.841.934l6.338-4.649a1.157,1.157,0,0,0,0-1.866L14.188,6.418a1.157,1.157,0,0,0-1.84.934V8.963a1.5,1.5,0,0,1-2.388,1.21L4.841,6.418A1.158,1.158,0,0,0,3,7.352v9.3a1.158,1.158,0,0,0,1.841.934L9.96,13.827A1.506,1.506,0,0,1,10.848,13.537Z" />
    </svg>
);

const FlexibleAccountIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="m14.881,12h.119c2.206,0,4-1.794,4-4V4C19,1.794,17.206,0,15,0h-6C6.795,0,5,1.794,5,4v4c0,2.206,1.794,4,4,4h.154l1.835,1.617c.29.256.652.384,1.014.384.359,0,.717-.126.999-.376l1.879-1.625Zm-4.688-1.75c-.183-.161-.417-.25-.661-.25h-.532c-1.103,0-2-.897-2-2V4c0-1.103.897-2,2-2h6c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2h-.492c-.24,0-.472.087-.654.243l-1.852,1.602-1.81-1.595Zm5.041-4.57l-2.532,2.734c-.391.387-.895.578-1.394.578-.484,0-.964-.181-1.332-.54l-1.202-1.264c-.38-.4-.364-1.033.036-1.413.4-.381,1.033-.364,1.414.036l1.095,1.152,2.446-2.644c.375-.406,1.008-.43,1.413-.054.405.375.43,1.008.055,1.413ZM6,14c-2.761,0-5,2.239-5,5s2.239,5,5,5,5-2.239,5-5-2.239-5-5-5Zm2.041,7.778h0c-.232,0-.439-.148-.514-.368l-.254-.743h-2.544l-.254.743c-.075.22-.282.368-.515.368-.372,0-.634-.365-.515-.717l1.354-4.034c.293-.667.693-.804,1.202-.804.509,0,.909.137,1.194.784l1.362,4.055c.118.352-.144.717-.515.717Zm-1.881-4.362l.732,2.139h-1.784l.725-2.121c.023-.047.112-.102.167-.102.057,0,.142.047.16.083Zm12.396,1.028h-1.667v-.556c0-.307.249-.556.556-.556h1.086c.29,0,.549.211.578.499.033.331-.228.612-.553.612Zm1.108,1.723c-.029.288-.287.499-.577.499h-1.643c-.307,0-.555-.249-.555-.556v-.556h2.222c.325,0,.586.281.553.612Zm-1.664-6.167c-2.761,0-5,2.239-5,5s2.239,5,5,5,5-2.239,5-5-2.239-5-5-5Zm1.067,7.778h-1.512c-.982,0-1.778-.796-1.778-1.778v-2c0-.982.796-1.778,1.883-1.778h.848c.911,0,1.689.711,1.713,1.622.008.314-.071.609-.214.863.498.319.817.896.765,1.541-.07.873-.83,1.53-1.705,1.53Z" />
    </svg>
);

const GlobalMarketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="m11.586 21.134c-1.514-1.707-4.086-5.184-4.086-9.134 0-1.039.18-2.047.472-3h13.567c.202.641.357 1.309.41 2 .027.345.052.923.034 1.386.641 1.057 1.017 2.291 1.017 3.614 0 .317-.029.628-.07.934.681-1.506 1.07-3.173 1.07-4.934 0-6.617-5.383-12-12-12s-12 5.383-12 12 5.383 12 12 12c1.761 0 3.428-.389 4.934-1.07-.306.041-.617.07-.934.07-1.861 0-3.24-.689-4.414-1.866zm.415-18.719c.814.864 2.207 2.506 3.229 4.586h-6.452c1.025-2.082 2.411-3.724 3.223-4.586zm8.646 4.586h-3.223c-.789-1.879-1.879-3.476-2.819-4.644 2.572.696 4.733 2.389 6.041 4.644zm-11.259-4.643c-.94 1.167-2.024 2.767-2.81 4.642h-3.225c1.308-2.253 3.466-3.945 6.035-4.642zm-6.927 6.642h3.442c-.246.956-.403 1.958-.403 3s.157 2.044.403 3h-3.442c-.299-.948-.461-1.955-.461-3s.163-2.052.461-3zm.892 8h3.225c.787 1.875 1.87 3.475 2.81 4.642-2.569-.697-4.728-2.39-6.035-4.642zm17.647-1c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5c1.017 0 1.962-.309 2.753-.833l3.792 3.792 1.414-1.414-3.792-3.792c.524-.791.833-1.736.833-2.753zm-5 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </svg>
);

const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M24,3v14.04c0,2.22-1.491,4.197-3.626,4.808l-6.726,1.921c-1.078,.308-2.218,.308-3.296,0l-6.726-1.921c-2.135-.61-3.626-2.587-3.626-4.808V4c.006-1.308,1.994-1.307,2,0v13.04c0,1.333,.895,2.519,2.176,2.885l6.726,1.921c.719,.205,1.478,.205,2.198,0l6.725-1.921c1.281-.366,2.176-1.552,2.176-2.885V3c.006-1.308,1.994-1.307,2,0ZM4,14.937V4c0-1.267,.58-2.431,1.591-3.193C6.602,.044,7.88-.194,9.099,.154l1.726,.493c.446,.127,.845,.354,1.176,.651,.331-.297,.73-.524,1.176-.651l1.725-.493c2.461-.778,5.171,1.268,5.099,3.846V14.937c0,1.776-1.193,3.358-2.901,3.846l-3.451,.986c-1.079,.308-2.219,.308-3.296,0l-3.451-.986c-1.708-.488-2.901-2.07-2.901-3.846Zm9,2.936c.033-.009,3.549-1.013,3.549-1.013,.854-.244,1.451-1.035,1.451-1.923V4c0-.633-.29-1.215-.795-1.597-.508-.384-1.151-.499-1.754-.327l-1.725,.493c-.427,.122-.726,.517-.726,.961v14.342Zm-7-2.936c0,.888,.597,1.679,1.451,1.923,0,0,3.516,1.004,3.549,1.013V3.531c0-.444-.298-.839-.725-.961l-1.726-.493c-.603-.173-1.247-.057-1.754,.327-.505,.381-.795,.963-.795,1.597V14.937Z" />
    </svg>
);

const SupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="m21,21.5v2.5H3v-2.5c0-2.395,1.885-4.34,4.247-4.474l2.753,4.474,2-3,2,3,2.753-4.474c2.362.134,4.247,2.08,4.247,4.474ZM6.872,4.027c1.529-1.433,3.531-2.141,5.63-2.011,3.924.254,6.999,3.669,6.999,7.774,0,1.77-1.439,3.209-3.209,3.209h-2.406c-.244-.829-1.002-1.439-1.91-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.538,0,1.025-.215,1.384-.561h2.932c2.872,0,5.209-2.337,5.209-5.209C21.5,4.634,17.604.342,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.787,1.675-2.861,3.996-2.99,6.432h2.003c.123-1.903.948-3.654,2.355-4.973Zm8.237,6.984c.023-.005.053-.011.053-.011h1.306c.501,0,.939-.368.997-.866.068-.587.043-1.202-.091-1.831-.444-2.079-2.131-3.756-4.213-4.184-3.537-.727-6.659,1.97-6.659,5.381,0,1.469.579,2.805,1.52,3.792,0,0,0,0,0-.001.111-2.11,1.841-3.791,3.979-3.791,1.263,0,2.375.597,3.108,1.511Z" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const indices = [
    {
        name: "S&P 500",
        description: "Trade the benchmark index tracking 500 of the largest U.S. companies across technology, finance, healthcare, and more.",
        image: "/images/indices/s-and-p-500-600.webp",
    },
    {
        name: "NASDAQ 100",
        description: "A technology-driven index known for volatility and momentum — ideal for active traders and short-term strategies.",
        image: "/images/indices/nasdaq.webp",
    },
    {
        name: "Nikkei 225",
        description: "Gain exposure to a global leader in software, cloud computing, and enterprise solutions.",
        image: "/images/indices/nikkei-225-600.webp",
    },
    {
        name: "DAX 40",
        description: "Germany's flagship index, reflecting the strength of Europe's largest economy.",
        image: "/images/indices/dax-600.webp",
    },
];

const whyUsFeatures = [
    { icon: <RegulatedIcon />, title: "Regulated & Trusted", description: "Operate with confidence under a fully regulated environment." },
    { icon: <ZeroCommissionIcon />, title: "Zero Commission Trading", description: "No commissions on indices trades." },
    { icon: <TradingPlatformIcon />, title: "Advanced Trading Platform", description: "Trade on MetaTrader 5 with professional charting tools." },
    { icon: <FastExecutionIcon />, title: "Fast Market Execution", description: "Experience low-latency execution designed to perform." },
    { icon: <FlexibleAccountIcon />, title: "Flexible Account Types", description: "Choose from multiple account options." },
    { icon: <GlobalMarketIcon />, title: "Global Market Access", description: "Trade indices from anywhere in the world with secure funding options." },
    { icon: <EducationIcon />, title: "Education & Market Insights", description: "Stay informed with daily analysis, and strategy resources." },
    { icon: <SupportIcon />, title: "24/7 Client Support", description: "Dedicated multilingual support available around the clock." },
];

const benefitCards = [
    {
        title: "Diversified Market Exposure",
        description: "Reduce single-stock risk by trading a basket of companies in one instrument.",
    },
    {
        title: "Trade Market Sentiment",
        description: "Indices reflect economic data, investor confidence, and global events — ideal for both technical and fundamental analysis.",
    },
    {
        title: "High Volatility, High Opportunity",
        description: "Major indices often react strongly to news, creating opportunities for scalpers, day traders, and swing traders.",
    },
    {
        title: "Leverage & Liquidity",
        description: "Trade larger positions with lower capital using leverage, supported by deep institutional liquidity.",
    },
];

const steps = [
    {
        number: "1",
        title: "Register",
        description: "Complete the online application form.",
        image: "/images/indices/step-register.jpeg",
    },
    {
        number: "2",
        title: "Verify",
        description: "Upload the required documents to activate your account.",
        image: "/images/indices/step-verify.jpeg",
    },
    {
        number: "3",
        title: "Fund and Trade",
        description: "Deposit funds and start trading global indices instantly.",
        image: "/images/indices/step-fund.jpeg",
    },
];

const trustList = [
    "Secure & regulated trading environment",
    "Modern trading infrastructure",
    "Dedicated trader support",
    "Deep Market Access",
    "Risk Management Controls",
    "Seamless Account Management",
    "Transparent Execution Policy",
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function IndicesPage() {
    return (
        <main className="bg-[#0f0f0f] text-white">

            {/* ── Hero Section (60% Height) ───────────────────────────── */}
            <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center justify-center text-center">

                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                    aria-hidden="true"
                >
                    <source src="/videos/indices-hero.mov" type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center px-6">
                    <p className="text-xs tracking-[0.25em] text-white/80 uppercase">
                        MONEXO CAPITAL
                    </p>

                    <h1 className="font-tasa text-5xl sm:text-7xl font-semibold tracking-tight text-#9E7C3E">
                        Indices Trading
                    </h1>

                    <Link
                        href="/register"
                        className="mt-10 inline-flex items-center justify-center border border-[#9E7C3E] px-12 py-3 text-sm font-medium text-[#9E7C3E] transition hover:bg-[#9E7C3E] hover:text-black"
                    >
                        Get Started
                    </Link>
                </div>

            </section>

            {/* ── TradingView Ticker ─────────────────────────────────────────── */}
            {/* 
                Note: Include the TradingView script in your layout or use next/script.
                <Script src="https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js" strategy="afterInteractive" />
            */}
            <section className="w-full bg-black overflow-hidden">
                {/* 
                    <tv-ticker-tape
                        symbols="CAPITALCOM:US100,PEPPERSTONE:NAS100,IG:NASDAQ,CAPITALCOM:UK100,FOREXCOM:GER40,OANDA:NAS100USD"
                        theme="dark"
                        transparent
                    />
                */}
            </section>

            {/* ── Intro Section (LIGHT) ─────────────────────────────────────── */}
            <section className="bg-[#FBF6F0]">
                <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-tasa text-[34px] leading-tight font-medium text-[#1F1F1F] md:text-[40px]">
                            Trade the world&apos;s most influential stock market <br />
                            indices{" "}
                            <span className="text-[#A98743] font-medium">
                                built on precision, discipline, and strategic <br />
                                execution.
                            </span>
                        </h2>

                        <p className="mx-auto mt-8 max-w-3xl text-[13.5px] leading-relaxed text-[#7B7B7B]">
                            Monexo Capital gives you direct access to global indices with
                            institutional-grade execution, transparent pricing, and powerful
                            trading tools built for modern traders.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Trade Global Stocks Section (LIGHT) ────────────────────────── */}
            <section className="bg-[#FBF6F0]">
                <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
                    <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
                        {/* Left copy */}
                        <div className="max-w-xl">
                            <h2 className="text-[46px] leading-[1.05] font-semibold text-[#1F1F1F]">
                                Trade Global Stocks <br />
                                with Confidence
                            </h2>

                            <p className="mt-6 text-[14px] leading-7 text-[#7B7B7B]">
                                Gain exposure to entire economies and sectors through a single trade. At Monexo Capital,
                                you can trade major global indices with deep liquidity and real-time pricing.
                            </p>

                            <Link
                                href="/register"
                                className="mt-10 inline-flex h-12 items-center justify-center bg-[#A98743] px-10 text-[13px] font-semibold text-white"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Right cards */}
                        <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
                            {/* Card 1 */}
                            <div>
                                <div className="flex h-16 w-16 items-center justify-center bg-[#C5152A] text-white font-semibold text-xl leading-none">
                                    500
                                </div>
                                <h3 className="mt-5 text-[18px] font-semibold text-[#1F1F1F]">S&P 500</h3>
                                <p className="mt-3 text-[13.5px] leading-7 text-[#7B7B7B]">
                                    Trade the benchmark index tracking 500 of the largest U.S. companies across technology,
                                    finance, healthcare, and more.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div>
                                <div className="flex h-16 w-16 items-center justify-center bg-[#008DBA] text-white font-black text-2xl leading-none">
                                    N
                                </div>
                                <h3 className="mt-5 text-[18px] font-semibold text-[#1F1F1F]">NASDAQ 100</h3>
                                <p className="mt-3 text-[13.5px] leading-7 text-[#7B7B7B]">
                                    A technology-driven index known for volatility and momentum — ideal for active traders
                                    and short-term strategies.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div>
                                <div className="flex h-16 w-16 items-center justify-center bg-[#1B3E73] text-white font-semibold text-xl leading-none">
                                    225
                                </div>
                                <h3 className="mt-5 text-[18px] font-semibold text-[#1F1F1F]">Nikkei 225</h3>
                                <p className="mt-3 text-[13.5px] leading-7 text-[#7B7B7B]">
                                    Gain exposure to a global leader in software, cloud computing, and enterprise solutions.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div>
                                <div className="flex h-16 w-16 items-center justify-center bg-[#2C63B6] text-white font-black text-2xl leading-none">
                                    X
                                </div>
                                <h3 className="mt-5 text-[18px] font-semibold text-[#1F1F1F]">DAX 40</h3>
                                <p className="mt-3 text-[13.5px] leading-7 text-[#7B7B7B]">
                                    Germany’s flagship index, reflecting the strength of Europe’s largest economy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Trade Section ───────────────────────────── */}
            <section className="bg-[#EBEBEB] py-28 px-6">
                <div className="mx-auto max-w-6xl">

                    {/* Top Header */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
                        <div>
                            <p className="text-xs tracking-[0.25em] text-[#9E7C3E] uppercase mb-6">
                                WHAT SETS US APART
                            </p>

                            <h2 className="text-[46px] leading-[1.08] font-semibold text-[#2A1E1E]">
                                Why Trade Indices with <br />
                                Monexo Capital?
                            </h2>
                        </div>

                        <div className="flex items-start lg:justify-end">
                            <p className="text-[15px] leading-7 text-[#2A1E1E]/80 max-w-md">
                                Monexo Capital is built for traders who value performance,
                                transparency, and control.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20">

                        {/* 1 */}
                        <div>
                            <div className="text-[#9E7C3E] mb-6">
                                <RegulatedIcon />
                            </div>
                            <h4 className="text-[18px] font-semibold text-[#2A1E1E] mb-3">
                                Regulated & Trusted
                            </h4>
                            <p className="text-[14px] leading-7 text-[#2A1E1E]/70">
                                Operate with confidence under a fully regulated environment.
                            </p>
                        </div>

                        {/* 2 */}
                        <div>
                            <div className="text-[#9E7C3E] mb-6">
                                <ZeroCommissionIcon />
                            </div>
                            <h4 className="text-[18px] font-semibold text-[#2A1E1E] mb-3">
                                Zero Commission Trading
                            </h4>
                            <p className="text-[14px] leading-7 text-[#2A1E1E]/70">
                                No commissions on indices trades
                            </p>
                        </div>

                        {/* 3 */}
                        <div>
                            <div className="text-[#9E7C3E] mb-6">
                                <TradingPlatformIcon />
                            </div>
                            <h4 className="text-[18px] font-semibold text-[#2A1E1E] mb-3">
                                Advanced Trading Platform
                            </h4>
                            <p className="text-[14px] leading-7 text-[#2A1E1E]/70">
                                Trade on MetaTrader 5 with professional charting tools
                            </p>
                        </div>

                        {/* 4 */}
                        <div>
                            <div className="text-[#9E7C3E] mb-6">
                                <FastExecutionIcon />
                            </div>
                            <h4 className="text-[18px] font-semibold text-[#2A1E1E] mb-3">
                                Fast Market Execution
                            </h4>
                            <p className="text-[14px] leading-7 text-[#2A1E1E]/70">
                                Experience low-latency execution designed to perform
                            </p>
                        </div>

                        {/* 5 */}
                        <div>
                            <div className="text-[#9E7C3E] mb-6">
                                <FlexibleAccountIcon />
                            </div>
                            <h4 className="text-[18px] font-semibold text-[#2A1E1E] mb-3">
                                Flexible Account Types
                            </h4>
                            <p className="text-[14px] leading-7 text-[#2A1E1E]/70">
                                Choose from multiple account options
                            </p>
                        </div>

                        {/* 6 */}
                        <div>
                            <div className="text-[#9E7C3E] mb-6">
                                <GlobalMarketIcon />
                            </div>
                            <h4 className="text-[18px] font-semibold text-[#2A1E1E] mb-3">
                                Global Market Access
                            </h4>
                            <p className="text-[14px] leading-7 text-[#2A1E1E]/70">
                                Trade indices from anywhere in the world with secure funding options
                            </p>
                        </div>

                        {/* 7 */}
                        <div>
                            <div className="text-[#9E7C3E] mb-6">
                                <EducationIcon />
                            </div>
                            <h4 className="text-[18px] font-semibold text-[#2A1E1E] mb-3">
                                Education & Market Insights
                            </h4>
                            <p className="text-[14px] leading-7 text-[#2A1E1E]/70">
                                Stay informed with daily analysis and strategy resources.
                            </p>
                        </div>

                        {/* 8 */}
                        <div>
                            <div className="text-[#9E7C3E] mb-6">
                                <SupportIcon />
                            </div>
                            <h4 className="text-[18px] font-semibold text-[#2A1E1E] mb-3">
                                24/7 Client Support
                            </h4>
                            <p className="text-[14px] leading-7 text-[#2A1E1E]/70">
                                Dedicated multilingual support available around the clock
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── What Is Indices Trading / Benefits (Premium Motion) ───────── */}
            <section className="bg-white py-28 px-6">
                {/* Variants */}
                {/*
    Keep this section as-is. If you prefer, you can move these variants outside the component.
  */}
                <motion.div
                    className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-20 items-start"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
                    }}
                >
                    {/* Left Content */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
                            show: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                            },
                        }}
                    >
                        <p className="text-xs tracking-[0.25em] text-[#9E7C3E] uppercase mb-6">
                            BENEFITS OF TRADING INDICES
                        </p>

                        <h2 className="text-[46px] leading-[1.1] font-semibold text-[#9E7C3E] mb-8">
                            What Is Indices Trading?
                        </h2>

                        <p className="text-[15px] leading-8 text-[#2A1E1E]/80 max-w-lg mb-10">
                            Indices represent the performance of a group of stocks within a specific market
                            or sector. Instead of trading individual shares, indices trading allows you to
                            speculate on the overall direction of an economy or industry through a single
                            position.
                        </p>

                        <Link
                            href="/register"
                            className="inline-flex items-center justify-center bg-[#9E7C3E] px-10 py-3 text-sm font-medium text-white transition hover:opacity-90"
                        >
                            Get Started
                        </Link>
                    </motion.div>

                    {/* Right Cards */}
                    <motion.div
                        className="flex flex-col gap-10"
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } },
                        }}
                    >
                        {[
                            {
                                title: "Diversified Market Exposure",
                                desc: "Reduce single-stock risk by trading a basket of companies in one instrument.",
                            },
                            {
                                title: "Trade Market Sentiment",
                                desc: "Indices reflect economic data, investor confidence, and global events — ideal for both technical and fundamental analysis.",
                            },
                            {
                                title: "High Volatility, High Opportunity",
                                desc: "Major indices often react strongly to news, creating opportunities for scalpers, day traders, and swing traders.",
                            },
                            {
                                title: "Leverage & Liquidity",
                                desc: "Trade larger positions with lower capital using leverage, supported by deep institutional liquidity.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                className="bg-[#E9E2DB] p-10 will-change-transform"
                                variants={{
                                    hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(6px)" },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        filter: "blur(0px)",
                                        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                                    },
                                }}
                                whileHover={{ y: -6 }}
                                whileTap={{ scale: 0.99 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <h4 className="text-[22px] font-semibold text-[#9E7C3E] mb-4">
                                    {item.title}
                                </h4>
                                <p className="text-[15px] leading-7 text-[#2A1E1E]/80">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ── Steps Section ───────────────────────────────────────────── */}
            <section className="bg-white py-28 px-6">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* Card 1 */}
                        <div className="relative bg-black text-center px-10 pt-16 pb-10">
                            {/* Step Badge */}
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#9E7C3E] flex items-center justify-center text-black font-semibold">
                                1
                            </div>

                            <h3 className="text-[28px] font-semibold text-[#9E7C3E]">Register</h3>
                            <p className="mt-3 text-[14px] leading-7 text-white/70">
                                Complete the online application form.
                            </p>

                            <div className="mt-10 bg-black">
                                <img
                                    src="/images/indices/step-register.jpeg"
                                    alt="Register"
                                    className="w-full h-[260px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-black text-center px-10 pt-16 pb-10">
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#9E7C3E] flex items-center justify-center text-black font-semibold">
                                2
                            </div>

                            <h3 className="text-[28px] font-semibold text-[#9E7C3E]">Verify</h3>
                            <p className="mt-3 text-[14px] leading-7 text-white/70">
                                Upload the required documents to activate your account.
                            </p>

                            <div className="mt-10 bg-black">
                                <img
                                    src="/images/indices/step-verify.jpeg"
                                    alt="Verify"
                                    className="w-full h-[260px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-black text-center px-10 pt-16 pb-10">
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#9E7C3E] flex items-center justify-center text-black font-semibold">
                                3
                            </div>

                            <h3 className="text-[28px] font-semibold text-[#9E7C3E]">Fund and Trade</h3>
                            <p className="mt-3 text-[14px] leading-7 text-white/70">
                                Deposit funds and start trading global indices instantly.
                            </p>

                            <div className="mt-10 bg-black">
                                <img
                                    src="/images/indices/step-fund.jpeg"
                                    alt="Fund and Trade"
                                    className="w-full h-[260px] object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Trade With Confidence Section ───────────────────────────── */}
            <section className="bg-[#F5F2EF] py-32 px-6">
                <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-[48px] leading-[1.1] font-semibold text-[#2A1E1E] mb-8">
                            Trade with Confidence <br />
                            at Monexo Capital
                        </h2>

                        <p className="text-[16px] leading-8 text-[#2A1E1E]/80 mb-10 max-w-lg">
                            We combine regulation, technology, and service to create a trading
                            environment built around you.
                        </p>

                        <ul className="space-y-5">
                            {[
                                "Secure & regulated trading environment",
                                "Modern trading infrastructure",
                                "Dedicated trader support",
                                "Deep Market Access",
                                "Risk Management Controls",
                                "Seamless Account Management",
                                "Transparent Execution Policy",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-4">
                                    <span className="w-6 h-6 rounded-full bg-[#9E7C3E] flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </span>

                                    <span className="text-[15px] text-[#2A1E1E]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/images/indices/mobile-platform.png"
                            alt="Trading Platform"
                            className="max-w-[420px] w-full"
                        />
                    </div>

                </div>
            </section>

            {/* ── Bottom CTA Section ───────────────────────────────────────── */}
            <section className="relative h-[55vh] min-h-[460px] w-full overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/indices/cta-bg.jpg)" }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                    <div className="max-w-3xl">
                        <h2 className="text-[44px] sm:text-[56px] leading-[1.05] font-semibold text-white">
                            Elevate Your Trading <br />
                            Standards
                        </h2>

                        <p className="mt-6 text-[15px] leading-7 text-white/80">
                            Experience a professional ecosystem designed for performance-driven individuals.
                        </p>

                        <Link
                            href="/register"
                            className="mt-10 inline-flex items-center justify-center bg-[#9E7C3E] px-12 py-4 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}