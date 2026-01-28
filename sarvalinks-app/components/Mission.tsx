"use client";

import { Briefcase, GraduationCap, Building2, TrendingUp } from "lucide-react";
import GSAPReveal from "./GSAPReveal";
import Image from "next/image";

export default function Mission() {
  const features = [
    { icon: Briefcase, title: "Every Job Seeker", desc: "Opportunity", sub: "Connecting talent to destiny." },
    { icon: GraduationCap, title: "Every Student", desc: "Guided Path", sub: "From classroom to career." },
    { icon: Building2, title: "Every Business", desc: "Perfect Talent", sub: "Growth powered by people." },
    { icon: TrendingUp, title: "Every Professional", desc: "Boundless Growth", sub: "Upskilling for the future." },
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
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <GSAPReveal>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient-gold">
              The Mission of a Billion Lives
            </h2>
          </GSAPReveal>
          
          <GSAPReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light mb-8 leading-relaxed">
              SarvaLinks is not a startup — it’s a <span className="text-gold font-serif italic">National Promise</span>.
              <br/>
              To eliminate unemployment, empower every Indian, and make India’s workforce truly world-class.
            </p>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <GSAPReveal key={idx} delay={idx * 0.1}>
                <div
                className="p-10 h-full rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300 text-center group hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col items-center justify-center relative overflow-hidden"
                >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <feature.icon className="w-24 h-24 text-gold transform rotate-12" />
                </div>

                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center border border-white/10 group-hover:border-gold group-hover:scale-110 transition-all duration-300 relative z-10">
                    <feature.icon className="text-gray-400 group-hover:text-gold w-7 h-7 transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-gold-light transition-colors z-10">{feature.title}</h3>
                <p className="text-gold font-bold uppercase text-sm tracking-widest mb-2 z-10">{feature.desc}</p>
                <p className="text-gray-500 text-xs z-10">{feature.sub}</p>
                </div>
            </GSAPReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
