import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Next.js App Router & Server Actions Guide',
    description:
        'Integrate Logix with Next.js App Router proxy endpoints, Server Actions, Server Components, and Middleware.',
};

export default function DocsNextJsGuidePage() {
    return (
        <article className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300">
            <header className="space-y-3 font-sans">
                <div className="text-xs font-mono text-blue-500 font-semibold tracking-wider uppercase">
                    Framework Integration
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    Next.js Integration Guide
                </h1>
                <p className="text-base text-neutral-400 font-normal leading-relaxed">
                    Learn how to proxy client requests securely and emit logs inside Next.js Server Components and Server Actions.
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    1. Next.js Client Proxy Route
                </h2>
                <p>
                    To prevent exposing your master API key in client browsers, create a catch-all proxy route under <code className="text-blue-400">app/api/1minute-logs/[types]/route.ts</code>:
                </p>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
                    <code>{`// app/api/1minute-logs/[types]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { types: string } }
) {
  const { getToken } = auth();
  const token = await getToken();

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.LOGIX_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key unconfigured' }, { status: 500 });
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

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    2. Logging inside Next.js Server Actions
                </h2>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
                    <code>{`'use server';

import { logger } from '@/lib/logger';

export async function processPaymentAction(formData: FormData) {
  const amount = Number(formData.get('amount'));

  try {
    // Business logic...
    logger.info('Payment processed successfully', { amount });

    // Always flush buffer before server action resolves/redirects
    await logger.flush();
    return { success: true };
  } catch (err: any) {
    logger.error('Payment processing exception', { error: err.message });
    await logger.flush();
    throw err;
  }
}`}</code>
                </pre>
            </section>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 font-sans">
                <Link href="/docs/telemetry-schema" className="text-neutral-400 hover:text-white font-semibold">
                    ← Telemetry Schema
                </Link>
                <Link href="/docs/react-hooks" className="text-blue-400 hover:text-blue-300 font-semibold">
                    React Hooks Reference →
                </Link>
            </div>
        </article>
    );
}