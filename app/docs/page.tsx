import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Logix Documentation | High-Performance Monitoring & Real-Time Logging SDK',
    description:
        'Complete documentation for Logix (@chefu-tech/logix-next). Learn how to set up real-time logging pipelines, live tail streaming, automated webhooks, and ClickHouse historical query ingestion in Next.js, NestJS, and Node.js.',
    keywords: [
        'Logix documentation',
        'Logix Next.js SDK',
        '@chefu-tech/logix-next',
        'structured logging',
        'real-time monitoring',
        'observability SaaS',
        'ClickHouse logging',
        'webhook verification',
    ],
    openGraph: {
        title: 'Logix Documentation | Production Monitoring SaaS',
        description:
            'Set up your structured logging pipeline and real-time live tail monitoring in under 1 minute with @chefu-tech/logix-next.',
        url: 'https://logix.chefu.co.za/docs',
        type: 'website',
    },
};

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight text-white font-mono">
                                Logix<span className="text-blue-500">.</span>
                            </span>
                        </Link>
                        <span className="text-xs px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono">
                            v1.0.2
                        </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                        <Link
                            href="/api-keys"
                            className="text-neutral-400 hover:text-white transition-colors"
                        >
                            API Keys
                        </Link>
                        <Link
                            href="/settings"
                            className="text-neutral-400 hover:text-white transition-colors"
                        >
                            Billing
                        </Link>
                        <Link
                            href="/live-logs"
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors"
                        >
                            Live Terminal →
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Documentation Container */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Static Sidebar Navigation (Server-Rendered HTML Links) */}
                <aside className="lg:col-span-1 space-y-6">
                    <nav className="sticky top-24 space-y-6 text-sm font-mono text-neutral-400">
                        <div>
                            <h3 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2">
                                Getting Started
                            </h3>
                            <ul className="space-y-1.5 border-l border-neutral-800 pl-3">
                                <li>
                                    <a href="#overview" className="hover:text-blue-400 block">
                                        Overview & Architecture
                                    </a>
                                </li>
                                <li>
                                    <a href="#quickstart" className="hover:text-blue-400 block">
                                        Quick Start (Under 1 Min)
                                    </a>
                                </li>
                                <li>
                                    <a href="#installation" className="hover:text-blue-400 block">
                                        SDK Installation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2">
                                Core Telemetry Schema
                            </h3>
                            <ul className="space-y-1.5 border-l border-neutral-800 pl-3">
                                <li>
                                    <a href="#levels" className="hover:text-blue-400 block">
                                        Log Levels & Importance
                                    </a>
                                </li>
                                <li>
                                    <a href="#schema" className="hover:text-blue-400 block">
                                        Structured Payload Options
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2">
                                Next.js Integration
                            </h3>
                            <ul className="space-y-1.5 border-l border-neutral-800 pl-3">
                                <li>
                                    <a href="#proxy-route" className="hover:text-blue-400 block">
                                        App Router Proxy Setup
                                    </a>
                                </li>
                                <li>
                                    <a href="#server-actions" className="hover:text-blue-400 block">
                                        Server Components & Actions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2">
                                React Client Hooks
                            </h3>
                            <ul className="space-y-1.5 border-l border-neutral-800 pl-3">
                                <li>
                                    <a href="#getstream" className="hover:text-blue-400 block">
                                        getStream (Live Tail)
                                    </a>
                                </li>
                                <li>
                                    <a href="#getlogs" className="hover:text-blue-400 block">
                                        getLogs (Analytics Search)
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2">
                                Alerting & Security
                            </h3>
                            <ul className="space-y-1.5 border-l border-neutral-800 pl-3">
                                <li>
                                    <a href="#webhooks" className="hover:text-blue-400 block">
                                        Webhook Verification
                                    </a>
                                </li>
                                <li>
                                    <a href="#security" className="hover:text-blue-400 block">
                                        API Keys & Directives
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </aside>

                {/* Documentation Content Area */}
                <main className="lg:col-span-3 space-y-12">
                    {/* Section: Overview */}
                    <section id="overview" className="scroll-mt-24 space-y-4">
                        <h1 className="text-3xl font-extrabold text-white tracking-tight">
                            Logix Documentation
                        </h1>
                        <p className="text-base text-neutral-300 leading-relaxed">
                            Logix is a production-ready monitoring SaaS platform powered by{' '}
                            <strong className="text-white">ClickHouse analytics engine</strong>,{' '}
                            <strong className="text-white">NATS JetStream message queues</strong>, and{' '}
                            <strong className="text-white">Server-Sent Events (SSE)</strong>. It allows software teams to ingest thousands of structured logs per second, stream live production tail logs, execute instant historical searches, and dispatch automated alerting webhooks.
                        </p>
                        <div className="p-4 bg-blue-950/40 border border-blue-800/60 rounded-lg text-sm text-blue-200">
                            <span className="font-bold text-blue-400">Goal:</span> Know exactly what broke in production in under one minute without maintaining complex infrastructure.
                        </div>
                    </section>

                    {/* Section: Installation */}
                    <section id="installation" className="scroll-mt-24 space-y-4">
                        <h2 className="text-2xl font-bold text-white border-b border-neutral-800 pb-2">
                            SDK Installation
                        </h2>
                        <p className="text-sm text-neutral-300">
                            Install the official Logix Next.js/React SDK from the public npm registry:
                        </p>

                        <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono text-emerald-400 overflow-x-auto">
                            <code>npm install @chefu-tech/logix-next</code>
                        </pre>
                    </section>

                    {/* Section: Quick Start */}
                    <section id="quickstart" className="scroll-mt-24 space-y-4">
                        <h2 className="text-2xl font-bold text-white border-b border-neutral-800 pb-2">
                            Quick Start (Under 1 Minute)
                        </h2>
                        <p className="text-sm text-neutral-300">
                            Initialize a shared logger singleton instance. Logix includes an automatic in-memory transport buffer that batches telemetry requests to minimize network latency.
                        </p>

                        <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-200 overflow-x-auto">
                            <code>{`// lib/logger.ts
import { createLogger } from '@chefu-tech/logix-next';

export const logger = createLogger({
  apiKey: process.env.NEXT_PUBLIC_LOGIX_API_KEY!,
  endpoint: process.env.NEXT_PUBLIC_LOGIX_SERVER_URI || 'https://logix.chefu.co.za/api',
  batchSize: 10,       // Automatically flushes when buffer hits 10 events
  flushInterval: 2000, // Or flushes every 2000ms
});`}</code>
                        </pre>
                    </section>

                    {/* Section: Telemetry Schema */}
                    <section id="levels" className="scroll-mt-24 space-y-4">
                        <h2 className="text-2xl font-bold text-white border-b border-neutral-800 pb-2">
                            Structured Log Levels & Importance
                        </h2>
                        <p className="text-sm text-neutral-300">
                            Logix normalizes log records into structured events. Importance levels map directly to integer severities inside ClickHouse.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs font-mono border border-neutral-800 rounded-lg">
                                <thead className="bg-neutral-900 text-neutral-300 uppercase">
                                    <tr>
                                        <th className="p-3 border-b border-neutral-800">Type / Level</th>
                                        <th className="p-3 border-b border-neutral-800">Importance Value</th>
                                        <th className="p-3 border-b border-neutral-800">Description & Use Cases</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800 text-neutral-400">
                                    <tr>
                                        <td className="p-3 text-red-400 font-bold">critical / fatal</td>
                                        <td className="p-3">4</td>
                                        <td className="p-3">System crashes, unhandled DB errors, infrastructure outages.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-amber-400 font-bold">error / high</td>
                                        <td className="p-3">3</td>
                                        <td className="p-3">API errors, failed third-party requests, payment issues.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-yellow-400 font-bold">warning / medium</td>
                                        <td className="p-3">2</td>
                                        <td className="p-3">Degraded rate limits, deprecated routes, soft failures.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-blue-400 font-bold">info / low</td>
                                        <td className="p-3">1</td>
                                        <td className="p-3">Standard operational events, user logins, feature flag checks.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-purple-400 font-bold">audit / debug</td>
                                        <td className="p-3">0 - 1</td>
                                        <td className="p-3">Security tracking, state payload dumps, verbose traces.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section: Next.js Proxy Route */}
                    <section id="proxy-route" className="scroll-mt-24 space-y-4">
                        <h2 className="text-2xl font-bold text-white border-b border-neutral-800 pb-2">
                            Next.js API Proxy Setup (App Router)
                        </h2>
                        <p className="text-sm text-neutral-300">
                            To prevent exposing your master Logix API key on the client side, create a Next.js App Router proxy endpoint at <code className="text-blue-400">/app/api/logix/[types]/route.ts</code>:
                        </p>

                        <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-200 overflow-x-auto">
                            <code>{`// app/api/logix/[types]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { types: string } }
) {
  const apiKey = process.env.ONE_MINUTE_LOGIX_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Logix API key unconfigured' }, { status: 500 });
  }

  const targetType = params.types; // 'logs' or 'stream'
  const searchParams = req.nextUrl.searchParams.toString();
  const backendUrl = \`\${process.env.NEXT_PUBLIC_LOGIX_SERVER_URI}/logs\${
    targetType === 'stream' ? '/stream' : ''
  }?\${searchParams}\`;

  const response = await fetch(backendUrl, {
    headers: { 'x-api-key': apiKey },
    cache: 'no-store',
  });

  return new NextResponse(response.body, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'application/json',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}`}</code>
                        </pre>
                    </section>

                    {/* Section: getStream Hook */}
                    <section id="getstream" className="scroll-mt-24 space-y-4">
                        <h2 className="text-2xl font-bold text-white border-b border-neutral-800 pb-2">
                            React Hook: getStream (Live Tail)
                        </h2>
                        <p className="text-sm text-neutral-300">
                            The <code className="text-blue-400">getStream</code> hook connects to Logix using Server-Sent Events (SSE). It includes auto-reconnection and a circular buffer limit of 5,000 logs to prevent memory leaks.
                        </p>

                        <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-200 overflow-x-auto">
                            <code>{`'use client';

import { getStream } from '@chefu-tech/logix-next';

export default function LiveLogsTerminal() {
  const { data: logs, connected, isLoading } = getStream({
    type: 'error',
    search: 'checkout',
  });

  return (
    <div className="font-mono bg-black text-xs text-neutral-200 p-4 rounded">
      <div>Status: {connected ? '🟢 LIVE STREAMING' : '🔴 DISCONNECTED'}</div>
      {isLoading ? (
        <p>Connecting to tail stream...</p>
      ) : (
        logs.map((log) => (
          <div key={log.id}>
            [{log.ts}] {log.level.toUpperCase()} [{log.source}]: {log.message}
          </div>
        ))
      )}
    </div>
  );
}`}</code>
                        </pre>
                    </section>

                    {/* Section: getLogs Hook */}
                    <section id="getlogs" className="scroll-mt-24 space-y-4">
                        <h2 className="text-2xl font-bold text-white border-b border-neutral-800 pb-2">
                            React Hook: getLogs (Analytics Search)
                        </h2>
                        <p className="text-sm text-neutral-300">
                            The <code className="text-blue-400">getLogs</code> hook queries historical records from ClickHouse. It features request deduplication (preventing double mounts in React Strict Mode).
                        </p>

                        <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-200 overflow-x-auto">
                            <code>{`'use client';

import { getLogs } from '@chefu-tech/logix-next';

export default function HistoricalQueryPage() {
  const { data: logs, isLoading, refetch } = getLogs({
    search: 'payment_failed',
    type: 'error',
    env: 'production',
    limit: 100,
  });

  if (isLoading) return <p>Querying ClickHouse database...</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh Query</button>
      <ul>
        {logs?.map((log: any, idx: number) => (
          <li key={idx}>{log.message} - {new Date(log.timestamp * 1000).toISOString()}</li>
        ))}
      </ul>
    </div>
  );
}`}</code>
                        </pre>
                    </section>

                    {/* Section: Webhook Verification */}
                    <section id="webhooks" className="scroll-mt-24 space-y-4">
                        <h2 className="text-2xl font-bold text-white border-b border-neutral-800 pb-2">
                            Webhook Signature Verification
                        </h2>
                        <p className="text-sm text-neutral-300">
                            Verify signatures on incoming webhook alerts sent from the Logix alerting engine to ensure payloads originate from your Logix server instance:
                        </p>

                        <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-200 overflow-x-auto">
                            <code>{`// app/api/webhooks/logix-alerts/route.ts
import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export async function POST(req: Request) {
  const body = await req.json();
  const signature = req.headers.get('x-signature') || '';
  const timestamp = req.headers.get('x-timestamp') || '';

  const { valid, error } = await logger.verifyWebhook({
    signature,
    timestamp,
    body,
  });

  if (!valid) {
    return NextResponse.json({ error: \`Unauthorized webhook: \${error}\` }, { status: 401 });
  }

  // Handle verified alert event
  return NextResponse.json({ success: true }, { status: 200 });
}`}</code>
                        </pre>
                    </section>

                    {/* Footer inside Documentation */}
                    <footer className="pt-8 border-t border-neutral-800 text-xs text-neutral-500 font-mono flex items-center justify-between">
                        <div>
                            Documentation maintained by{' '}
                            <a
                                href="https://chefu.co.za"
                                target="_blank"
                                rel="noreferrer"
                                className="text-neutral-300 underline"
                            >
                                CHEFU Technologies
                            </a>
                        </div>
                        <div>Distributed under the MIT License.</div>
                    </footer>
                </main>
            </div>
        </div>
    );
}