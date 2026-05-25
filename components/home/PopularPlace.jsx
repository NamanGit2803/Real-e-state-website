'use client'

import Link from "next/link"
import Image from "next/image";
import { POPULAR_LOCATIONS } from "@/lib/content";

const PopularPlace = () => {



    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                    Locations
                </p>

                <h2 className="mt-2 font-display text-3xl text-foreground md:text-4xl">
                    Popular in Jaipur
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {POPULAR_LOCATIONS.map((item) => (
                    <Link
                        key={item.name}
                        href={`/properties?q=${item.name}`}
                        className="group relative aspect-square overflow-hidden rounded-xl border border-border/60"
                    >
                        <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

                        <div className="absolute bottom-0 p-4">
                            <h3 className="font-display text-lg text-foreground">
                                {item.name}
                            </h3>

                            <p className="text-xs text-muted-foreground">
                                {item.count} properties
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default PopularPlace