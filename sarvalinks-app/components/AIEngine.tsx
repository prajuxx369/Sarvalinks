"use client";

import Image from "next/image";
import { Brain, Bot, BarChart3, BookOpen, Map } from "lucide-react";
import GSAPReveal from "./GSAPReveal";

export default function AIEngine() {
  const features = [
    { 
        icon: Brain, 
        title: "AI-Powered Job Matching", 
        desc: "Algorithms that understand potential beyond resumes.", 
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop" 
    },
    { 
        icon: Bot, 
        title: "Robotic Interviews", 
        desc: "Instant, bias-free first rounds conducted by advanced AI avatars.", 
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop" 
    },
    { 
        icon: BarChart3, 
        title: "Workforce Analytics", 
        desc: "Real-time supply & demand heatmaps for policy makers.", 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
    },
    { 
        icon: BookOpen, 
        title: "AI Study Companion", 
        desc: "Personalized learning paths to bridge skill gaps automatically.", 
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop" 
    },
    { 
        icon: Map, 
        title: "Real-Time Workforce Map", 
        desc: "Visualizing the pulse of India's talent across 28 states.", 
        img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
    },
  ];

  return (
    <section id="ai-engine" className="py-32 bg-[#050505] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <GSAPReveal>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gradient-gold mb-6">
                Artificial Intelligence. <br/>
                <span className="text-white">Human Purpose.</span>
            </h2>
          </GSAPReveal>
          <GSAPReveal delay={0.2}>
            <p className="text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
                We use advanced neural networks not to replace humans, but to elevate them.
            </p>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
             {features.map((feature, idx) => (
                <GSAPReveal key={idx} delay={idx * 0.1} className={`${idx === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""} h-full`}>
                    <div className="relative min-h-[24rem] h-auto rounded-2xl overflow-hidden border border-white/10 group hover:border-gold/60 transition-all duration-500 shadow-2xl flex flex-col">
                        
                        {/* Image */}
                        <div className="absolute inset-0">
                            <Image 
                                src={feature.img} 
                                alt={feature.title} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 flex flex-col justify-end flex-grow min-h-[inherit]">
                            <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-gold mb-6 transition-colors duration-300">
                                <feature.icon className="text-gray-300 group-hover:text-black w-7 h-7 transition-colors" />
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gold-light transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 group-hover:text-white transition-colors leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>

                        {/* Hover Overlay Line */}
                        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </GSAPReveal>
             ))}
        </div>
      </div>
    </section>
  );
}
