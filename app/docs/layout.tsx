import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: {
        template: '%s | Logix Documentation',
        default: 'Logix Documentation | Monitoring SaaS & Telemetry Pipeline',
    },
    description:
        'Comprehensive developer documentation for Logix (@chefu-tech/logix-next). Learn how to integrate real-time structured logging, SSE live tailing, ClickHouse analytics, and webhook verification.',
    robots: {
        index: true,
        follow: true,
    },
};

const navSections = [
    {
        title: 'Getting Started',
        links: [
            { href: '/docs', label: 'Overview & Fundamentals' },
            { href: '/docs/architecture', label: 'System Architecture' },
            { href: '/docs/installation', label: 'Installation & Setup' },
        ],
    },
    {
        title: 'Core Concepts',
        links: [
            { href: '/docs/telemetry-schema', label: 'Telemetry Schema & Severities' },
            { href: '/docs/nextjs-guide', label: 'Next.js App Router & Server Actions' },
        ],
    },
    {
        title: 'SDK & Hooks Reference',
        links: [
            { href: '/docs/react-hooks', label: 'React Hooks (getStream & getLogs)' },
            { href: '/docs/webhooks', label: 'Webhooks & HMAC Verification' },
            { href: '/docs/api-reference', label: 'REST & SSE API Specification' },
        ],
    },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
            {/* Top Navbar */}
            <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight text-white font-mono">
                                Logix<span className="text-blue-500">.</span>
                            </span>
                        </Link>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                            v1.0.2
                        </span>
                    </div>

                    <div className="flex items-center gap-5 text-xs font-mono">
                        <Link href="/queries" className="text-neutral-400 hover:text-white transition-colors">
                            Query Explorer
                        </Link>
                        <Link href="/live-logs" className="text-neutral-400 hover:text-white transition-colors">
                            Live Terminal
                        </Link>
                        <Link href="/settings" className="text-neutral-400 hover:text-white transition-colors">
                            Billing
                        </Link>
                        <Link
                            href="/api-keys"
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors"
                        >
                            Get API Keys →
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Grid */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Static Crawlable Sidebar (HTML links without JS dependency) */}
                <aside className="lg:col-span-1">
                    <nav className="sticky top-24 space-y-8 font-mono text-xs">
                        {navSections.map((section, idx) => (
                            <div key={idx} className="space-y-2">
                                <h3 className="font-bold uppercase tracking-wider text-neutral-200">
                                    {section.title}
                                </h3>
                                <ul className="space-y-1.5 border-l border-neutral-800 pl-3">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link
                                                href={link.href}
                                                className="text-neutral-400 hover:text-blue-400 transition-colors block py-0.5"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Content Region */}
                <main className="lg:col-span-3 min-w-0">{children}</main>
            </div>
        </div>
    );
}