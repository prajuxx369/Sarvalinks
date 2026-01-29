"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    const timer = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
                clearInterval(timer);
                return 100;
            }
            return prev + Math.floor(Math.random() * 10) + 1;
        });
    }, 150);

    // End loading sequence
    const timeout = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";
    }, 2500); // 2.5s total load time

    return () => {
        clearInterval(timer);
        clearTimeout(timeout);
        document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#d4af37_0%,_transparent_30%)] opacity-10 blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Text Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 text-center"
                >
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white tracking-widest uppercase mb-4">
                        Sarva<span className="text-gold">Links</span>
                    </h1>
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xs md:text-sm text-gray-400 font-light tracking-[0.5em] uppercase border-t border-gold/30 pt-4"
                    >
                        National Infrastructure Mission
                    </motion.div>
                </motion.div>

                {/* Loading Bar */}
                <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden mt-8">
                    <motion.div 
                        className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
                
                <div className="mt-2 text-gold font-mono text-xs">
                    {Math.min(progress, 100)}%
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
