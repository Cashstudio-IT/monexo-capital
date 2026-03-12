"use client";

import Link from "next/link";

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10 18h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
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

function SocialCircle({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/40 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white">
      {/* Top area */}
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <div className="text-xl font-semibold tracking-[0.22em]">MONEXO</div>

            <div className="mt-8 space-y-4 text-[14px] text-white/70">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#9E7C3E]">
                  <IconPhone className="h-5 w-5" />
                </span>
                <span>+44 800 086 8188</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#9E7C3E]">
                  <IconMail className="h-5 w-5" />
                </span>
                <span>info@monexocapital.com</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#9E7C3E]">
                  <IconPin className="h-5 w-5" />
                </span>
                <span>
                  Suite 19, 12 Alexander Kazbegi Ave, Tbilisi, Georgia
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <div className="text-sm font-semibold text-white">Markets</div>
            <ul className="mt-6 space-y-4 text-[14px] text-white/65">
              <li><Link className="hover:text-white" href="/indices">Indices</Link></li>
              <li><Link className="hover:text-white" href="/stocks">Stocks</Link></li>
              <li><Link className="hover:text-white" href="/commodities">Commodities</Link></li>
              <li><Link className="hover:text-white" href="/currencies">Currencies</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-6 space-y-4 text-[14px] text-white/65">
              <li><Link className="hover:text-white" href="/about">About Us</Link></li>
              <li><Link className="hover:text-white" href="/contact">Contacts</Link></li>
              <li><Link className="hover:text-white" href="/introducing-broker">Introducing Broker</Link></li>
              <li><Link className="hover:text-white" href="/download-platform">Download Platform</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <div className="text-sm font-semibold text-white">Get in Touch</div>
            <div className="mt-6 flex gap-3">
              {/* Replace hrefs with your real social links */}
              <SocialCircle label="Facebook" href="#">
                <span className="text-sm">f</span>
              </SocialCircle>
              <SocialCircle label="Instagram" href="#">
                <span className="text-sm">◎</span>
              </SocialCircle>
              <SocialCircle label="Website" href="#">
                <span className="text-sm">⌁</span>
              </SocialCircle>
              <SocialCircle label="X" href="#">
                <span className="text-sm">𝕏</span>
              </SocialCircle>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-white/15" />

        {/* Disclaimer */}
        <div className="py-10 text-[11.5px] leading-6 text-white/55">
          <p className="mb-3">
            <span className="font-semibold text-white/70">Risk Disclaimer:</span>{" "}
            Trading Contracts for Difference (CFDs) and over-the-counter (OTC) derivatives involves substantial risk.
            Because these products use leverage, your losses can grow quickly and may go beyond your initial deposit.
            You might also need to deposit additional funds to maintain your positions. These products may not suit all investors.
            Please make sure you fully understand how CFDs work and are comfortable with the level of risk.
            Past performance of any financial instrument is not a reliable indicator of future results.
            Monexo Capital or its affiliates, directors, officers, or employees or entities are not liable for any financial losses or damages resulting from your trading activity.
          </p>

          <p>
            <span className="font-semibold text-white/70">Trade Responsibly:</span>{" "}
            Trading CFDs is risky and may lead to permanent capital loss. Make sure you understand the risk before trading.{" "}
            <span className="font-semibold text-white/70">Restricted Regions:</span>{" "}
            Please note that our products and services are NOT available for residents or citizens of the US and Belgium, as well as for citizens or residents of embargoed or sanctioned countries.
            More specifically, this includes Cuba, Iraq, Myanmar, North Korea, Sudan, and any OFAC-sanctioned or FATF blacklisted countries.
            Information on this site is not intended for distribution to, or usage by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/15" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-8 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year}. All Rights Reserved.</div>
          <div>© <span className="font-semibold text-white/80">Monexo Capital Ltd.</span></div>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur transition hover:bg-white/20 hover:text-white"
      >
        ↑
      </button>
    </footer>
  );
}