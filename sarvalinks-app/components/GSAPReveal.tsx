"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPReveal({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const el = useRef(null);

  useEffect(() => {
    gsap.fromTo(el.current, 
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: el.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [delay]);

  return <div ref={el} className={className}>{children}</div>;
}
