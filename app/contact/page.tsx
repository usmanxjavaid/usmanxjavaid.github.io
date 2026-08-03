import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { GithubIcon } from "@/components/ui/brand-icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

const faqs = [
  {
    q: "What's the typical timeline?",
    a: "Most single-channel agents (Telegram or WhatsApp) take 1–2 weeks from kickoff to a working demo, depending on how much the knowledge base or integrations need building out.",
  },
  {
    q: "Do you work with existing systems?",
    a: "Yes — agents are usually built to plug into what you already run: your Shopify store, your booking calendar, your existing support docs.",
  },
  {
    q: "What do you need from me to start?",
    a: "A clear picture of the workflow you want automated, and access to whatever it needs to talk to — a calendar, a product catalog, a knowledge base.",
  },
];

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">Contact</p>
          <h1 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Let&apos;s build something that actually ships.
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1fr]">
          <Reveal delay={0.08}>
            <div className="mb-3 flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1.5 w-fit">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              <span className="font-mono text-xs text-cyan">Available for new projects</span>
            </div>

            <div className="mt-6 space-y-4">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-text-dim hover:text-text">
                <Mail size={16} className="text-text-faint" /> {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-text-dim">
                <MapPin size={16} className="text-text-faint" /> {siteConfig.location}
              </p>
              <p className="flex items-center gap-3 text-sm text-text-dim">
                <Clock size={16} className="text-text-faint" /> Usually replies within a day
              </p>
              <a href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-dim hover:text-text"
              >
                <GithubIcon className="h-4 w-4 text-text-faint" /> {siteConfig.github.replace("https://", "")}
              </a>
            </div>

            <div className="mt-14">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-faint">FAQ</p>
              <div className="space-y-5">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <p className="text-sm font-medium text-text">{f.q}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-text-dim">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="rounded-3xl border border-border bg-surface p-7 sm:p-9">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}