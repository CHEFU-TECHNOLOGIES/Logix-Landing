import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Overview & Fundamentals',
    description:
        'Learn how Logix delivers high-throughput telemetry ingestion, real-time live tailing via SSE, and zero-latency analytics using ClickHouse and NATS JetStream.',
};

export default function DocsOverviewPage() {
    return (
        <article className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300">
            <header className="space-y-3 font-sans">
                <div className="text-xs font-mono text-blue-500 font-semibold tracking-wider uppercase">
                    Getting Started
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    Overview & Fundamentals
                </h1>
                <p className="text-base text-neutral-400 font-normal leading-relaxed">
                    Logix is a production-grade observability platform engineered for sub-millisecond telemetry ingestion, automated alerting, and instant query execution across distributed microservices.
                </p>
            </header>

            <div className="p-4 bg-blue-950/30 border border-blue-800/60 rounded-lg text-blue-200 space-y-1">
                <span className="font-bold text-blue-400 font-sans block text-sm">Design Philosophy</span>
                <p>
                    Traditional logging tools impose high latency and CPU overhead by dispatching individual HTTP calls per log event. Logix uses client/server-side in-memory buffer pipelines combined with NATS JetStream backpressure management to safely stream millions of logs without slowing down user requests.
                </p>
            </div>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    Key Capabilities
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm">
                    <li className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg space-y-1">
                        <span className="font-bold text-white">⚡ Sub-50ms Ingestion Latency</span>
                        <p className="text-xs text-neutral-400 font-mono">
                            Buffered transport layer sends payloads in micro-batches to ClickHouse JSONEachRow tables.
                        </p>
                    </li>
                    <li className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg space-y-1">
                        <span className="font-bold text-white">📡 SSE Live Tail Streaming</span>
                        <p className="text-xs text-neutral-400 font-mono">
                            Stream events directly to frontend terminals using low-overhead Server-Sent Events.
                        </p>
                    </li>
                    <li className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg space-y-1">
                        <span className="font-bold text-white">🔔 Automated Webhook Engine</span>
                        <p className="text-xs text-neutral-400 font-mono">
                            Evaluate threshold alert conditions in real time and dispatch HMAC-SHA256 signed webhooks.
                        </p>
                    </li>
                    <li className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg space-y-1">
                        <span className="font-bold text-white">🛡️ Multi-Tenant Auth & Caching</span>
                        <p className="text-xs text-neutral-400 font-mono">
                            API key hashing via SHA-256 with Redis LRU caching for plan limits and quota guards.
                        </p>
                    </li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    Quick Start Example
                </h2>
                <p>
                    To start emitting logs from your Node.js or Next.js backend, install{' '}
                    <code className="text-blue-400 font-bold">@chefu-tech/logix-next</code> and create a global logger instance:
                </p>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
                    <code>{`import { createLogger } from '@chefu-tech/logix-next';

export const logger = createLogger({
  apiKey: process.env.LOGIX_API_KEY!,
  endpoint: 'https://api.chefu.co.za',
  batchSize: 10,       // Flush automatically when queue reaches 10 entries
  flushInterval: 2000, // Or flush every 2 seconds
});

// Emitting structured logs
logger.info('User authentication completed', { userId: 'usr_9981' });
logger.error('Payment processor timeout', { gateway: 'stripe', attempt: 3 });`}</code>
                </pre>
            </section>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 font-sans">
                <span className="text-neutral-500">Next Step</span>
                <Link
                    href="/docs/architecture"
                    className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                    System Architecture →
                </Link>
            </div>
        </article>
    );
}