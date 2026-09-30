"use client";

import { useState } from "react";

type Currency = "USD" | "IDR" | "EUR";

export default function GlobalMaisonBar() {
  const [currency, setCurrency] = useState<Currency>("USD");

  const prices: Record<Currency, string> = {
    USD: "$1,490",
    IDR: "Rp 23.500.000",
    EUR: "€1,380",
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-obsidian border-b border-bronze/30">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-xs tracking-widest">
        <div>OLYX ATELIER • THE 10 MAISONS</div>

        <div className="flex gap-8 items-center">
          <div className="hidden sm:flex gap-2">
            {(["USD", "IDR", "EUR"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-2 py-1 transition ${
                  currency === c ? "text-bronze" : "text-ivory/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="text-bronze font-semibold">{prices[currency]}</div>
        </div>
      </div>
    </div>
  );
}
