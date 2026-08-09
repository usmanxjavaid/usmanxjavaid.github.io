"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-bg/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded font-display text-[10px] font-bold text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            {siteConfig.name.split(" ").map((n) => n[0]).join("")}
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-text whitespace-nowrap">
            <span className="lg:hidden">{siteConfig.name.split(" ")[0]}</span>
            <span className="hidden lg:inline">{siteConfig.name}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href}
              href={link.href}
              className="font-mono text-[13px] text-text-dim transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">
            Let&apos;s talk
          </Button>
        </div>

        <button
          className="flex items-center justify-center text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 font-mono text-sm text-text-dim hover:bg-surface-2 hover:text-text"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between px-3">
                <ThemeToggle />
                <Button href="/contact" size="sm" className="ml-auto">
                  Let&apos;s talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}