"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Landmark, Briefcase, GraduationCap, School, Users, FileText, ArrowRight } from "lucide-react";
import GSAPReveal from "./GSAPReveal";
import Image from "next/image";
import { MouseEvent } from "react";

function CinematicCard({ item, index }: { item: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative h-[28rem] w-full rounded-2xl bg-[#0f1012] group perspective-1000 overflow-hidden cursor-pointer"
        >
             {/* Background Image */}
             <div className="absolute inset-0 z-0">
                <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end transform-style-3d translate-z-10 group-hover:translate-z-20 transition-transform">
                
                <div className="mb-auto transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                        <item.icon className="text-gold w-6 h-6" />
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-3 leading-tight group-hover:text-gold transition-colors text-shadow-lg">
                        {item.title}
                    </h3>
                    <div className="w-12 h-1 bg-gold mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    <p className="text-gray-300 text-lg font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.desc}
                    </p>
                </div>
            </div>

            {/* Glowing Border effect */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-gold/50 transition-colors duration-500 z-20 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/20 opacity-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 z-20 pointer-events-none"></div>
        </motion.div>
    );
}

export default function Vision() {
  const exchanges = [
    { 
        icon: Landmark, 
        title: "Government Job Exchange", 
        desc: "Centralized discovery of all government jobs, exams, and preparation.",
        img: "/government-job.jpg"
    },
    { 
        icon: Briefcase, 
        title: "Private Job Exchange", 
        desc: "AI-powered hiring for enterprises, MSMEs, startups, and global employers.",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    { 
        icon: GraduationCap, 
        title: "Internship Exchange", 
        desc: "Structured bridge between students and real-world work exposure.",
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop"
    },
    { 
        icon: School, 
        title: "Campus Recruitment", 
        desc: "Digitized, transparent, scalable campus hiring infrastructure.",
        img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop"
    },
    { 
        icon: Users, 
        title: "Manpower & Gig Exchange", 
        desc: "National marketplace for freelancers, consultants, and contract workforce.",
        img: "/manpower-gig.jpg"
    },
    { 
        icon: FileText, 
        title: "Entrance Exam Exchange", 
        desc: "Adaptive learning, assessments, and employability intelligence.",
        img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop"
    },
  ];

  return (
    <section id="vision" className="py-24 bg-[#0a0b0d] relative overflow-hidden">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <GSAPReveal>
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md">
                <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase">The National Workforce Architecture</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4 text-white">
              Six Integrated Exchanges. <br />
              <span className="italic font-light text-gradient-gold">One Unified National Platform.</span>
            </h2>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {exchanges.map((item, idx) => (
             <CinematicCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
