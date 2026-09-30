"use client";

import { useEffect, useState } from "react";

export default function SoundCurveSlider() {
  const [curve, setCurve] = useState("harman");
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    setAudioContext(new (window.AudioContext || (window as any).webkitAudioContext)());
  }, []);

  const playTone = (freq: number) => {
    if (!audioContext) return;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.1, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    osc.start(audioContext.currentTime);
    osc.stop(audioContext.currentTime + 0.3);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm tracking-widest mb-4">ACOUSTIC PROFILE</h3>
        <div className="grid grid-cols-3 gap-3">
          {["studio", "harman", "bass"].map((c) => (
            <button
              key={c}
              onClick={() => {
                setCurve(c);
                playTone(440 + Math.random() * 200);
              }}
              className={`py-3 px-4 text-xs tracking-widest transition border ${
                curve === c
                  ? "border-bronze bg-bronze/10 text-bronze"
                  : "border-ivory/20 text-ivory/60"
              }`}
            >
              {c === "studio"
                ? "Studio Flat"
                : c === "harman"
                  ? "Harman Target"
                  : "Bass Boost"}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 400 120" className="w-full h-24 stroke-bronze/30 fill-none">
        <polyline
          points={
            curve === "studio"
              ? "0,60 50,55 100,50 150,48 200,50 250,55 300,60 350,65 400,70"
              : curve === "harman"
                ? "0,70 50,60 100,50 150,45 200,45 250,50 300,60 350,75 400,85"
                : "0,80 50,70 100,55 150,45 200,50 250,60 300,70 350,80 400,85"
          }
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
