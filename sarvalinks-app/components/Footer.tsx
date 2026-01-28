"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 bg-gradient-to-t from-[#050505] to-[#0f1012] relative overflow-hidden border-t border-gold/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#aa8c2c_0%,_transparent_50%)] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gradient-gold mb-10 leading-relaxed max-w-5xl mx-auto drop-shadow-2xl">
            “There will come a time when the world will look at India — not as a land of seekers, but as the land of solvers.”
            </h2>
            <p className="text-gold font-bold text-xl mb-12 uppercase tracking-widest">SarvaLinks is that beginning</p>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-loose font-light">
                Let’s build a future where no Indian remains unemployed,<br />
                where every skill finds purpose,<br />
                and where technology uplifts humanity.
            </p>
        </motion.div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="font-serif text-2xl text-gold mb-4 md:mb-0 tracking-wide">India’s Pride. India’s Future.</p>
            <p className="tracking-widest">© 2024 SarvaLinks. A National Mission.</p>
        </div>
        
        <div className="mt-8 text-xs text-gray-700">
            Designed for the Future of India
        </div>
      </div>
    </footer>
  );
}
