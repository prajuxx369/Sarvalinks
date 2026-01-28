"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export default function Leadership() {
  const principles = [
    "Technology with Purpose",
    "Profit with Integrity",
    "Innovation with Inclusion",
    "Growth with Nation Building"
  ];

  return (
    <section id="leadership" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-24 max-w-5xl mx-auto p-12 border border-gold/20 bg-white/[0.02] backdrop-blur-sm rounded-2xl relative shadow-2xl"
        >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#111] border border-gold/30 rounded-full flex items-center justify-center">
                 <BadgeCheck className="text-gold w-8 h-8" />
             </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gradient-gold mb-8 leading-tight pt-4">
            “We’re not creating a company. We’re creating history.”
            </h2>
            <p className="text-white text-lg font-medium tracking-wide border-t border-gold/10 inline-block pt-4 px-8">— Ashish Naik, Founder & Visionary, SarvaLinks</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 border border-white/5 bg-white/5 rounded-lg hover:bg-gold/10 hover:border-gold/30 transition-all duration-300"
                >
                    <p className="text-gold-light text-lg font-serif font-medium">{item}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
