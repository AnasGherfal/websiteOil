"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Drill, Flame, Gauge, Waves, Wind } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Drill,
    title: "Autonomous Drilling",
    description: "AI-guided drill heads react to formation shifts in milliseconds.",
  },
  {
    icon: Gauge,
    title: "Pressure Twin",
    description: "Live subsurface pressure maps with digital-twin predictive insight.",
  },
  {
    icon: Waves,
    title: "Flow Dynamics",
    description: "Multi-phase fluid simulation synchronized with real production data.",
  },
  {
    icon: Flame,
    title: "Refinery Grid",
    description: "Adaptive heat-routing with low-emission combustion orchestration.",
  },
  {
    icon: Wind,
    title: "Carbon Recovery",
    description: "Integrated CCUS streams locking carbon while raising output quality.",
  },
];

export default function OilExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });
  const rigRotate = useTransform(smoothProgress, [0, 1], [-20, 20]);
  const rigDepth = useTransform(smoothProgress, [0, 1], [-200, 200]);
  const titleY = useTransform(smoothProgress, [0, 1], [0, -220]);
  const hazeScale = useTransform(smoothProgress, [0, 1], [0.75, 1.4]);

  return (
    <div ref={containerRef} className="relative h-[320vh] bg-oil-950 text-oil-100">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale: hazeScale }}
          className="absolute inset-0 bg-radial-grid blur-3xl"
        />

        <motion.header
          style={{ y: titleY }}
          className="absolute left-1/2 top-16 z-20 w-[min(90vw,56rem)] -translate-x-1/2 text-center"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-oil-300">PetraNova Energy</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-7xl">
            Deep-Earth Oil Intelligence, 
            <span className="bg-gradient-to-r from-blue-300 to-indigo-500 bg-clip-text text-transparent">
              Sculpted in 3D Motion
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm text-oil-300 md:text-lg">
            Scroll to dive through a cinematic rig ecosystem where extraction, transport, and processing 
            animate in depth as one synchronized energy platform.
          </p>
        </motion.header>

        <div className="absolute inset-0 grid place-items-center perspective-1000">
          <motion.div
            style={{ rotateX: rigRotate, z: rigDepth }}
            className="relative h-[32rem] w-[min(88vw,62rem)] rotate-x-18 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-oil-700/30 to-oil-900/90 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="absolute inset-6 rounded-[2rem] border border-white/10" />
            <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-5">
              {features.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  style={{
                    y: useTransform(smoothProgress, [0, 1], [index * 55, -index * 30]),
                    rotateY: useTransform(smoothProgress, [0, 1], [-12 + index * 3, 10 - index * 2]),
                  }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="h-7 w-7 text-blue-300" />
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-blue-100">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-oil-300">{description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.75, 1], [0, 1]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-oil-100"
        >
          End-to-End Energy Scene Loaded
        </motion.div>
      </div>
    </div>
  );
}
