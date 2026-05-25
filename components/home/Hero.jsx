'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"
import {
    Search,
    MapPin,
    ArrowRight,
    ShieldCheck,
    BadgeCheck,
    Sparkles,
    HeartHandshake,
    Star,
} from "lucide-react";

const Hero = () => {

    const router = useRouter();

    const [purpose, setPurpose] = useState("sell");
    const [type, setType] = useState("");
    const [query, setQuery] = useState("");

    const PURPOSE_OPTIONS = [
        { key: "sell", label: "Buy" },
        { key: "rent", label: "Rent" },
    ];

    const TYPE_OPTIONS = [
        "Villa",
        "Flat",
        "Plot",
        "Shop",
    ];

    const onSearch = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (purpose) params.set("purpose", purpose);
        if (type) params.set("type", type);
        if (query) params.set("q", query);

        router.push(`/properties?${params.toString()}`);
    };


    return (
        <section className="relative isolate overflow-hidden">
            <Image
                src="/hero-villa.jpg"
                alt="Luxury Villa"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-36 md:pt-36 md:pb-44">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/50 px-3 py-1 text-xs backdrop-blur-md text-primary">
                        <Sparkles className="h-3.5 w-3.5" />
                        Jaipur's curated property collection
                    </div>

                    <h1 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                        Find a home that feels <span className="gold-text">unmistakably yours</span>.
                    </h1>
                    <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                        Hand-picked villas, residences, plots and commercial spaces across Jaipur — every listing verified, every detail honest.
                    </p>
                </div>

                {/* SEARCH BAR */}
                <form
                    onSubmit={onSearch}
                    className="mt-10 rounded-2xl border border-border/70 bg-card/80 p-2 backdrop-blur-xl shadow-2xl">
                    <div className="flex flex-wrap gap-2 p-2">
                        {PURPOSE_OPTIONS.map((item) => (
                            <button
                                key={item.key}
                                type="button"
                                onClick={() => setPurpose(item.key)}
                                className={`rounded-lg px-4 py-2 text-sm transition ${purpose === item.key
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-[1fr_220px_auto]">
                        <div className="flex items-center gap-2 rounded-md bg-background/70 px-3 h-12">
                            <MapPin className="h-4 w-4 text-primary" />

                            <input
                                type="text"
                                placeholder="Search by location, area or project"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                            />
                        </div>

                        <Select
                            value={type}
                            onValueChange={(value) => setType(value)}
                        >
                            <SelectTrigger className="h-12! w-full rounded-md border-0 bg-background/70 px-3 text-sm text-foreground focus:ring-0">
                                <SelectValue placeholder="All property types" />
                            </SelectTrigger>

                            <SelectContent>
                                {TYPE_OPTIONS.map((item) => (
                                    <SelectItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button
                            type="submit"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 font-medium transition hover:opacity-90"
                        >
                            <Search className="h-4 w-4" />
                            Search
                        </Button>
                    </div>
                </form>

                {/* TRUST BADGES */}
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> RERA & JDA approved</div>
                    <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" /> 100% verified listings</div>
                    <div className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-primary" /> Personal advisor</div>
                    <div className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> 4.9 / 5 client rating</div>
                </div>
            </div>
        </section>
    )
}

export default Hero