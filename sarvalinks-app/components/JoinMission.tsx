"use client";

import { motion } from "framer-motion";
import { DollarSign, Handshake, Rocket } from "lucide-react";
import GSAPReveal from "./GSAPReveal";

export default function JoinMission() {
  const cards = [
    { 
        icon: DollarSign, 
        title: "Investors", 
        role: "Strategic Partner",
        desc: "Participate in a platform designed for scale, longevity, and national impact.",
        highlight: "Invest in India's Future"
    },
    { 
        icon: Handshake, 
        title: "Institutions", 
        role: "Eco-system Partner",
        desc: "Integrate into a unified employment ecosystem shaping India’s next decade.",
        highlight: "Unify the Ecosystem"
    },
    { 
        icon: Rocket, 
        title: "Builders", 
        role: "Visionary Talent",
        desc: "Work on problems that matter — at population scale.",
        highlight: "Build for Billions"
    },
  ];

  return (
    <section id="join-mission" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <GSAPReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-6">
               Invitation to Build <br /> India’s Future
            </h2>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((item, idx) => (
            <GSAPReveal key={idx} delay={idx * 0.1} className="h-full">
                <div className="h-full p-10 border border-white/10 rounded-2xl bg-[#0f1012] hover:border-gold/50 hover:bg-[#151618] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden">
                    <div className="mb-6 w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20 group-hover:scale-110 transition-transform">
                        <item.icon className="text-gold w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gold text-sm font-bold tracking-widest uppercase mb-6">{item.role}</p>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">{item.desc}</p>
                    
                    <button className="px-8 py-3 rounded-full border border-gold/30 text-gold font-bold hover:bg-gold hover:text-black transition-all duration-300 w-full">
                        {item.highlight}
                    </button>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </GSAPReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
