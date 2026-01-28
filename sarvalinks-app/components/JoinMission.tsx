"use client";

import { motion } from "framer-motion";
import { DollarSign, Handshake, Rocket } from "lucide-react";

export default function JoinMission() {
  const cards = [
    { icon: DollarSign, title: "I Want to Invest", desc: "Be part of India’s future" },
    { icon: Handshake, title: "Partner with SarvaLinks", desc: "Grow together, grow stronger" },
    { icon: Rocket, title: "Join the Mission", desc: "Build the revolution" },
  ];

  return (
    <section id="join-mission" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-6">
            Together, We Rise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-white/10 rounded-2xl bg-[#0f1012] hover:border-gold/50 hover:bg-[#151618] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <item.icon className="text-gold w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-10 h-10">{item.desc}</p>
              <button className="px-8 py-3 rounded-full btn-gold text-black font-bold w-full shadow-lg">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
