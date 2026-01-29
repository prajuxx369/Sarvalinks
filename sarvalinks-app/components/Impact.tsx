"use client";

import { motion } from "framer-motion";
import GSAPReveal from "./GSAPReveal";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function Impact() {
  const milestones = [
    { objective: "100M+ citizens onboarded", impact: "Employment inclusion" },
    { objective: "10M+ employers connected", impact: "Business productivity" },
    { objective: "Live Workforce Intelligence", impact: "Smarter policy decisions" },
    { objective: "50M+ professionals upskilled", impact: "Higher per-capita income" },
    { objective: "Global workforce leadership", impact: "Export of skilled talent" },
  ];

  return (
    <section id="vision-2030" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[50rem] bg-gold/5 blur-[150px] rounded-full pointer-events-none opacity-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <GSAPReveal>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase">Vision 2030</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                    Workforce-Led <br /> <span className="text-gradient-gold">GDP Growth</span>
                </h2>
            </GSAPReveal>
        </div>

        <div className="max-w-5xl mx-auto relative">
           {/* Center Line for desktop */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gold/30 to-transparent"></div>

           {milestones.map((item, idx) => (
            <GSAPReveal key={idx} delay={idx * 0.1}>
                <div className="group relative flex flex-col md:flex-row justify-between items-center py-8 md:py-10 border-b md:border-none border-white/5 transition-all duration-500">
                    
                    {/* Objective (Left) */}
                    <div className="w-full md:w-[45%] text-center md:text-right pr-0 md:pr-10 mb-2 md:mb-0 relative order-1 md:order-1">
                        <div className="text-2xl md:text-4xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                            {item.objective.split(" ").map((word, i) => (
                                i === 0 ? <span key={i} className="text-gradient-gold">{word} </span> : <span key={i}>{word} </span>
                            ))}
                        </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-[#050505] border border-gold/50 items-center justify-center z-10 group-hover:scale-125 group-hover:border-gold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] order-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    </div>

                    {/* Impact (Right) */}
                    <div className="w-full md:w-[45%] text-center md:text-left pl-0 md:pl-10 relative order-3 md:order-3">
                        <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                            <span className="text-lg md:text-xl text-gray-300 font-light tracking-wide group-hover:text-white transition-colors">
                                {item.impact}
                            </span>
                        </div>
                    </div>

                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 -mx-4 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl"></div>
                </div>
            </GSAPReveal>
          ))}
        </div>

        <GSAPReveal delay={0.6}>
            <div className="mt-24 text-center max-w-4xl mx-auto border-t border-white/10 pt-12">
                <p className="text-xl md:text-3xl text-gray-400 font-serif leading-relaxed">
                    By 2030, SarvaLinks becomes India’s largest employment and productivity infrastructure — <br />
                    <span className="text-white font-medium italic mt-4 block">directly contributing to GDP growth.</span>
                </p>
            </div>
        </GSAPReveal>
      </div>
    </section>
  );
}
