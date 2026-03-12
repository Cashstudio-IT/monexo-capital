import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Register" };

export default function Register() {
    return (
        <section className="relative min-h-screen text-white">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/hero/markets-bg.jpg)" }}
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-24">
                <div className="w-full max-w-lg">
                    {/* Header */}
                    <div className="text-center">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#c5a24d]">
                            GET STARTED
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
                            Open Live Account
                        </h1>
                        <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                            Start trading global markets with Monexo Capital.
                            Fill in the details below to create your account.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="mt-10 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label className="text-xs font-semibold tracking-wide text-white/80">
                                    First Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    required
                                    className="mt-2 h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#a88643]"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold tracking-wide text-white/80">
                                    Last Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    required
                                    className="mt-2 h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#a88643]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-semibold tracking-wide text-white/80">
                                Email <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="mt-2 h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#a88643]"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-semibold tracking-wide text-white/80">
                                Phone <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                required
                                className="mt-2 h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#a88643]"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-semibold tracking-wide text-white/80">
                                Country <span className="text-red-400">*</span>
                            </label>
                            <select
                                required
                                className="mt-2 h-12 w-full appearance-none rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white/60 outline-none focus:border-[#a88643]"
                            >
                                <option value="" className="bg-[#1a1a1a]">Select your country</option>
                                <option value="AE" className="bg-[#1a1a1a]">United Arab Emirates</option>
                                <option value="GB" className="bg-[#1a1a1a]">United Kingdom</option>
                                <option value="US" className="bg-[#1a1a1a]">United States</option>
                                <option value="GE" className="bg-[#1a1a1a]">Georgia</option>
                                <option value="SA" className="bg-[#1a1a1a]">Saudi Arabia</option>
                                <option value="QA" className="bg-[#1a1a1a]">Qatar</option>
                                <option value="KW" className="bg-[#1a1a1a]">Kuwait</option>
                                <option value="BH" className="bg-[#1a1a1a]">Bahrain</option>
                                <option value="OM" className="bg-[#1a1a1a]">Oman</option>
                                <option value="EG" className="bg-[#1a1a1a]">Egypt</option>
                                <option value="JO" className="bg-[#1a1a1a]">Jordan</option>
                                <option value="LB" className="bg-[#1a1a1a]">Lebanon</option>
                                <option value="PK" className="bg-[#1a1a1a]">Pakistan</option>
                                <option value="IN" className="bg-[#1a1a1a]">India</option>
                                <option value="DE" className="bg-[#1a1a1a]">Germany</option>
                                <option value="FR" className="bg-[#1a1a1a]">France</option>
                                <option value="AU" className="bg-[#1a1a1a]">Australia</option>
                                <option value="CA" className="bg-[#1a1a1a]">Canada</option>
                                <option value="SG" className="bg-[#1a1a1a]">Singapore</option>
                                <option value="MY" className="bg-[#1a1a1a]">Malaysia</option>
                            </select>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label className="text-xs font-semibold tracking-wide text-white/80">
                                    Password <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    required
                                    className="mt-2 h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#a88643]"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold tracking-wide text-white/80">
                                    Confirm Password <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    required
                                    className="mt-2 h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#a88643]"
                                />
                            </div>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                            <input
                                type="checkbox"
                                required
                                className="mt-1 h-4 w-4 shrink-0 accent-[#a88643]"
                            />
                            <span className="text-xs leading-relaxed text-white/50">
                                I agree to the{" "}
                                <Link href="/terms" className="text-[#c5a24d] underline">
                                    Terms &amp; Conditions
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-[#c5a24d] underline">
                                    Privacy Policy
                                </Link>
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 inline-flex h-12 w-full items-center justify-center bg-[#a88643] text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Create Account
                        </button>

                        <p className="text-center text-sm text-white/50">
                            Already have an account?{" "}
                            <Link href="/login" className="font-semibold text-[#c5a24d] transition hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
