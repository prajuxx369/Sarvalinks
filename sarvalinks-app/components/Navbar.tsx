"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Mission", id: "mission" },
  { name: "Vision", id: "vision" },
  { name: "AI Engine", id: "ai-engine" },
  { name: "Impact", id: "impact" },
  { name: "Opportunity", id: "opportunity" },
  { name: "Leadership", id: "leadership" },
  { name: "Join Mission", id: "join-mission" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-gold/10 py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Image 
            src="/logo.png" 
            alt="SarvaLinks Logo" 
            width={180} 
            height={60} 
            className="h-12 w-auto object-contain mix-blend-screen"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-8">
          {navItems.filter(item => item.id !== "join-mission").map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-medium text-gray-300 hover:text-gold transition-colors uppercase tracking-widest relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          <button
              onClick={() => scrollToSection("join-mission")}
              className="px-6 py-2 rounded-full bg-gold text-black text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
              Join Mission
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gold">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-b border-gold/20 overflow-hidden absolute w-full"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg font-medium text-gray-300 hover:text-gold transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
