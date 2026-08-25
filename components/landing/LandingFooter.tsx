import {
    Activity,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import Logo from "../common/logo";

export function LandingFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-slate-900/80 bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Main footer */}
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link
                            href="/"
                            className="inline-flex items-center transition-opacity hover:opacity-80"
                        >
                            <Logo className="h-8 w-8" textClassName="text-[24px]" />
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                            Production-grade logging and observability for modern
                            applications.
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-xs text-slate-600">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Systems operational
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
                        <Link
                            href="/docs"
                            className="text-slate-500 transition-colors hover:text-slate-200"
                        >
                            Documentation
                        </Link>

                        <Link
                            href="https://x.com/chefu_tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-200"
                        >
                            X
                            <ArrowUpRight className="h-3 w-3" />
                        </Link>

                        <Link
                            href="https://github.com/CHEFU-TECHNOLOGIES/Logix-Landing.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-200"
                        >
                            GitHub
                            <ArrowUpRight className="h-3 w-3" />
                        </Link>

                        <Link
                            href="/status"
                            className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-200"
                        >
                            Status
                            <Activity className="h-3.5 w-3.5" />
                        </Link>

                        <Link
                            href="https://chefu.co.za/contact?utm_source=logix_footer&utm_medium=referral&utm_campaign=footer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 transition-colors hover:text-slate-200"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-5 border-t border-slate-900 pt-7 text-[0.7rem] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                        <span>© {currentYear} CHEFU TECHNOLOGIES</span>

                        <span className="hidden text-slate-800 sm:block">•</span>

                        <span>Built for developers.</span>
                    </div>

                    <div className="flex items-center gap-5">
                        <Link
                            href="/privacy"
                            className="transition-colors hover:text-slate-400"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition-colors hover:text-slate-400"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}