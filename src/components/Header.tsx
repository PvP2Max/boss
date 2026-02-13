"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#why-join", label: "Why BOSS" },
  { href: "#contact", label: "Contact" },
  { href: "/connect", label: "Connect" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="BOSS Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/20 transition-colors group-hover:bg-gold-500/30">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-gold-400"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider text-gold-400">
              BOSS
            </span>
            <span className="hidden text-[10px] tracking-widest text-dark-300 sm:block">
              FT. WAINWRIGHT
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-dark-200 transition-colors hover:bg-gold-500/10 hover:text-gold-400"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-dark-200 transition-colors hover:bg-gold-500/10 hover:text-gold-400"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="ml-3 rounded-lg bg-gold-500 px-5 py-2 text-sm font-semibold text-dark-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
          >
            Join BOSS
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-gold-500/10 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 bg-gold-400 transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gold-400 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gold-400 transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-dark-950/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link, i) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-dark-200 transition-colors hover:text-gold-400"
                style={{
                  animation: mobileOpen
                    ? `fade-in-up 0.5s ease-out ${i * 0.1}s both`
                    : "none",
                }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-dark-200 transition-colors hover:text-gold-400"
                style={{
                  animation: mobileOpen
                    ? `fade-in-up 0.5s ease-out ${i * 0.1}s both`
                    : "none",
                }}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-lg bg-gold-500 px-8 py-3 text-lg font-semibold text-dark-900 transition-all hover:bg-gold-400"
            style={{
              animation: mobileOpen
                ? `fade-in-up 0.5s ease-out ${navLinks.length * 0.1}s both`
                : "none",
            }}
          >
            Join BOSS
          </a>
        </div>
      </div>
    </header>
  );
}
