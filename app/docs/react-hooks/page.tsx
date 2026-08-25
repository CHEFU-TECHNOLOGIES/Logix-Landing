import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'React Client Hooks Reference (getStream & getLogs)',
    description:
        'Documentation for @chefu-tech/logix-next client hooks: getStream for real-time SSE live tailing and getLogs for ClickHouse analytics queries.',
};

export default function DocsReactHooksPage() {
    return (
        <article className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300">
            <header className="space-y-3 font-sans">
                <div className="text-xs font-mono text-blue-500 font-semibold tracking-wider uppercase">
                    Client Hooks
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    React Client Hooks Reference
                </h1>
                <p className="text-base text-neutral-400 font-normal leading-relaxed">
                    Logix includes React client hooks for live SSE log streaming and historical query fetching.
                </p>
            </header>

            {/* getStream Section */}
            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    1. getStream(filters?)
                </h2>
                <p>
                    Establishes a persistent SSE stream to display incoming tail logs in real time. It features automatic reconnection and caps memory buffer at 5,000 logs.
                </p>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
                    <code>{`'use client';

import { getStream } from '@chefu-tech/logix-next';

export default function TerminalStream() {
  const { data: logs, connected, isLoading, disconnect } = getStream({
    type: 'error',
    search: 'auth_failed',
  });

  return (
    <div>
      <div>Status: {connected ? 'LIVE' : 'DISCONNECTED'}</div>
      {logs.map((log) => (
        <div key={log.id}>[{log.ts}] {log.level}: {log.message}</div>
      ))}
    </div>
  );
}`}</code>
                </pre>
            </section>

            {/* getLogs Section */}
            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    2. getLogs(filters?)
                </h2>
                <p>
                    Executes analytical queries against ClickHouse. Includes built-in request deduplication to handle React 18 Strict Mode double mounts.
                </p>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
                    <code>{`'use client';

import { getLogs } from '@chefu-tech/logix-next';

export default function HistoricalQueryComponent() {
  const { data: logs, isLoading, refetch } = getLogs({
    search: 'checkout',
    appName: 'web-storefront',
    limit: 50,
  });

  if (isLoading) return <div>Querying ClickHouse database...</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh Data</button>
      {logs?.map((log: any, idx: number) => (
        <div key={idx}>{log.message}</div>
      ))}
    </div>
  );
}`}</code>
                </pre>
            </section>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 font-sans">
                <Link href="/docs/nextjs-guide" className="text-neutral-400 hover:text-white font-semibold">
                    ← Next.js Integration Guide
                </Link>
                <Link href="/docs/webhooks" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Webhooks & Verification →
                </Link>
            </div>
        </article>
    );
}