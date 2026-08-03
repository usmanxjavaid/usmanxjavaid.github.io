"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/site";

// Deterministic positions around a circle so the graph reads as an
// intentional network diagram, not scattered noise.
const nodes = projects.slice(0, 8).map((p, i) => {
  const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
  const radius = 150;
  return {
    ...p,
    x: 200 + Math.cos(angle) * radius,
    y: 200 + Math.sin(angle) * radius,
  };
});

export function AgentNetwork() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* connecting lines */}
      {nodes.map((n, i) => (
        <motion.line
          key={`line-${n.slug}`}
          x1="200"
          y1="200"
          x2={n.x}
          y2={n.y}
          stroke="url(#lineGrad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 + i * 0.08, ease: "easeOut" }}
        />
      ))}

      {/* central hub glow */}
      <circle cx="200" cy="200" r="90" fill="url(#hubGlow)" opacity="0.35" />

      {/* hub node */}
      <motion.circle
        cx="200"
        cy="200"
        r="7"
        fill="var(--violet)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {/* agent nodes */}
      {nodes.map((n, i) => (
        <motion.g
          key={n.slug}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
        >
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="4.5"
            fill="var(--cyan)"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
          <circle cx={n.x} cy={n.y} r="9" fill="none" stroke="var(--cyan)" strokeOpacity="0.25" />
        </motion.g>
      ))}
    </svg>
  );
}