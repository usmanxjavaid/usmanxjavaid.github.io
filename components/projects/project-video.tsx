"use client";

import { useState } from "react";
import { Film } from "lucide-react";

export function ProjectVideo({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface font-mono text-xs text-text-faint">
        <Film size={20} />
        Demo video coming soon
      </div>
    );
  }

  return (
    <video
      className="aspect-video w-full rounded-2xl border border-border bg-black"
      controls
      preload="none"
      playsInline
      aria-label={`${name} demo video`}
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}