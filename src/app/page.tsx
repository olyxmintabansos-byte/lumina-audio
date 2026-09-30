"use client";

import GlobalMaisonBar from "@/components/GlobalMaisonBar";
import SoundCurveSlider from "@/components/SoundCurveSlider";
import MaterialFinishSwitcher from "@/components/MaterialFinishSwitcher";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <GlobalMaisonBar />
      <main className="pt-16">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-bronze mb-6">
            SWISS PRECISION AUDIO • SINCE 2024
          </p>
          <h1 className="text-5xl md:text-7xl text-ivory leading-tight max-w-4xl mb-6">
            Lumina Reference<br />
            <span className="text-bronze">Master</span>
          </h1>
          <p className="text-ivory/60 max-w-2xl mb-12 text-lg">
            Planar magnetic headphones with neodymium array drivers.
            4 Hz – 48,000 Hz frequency response. Handcrafted in Geneva
            with obsidian-finished beryllium titanium housings.
          </p>
          <div className="flex gap-4 items-center">
            <CartDrawer />
            <a
              href="#specs"
              className="px-6 py-3 border border-ivory/20 text-sm tracking-widest hover:border-bronze transition"
            >
              SPECIFICATIONS
            </a>
          </div>

          {/* Hero SVG */}
          <div className="mt-16">
            <svg viewBox="0 0 400 200" className="w-80 h-40">
              <defs>
                <linearGradient id="hpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a1f" />
                  <stop offset="100%" stopColor="#0a0a0c" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Band */}
              <path
                d="M 120 60 Q 200 20 280 60"
                fill="none"
                stroke="#c59b27"
                strokeWidth="3"
                filter="url(#glow)"
              />
              {/* Left cup */}
              <ellipse cx="120" cy="110" rx="45" ry="55" fill="url(#hpGrad)" />
              <ellipse cx="120" cy="110" rx="30" ry="38" fill="none" stroke="#c59b27" strokeWidth="1.5" opacity="0.6" />
              {/* Right cup */}
              <ellipse cx="280" cy="110" rx="45" ry="55" fill="url(#hpGrad)" />
              <ellipse cx="280" cy="110" rx="30" ry="38" fill="none" stroke="#c59b27" strokeWidth="1.5" opacity="0.6" />
              {/* Arms */}
              <line x1="120" y1="60" x2="120" y2="70" stroke="#c59b27" strokeWidth="2" />
              <line x1="280" y1="60" x2="280" y2="70" stroke="#c59b27" strokeWidth="2" />
            </svg>
          </div>
        </section>

        {/* Telemetry Specs */}
        <section id="specs" className="py-24 px-6 border-t border-bronze/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-16">
              Frequency <span className="text-bronze">Telemetry</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "4 Hz", label: "Low End" },
                { value: "48 kHz", label: "High End" },
                { value: "105 dB", label: "Sensitivity" },
                { value: "32 Ω", label: "Impedance" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center py-8 border border-bronze/20"
                >
                  <div className="text-2xl text-bronze font-semibold mb-2">
                    {s.value}
                  </div>
                  <div className="text-xs tracking-widest text-ivory/50">
                    {s.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sound Curve */}
        <section className="py-24 px-6 bg-obsidian border-t border-bronze/10">
          <div className="max-w-3xl mx-auto">
            <SoundCurveSlider />
          </div>
        </section>

        {/* Material Finish */}
        <section className="py-24 px-6 border-t border-bronze/10">
          <div className="max-w-3xl mx-auto">
            <MaterialFinishSwitcher />
          </div>
        </section>

        {/* Engineering */}
        <section className="py-24 px-6 border-t border-bronze/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-12">
              Neodymium <span className="text-bronze">Array</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Planar Magnetic",
                  desc: "Ultra-thin diaphragm suspended in a uniform magnetic field. Zero distortion at any volume.",
                },
                {
                  title: "Beryllium Housing",
                  desc: "CNC-machined from medical-grade titanium alloy. Each unit serialized and registered.",
                },
                {
                  title: "Hand-Stitched Pads",
                  desc: "Lambskin protein leather with memory foam. 480-hour break-in period for optimal seal.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="p-8 border border-bronze/20 text-left"
                >
                  <h3 className="text-lg text-bronze mb-3">{f.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 px-6 border-t border-bronze/10 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Reserve Your <span className="text-bronze">Reference</span>
          </h2>
          <p className="text-ivory/60 mb-8 max-w-xl mx-auto">
            Limited to 500 units per production run. Each unit
            arrives in a hand-finished walnut presentation case
            with serial certification.
          </p>
          <CartDrawer />
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-bronze/10 text-center text-xs text-ivory/30 tracking-widest">
          <p>© 2024 OLYX ATELIER • LUMINA AUDIO DIVISION</p>
          <p className="mt-2">SWISS PRECISION ENGINEERING</p>
        </footer>
      </main>
    </>
  );
}
