import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Telemetry Schema & Log Severities',
    description:
        'Complete reference for Logix payload structures, log levels, importance mapping, metadata contexts, and custom metrics schema.',
};

export default function DocsTelemetrySchemaPage() {
    return (
        <article className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300">
            <header className="space-y-3 font-sans">
                <div className="text-xs font-mono text-blue-500 font-semibold tracking-wider uppercase">
                    Core Concepts
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    Telemetry Schema & Severities
                </h1>
                <p className="text-base text-neutral-400 font-normal leading-relaxed">
                    Logix structures logs into unified event payloads to enable precise SQL filtering and real-time alert evaluation.
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    Log Severities & Importance Normalization
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono border border-neutral-800 rounded-lg">
                        <thead className="bg-neutral-900 text-neutral-300 uppercase">
                            <tr>
                                <th className="p-3 border-b border-neutral-800">Log Level</th>
                                <th className="p-3 border-b border-neutral-800">Importance</th>
                                <th className="p-3 border-b border-neutral-800">ClickHouse Int</th>
                                <th className="p-3 border-b border-neutral-800">Trigger Conditions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 text-neutral-400">
                            <tr>
                                <td className="p-3 text-red-400 font-bold">critical / fatal</td>
                                <td className="p-3">critical</td>
                                <td className="p-3">4</td>
                                <td className="p-3">Infrastructure crashes, DB connectivity loss, service outage.</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-amber-400 font-bold">error</td>
                                <td className="p-3">high</td>
                                <td className="p-3">3</td>
                                <td className="p-3">Unhandled exceptions, 5xx server errors, gateway timeouts.</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-yellow-400 font-bold">warning / warn</td>
                                <td className="p-3">medium</td>
                                <td className="p-3">2</td>
                                <td className="p-3">Deprecated API calls, near rate limits, soft retries.</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-blue-400 font-bold">info / success</td>
                                <td className="p-3">low</td>
                                <td className="p-3">1</td>
                                <td className="p-3">User actions, successful sign-ins, order placements.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-2">
                    Complete JSON Payload Interface
                </h2>

                <pre className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 overflow-x-auto">
                    <code>{`logger.log({
  type: 'audit',                      // 'info' | 'warning' | 'error' | 'debug' | 'audit' | 'metric'
  message: 'User password reset',    // Required summary string
  appName: 'chefu-web-portal',       // Source application identifier
  environment: 'production',         // 'production' | 'staging' | 'development'
  service: 'identity-service',        // Microservice component
  subsystem: 'auth',                  // Functional module name
  operation: 'reset_password',        // Action executed
  importance: 'high',                // 'critical' | 'high' | 'medium' | 'low' or integer 1-4
  track: {                            // Arbitrary metadata objects
    userId: 'usr_8921',
    email: 'dev@chefu.co.za',
  },
  security: {                         // Audit & Security attributes
    ipAddress: '102.132.220.1',
    mfaEnabled: true,
  },
  metrics: {                          // Measured latency & stats
    durationMs: 48,
    memoryUsageMb: 124,
  },
  timestamps: {
    event_time: Date.now(),           // Optional client Unix timestamp
  },
});`}</code>
                </pre>
            </section>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 font-sans">
                <Link href="/docs/installation" className="text-neutral-400 hover:text-white font-semibold">
                    ← Installation & Setup
                </Link>
                <Link href="/docs/nextjs-guide" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Next.js App Router Guide →
                </Link>
            </div>
        </article>
    );
}