"use client";

import { useState } from "react";

import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
} from "lucide-react";

import { AGENT } from "@/lib/content";

export default function ContactPage() {
    const [sent, setSent] = useState(false);

    const wa = `https://wa.me/${AGENT.whatsapp}?text=${encodeURIComponent(
        "Hi, I'd like to discuss a property requirement."
    )}`;

    return (
        <div className="min-h-screen bg-background">

            <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">

                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Left */}
                    <div>

                        <div className="text-xs uppercase tracking-[0.22em] text-primary">
                            Contact
                        </div>

                        <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
                            Let's find your next{" "}
                            <span className="gold-text">
                                address.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-md text-muted-foreground">
                            Share a few details and our advisor will
                            reach out within 24 hours. Or jump straight
                            to a call or WhatsApp — whichever you prefer.
                        </p>

                        <div className="mt-8 space-y-4">

                            {/* Call */}
                            <a
                                href={`tel:${AGENT.phone}`}
                                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/60"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
                                    <Phone className="h-5 w-5" />
                                </span>

                                <div>
                                    <div className="text-xs text-muted-foreground">
                                        Call us
                                    </div>

                                    <div className="text-sm font-medium text-foreground">
                                        {AGENT.phone}
                                    </div>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={wa}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/60"
                            >
                                <span
                                    className="grid h-10 w-10 place-items-center rounded-full text-white"
                                    style={{ backgroundColor: "#25D366" }}
                                >
                                    <MessageCircle className="h-5 w-5" />
                                </span>

                                <div>
                                    <div className="text-xs text-muted-foreground">
                                        WhatsApp
                                    </div>

                                    <div className="text-sm font-medium text-foreground">
                                        {AGENT.phone}
                                    </div>
                                </div>
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${AGENT.email}`}
                                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/60"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
                                    <Mail className="h-5 w-5" />
                                </span>

                                <div>
                                    <div className="text-xs text-muted-foreground">
                                        Email
                                    </div>

                                    <div className="text-sm font-medium text-foreground">
                                        {AGENT.email}
                                    </div>
                                </div>
                            </a>

                            {/* Office */}
                            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4">
                                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </span>

                                <div>
                                    <div className="text-xs text-muted-foreground">
                                        Office
                                    </div>

                                    <div className="text-sm font-medium text-foreground">
                                        C-Scheme, Jaipur, Rajasthan 302001
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSent(true);
                        }}
                        className="h-fit space-y-4 rounded-2xl border border-border/60 bg-card p-8"
                    >
                        <div className="font-display text-2xl text-foreground">
                            Tell us what you need
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Input
                                label="First name"
                                required
                                maxLength={50}
                            />

                            <Input
                                label="Last name"
                                required
                                maxLength={50}
                            />
                        </div>

                        <Input
                            label="Phone"
                            type="tel"
                            required
                            maxLength={15}
                        />

                        <Input
                            label="Email"
                            type="email"
                            maxLength={120}
                        />

                        {/* Select */}
                        <div>
                            <label className="text-xs text-muted-foreground">
                                Looking for
                            </label>

                            <select className="mt-1 h-11 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none">
                                <option>Villa</option>
                                <option>Apartment</option>
                                <option>Plot</option>
                                <option>Commercial</option>
                                <option>Rental</option>
                            </select>
                        </div>

                        {/* Textarea */}
                        <div>
                            <label className="text-xs text-muted-foreground">
                                Message
                            </label>

                            <textarea
                                rows={4}
                                maxLength={500}
                                placeholder="Tell us about your budget, preferred locations..."
                                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                            />
                        </div>

                        <button className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                            {sent ? "Message sent ✓" : "Send message"}
                        </button>

                        {sent && (
                            <p className="text-xs text-success">
                                Thanks — we'll be in touch within 24 hours.
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
}

function Input({ label, ...rest }) {
    return (
        <div>
            <label className="text-xs text-muted-foreground">
                {label}
            </label>

            <input
                {...rest}
                className="mt-1 h-11 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none"
            />
        </div>
    );
}