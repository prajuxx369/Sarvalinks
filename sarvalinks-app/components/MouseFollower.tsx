"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName === "BUTTON" || (e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).closest(".cursor-pointer")) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    }

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(212, 175, 55, 0.1)" : "transparent",
      }}
    >
        <div className="absolute inset-0 rounded-full bg-gold opacity-20 blur-sm"></div>
    </motion.div>
  );
}
