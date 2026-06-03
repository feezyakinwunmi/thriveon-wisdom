"use client";

import { motion } from "framer-motion";

export default function Particles() {
  const particles = Array.from({ length: 35 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 6;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.25,
              filter: "blur(2px)",
            }}
            animate={{
              y: [0, -120],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}