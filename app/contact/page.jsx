import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AGENT } from "@/lib/content";
import Form from "@/components/contact/Form";

export default function ContactPage() {

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
                            <Link
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
                            </Link>

                            {/* WhatsApp */}
                            <Link
                                href={wa}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/60"
                            >
                                <span
                                    className="grid h-10 w-10 place-items-center rounded-full text-white"
                                    style={{ backgroundColor: "#25D366" }}
                                >
                                    <FaWhatsapp className="h-5 w-5" />
                                </span>

                                <div>
                                    <div className="text-xs text-muted-foreground">
                                        WhatsApp
                                    </div>

                                    <div className="text-sm font-medium text-foreground">
                                        {AGENT.phone}
                                    </div>
                                </div>
                            </Link>

                            {/* Email */}
                            <Link
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
                            </Link>

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
                    <Form/>
                </div>
            </section>
        </div>
    );
}
