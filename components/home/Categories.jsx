'use client'

import {ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {

    const CATEGORY_TILES = [
        {
            label: "Villas",
            type: "Villa",
            img: "/villas.jpg",
        },
        {
            label: "Apartments",
            type: "Flat",
            img: "/flat.jpg",
        },
        {
            label: "Plots & Land",
            type: "Plot",
            img: "/plot.jpg",
        },
        {
            label: "Commercial",
            type: "Shop",
            img: "/commercial.jpg",
        },
    ];


    return (
        <section className="mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {CATEGORY_TILES.map((item) => (
                    <Link
                        key={item.label}
                        href={`/properties?type=${item.type}`}
                        className="group relative aspect-4/5 overflow-hidden rounded-xl border border-border/60 bg-card"
                    >
                        <Image
                            src={item.img}
                            alt={item.label}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />

                        <div className="absolute bottom-0 p-4 inset-x-0">
                            <h3 className="text-lg font-display font-semibold text-foreground">
                                {item.label}
                            </h3>

                            <div className="text-xs text-primary inline-flex items-center gap-1">
                                Explore
                                <ArrowRight className="h-3 w-3" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Categories