import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { LandingHeader, LandingFooter } from "@/components/landing";
import { makePageMetadata } from "@/lib/seo";

export const metadata = makePageMetadata({
    title: "Privacy Policy",
    description:
        "How Logix collects, uses, and protects information across its website, dashboard, SDKs, and APIs.",
    path: "/privacy",
});

const sections = [
    {
        title: "1. Overview",
        content: (
            <p>
                This Privacy Policy explains how Logix and CHEFU TECHNOLOGIES process
                information when you use our website, dashboard, SDKs, APIs, and related
                services. It also explains the choices and rights that may be available
                to you under applicable privacy laws.
            </p>
        ),
    },
    {
        title: "2. Information We Collect",
        content: (
            <>
                <p>
                    The information we collect depends on how you interact with Logix.
                    This may include:
                </p>

                <ul>
                    <li>
                        <strong>Account information:</strong> information such as your name,
                        email address, account identifiers, authentication information, and
                        subscription or billing-related metadata.
                    </li>

                    <li>
                        <strong>Service information:</strong> IP addresses, browser and
                        device information, timestamps, approximate location derived from
                        technical information, and information about how you interact with
                        our services.
                    </li>

                    <li>
                        <strong>Application data:</strong> logs, error messages, events,
                        metadata, stack traces, request information, and other information
                        that you or your application choose to send to Logix through our
                        SDKs or APIs.
                    </li>

                    <li>
                        <strong>Communications:</strong> information you provide when
                        contacting us for support, reporting an issue, or otherwise
                        communicating with us.
                    </li>

                    <li>
                        <strong>Cookies and similar technologies:</strong> information
                        collected through cookies, local storage, and similar technologies
                        used for authentication, preferences, security, and analytics.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "3. Application Logs and Customer Data",
        content: (
            <p>
                Logix is a developer observability platform. Customers may send
                application logs and related technical data to our services. Customers
                are responsible for determining what information their applications
                send to Logix and should avoid sending passwords, authentication
                credentials, payment card information, or other information that does
                not need to be included in application logs.
            </p>
        ),
    },
    {
        title: "4. How We Use Information",
        content: (
            <>
                <p>We may use information to:</p>

                <ul>
                    <li>Provide, operate, and maintain Logix.</li>
                    <li>Authenticate users and secure accounts.</li>
                    <li>Process and display application logs and events.</li>
                    <li>Monitor service reliability and performance.</li>
                    <li>Detect, investigate, and prevent abuse or security incidents.</li>
                    <li>Provide customer support.</li>
                    <li>Communicate important service and account information.</li>
                    <li>Improve and develop our products and services.</li>
                    <li>Comply with applicable legal obligations.</li>
                </ul>
            </>
        ),
    },
    {
        title: "5. How We Share Information",
        content: (
            <p>
                We do not sell your personal information. We may share information with
                service providers that help us operate Logix, such as infrastructure,
                hosting, communications, analytics, security, and payment providers.
                These providers receive only the information reasonably necessary to
                perform their services and are subject to appropriate contractual or
                other safeguards where applicable.
            </p>
        ),
    },
    {
        title: "6. Cookies and Similar Technologies",
        content: (
            <p>
                We may use cookies and similar technologies for authentication,
                security, preferences, functionality, and analytics. You can manage
                certain cookies through your browser settings. Disabling necessary
                cookies may affect some features of the service.
            </p>
        ),
    },
    {
        title: "7. Data Retention",
        content: (
            <p>
                We retain information for as long as reasonably necessary to provide
                the service, maintain security, comply with legal obligations, resolve
                disputes, and enforce agreements. Log and event retention may depend on
                the Logix plan or configuration associated with an account. Where
                deletion functionality is available, customers may use the applicable
                dashboard or API controls to delete data.
            </p>
        ),
    },
    {
        title: "8. Security",
        content: (
            <p>
                We use reasonable technical and organizational measures designed to
                protect information against unauthorized access, loss, misuse, or
                alteration. However, no internet-based service can guarantee absolute
                security. Customers are responsible for protecting their credentials
                and API keys and for implementing appropriate security practices in
                their own applications.
            </p>
        ),
    },
    {
        title: "9. International Data Processing",
        content: (
            <p>
                Logix and its service providers may process information in countries
                other than the country in which you are located. Where required by
                applicable law, we use appropriate mechanisms and safeguards for
                international data transfers.
            </p>
        ),
    },
    {
        title: "10. Your Privacy Rights",
        content: (
            <p>
                Depending on your location and applicable law, you may have rights
                relating to your personal information, including rights to access,
                correct, delete, restrict, or obtain a copy of certain information.
                You may also have the right to object to or withdraw consent for
                certain processing. The availability of these rights depends on the
                applicable legal requirements.
            </p>
        ),
    },
    {
        title: "11. Children's Privacy",
        content: (
            <p>
                Logix is intended for developers and businesses and is not directed to
                children. We do not knowingly collect personal information from
                children where prohibited by applicable law. If you believe that a
                child has provided personal information to us, please contact us so
                that we can investigate and take appropriate action.
            </p>
        ),
    },
    {
        title: "12. Customer Responsibilities",
        content: (
            <p>
                Customers are responsible for ensuring that their use of Logix and the
                information they send through the service complies with applicable
                privacy and data protection laws. This includes determining whether a
                data processing agreement, consent, notice, or other legal basis is
                required for information sent through Logix.
            </p>
        ),
    },
    {
        title: "13. Changes to This Policy",
        content: (
            <p>
                We may update this Privacy Policy as Logix evolves or as legal and
                regulatory requirements change. When appropriate, we will provide
                notice of material changes through the service or our website. The
                revised policy will become effective on the date indicated at the top
                of the updated policy.
            </p>
        ),
    },
    {
        title: "14. Contact",
        content: (
            <p>
                If you have questions about this Privacy Policy or how Logix handles
                information, please contact us through the support channels provided
                by Logix.
            </p>
        ),
    },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-100">
            <LandingHeader />

            <main className="relative overflow-hidden">
                {/* Subtle background glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl"
                />

                <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                    {/* Back */}
                    <Link
                        href="/"
                        className="group mb-10 inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-slate-200"
                    >
                        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                        Back to Logix
                    </Link>

                    {/* Header */}
                    <header className="border-b border-slate-900 pb-10">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-400">
                            <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                            Privacy & Security
                        </div>

                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Privacy Policy
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                            How Logix collects, uses, and protects information across our
                            website, dashboard, SDKs, and APIs.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">
                            <span>Last updated: August 2026</span>
                            <span className="hidden text-slate-800 sm:inline">•</span>
                            <span>Applies to Logix services</span>
                        </div>
                    </header>

                    {/* Policy */}
                    <article className="mt-12">
                        <div className="space-y-12">
                            {sections.map((section) => (
                                <section key={section.title} className="scroll-mt-24">
                                    <h2 className="text-lg font-semibold tracking-tight text-slate-100">
                                        {section.title}
                                    </h2>

                                    <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 [&_li]:pl-1 [&_li]:leading-7 [&_strong]:font-medium [&_strong]:text-slate-300">
                                        {section.content}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </article>
                </div>
            </main>

            <LandingFooter />
        </div>
    );
}