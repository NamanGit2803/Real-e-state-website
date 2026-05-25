'use client'

import Link from "next/link"
import {ArrowRight} from "lucide-react";

const WhyUs = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
            <div className="rounded-2xl border border-border/60 bg-card p-8 md:p-14">
                <div className="grid gap-10 md:grid-cols-2 items-center">
                    <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-primary">Why Vihaan</div>
                        <h2 className="mt-2 font-display text-3xl text-foreground md:text-4xl">A different kind of property partner.</h2>
                        <p className="mt-4 text-muted-foreground">
                            We visit every property ourselves, verify titles and approvals, and walk you through every decision — from first viewing to handover.
                        </p>
                        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
                            Talk to an advisor <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { n: "1,200+", l: "Curated listings" },
                            { n: "18 yrs", l: "In Jaipur real estate" },
                            { n: "850+", l: "Happy families" },
                            { n: "₹2,400 Cr", l: "Closed transactions" },
                        ].map((s) => (
                            <div key={s.l} className="rounded-xl border border-border/60 bg-background/40 p-5">
                                <div className="font-display text-2xl gold-text">{s.n}</div>
                                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs