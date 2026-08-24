import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { LandingHeader, LandingFooter } from "@/components/landing";
import { makePageMetadata } from "@/lib/seo";

export const metadata = makePageMetadata({
    title: "Terms of Service",
    description:
        "The terms and conditions governing your use of Logix services.",
    path: "/terms",
});

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: (
            <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of Logix,
                including our website, dashboard, SDKs, APIs, and related services.
                By creating an account, accessing, or using Logix, you agree to be bound
                by these Terms and our Privacy Policy. If you are using Logix on behalf
                of an organization, you represent that you have authority to bind that
                organization to these Terms.
            </p>
        ),
    },
    {
        title: "2. Eligibility and Accounts",
        content: (
            <>
                <p>
                    You must provide accurate and reasonably complete information when
                    creating an account and keep that information up to date.
                </p>

                <ul>
                    <li>You are responsible for activity occurring under your account.</li>
                    <li>
                        You must keep authentication credentials, API keys, and other
                        account credentials confidential.
                    </li>
                    <li>
                        You must promptly notify us if you believe your account or
                        credentials have been compromised.
                    </li>
                    <li>
                        You may not create accounts for fraudulent or unauthorized
                        purposes.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "3. Use of Logix",
        content: (
            <>
                <p>
                    You may use Logix only in accordance with these Terms, applicable
                    laws, and the technical documentation provided by Logix.
                </p>

                <p>Unless expressly permitted by us, you may not:</p>

                <ul>
                    <li>
                        Use Logix to conduct unlawful, fraudulent, abusive, or harmful
                        activities.
                    </li>
                    <li>
                        Attempt to gain unauthorized access to Logix or another customer&apos;s
                        account or data.
                    </li>
                    <li>
                        Circumvent security controls, rate limits, usage restrictions, or
                        other technical safeguards.
                    </li>
                    <li>
                        Interfere with or disrupt the availability or operation of Logix.
                    </li>
                    <li>
                        Probe, scan, or test the vulnerability of our systems without
                        authorization.
                    </li>
                    <li>
                        Use Logix to transmit malware, malicious code, or other harmful
                        material.
                    </li>
                    <li>
                        Resell or commercially redistribute Logix without our written
                        authorization.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "4. Customer Data and Log Data",
        content: (
            <>
                <p>
                    You retain ownership of the application logs, events, metadata, and
                    other information that you submit to Logix (&quot;Customer Data&quot;).
                </p>

                <p>
                    You grant Logix the limited rights necessary to host, store, process,
                    transmit, display, and otherwise handle Customer Data solely to
                    provide, secure, maintain, and improve the services.
                </p>

                <p>
                    You are responsible for Customer Data and for ensuring that you have
                    all rights, permissions, notices, and lawful bases necessary to
                    collect and submit that information to Logix.
                </p>

                <p>
                    You should not send passwords, authentication secrets, payment card
                    information, or other sensitive information to Logix unless the
                    applicable service and your configuration are specifically designed
                    to handle it.
                </p>
            </>
        ),
    },
    {
        title: "5. SDKs and APIs",
        content: (
            <p>
                Logix may provide software development kits, libraries, APIs, and other
                integration tools. These tools are provided to enable integration with
                your applications and are subject to these Terms and any applicable
                documentation or license terms. You are responsible for implementing
                SDKs and APIs appropriately within your applications and for protecting
                any API credentials used by your systems.
            </p>
        ),
    },
    {
        title: "6. Plans, Usage, and Billing",
        content: (
            <>
                <p>
                    Certain Logix features may require a paid subscription. Pricing,
                    quotas, usage limits, retention periods, and included features are
                    described on the applicable pricing page or order documentation.
                </p>

                <ul>
                    <li>
                        Paid subscriptions may automatically renew unless cancelled before
                        the applicable renewal date.
                    </li>
                    <li>
                        You authorize us or our payment provider to charge the payment
                        method associated with your account for applicable fees.
                    </li>
                    <li>
                        You are responsible for applicable taxes, duties, and other
                        government charges unless otherwise stated.
                    </li>
                    <li>
                        Exceeding plan limits may result in additional charges, restricted
                        functionality, or temporary suspension of certain features,
                        depending on the applicable plan.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "7. Intellectual Property",
        content: (
            <p>
                Logix, including its software, interfaces, designs, documentation,
                trademarks, logos, and other materials provided by us, is owned by
                CHEFU TECHNOLOGIES or its licensors and is protected by applicable
                intellectual property laws. Except for the limited rights expressly
                granted under these Terms, no ownership rights are transferred to you.
            </p>
        ),
    },
    {
        title: "8. Feedback",
        content: (
            <p>
                If you provide suggestions, ideas, feature requests, or other feedback
                about Logix, you grant us permission to use that feedback without
                restriction or compensation, provided that doing so does not disclose
                your confidential information or Customer Data.
            </p>
        ),
    },
    {
        title: "9. Service Availability",
        content: (
            <p>
                We aim to keep Logix reliable and available, but we do not guarantee
                that the service will be uninterrupted, error-free, or available at
                all times. We may perform maintenance, updates, security measures, or
                other operational changes that temporarily affect availability.
                Additional uptime commitments may apply to specific paid plans or
                written agreements.
            </p>
        ),
    },
    {
        title: "10. Third-Party Services",
        content: (
            <p>
                Logix may integrate with or depend on third-party services, platforms,
                hosting providers, payment processors, authentication providers, or
                other external services. Third-party services are governed by their
                own terms and policies, and we are not responsible for the availability
                or operation of services that we do not control.
            </p>
        ),
    },
    {
        title: "11. Suspension and Termination",
        content: (
            <>
                <p>
                    You may stop using Logix or request deletion of your account at any
                    time.
                </p>

                <p>
                    We may suspend or terminate access where reasonably necessary to
                    protect Logix, our customers, or third parties, including where we
                    believe there has been a violation of these Terms, unlawful activity,
                    abuse, security risk, non-payment, or misuse of the service.
                </p>

                <p>
                    Following termination, your access to Customer Data may become
                    unavailable and Customer Data may be deleted according to our
                    applicable retention and deletion policies.
                </p>
            </>
        ),
    },
    {
        title: "12. Disclaimers",
        content: (
            <p>
                To the maximum extent permitted by applicable law, Logix is provided
                on an &quot;as is&quot; and &quot;as available&quot; basis. We disclaim warranties that
                are not expressly stated in these Terms, including implied warranties
                of merchantability, fitness for a particular purpose, and
                non-infringement, except where such disclaimers are prohibited by law.
            </p>
        ),
    },
    {
        title: "13. Limitation of Liability",
        content: (
            <p>
                To the maximum extent permitted by applicable law, CHEFU TECHNOLOGIES
                and its affiliates, officers, employees, and service providers will
                not be liable for indirect, incidental, special, consequential, or
                punitive damages, or for loss of profits, revenue, data, goodwill, or
                business opportunities arising from or related to your use of Logix.
                Any aggregate liability will be limited to the amount you paid to us
                for the applicable service during the period specified by applicable
                law or the relevant agreement.
            </p>
        ),
    },
    {
        title: "14. Indemnification",
        content: (
            <p>
                To the extent permitted by applicable law, you agree to defend and
                indemnify CHEFU TECHNOLOGIES and its affiliates, officers, employees,
                and service providers against claims, losses, liabilities, and
                expenses arising from your unlawful use of Logix, violation of these
                Terms, or Customer Data that you submit to the service.
            </p>
        ),
    },
    {
        title: "15. Changes to the Service",
        content: (
            <p>
                Logix may evolve over time. We may add, modify, or discontinue features
                and functionality. Where reasonably appropriate, we will provide notice
                of material changes that substantially affect your use of the service.
            </p>
        ),
    },
    {
        title: "16. Changes to These Terms",
        content: (
            <p>
                We may update these Terms from time to time. When material changes are
                made, we may provide notice through the service, website, or another
                reasonable method. Your continued use of Logix after the effective date
                of updated Terms constitutes acceptance of the revised Terms to the
                extent permitted by applicable law.
            </p>
        ),
    },
    {
        title: "17. Governing Law",
        content: (
            <p>
                These Terms are governed by the laws applicable to CHEFU TECHNOLOGIES
                and the jurisdiction in which it is legally established, without
                regard to conflict-of-law principles, except where mandatory
                applicable law provides otherwise. The appropriate jurisdiction and
                dispute-resolution provisions should be confirmed in the final legal
                version of these Terms.
            </p>
        ),
    },
    {
        title: "18. Contact",
        content: (
            <p>
                If you have questions about these Terms or your Logix account, please
                contact us through the support channels provided by Logix.
            </p>
        ),
    },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-100">
            <LandingHeader />

            <main className="relative overflow-hidden">
                {/* Background glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl"
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
                            <FileText className="h-3.5 w-3.5 text-sky-400" />
                            Terms & Conditions
                        </div>

                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Terms of Service
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                            The terms and conditions governing your access to and use of
                            Logix.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">
                            <span>Last updated: August 2026</span>
                            <span className="hidden text-slate-800 sm:inline">•</span>
                            <span>Applies to Logix services</span>
                        </div>
                    </header>

                    {/* Terms */}
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