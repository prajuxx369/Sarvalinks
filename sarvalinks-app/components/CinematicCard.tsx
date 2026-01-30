"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CinematicCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  img: string;
  className?: string;
  delay?: number;
}

export default function CinematicCard({ title, desc, icon: Icon, img, className = "", delay = 0 }: CinematicCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Stiffer spring for "heavy" premium feel
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  // Subtle rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Dynamic light effect
  const lightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const lightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`group relative h-[45rem] w-full flex flex-col rounded-3xl bg-[#121212] border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden ${className}`}
    >
      {/* Top Image Section (60%) */}
      <div className="relative h-[60%] w-full overflow-hidden bg-gray-900 group-hover:h-[65%] transition-all duration-500 ease-out">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#121212] to-transparent opacity-80" />
        
        {/* Floating Icon */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="absolute bottom-6 left-8 z-20"
        >
           <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#121212] border border-gold/20 shadow-lg group-hover:border-gold/50 group-hover:scale-110 transition-all duration-300">
             <Icon className="h-10 w-10 text-gold" />
           </div>
        </div>
      </div>

      {/* Bottom Content Section (40%) */}
      <div className="relative h-[40%] w-full p-10 flex flex-col bg-[#121212] group-hover:h-[35%] transition-all duration-500">
          <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
             <h3 className="text-4xl font-serif font-bold text-white mb-6 group-hover:text-gold transition-colors duration-300 leading-tight">{title}</h3>
             <p className="text-sm font-light text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300">{desc}</p>
             
             {/* Learn More / Arrow */}
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
               <span>Explore</span>
               <div className="w-8 h-px bg-gold"></div>
             </div>
          </div>

          {/* Golden Gradient Bottom Border */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Holographic Sheen Layer */}
      <motion.div 
        style={{ 
            background: `radial-gradient(circle at ${lightX} ${lightY}, rgba(255,255,255,0.08), transparent 40%)`,
            opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.3])
        }}
        className="absolute inset-0 z-30 rounded-3xl pointer-events-none mix-blend-overlay"
      />
    </motion.div>
  );
}
