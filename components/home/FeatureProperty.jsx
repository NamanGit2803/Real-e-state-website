'use client'

import Link from "next/link"
import { PROPERTIES } from "@/lib/content";
import {ArrowRight} from "lucide-react";
import PropertyCard from "../PropertyCard";


export const FeatureProperty = () => {

    const featured = PROPERTIES.filter((p) => p.featured).slice(0, 6);


    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-primary">Featured</div>
                    <h2 className="mt-2 font-display text-3xl text-foreground md:text-4xl">Hand-picked for you</h2>
                </div>
                <Link href="/properties" className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:underline">
                    View all <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                ))}
            </div>
        </section>
    )
}
