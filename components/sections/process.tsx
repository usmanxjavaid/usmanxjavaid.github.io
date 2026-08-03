import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "Map the workflow",
    description: "Figure out exactly what the agent needs to handle — and just as importantly, what it should hand off to a human.",
  },
  {
    title: "Build the core agent",
    description: "Tool-calling, knowledge base, and guardrails first. The conversation layer comes after the logic is solid.",
  },
  {
    title: "Wire up the channel",
    description: "Telegram, WhatsApp, Shopify, or web — integrated with real APIs, not a mocked demo.",
  },
  {
    title: "Log everything, then ship",
    description: "Every event traceable, every failure handled gracefully, configured for the client in under 30 minutes.",
  },
];

export function Process() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="How it comes together" title="Process" />
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="bg-surface p-7">
              <span className="font-mono text-xs text-text-faint">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-base font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}