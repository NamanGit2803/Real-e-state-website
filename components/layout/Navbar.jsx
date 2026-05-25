"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";

import { AGENT } from "@/lib/content";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </span>

          <div className="leading-tight">
            <div className="font-display text-lg gold-text">
              {AGENT.websiteName || ""}
            </div>

            <div className="text-[10px] font-inter uppercase tracking-[0.2em] text-muted-foreground">
              Jaipur · Since 2008
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`text-sm transition-colors hover:text-primary ${pathname === l.to
                  ? "text-primary"
                  : "text-muted-foreground"
                }`}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            List Property
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          aria-label="Toggle menu"
          className="rounded-md border border-border p-2 text-foreground md:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-3 text-sm hover:bg-secondary ${pathname === l.to
                    ? "text-foreground"
                    : "text-foreground/90"
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}