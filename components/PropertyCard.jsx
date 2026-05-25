"use client";

import Link from "next/link";
import Image from "next/image";

import {
    Phone,
    MessageCircle,
    MapPin,
    BedDouble,
    Maximize,
    Compass,
} from "lucide-react";

import {
    AGENT,
    buildWhatsAppLink,
    formatPrice,
} from "@/lib/content";

export default function PropertyCard({ property }) {
    const wa = buildWhatsAppLink(property);

    return (
        <div className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-[0_8px_40px_-12px_rgba(201,168,76,0.25)]">

            <div className="relative aspect-[4/3] overflow-hidden">

                <Link href={`/properties/${property.slug}`}>
                    <Image
                        src={property.images[0]}
                        alt={property.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </Link>

                <div className="absolute left-3 top-3 flex gap-2">

                    <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                        For{" "}
                        {property.purpose === "sell"
                            ? "Sale"
                            : property.purpose === "rent"
                                ? "Rent"
                                : "Lease"}
                    </span>

                    {property.featured && (
                        <span className="rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                            Featured
                        </span>
                    )}
                </div>

                <div className="absolute bottom-3 right-3 rounded-md bg-background/85 px-3 py-1.5 backdrop-blur">

                    <div className="text-base font-semibold gold-text">
                        {formatPrice(property.price, property.purpose)}
                    </div>
                </div>
            </div>

            <div className="p-5">

                <div className="text-[11px] uppercase tracking-[0.18em] text-primary">
                    {property.propertyType}
                </div>

                <Link href={`/properties/${property.slug}`}>
                    <h3 className="mt-1 font-display text-lg leading-tight text-foreground line-clamp-1 hover:text-primary">
                        {property.title}
                    </h3>
                </Link>

                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {property.location}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">

                    {property.bhk && (
                        <div className="flex items-center gap-1.5">
                            <BedDouble className="h-4 w-4 text-primary" />
                            <span>{property.bhk}</span>
                        </div>
                    )}

                    <div className="flex items-center gap-1.5">
                        <Maximize className="h-4 w-4 text-primary" />
                        <span>
                            {property.size} {property.sizeUnit}
                        </span>
                    </div>

                    {property.facing && (
                        <div className="flex items-center gap-1.5">
                            <Compass className="h-4 w-4 text-primary" />
                            <span>{property.facing}</span>
                        </div>
                    )}
                </div>

                <div className="mt-4 flex gap-2">

                    <a
                        href={`tel:${AGENT.phone}`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary/70"
                    >
                        <Phone className="h-3.5 w-3.5" />
                        Call
                    </a>

                    <a
                        href={wa}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "#25D366" }}
                    >
                        <MessageCircle className="h-3.5 w-3.5" />
                        WhatsApp
                    </a>

                    <Link
                        href={`/properties/${property.slug}`}
                        className="flex flex-1 items-center justify-center rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}