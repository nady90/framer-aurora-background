"use client";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const COLORS = ["#13ffaa", "#1e67c6", "#ce84cf", "#dd335c"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 125% at 50% 0%, #020617 50%, ${color} 100%)`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="bg-gray-950 relative overflow-hidden grid place-content-center px-4 py-24 w-screen min-h-screen text-gray-200"
    >
      <div className="text-center ">
        <h1 className="text-7xl mb-7">Hello world</h1>

        <motion.button
          whileHover={{
            color: "black",
            backgroundColor: "white",
            scale: 1.1,
          }}
          style={{ border, boxShadow }}
          className="py-2 bg-black px-4 rounded-2xl text-white"
        >
          Click me
        </motion.button>
      </div>
    </motion.section>
  );
}
