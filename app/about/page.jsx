

import Link from "next/link";
import { AGENT } from "@/lib/content";
import {
    ShieldCheck,
    Star,
    HeartHandshake,
    Building2,
    ArrowRight,
} from "lucide-react";

const stats = [
    {
        icon: ShieldCheck,
        t: "Verified listings",
        d: "Every property visited and documented in person.",
    },
    {
        icon: Building2,
        t: "1,200+ properties",
        d: "Across Jaipur's most-loved neighbourhoods.",
    },
    {
        icon: Star,
        t: "4.9 / 5 rating",
        d: "From over 850 verified client reviews.",
    },
    {
        icon: HeartHandshake,
        t: "Personal advisor",
        d: "One advisor, end to end — never a call centre.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">


            <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">

                <div className="text-xs uppercase tracking-[0.22em] text-primary">
                    About
                </div>

                <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
                    Real estate in Jaipur,{" "}
                    <span className="gold-text">
                        done honestly.
                    </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {AGENT.websiteName || ''} was founded in {AGENT.since} with a simple idea —
                    every property worth showing is worth verifying first.
                    We believe every property worth showing is worth verifying first — from site visits to legal checks, we guide families with honesty and clarity.
                </p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.t}
                                className="rounded-xl border border-border/60 bg-card p-6"
                            >
                                <Icon className="h-6 w-6 text-primary" />

                                <div className="mt-4 font-display text-lg text-foreground">
                                    {item.t}
                                </div>

                                <div className="mt-1 text-xs text-muted-foreground">
                                    {item.d}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 rounded-2xl border border-border/60 bg-card p-10 text-center">

                    <h2 className="font-display text-3xl text-foreground">
                        Looking for something specific?
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground">
                        Tell us what you need — we'll come back with
                        three hand-picked options within 48 hours.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                    >
                        Get in touch
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}