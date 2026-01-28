"use client";

import { useRef } from "react";
import Image from "next/image";
import { Landmark, Briefcase, GraduationCap, School, Users, FileText } from "lucide-react";
import GSAPReveal from "./GSAPReveal";

export default function Vision() {
  const exchanges = [
    { icon: Landmark, title: "Government Job Exchange", desc: "Access to all public sector opportunities", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop" },
    { icon: Briefcase, title: "Private Job Exchange", desc: "Connect with India’s top companies", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
    { icon: GraduationCap, title: "Internship Exchange", desc: "Launch careers with real experience", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2069&auto=format&fit=crop" },
    { icon: School, title: "Campus Recruitment Exchange", desc: "Bridge education to employment", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2035&auto=format&fit=crop" },
    { icon: Users, title: "Manpower Exchange", desc: "Skilled workforce on demand", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2072&auto=format&fit=crop" },
    { icon: FileText, title: "Entrance Exam Exchange", desc: "Prepare, practice, succeed", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <section id="vision" className="py-32 bg-[#0a0b0d] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <GSAPReveal>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient-gold">
              Building the World’s Largest <br />
              <span className="italic font-light text-white">Workforce Ecosystem</span>
            </h2>
          </GSAPReveal>
          <GSAPReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase">
              Six Unified Exchanges. <span className="text-white font-medium">One Digital Nation.</span>
            </p>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exchanges.map((item, idx) => (
            <GSAPReveal key={idx} delay={idx * 0.1}>
              <div
                className="group relative min-h-[24rem] h-auto rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-500 shadow-2xl flex flex-col"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 p-8 flex flex-col justify-end flex-grow min-h-[inherit]">
                    <div className="mb-auto transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center text-black mb-4 shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                            <item.icon size={24} />
                        </div>
                    </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-light transition-colors transform translate-y-0 group-hover:-translate-y-2 duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {item.desc}
                  </p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
              </div>
            </GSAPReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
