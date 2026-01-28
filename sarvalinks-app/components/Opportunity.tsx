"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, Gem, Bot, Briefcase } from "lucide-react";

export default function Opportunity() {
  const pillars = [
    { icon: CircleDollarSign, title: "Employer Subscriptions" },
    { icon: Gem, title: "Premium Plans" },
    { icon: Bot, title: "AI Interviews" },
    { icon: Briefcase, title: "Sponsored Jobs" },
  ];

  return (
    <section id="opportunity" className="py-32 bg-[#080808] relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-6">
            A $Trillion Opportunity
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-20 font-light">
            India’s workforce is a <span className="text-white font-bold">$2.5 Trillion untapped economy</span>
            </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {pillars.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-8 border border-gold/20 rounded-xl bg-gradient-to-b from-white/5 to-transparent hover:from-gold/10 hover:to-gold/5 hover:border-gold/50 transition-all duration-300 flex flex-col items-center gap-6 group"
                >
                    <item.icon className="text-gold w-10 h-10 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all" />
                    <h3 className="text-sm md:text-md font-bold text-white uppercase tracking-widest leading-relaxed">{item.title}</h3>
                </motion.div>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-4 rounded-full border border-gold/40
             bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 text-gold font-bold text-xl tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
            SarvaLinks = National Wealth Creation
        </motion.div>
      </div>
    </section>
  );
}
