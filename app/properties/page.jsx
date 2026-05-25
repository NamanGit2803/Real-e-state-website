"use client";

import { useMemo, useState } from "react";
import {
    SlidersHorizontal,
    Search,
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import {
    PROPERTIES,
    PURPOSE_OPTIONS,
    TYPE_OPTIONS,
    CATEGORIES,
    AMENITIES,
    BHK_OPTIONS
} from "@/lib/content";



export default function PropertiesPage() {

    const [purpose, setPurpose] = useState("all");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("all");
    const [q, setQ] = useState("");
    const [bhk, setBhk] = useState("");
    const [maxPrice, setMaxPrice] = useState(50000000);
    const [showFilters, setShowFilters] = useState(false);
    const results = useMemo(() => {
        return PROPERTIES.filter((p) => {
            if (purpose !== "all" && p.purpose !== purpose)
                return false;

            if (category !== "all" && p.category !== category)
                return false;

            if (type && p.propertyType !== type)
                return false;

            if (bhk && p.bhk !== bhk)
                return false;

            if (p.price > maxPrice && p.purpose === "sell")
                return false;

            if (q) {
                const needle = q.toLowerCase();

                const hay =
                    `${p.title} ${p.location} ${p.project} ${p.propertyType}`.toLowerCase();

                if (!hay.includes(needle))
                    return false;
            }

            return true;
        });
    }, [
        purpose,
        type,
        category,
        q,
        bhk,
        maxPrice,
    ]);

    return (
        <div className="min-h-screen bg-background">

            {/* Hero */}
            <section className="border-b border-border/60 bg-card/40">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                    <div className="text-xs uppercase tracking-[0.22em] text-primary">
                        Browse
                    </div>

                    <h1 className="mt-2 font-display text-3xl text-foreground md:text-4xl">
                        Properties in Jaipur
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        {results.length} listings match your filters
                    </p>

                    {/* Top Bar */}
                    <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">

                        {/* Purpose */}
                        <div className="flex flex-wrap gap-1 rounded-md border border-border bg-card p-1">
                            {PURPOSE_OPTIONS.map((p) => (
                                <button
                                    key={p.key}
                                    onClick={() => setPurpose(p.key)}
                                    className={`rounded px-3 py-1.5 text-sm transition-colors ${purpose === p.key
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-1 items-center gap-2 rounded-md border border-border bg-card px-3"
                        >
                            <Search className="h-4 w-4 text-primary" />

                            <input
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search location, project, type..."
                                className="h-11 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                            />
                        </form>

                        {/* Mobile Filter Button */}
                        <button
                            onClick={() =>
                                setShowFilters((s) => !s)
                            }
                            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground md:hidden"
                        >
                            <SlidersHorizontal className="h-4 w-4" />
                            Filters
                        </button>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

                    {/* Sidebar */}
                    <aside
                        className={`${showFilters ? "block" : "hidden"
                            } lg:block`}
                    >
                        <div className="sticky top-20 space-y-6 rounded-xl border border-border/60 bg-card p-5">

                            {/* Category */}
                            <FilterGroup label="Category">
                                <div className="flex flex-wrap gap-2">
                                    {CATEGORIES.map((c) => (
                                        <button
                                            key={c.key}
                                            onClick={() => setCategory(c.key)}
                                            className={`rounded-full border px-3 py-1 text-xs transition-colors ${category === c.key
                                                    ? "border-primary bg-primary/10 text-primary"
                                                    : "border-border text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            {c.label}
                                        </button>
                                    ))}
                                </div>
                            </FilterGroup>

                            {/* Type */}
                            <FilterGroup label="Property Type">
                                <select
                                    value={type}
                                    onChange={(e) =>
                                        setType(e.target.value)
                                    }
                                    className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground"
                                >
                                    <option value="">
                                        Any
                                    </option>

                                    {TYPE_OPTIONS.map((t) => (
                                        <option
                                            key={t}
                                            value={t}
                                        >
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </FilterGroup>

                            {/* BHK */}
                            <FilterGroup label="BHK">
                                <div className="flex flex-wrap gap-2">

                                    <button
                                        onClick={() => setBhk("")}
                                        className={`rounded-full border px-3 py-1 text-xs ${bhk === ""
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border text-muted-foreground"
                                            }`}
                                    >
                                        Any
                                    </button>

                                    {BHK_OPTIONS.map((b) => (
                                        <button
                                            key={b}
                                            onClick={() => setBhk(b)}
                                            className={`rounded-full border px-3 py-1 text-xs ${bhk === b
                                                    ? "border-primary bg-primary/10 text-primary"
                                                    : "border-border text-muted-foreground"
                                                }`}
                                        >
                                            {b}
                                        </button>
                                    ))}
                                </div>
                            </FilterGroup>

                            {/* Price */}
                            <FilterGroup
                                label={`Max Price · ${maxPrice >= 10000000
                                        ? `₹${(
                                            maxPrice / 10000000
                                        ).toFixed(2)} Cr`
                                        : `₹${(
                                            maxPrice / 100000
                                        ).toFixed(0)} Lac`
                                    }`}
                            >
                                <input
                                    type="range"
                                    min={1000000}
                                    max={50000000}
                                    step={500000}
                                    value={maxPrice}
                                    onChange={(e) =>
                                        setMaxPrice(
                                            Number(e.target.value)
                                        )
                                    }
                                    className="w-full accent-primary"
                                />

                                <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                                    <span>₹10 L</span>
                                    <span>₹5 Cr</span>
                                </div>
                            </FilterGroup>

                            {/* Amenities */}
                            <FilterGroup label="Amenities">
                                <div className="flex flex-wrap gap-1.5">
                                    {AMENITIES.slice(0, 6).map((a) => (
                                        <span
                                            key={a}
                                            className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                                        >
                                            {a}
                                        </span>
                                    ))}
                                </div>
                            </FilterGroup>

                            {/* Clear */}
                            <button
                                onClick={() => {
                                    setPurpose("all");
                                    setType("");
                                    setCategory("all");
                                    setBhk("");
                                    setQ("");
                                    setMaxPrice(50000000);
                                }}
                                className="w-full rounded-md border border-border bg-background py-2 text-xs text-muted-foreground hover:text-foreground"
                            >
                                Clear all filters
                            </button>
                        </div>
                    </aside>

                    {/* Results */}
                    <div>
                        {results.length === 0 ? (
                            <div className="rounded-xl border border-border/60 bg-card p-12 text-center">

                                <h3 className="font-display text-xl text-foreground">
                                    No properties match those filters
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Try widening the price range or clearing some filters.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {results.map((p) => (
                                    <PropertyCard
                                        key={p.id}
                                        property={p}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

function FilterGroup({
    label,
    children,
}) {
    return (
        <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                {label}
            </div>

            {children}
        </div>
    );
}