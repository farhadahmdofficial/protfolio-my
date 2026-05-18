














'use client';

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { RiDatabase2Line, RiLayoutMasonryLine, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiMongodb, SiNextdotjs, SiBetterauth, SiIconify, SiGooglecloud, SiTypescript, SiVercel, SiHeroui, SiDaisyui } from "react-icons/si";
import { fadeUp, scaleIn, staggerContainer } from "@/utils/motionVariants";

// ফিল্টার অপশনসমূহ
const filters = ["All", "Frontend", "Backend", "Tools", "Design & UI"];

// স্কিল ডেটাবেস (সায়ান থিম এবং ফুল-স্ট্যাক স্কিল এনহ্যান্সমেন্ট সহ)
const skills = [
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", category: "Frontend", icon: FaReact, color: "#61dafb" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", category: "Frontend", icon: RiTailwindCssFill, color: "#38bdf8" },
  { name: "Framer Motion", category: "Frontend", icon: SiFramer, color: "#00ffcc" }, // সায়ান টাচ
  
  { name: "Node.js", category: "Backend", icon: FaNodeJs, color: "#79c15b" },
  { name: "MongoDB", category: "Backend", icon: SiMongodb, color: "#13aa52" },
  { name: "Database Design", category: "Backend", icon: RiDatabase2Line, color: "#00ffcc" }, // ডাটাবেস অ্যাড করা হলো
  
  { name: "Better Auth", category: "Tools", icon: SiBetterauth, color: "#ffffff" },
  { name: "Git", category: "Tools", icon: FaGitAlt, color: "#f1502f" },
  { name: "Vercel", category: "Tools", icon: SiVercel, color: "#ffffff" },
  { name: "Google Cloud", category: "Tools", icon: SiGooglecloud, color: "#e94334" },
  { name: "React Iconify", category: "Tools", icon: SiIconify, color: "#61dafb" },
  
  { name: "Hero UI", category: "Design & UI", icon: SiHeroui, color: "#00d8ff" },
  { name: "DaisyUI", category: "Design & UI", icon: SiDaisyui, color: "#5a0ef8" },
  { name: "Figma", category: "Design & UI", icon: FaFigma, color: "#f24e1e" },
  { name: "UI Systems", category: "Design & UI", icon: RiLayoutMasonryLine, color: "#00ffcc" }
];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filteredSkills = active === "All" ? skills : skills.filter((skill) => skill.category === active);

  return (
    <div id="skills" className="section-shell py-24 sm:py-32 bg-[#030712]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="space-y-12"
      >
        {/* সায়ান থিম সেকশন লেবেল */}
        <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-[0.3em] text-[#00ffcc]">
          02 — Skills & Stack
        </motion.p>
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-white max-w-3xl">
            Architecting robust backends and cinematic frontends.
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl text-base text-gray-400">
            My ecosystem is crafted around high-performance full-stack web applications, secure token and session managements, and optimal server-side data streaming.
          </motion.p>
        </div>

        {/* রেডিক্স ইউআই ট্যাব - থিম কাস্টমাইজেশন */}
        <Tabs.Root value={active} onValueChange={setActive}>
          <Tabs.List className="flex w-full max-w-full flex-wrap justify-center lg:justify-start gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-2 sm:w-fit sm:rounded-full backdrop-blur-md">
            {filters.map((filter) => (
              <Tabs.Trigger
                key={filter}
                value={filter}
                className="relative whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-gray-400 transition-colors data-[state=active]:text-white sm:text-sm"
              >
                {active === filter && (
                  <motion.span
                    layoutId="skillTab"
                    className="absolute inset-0 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 shadow-[0_0_15px_rgba(0,255,204,0.1)]"
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* ট্যাব কন্টেন্ট এবং কার্ড গ্রিড */}
          <Tabs.Content value={active} className="mt-10">
            <motion.div 
              variants={staggerContainer} 
              initial="hidden" 
              animate="show" 
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {filteredSkills?.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={scaleIn}
                    whileHover={{ scale: 1.03, y: -4, borderColor: "rgba(0, 255, 204, 0.25)" }}
                    className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      {/* আইকন র‍্যাপার */}
                      <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-[#00ffcc]/20 transition-colors">
                        <Icon className="text-2xl sm:text-3xl transition-transform duration-500 group-hover:scale-110" style={{ color: skill.color }} />
                      </div>
                      
                      {/* ক্যাটাগরি ট্যাগ */}
                      <span className="whitespace-nowrap rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-[#00ffcc] group-hover:border-[#00ffcc]/20 transition-all">
                        {skill.category}
                      </span>
                    </div>
                    
                    <h3 className="mt-8 text-lg font-bold tracking-tight text-white group-hover:text-[#00ffcc] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors">
                      Production-focused implementation with secure architecture, speed, and clean optimization.
                    </p>

                    {/* ব্যাকগ্রাউন্ড সূক্ষ্ম সায়ান গ্লো ইফেক্ট হোভার করলে জাগবে */}
                    <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#00ffcc]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                );
              })}
            </motion.div>
          </Tabs.Content>
        </Tabs.Root>
      </motion.div>
    </div>
  );
}
