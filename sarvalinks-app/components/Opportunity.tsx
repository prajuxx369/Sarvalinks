"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  BadgeCheck, 
  Bot, 
  Crown, 
  Target, 
  Users, 
  Landmark,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";

export default function Opportunity() {
  const opportunities = [
    { 
      icon: Building2, 
      title: "Employer Subscriptions", 
      desc: "Enterprise access to India's largest pre-verified talent pools.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
    },
    { 
      icon: BadgeCheck, 
      title: "AI Skill Certifications", 
      desc: "Blockchain-verified credentials.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    { 
      icon: Bot, 
      title: "Robotic Interviews", 
      desc: "Bias-free, AI-driven first rounds.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop"
    },
    { 
      icon: Crown, 
      title: "Premium Learning", 
      desc: "Exclusive upskilling pathways.",
      img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"
    },
    { 
      icon: Target, 
      title: "Targeted Advertising", 
      desc: "Precision reach for recruiters.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    { 
      icon: Users, 
      title: "Manpower Deployments", 
      desc: "On-demand freelance workforce for gig-economy scale.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
    },
    { 
      icon: Landmark, 
      title: "Government Data Integrations", 
      desc: "Real-time workforce analytics powering national policy decisions and economic forecasting.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
      isWide: true
    },
  ];

  return (
    <section id="opportunity" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#050505]">
         <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent"></div>
         <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold/10 to-transparent"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-6 px-6 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md"
            >
                <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase">Economic Infrastructure</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 tracking-tight"
            >
                A <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-yellow-200 to-gold drop-shadow-2xl">$Trillion</span> Opportunity.
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group"
            >
                <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
                <h3 className="text-2xl md:text-4xl text-white font-medium mb-4 leading-tight">
                    India’s workforce is a <span className="text-gold font-bold">$2.5 Trillion untapped economy.</span>
                </h3>
                <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide">
                    SarvaLinks isn’t just employment — it’s <span className="text-white border-b border-gold/50">national wealth creation.</span>
                </p>
                
                 {/* Shine Effect */}
                 <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
            </motion.div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`group relative h-80 rounded-3xl overflow-hidden cursor-pointer ${item.isWide ? 'md:col-span-2 lg:col-span-3' : ''}`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image 
                            src={item.img} 
                            alt={item.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-40" 
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-[#0f1012]/80 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                        <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-md">
                            <ArrowUpRight className="text-gold w-5 h-5" />
                        </div>

                        <div className="mb-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20 mb-4 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors" />
                             </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-2 md:line-clamp-none">
                                {item.desc}
                            </p>
                        </div>
                    </div>

                    {/* Border Hover */}
                    <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-gold/50 transition-colors duration-300 pointer-events-none"></div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
