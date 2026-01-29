"use client";

import { Briefcase, GraduationCap, Building2, TrendingUp, CheckCircle2 } from "lucide-react";
import GSAPReveal from "./GSAPReveal";
import Image from "next/image";

export default function Mission() {
  const realities = [
    { text: "Every Indian can discover opportunities aligned to skills, location, and growth path." },
    { text: "Every student receives guided employability from education to employment." },
    { text: "Every employer accesses verified, AI-matched, job-ready talent." },
    { text: "Governments gain real-time workforce intelligence to drive policy and GDP growth." },
  ];

  return (
    <section id="mission" className="py-32 bg-background relative border-t border-white/5 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2671&auto=format&fit=crop"
            alt="India Mission Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <GSAPReveal>
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md">
                <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase">Not a Startup</span>
            </div>
          </GSAPReveal>

          <GSAPReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white max-w-5xl mx-auto leading-tight">
              A <span className="text-gradient-gold">National Infrastructure Mission</span>
            </h2>
          </GSAPReveal>
          
          <GSAPReveal delay={0.2}>
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                <p>
                    SarvaLinks is not a company trying to disrupt hiring. 
                    It is a nation-building digital infrastructure designed to systematically transform India’s employment ecosystem.
                </p>
                <p className="border-l-2 border-gold/50 pl-6 italic text-gray-400">
                    Just as highways enabled commerce and digital payments enabled inclusion, <br/>
                    <strong className="text-white not-italic">SarvaLinks enables employability, productivity, and economic expansion.</strong>
                </p>
            </div>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {realities.map((item, idx) => (
            <GSAPReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 h-full rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300 flex items-start gap-4 group hover:bg-[#0f1012]">
                    <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-gold" />
                    </div>
                    <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {item.text}
                    </p>
                </div>
            </GSAPReveal>
          ))}
        </div>

        <GSAPReveal delay={0.6}>
            <div className="mt-20 text-center">
                <p className="text-xl md:text-2xl font-serif text-white tracking-wide">
                    SarvaLinks is the <span className="text-gradient-gold font-bold">digital nervous system</span> of India’s workforce.
                </p>
            </div>
        </GSAPReveal>
      </div>
    </section>
  );
}
