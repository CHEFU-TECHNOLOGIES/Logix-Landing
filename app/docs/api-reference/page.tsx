import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'REST & SSE API Specification',
    description:
        'Complete HTTP API specification for Logix: /logs/send, /logs/stream, /billing, /alerts, and /api-keys.',
};

export default function DocsApiReferencePage() {
    return (
        <article className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300">
            <header className="space-y-3 font-sans">
                <div className="text-xs font-mono text-blue-500 font-semibold tracking-wider uppercase">
                    API Specification
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    REST & SSE API Reference
                </h1>
                <p className="text-base text-neutral-400 font-normal leading-relaxed">
                    Direct HTTP endpoints for custom integrations in non-Node environments (Python, Go, Rust, cURL).
                </p>
            </header>

            {/* Endpoint: /logs/send */}
            <section className="space-y-3 border border-neutral-800 bg-neutral-900/50 p-4 rounded-lg">
                <div className="flex items-center gap-3 font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                        POST
                    </span>
                    <code className="text-sm text-white font-bold">/logs/send</code>
                </div>
                <p className="text-neutral-400">Ingest a batch of structured log records.</p>
                <div className="text-neutral-500 font-bold pt-2">Headers:</div>
                <pre className="p-2 bg-neutral-950 rounded border border-neutral-800 text-neutral-300">
                    x-api-key: your_logix_api_key
                    Content-Type: application/json
                </pre>
            </section>

            {/* Endpoint: /logs/stream */}
            <section className="space-y-3 border border-neutral-800 bg-neutral-900/50 p-4 rounded-lg">
                <div className="flex items-center gap-3 font-mono">
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800 font-bold">
                        GET (SSE)
                    </span>
                    <code className="text-sm text-white font-bold">/logs/stream</code>
                </div>
                <p className="text-neutral-400">Subscribe to live tailing Server-Sent Events stream.</p>
                <div className="text-neutral-500 font-bold pt-2">Headers:</div>
                <pre className="p-2 bg-neutral-950 rounded border border-neutral-800 text-neutral-300">
                    x-api-key: your_logix_api_key
                    Accept: text/event-stream
                </pre>
            </section>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 font-sans">
                <Link href="/docs/webhooks" className="text-neutral-400 hover:text-white font-semibold">
                    ← Webhooks Engine
                </Link>
                <Link href="/docs" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Return to Overview ↑
                </Link>
            </div>
        </article>
    );
}