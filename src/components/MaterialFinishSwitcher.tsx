"use client";

import { useState } from "react";

type Finish = "obsidian" | "beryllium" | "walnut";

export default function MaterialFinishSwitcher() {
  const [finish, setFinish] = useState<Finish>("obsidian");

  const finishes: Record<
    Finish,
    {
      label: string;
      color: string;
      grad: string;
    }
  > = {
    obsidian: {
      label: "Stealth Obsidian",
      color: "#0a0a0c",
      grad: "linear-gradient(135deg, #0a0a0c 0%, #1a1a1f 100%)",
    },
    beryllium: {
      label: "Raw Beryllium Titanium",
      color: "#c0c0c0",
      grad: "linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 100%)",
    },
    walnut: {
      label: "Smoked Walnut Inlay",
      color: "#8b6f47",
      grad: "linear-gradient(135deg, #a0845a 0%, #6b4423 100%)",
    },
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm tracking-widest mb-4">360° MATERIAL FINISH</h3>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(finishes) as Finish[]).map((f) => (
            <button
              key={f}
              onClick={() => setFinish(f)}
              className={`py-3 px-4 text-xs tracking-widest transition border ${
                finish === f
                  ? "border-bronze bg-bronze/10"
                  : "border-ivory/20"
              }`}
            >
              {finishes[f].label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-8">
        <svg viewBox="0 0 200 200" className="w-32 h-32">
          <defs>
            <linearGradient
              id="headphoneGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={finishes[finish].color} />
              <stop offset="100%" stopColor={finishes[finish].color} />
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodOpacity="0.3"
              />
            </filter>
          </defs>

          <ellipse
            cx="100"
            cy="100"
            rx="60"
            ry="70"
            fill="url(#headphoneGradient)"
            filter="url(#shadow)"
            opacity="0.9"
          />
          <circle
            cx="70"
            cy="80"
            r="18"
            fill="none"
            stroke="#c59b27"
            strokeWidth="2"
          />
          <circle
            cx="130"
            cy="80"
            r="18"
            fill="none"
            stroke="#c59b27"
            strokeWidth="2"
          />
          <path
            d="M 70 100 Q 100 110 130 100"
            stroke="#c59b27"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
