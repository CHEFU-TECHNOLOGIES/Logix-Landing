import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Webhooks Engine & HMAC Verification',
    description:
        'Configure automated threshold alert rules and verify HMAC-SHA256 signature payloads delivered to your endpoints.',
};

export default function DocsWebhooksPage() {
    return (
        <article className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300">
            <header className="space-y-3 font-sans">
                <div className="text-xs font-mono text-blue-500 font-semibold tracking-wider uppercase">
                    Alerting & Security
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    Webhooks & HMAC Verification
                </h1>
                <p className="text-base text-neutral-400 font-normal leading-relaxed">
                    Logix continuously evaluates threshold rules. When conditions trigger, payload events are signed using HMAC-SHA256 and POSTed to your webhook URL.
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    Webhook Verification Route
                </h2>
                <p>
                    Verify the signature using <code className="text-blue-400">logger.verifyWebhook()</code> to confirm the payload originated from Logix:
                </p>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
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
    return NextResponse.json({ error: \`Invalid signature: \${error}\` }, { status: 401 });
  }

  // Handle verified alert event
  console.log('Verified Logix Alert:', body);
  return NextResponse.json({ received: true });
}`}</code>
                </pre>
            </section>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 font-sans">
                <Link href="/docs/react-hooks" className="text-neutral-400 hover:text-white font-semibold">
                    ← React Hooks Reference
                </Link>
                <Link href="/docs/api-reference" className="text-blue-400 hover:text-blue-300 font-semibold">
                    REST & SSE API Specification →
                </Link>
            </div>
        </article>
    );
}