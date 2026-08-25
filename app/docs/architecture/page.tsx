import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'System Architecture & Telemetry Lifecycle',
    description:
        'Deep dive into the Logix backend architecture: NATS JetStream queues, ClickHouse analytics storage, Redis LRU caching, and SSE real-time log distribution.',
};

export default function DocsArchitecturePage() {
    return (
        <article className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300">
            <header className="space-y-3 font-sans">
                <div className="text-xs font-mono text-blue-500 font-semibold tracking-wider uppercase">
                    Architecture & Deep Dive
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    System Architecture
                </h1>
                <p className="text-base text-neutral-400 font-normal leading-relaxed">
                    Logix uses an event-driven micro-architecture capable of ingesting high-throughput log streams, persisting them to column-oriented storage, and fanning out real-time streams.
                </p>
            </header>

            {/* Crawlable Text-Based Architecture Flowchart */}
            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    End-to-End Event Pipeline
                </h2>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 leading-snug overflow-x-auto">
                    <code>{`┌──────────────────────────────────────────────────────────────────┐
│              Application Layer (Next.js / Node.js)              │
│       logger.info()  /  logger.error()  /  logger.log()          │
└────────────────────────────────┬─────────────────────────────────┘
                                 │ HTTP POST /logs/send (Batch JSON)
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│                    Logix Ingestion Gateway                       │
│  - Dual Auth Guard (Clerk JWT / API Key SHA-256 Hashing)         │
│  - Plan Usage & Quota Verification Guard (Redis LRU Cache)       │
└────────────────────────────────┬─────────────────────────────────┘
                                 │ Publish to Subject: "logs.ingest"
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│                 NATS JetStream (Stream: OML_LOGS)                │
│             Worker Durable Push Queue: OML_LOGS_WORKER            │
└────────────────────────────────┬─────────────────────────────────┘
                                 │ Process Transformed Batch
                                 ▼
┌────────────────────────────────┼─────────────────────────────────┐
│                                │                                 │
│  1. Columnar Persistence       │  2. Real-Time Broadcaster       │  3. Rule Engine
│     ClickHouse Storage         │     SSE Client Registry         │     Alert Consumer
│     Table: logs.log_events     │     data: { type: "live" }      │     Webhook Worker
│                                │                                 │
└────────────────────────────────┴─────────────────────────────────┘`}</code>
                </pre>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    Core Infrastructure Components
                </h2>

                <div className="space-y-4">
                    <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg space-y-2">
                        <h3 className="font-bold text-white font-sans text-sm">1. NATS JetStream (Message Broker)</h3>
                        <p>
                            Acts as the shock absorber for incoming logs. When your application experiences sudden traffic spikes, logs are safely buffered inside the <code className="text-blue-400">OML_LOGS</code> JetStream stream instead of crashing database workers.
                        </p>
                    </div>

                    <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg space-y-2">
                        <h3 className="font-bold text-white font-sans text-sm">2. ClickHouse Database Engine</h3>
                        <p>
                            Logs are stored in a columnar schema optimized for time-series aggregation. ClickHouse allows querying millions of events with full-text search and environment filtering in under 100 milliseconds.
                        </p>
                    </div>

                    <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg space-y-2">
                        <h3 className="font-bold text-white font-sans text-sm">3. SSE Broadcaster Registry</h3>
                        <p>
                            Maintains active HTTP response streams (`EventSource`). As NATS consumers process incoming log batches, matching logs are filtered dynamically and streamed to connected live tail viewers.
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 font-sans">
                <Link href="/docs" className="text-neutral-400 hover:text-white font-semibold">
                    ← Overview & Fundamentals
                </Link>
                <Link href="/docs/installation" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Installation & Setup →
                </Link>
            </div>
        </article>
    );
}