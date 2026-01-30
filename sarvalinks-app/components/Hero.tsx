"use client";

import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react";
import GSAPReveal from "./GSAPReveal";

const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Hero() {
  const headlinePart1 = "India is not facing a jobs crisis.".split(" ");
  const headlinePart2 = "India is facing a workforce infrastructure crisis.".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background with cinematic video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2a2a_0%,#0f1012_70%)] opacity-60 z-10" />
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        >
            <source src="https://videos.pexels.com/video-files/853870/853870-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-background/90 via-transparent to-background z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Animated Headline */}
        <motion.div 
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight tracking-tight max-w-5xl mx-auto">
             <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-2 text-white/90">
                {headlinePart1.map((word, i) => (
                    <motion.span key={i} variants={wordAnimation}>{word}</motion.span>
                ))}
             </div>
             <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-gradient-gold drop-shadow-lg">
                {headlinePart2.map((word, i) => (
                    <motion.span key={i} variants={wordAnimation}>{word}</motion.span>
                ))}
             </div>
          </h1>
        </motion.div>
        
        {/* Animated Subtext */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed mb-10">
            <span className="text-white font-medium">SarvaLinks is India’s first AI-powered National Employment & Workforce Transformation Ecosystem</span> — built to eliminate unemployment, elevate workforce quality, and make India the world’s most productive talent economy.
          </h2>
        </motion.div>

        <GSAPReveal delay={1.0}>
            <div className="h-px w-24 bg-linear-to-r from-transparent via-gold/50 to-transparent mx-auto mb-10"></div>
            <p className="max-w-3xl mx-auto text-base text-gray-400 mb-12 leading-relaxed font-light">
                For decades, India’s talent has remained fragmented. <br className="hidden md:block"/>
                <span className="text-gold/80 italic">SarvaLinks solves this at the foundation.</span>
            </p>
        </GSAPReveal>

        <GSAPReveal delay={1.2}>
            <div className="flex flex-col items-center gap-4">
                <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Watch the Vision</span>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group btn-gold px-8 py-4 rounded-full text-base font-bold flex items-center gap-3 mx-auto shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] border border-gold/20"
                >
                    <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <Play size={16} fill="currentColor" className="ml-1" />
                    </div>
                    Watch Cinematic Film
                </motion.button>
            </div>
        </GSAPReveal>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-linear-to-b from-transparent via-gold/30 to-transparent">
            <motion.div 
                animate={{ y: [0, 64, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-1/2 bg-gold/80"
            />
        </div>
      </motion.div>
    </section>
  );
}
