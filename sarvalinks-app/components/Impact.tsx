"use client";

import { motion } from "framer-motion";

export default function Impact() {
  const milestones = [
    { goal: "Employment Access for All", target: "100M+ users", year: "By 2030" },
    { goal: "Companies Connected", target: "10M+ employers", year: "By 2030" },
    { goal: "AI Workforce Insights", target: "Live Workforce Map", year: "By 2027" },
    { goal: "Skill Development", target: "50M+ upskilled", year: "By 2030" },
    { goal: "Global Integration", target: "India #1 workforce exporter", year: "By 2030" },
  ];

  return (
    <section id="impact" className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-6">
            Vision 2030
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row justify-between items-center py-8 border-b border-gold/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 px-8 rounded-lg"
            >
              <div className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0 w-full md:w-1/3 group-hover:pl-2 transition-all">{item.goal}</div>
              <div className="text-gold font-medium mb-2 md:mb-0 w-full md:w-1/3 text-center md:text-left text-lg">{item.target}</div>
              <div className="text-gray-400 font-light w-full md:w-1/3 text-right font-mono">{item.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
