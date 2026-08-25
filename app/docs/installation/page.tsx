import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Installation & Setup Guide',
    description:
        'Install and configure @chefu-tech/logix-next across Next.js, React, Express, and NestJS applications.',
};

export default function DocsInstallationPage() {
    return (
        <article className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300">
            <header className="space-y-3 font-sans">
                <div className="text-xs font-mono text-blue-500 font-semibold tracking-wider uppercase">
                    Setup
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    Installation & Setup
                </h1>
                <p className="text-base text-neutral-400 font-normal leading-relaxed">
                    Install the SDK package and configure environment variables across your client and server runtimes.
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    1. Install Package
                </h2>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-emerald-400 overflow-x-auto">
                    <code>{`# npm
npm install @chefu-tech/logix-next

# pnpm
pnpm add @chefu-tech/logix-next

# yarn
yarn add @chefu-tech/logix-next`}</code>
                </pre>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    2. Environment Variables (.env.local)
                </h2>
                <p>
                    Obtain your API Key from the Logix Dashboard under <strong>API Keys</strong> and add the following secrets:
                </p>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
                    <code>{`# Master API Key for Server Ingestion & Proxies
LOGIX_API_KEY="chf_a89f4129b048_..."

# Next.js Public Server Endpoint
NEXT_PUBLIC_LOGIX_SERVER_URI="https://api.chefu.co.za"`}</code>
                </pre>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    3. Singleton Initialization
                </h2>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
                    <code>{`// lib/logger.ts
import { createLogger } from '@chefu-tech/logix-next';

export const logger = createLogger({
  apiKey: process.env.LOGIX_API_KEY!,
  endpoint: process.env.NEXT_PUBLIC_LOGIX_SERVER_URI,
  batchSize: 10,
  flushInterval: 2000,
});`}</code>
                </pre>
            </section>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 font-sans">
                <Link href="/docs/architecture" className="text-neutral-400 hover:text-white font-semibold">
                    ← System Architecture
                </Link>
                <Link href="/docs/telemetry-schema" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Telemetry Schema →
                </Link>
            </div>
        </article>
    );
}