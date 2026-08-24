"use client";

import React, { useState } from "react";
import {
    Package,
    MousePointerClick,
    Monitor,
    Sparkles,
    Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Install the package",
        description:
            "Add the SDK to your app with your favorite package manager.",
        icon: Package,
        code: `npm install @logix/next
# or
npm install @logix/express`,
        language: "bash",
    },
    {
        id: 2,
        title: "Initialize the logger",
        description: "Configure the logger with your API key.",
        icon: MousePointerClick,
        code: `import { createLogger } from "@logix/next";

export const log = createLogger({
  apiKey: process.env.LOGIX_API_KEY!,
  appName: process.env.LOGIX_APP_NAME!,
  environment: process.env.LOGIX_ENVIRONMENT || "development",
});`,
        language: "typescript",
    },
    {
        id: 3,
        title: "Send logs",
        description: "Log events from anywhere in your app.",
        icon: Monitor,
        code: `// Log success
await log.send("User logged in", {
  type: "success",
  email: session?.user?.email,
});

// Log info
await log.info("User reset password", {
  email: session?.user?.email,
});

// Log error
await log.error("Login failed", {
  email: session?.user?.email,
});`,
        language: "typescript",
    },
    {
        id: 4,
        title: "Done",
        description:
            "That's it. No config, no servers, no YAML. Just clear logs.",
        icon: Sparkles,
        code: `// Visit logix.chefu.co.za/dashboard/live-logs
// You'll see your events streaming live!
// Or broadcast live logs via our SDK inside your
// application dashboard`,
        language: "typescript",
    },
];

function highlightCode(line: string, language: string) {
    if (!line.trim()) {
        return <span>&nbsp;</span>;
    }

    // Comments
    if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
        return <span className="text-slate-500 italic">{line}</span>;
    }

    if (language === "bash") {
        const parts = line.split(/(\s+)/);

        return (
            <>
                {parts.map((part, index) => {
                    if (part.startsWith("@")) {
                        return (
                            <span key={index} className="text-cyan-300">
                                {part}
                            </span>
                        );
                    }

                    if (part === "npm") {
                        return (
                            <span key={index} className="text-pink-400 font-semibold">
                                {part}
                            </span>
                        );
                    }

                    if (part === "install") {
                        return (
                            <span key={index} className="text-yellow-300">
                                {part}
                            </span>
                        );
                    }

                    return <span key={index}>{part}</span>;
                })}
            </>
        );
    }

    const tokens = line.split(
        /(\b(?:import|from|export|const|await|return|new|true|false|null|undefined)\b|"[^"]*"|'[^']*'|`[^`]*`|\b[A-Z][A-Za-z0-9_]*\b|\b[a-zA-Z_$][\w$]*(?=\()|process\.env\.[A-Z_]+|\b[a-zA-Z_$][\w$]*(?=\s*:))/
    );

    return (
        <>
            {tokens.map((token, index) => {
                if (!token) return null;

                // Strings
                if (
                    (token.startsWith('"') && token.endsWith('"')) ||
                    (token.startsWith("'") && token.endsWith("'")) ||
                    (token.startsWith("`") && token.endsWith("`"))
                ) {
                    return (
                        <span key={index} className="text-emerald-400">
                            {token}
                        </span>
                    );
                }

                // Keywords
                if (
                    [
                        "import",
                        "from",
                        "export",
                        "const",
                        "await",
                        "return",
                        "new",
                        "true",
                        "false",
                        "null",
                        "undefined",
                    ].includes(token)
                ) {
                    return (
                        <span key={index} className="text-purple-400 font-medium">
                            {token}
                        </span>
                    );
                }

                // Environment variables
                if (token.startsWith("process.env.")) {
                    return (
                        <span key={index} className="text-orange-300">
                            {token}
                        </span>
                    );
                }

                // Function calls
                if (/^[a-zA-Z_$][\w$]*$/.test(token)) {
                    const nextToken = tokens[index + 1];

                    if (nextToken === "(") {
                        return (
                            <span key={index} className="text-yellow-300">
                                {token}
                            </span>
                        );
                    }
                }

                // Properties
                if (
                    /^[a-zA-Z_$][\w$]*$/.test(token) &&
                    tokens[index + 1]?.includes(":")
                ) {
                    return (
                        <span key={index} className="text-sky-300">
                            {token}
                        </span>
                    );
                }

                // React / TypeScript types / constructors
                if (/^[A-Z][A-Za-z0-9_]*$/.test(token)) {
                    return (
                        <span key={index} className="text-cyan-300">
                            {token}
                        </span>
                    );
                }

                return (
                    <span key={index} className="text-slate-300">
                        {token}
                    </span>
                );
            })}
        </>
    );
}

export function LandingSetup() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section
            className="border-b border-slate-900/80 bg-slate-950/60"
            id="integrations"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
                        Set up in under a minute.
                    </h2>

                    <p className="mt-4 text-base text-slate-400">
                        You don&apos;t need to learn a new system. Just drop in the SDK and
                        start seeing logs immediately.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Steps */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={`group relative flex gap-5 p-5 rounded-xl transition-all duration-300 cursor-pointer border ${activeStep === index
                                        ? "bg-slate-900/50 border-sky-500/30 shadow-[0_0_20px_-5px_rgba(14,165,233,0.15)]"
                                        : "bg-transparent border-transparent hover:bg-slate-900/30 hover:border-slate-800"
                                    }`}
                            >
                                <div
                                    className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center border transition-colors duration-300 ${activeStep === index
                                            ? "bg-sky-500/10 border-sky-500/50 text-sky-400"
                                            : "bg-slate-900 border-slate-800 text-slate-500 group-hover:border-slate-700 group-hover:text-slate-400"
                                        }`}
                                >
                                    <step.icon className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3
                                        className={`text-lg font-semibold transition-colors duration-300 ${activeStep === index
                                                ? "text-sky-400"
                                                : "text-slate-200 group-hover:text-slate-100"
                                            }`}
                                    >
                                        {step.title}
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Terminal */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-linear-to-r from-sky-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-50" />

                        <div className="relative rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                                </div>

                                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                                    <Terminal className="h-3 w-3" />
                                    {steps[activeStep].language}
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 min-h-75 flex items-center bg-slate-950">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-full"
                                    >
                                        <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                                            <code className="block">
                                                {steps[activeStep].code.split("\n").map((line, i) => (
                                                    <div key={i} className="flex min-h-6">
                                                        <span className="text-slate-700 select-none mr-4 w-6 shrink-0 text-right">
                                                            {i + 1}
                                                        </span>

                                                        <span className="whitespace-pre">
                                                            {highlightCode(
                                                                line,
                                                                steps[activeStep].language
                                                            )}
                                                        </span>
                                                    </div>
                                                ))}
                                            </code>
                                        </pre>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}