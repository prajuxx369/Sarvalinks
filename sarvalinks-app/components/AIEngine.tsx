"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Brain, Bot, BarChart3, BookOpen, Map, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AIEngine() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    { 
        icon: Brain, 
        title: "AI-Powered Job Matching", 
        desc: "Precision matching by skill, location, growth potential.", 
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop" 
    },
    { 
        icon: Bot, 
        title: "Robotic Interviews", 
        desc: "Bias-free, scalable candidate evaluation.", 
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop" 
    },
    { 
        icon: BarChart3, 
        title: "Workforce Analytics", 
        desc: "Real-time demand–supply intelligence for employers & governments.", 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
    },
    { 
        icon: BookOpen, 
        title: "AI Learning Companion", 
        desc: "Adaptive upskilling aligned to market demand.", 
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop" 
    },
    { 
        icon: Map, 
        title: "India Workforce Map", 
        desc: "Live visualization of employment, skills, and gaps.", 
        img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const container = containerRef.current;

    if (section && trigger && container) {
        const scrollWidth = container.scrollWidth - window.innerWidth + 100; // Extra buffer

        const pin = gsap.fromTo(
            container,
            { x: 0 },
            {
                x: -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: `+=${scrollWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }
  }, []);

  return (
    <section ref={sectionRef} id="ai-engine" className="bg-[#050505] relative overflow-hidden">
        
      <div ref={triggerRef} className="h-screen flex flex-col justify-center relative">
         <div className="container mx-auto px-6 mb-12 shrink-0 relative z-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gradient-gold mb-4">
                Artificial Intelligence with <span className="text-white block md:inline">National Purpose.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light tracking-wide max-w-3xl">
                SarvaLinks embeds AI at the infrastructure level. 
                <span className="text-white font-medium block mt-2">This is not automation. This is workforce intelligence at national scale.</span>
            </p>
         </div>

         <div ref={containerRef} className="flex gap-8 px-6 md:px-20 w-max relative z-10 items-center">
             {features.map((feature, idx) => (
                <div 
                    key={idx} 
                    className="w-[400px] md:w-[500px] h-[350px] relative group rounded-3xl overflow-hidden border border-white/10 shrink-0 bg-[#0f1012]"
                >
                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <Image 
                            src={feature.img} 
                            alt={feature.title} 
                            fill 
                            className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="mb-4 p-3 bg-white/10 backdrop-blur-md w-fit rounded-xl border border-white/20 group-hover:bg-gold/20 group-hover:border-gold/50 transition-colors">
                            <feature.icon className="w-8 h-8 text-white group-hover:text-gold transition-colors" />
                        </div>
                        
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-300 text-sm mb-6 line-clamp-2 md:line-clamp-none opacity-80 group-hover:opacity-100 transition-opacity">
                            {feature.desc}
                        </p>
                        
                        <div className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-wider group/link cursor-pointer w-fit">
                            Explore <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
             ))}
         </div>
      </div>
    </section>
  );
}
