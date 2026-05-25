"use client";

import Link from "next/link";

import {
  Building2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

import { AGENT } from "@/lib/content";

const exploreLinks = [
  {
    label: "All Properties",
    href: "/properties",
  },
  {
    label: "Buy",
    href: "/properties?purpose=sell",
  },
  {
    label: "Rent",
    href: "/properties?purpose=rent",
  },
  {
    label: "Commercial",
    href: "/properties?category=Commercial",
  },
];

const companyLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: FiInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FiFacebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FiLinkedin,
    href: "#",
    label: "LinkedIn",
  },
];

const contactInfo = [
  {
    icon: Phone,
    value: AGENT.phone,
  },
  {
    icon: Mail,
    value: AGENT.email,
  },
  {
    icon: MapPin,
    value: "C-Scheme, Jaipur",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" />
              </span>

              <span className="font-display text-xl gold-text">
                {AGENT.websiteName || " "}
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Curated luxury properties across Jaipur — villas,
              apartments, plots and commercial spaces.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Explore
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Company
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {item.value}
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex gap-3 text-muted-foreground">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">

          <span>
            © {new Date().getFullYear()} {AGENT.websiteName || " "}.
            All rights reserved.
          </span>

          <span>
            Crafted with care in Jaipur.
          </span>
        </div>
      </div>
    </footer>
  );
}