"use client";

import { Globe2, Users, TrendingUp } from "lucide-react";
import GSAPReveal from "./GSAPReveal";

export default function WhyNow() {
  return (
    <section id="why-now" className="py-32 bg-background relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-purple-900/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-gold/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <GSAPReveal>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gradient-gold mb-6">
                Why the World Needs <br /> SarvaLinks Now
            </h2>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left mb-24">
          {/* Stat 1 */}
          <GSAPReveal className="h-full">
            <div className="h-full bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 group hover:bg-white/[0.07]">
                <div className="mb-8 w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-gold/20">
                    <Globe2 className="text-gold w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">65%</h3>
                <p className="text-xl font-medium text-gold-light mb-4">India — The Youngest Nation</p>
                <p className="text-gray-400 text-sm leading-relaxed">With the majority of the population under 35, India is poised to supply the global workforce for decades.</p>
            </div>
          </GSAPReveal>

          {/* Stat 2 */}
          <GSAPReveal delay={0.2} className="h-full">
            <div className="h-full bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 group hover:bg-white/[0.07]">
                <div className="mb-8 w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-gold/20">
                    <Users className="text-gold w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">95%</h3>
                <p className="text-xl font-medium text-gold-light mb-4">Outside Digital Systems</p>
                <p className="text-gray-400 text-sm leading-relaxed">A massive workforce remains untapped by technology, waiting for a platform to bridge the gap.</p>
            </div>
          </GSAPReveal>

          {/* Stat 3 */}
          <GSAPReveal delay={0.4} className="h-full">
            <div className="h-full bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 group hover:bg-white/[0.07]">
                <div className="mb-8 w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-gold/20">
                    <TrendingUp className="text-gold w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">1 Crore</h3>
                <p className="text-xl font-medium text-gold-light mb-4">Youth Entering Annually</p>
                <p className="text-gray-400 text-sm leading-relaxed">Every year, 10 million new job seekers enter the market, demanding efficient placement at scale.</p>
            </div>
          </GSAPReveal>
        </div>

        <GSAPReveal delay={0.6}>
            <div className="text-center relative max-w-4xl mx-auto border sm:border-t sm:border-b border-gold/20 py-16 px-4">
            <div className="hidden sm:block absolute top-0 left-0 w-20 h-[1px] bg-gold"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-20 h-[1px] bg-gold"></div>
            
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                "SarvaLinks changes this <span className="text-gold italic">forever.</span>"
            </h3>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                We’re not just building a platform — <br />
                <span className="text-white font-medium">We’re architecting India’s economic transformation.</span>
            </p>
            </div>
        </GSAPReveal>
      </div>
    </section>
  );
}
