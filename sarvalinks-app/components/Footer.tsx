"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 bg-linear-to-t from-[#050505] to-[#0f1012] relative overflow-hidden border-t border-gold/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#aa8c2c_0%,_transparent_50%)] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gradient-gold mb-10 leading-relaxed max-w-5xl mx-auto drop-shadow-2xl">
            “The future will not ask how many people India has. <br />
            It will ask how productive, skilled, and empowered they are.”
            </h2>
            
            <p className="text-white font-medium text-2xl mb-8">SarvaLinks is the answer.</p>
            
            <p className="text-gold font-bold text-lg md:text-xl uppercase tracking-widest mb-12">
                India’s Workforce. India’s Growth Engine. India’s Future.
            </p>
        </motion.div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-light gap-4">
            <p className="tracking-wide">© 2024 SarvaLinks. A National Mission.</p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <a href="https://www.sarvalinks.in" className="hover:text-gold transition-colors">www.sarvalinks.in</a>
                <span className="hidden md:block w-px h-4 bg-white/20"></span>
                <a href="mailto:connect@sarvalinks.in" className="hover:text-gold transition-colors">connect@sarvalinks.in</a>
                <span className="hidden md:block w-px h-4 bg-white/20"></span>
                <span>+91-XXXXXXXXXX</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
