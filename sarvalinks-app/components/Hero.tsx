"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import GSAPReveal from "./GSAPReveal";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      scale: 1.1,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with optimized image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2a2a_0%,#0f1012_70%)] opacity-60" />
        <div 
            ref={bgRef}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2676&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"
        ></div>
        <div className="absolute inset-0 bg-linear-to-b from-background/90 via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <GSAPReveal>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-serif mb-6 leading-tight tracking-tight">
             From Unemployment to <br />
             <span className="text-gradient-gold drop-shadow-lg">Unstoppable</span>
          </h1>
        </GSAPReveal>
        
        <GSAPReveal delay={0.3}>
          <h2 className="text-xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide">
            From Potential to Prosperity
          </h2>
        </GSAPReveal>

        <GSAPReveal delay={0.5}>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10 opacity-50"></div>
        </GSAPReveal>

        <GSAPReveal delay={0.7}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            There was a time when India struggled with unemployment. <br />
            Today, India stands as the World’s Workforce Superpower. <br />
            <span className="text-gold-light font-medium mt-4 block">This is not just a platform — it’s a revolution.</span>
          </p>
        </GSAPReveal>

        <GSAPReveal delay={0.9}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group btn-gold px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]"
          >
            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <Play size={20} fill="currentColor" className="ml-1" />
            </div>
            Watch the 3-Minute Vision Film
          </motion.button>
        </GSAPReveal>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gold/60 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0"></div>
      </motion.div>
    </section>
  );
}
