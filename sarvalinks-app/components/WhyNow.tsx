"use client";

import { AlertTriangle, TrendingDown, Layers, Users, XCircle } from "lucide-react";
import GSAPReveal from "./GSAPReveal";

export default function WhyNow() {
  const problems = [
    { 
        icon: TrendingDown, 
        title: "Low Productivity", 
        desc: "India is the youngest major economy, yet productivity per worker remains low." 
    },
    { 
        icon: Users, 
        title: "Invisible Workforce", 
        desc: "Over 95% of the workforce is invisible to structured digital hiring systems." 
    },
    { 
        icon: Layers, 
        title: "Disconnected Silos", 
        desc: "Skills, jobs, exams, and training exist — but in isolated silos." 
    },
    { 
        icon: AlertTriangle, 
        title: "Employability Mismatch", 
        desc: "Every year, 1 crore youth enter the workforce, but employability remains mismatched." 
    },
  ];

  const results = [
      "Lost income for citizens", 
      "Inefficient hiring for businesses", 
      "Reduced national productivity", 
      "Suppressed GDP growth"
  ];

  return (
    <section id="problem" className="py-32 bg-[#080808] relative overflow-hidden">
        {/* Subtle Textured Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <GSAPReveal>
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-red-500/30 bg-red-500/5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-red-400 text-xs font-bold tracking-[0.2em] uppercase">Critical Analysis</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 max-w-5xl mx-auto leading-[1.1]">
                India’s Real Challenge Is Not <br /> Unemployment <span className="text-red-500">Alone.</span>
            </h2>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {problems.map((item, idx) => (
            <GSAPReveal key={idx} delay={idx * 0.1}>
                <div className="group h-full bg-[#111] p-10 rounded-3xl border border-white/5 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(239,68,68,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                        <item.icon className="w-24 h-24 text-red-500" />
                    </div>
                    
                    <div className="relative z-10 text-left">
                        <div className="mb-6 w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                            <item.icon className="text-red-500 group-hover:text-white w-7 h-7 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">{item.desc}</p>
                    </div>
                </div>
            </GSAPReveal>
          ))}
        </div>

        <GSAPReveal delay={0.4}>
            <div className="max-w-6xl mx-auto rounded-3xl bg-linear-to-r from-red-950/20 to-transparent border-l-4 border-red-600 p-8 md:p-12 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-left lg:w-1/2">
                        <h3 className="text-3xl font-serif font-bold text-white mb-4 flex items-center gap-3">
                            <XCircle className="text-red-500 w-8 h-8" />
                            The Result
                        </h3>
                        <p className="text-gray-300 font-light text-xl leading-relaxed">
                            Without a unified workforce intelligence layer, talent cannot translate into economic output.
                        </p>
                    </div>
                    
                    <div className="hidden lg:block w-px h-32 bg-white/10"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 lg:w-auto w-full">
                        {results.map((res, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="min-w-[8px] h-[8px] rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                                <span className="text-gray-200 text-lg font-medium">{res}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </GSAPReveal>
      </div>
    </section>
  );
}
