"use client";

import Link from "next/link";
import Logo from "../common/logo";

export function LandingHeader() {
    return (
        <header className="w-full border-b border-slate-900/80 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
            <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 py-3 px-4 sm:px-6 lg:px-8">
                <Link href="/#" className="flex items-center gap-1">
                    <Logo />
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-base text-slate-400">
                    <Link
                        href="#story"
                        className="hover:text-slate-50 transition-colors"
                    >
                        Why us?
                    </Link>

                    <Link
                        href="#features"
                        className="hover:text-slate-50 transition-colors"
                    >
                        Features
                    </Link>

                    <Link
                        href="#integrations"
                        className="hover:text-slate-50 transition-colors"
                    >
                        Integrations
                    </Link>

                    <Link
                        href="#pricing"
                        className="hover:text-slate-50 transition-colors"
                    >
                        Pricing
                    </Link>

                    <Link
                        href="/#"
                        className="hover:text-slate-50 transition-colors"
                    >
                        Docs
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="https://dashboard.logix.chefu.co.za"
                        className="inline-flex cursor-pointer items-center rounded-sm bg-sky-500/90 px-3.5 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-sm hover:bg-sky-400 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}