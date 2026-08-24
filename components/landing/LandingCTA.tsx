"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function LandingCTA() {
    return (
        <section className="relative overflow-hidden border-b border-slate-900/80 py-24 sm:py-32">
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        maskImage:
                            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-sm"
                >
                    <Terminal className="h-3.5 w-3.5 text-sky-400" />
                    Built for developers
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
                >
                    Ship with confidence.
                    <br />
                    <span className="bg-linear-to-r from-sky-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Know what&apos;s happening.
                    </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
                >
                    Capture logs, errors, and application events in real time.
                    Integrate Logix in minutes and spend less time debugging
                    production issues.
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
                >
                    <Link
                        href="https://dashboard.logix.chefu.co.za"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold tracking-tight text-slate-950 shadow-[0_0_25px_-8px_rgba(14,165,233,0.7)] transition-all duration-200 hover:bg-sky-400 hover:shadow-[0_0_30px_-6px_rgba(14,165,233,0.8)] sm:w-auto"
                    >
                        Get Started
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>

                    <Link
                        href="/docs"
                        target="_blank"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-800 bg-slate-950/70 px-6 py-3 text-sm font-medium tracking-tight text-slate-200 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white sm:w-auto"
                    >
                        <BookOpen className="h-4 w-4 text-slate-400 transition-colors group-hover:text-sky-400" />
                        Read the docs
                    </Link>
                </motion.div>

                {/* Technical reassurance */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-600"
                >
                    <span>Easy integration</span>
                    <span className="hidden sm:inline text-slate-800">•</span>
                    <span>Real-time logs</span>
                    <span className="hidden sm:inline text-slate-800">•</span>
                    <span>Built for production</span>
                </motion.div>
            </div>
        </section>
    );
}