






'use client';

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/utils/motionVariants";

// আপনার অরিজিনাল ইনফরমেশন দিয়ে এডুকেশন ডেটাবেস আপডেট
const education = [
  { date: "2024 — Present", institution: "Bachelor of Business Administration (BBA)", detail: "Moulvibazar Govt College" },
  { date: "2026 — Present", institution: "Complete Full-Stack Web Development", detail: "Programming Hero Course" }
];

// এক্সপেরিয়েন্স ডেটাবেস (লার্নিং ও সেলফ-মেড প্রজেক্টস থিম)
const experience = [
  { date: "Present", institution: "Full-Stack Web Developer (In Training)", detail: "Building automated management portals, interactive marketplace systems, and performance-tuned software architectures." },
  { date: "2026", institution: "Independent Project Delivery", detail: "Designed and engineered platforms like DigiTools, KeenKeeper, and livestock management software using Next.js, React, and MongoDB." }
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("education");
  const items = activeTab === "education" ? education : experience;

  return (
    <div id="education" className="section-shell py-24 sm:py-32 bg-[#030712]">
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={staggerContainer} 
        className="space-y-12"
      >
        {/* সায়ান থিম সেকশন লেবেল */}
        <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-[0.3em] text-[#00ffcc]">
          04 — Timeline & Journey
        </motion.p>
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-white max-w-3xl">
            Milestones that shaped my technical growth.
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl text-base text-gray-400">
            A strategic balance of academic insights and intense, self-driven full-stack development bootcamps that fuel my continuous execution.
          </motion.p>
        </div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          {/* ট্যাব লিস্ট: সায়ান থিম আপডেট */}
          <Tabs.List className="flex w-fit rounded-full border border-white/5 bg-white/[0.02] p-1.5 backdrop-blur-md">
            {["education", "experience"]?.map((tab) => (
              <Tabs.Trigger 
                key={tab} 
                value={tab} 
                className="relative rounded-full px-6 py-2 text-sm font-semibold capitalize tracking-wide text-gray-400 transition-colors data-[state=active]:text-white"
              >
                {activeTab === tab && (
                  <motion.span 
                    layoutId="timelineTab" 
                    className="absolute inset-0 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 shadow-[0_0_15px_rgba(0,255,204,0.1)]" 
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* টাইমলাইন কন্টেন্ট এরিয়া */}
          <Tabs.Content value={activeTab} className="mt-12">
            <div className="relative space-y-8 pl-8 sm:pl-12">
              
              {/* সায়ান ভার্টিকাল টাইমলাইন এক্সিস লাইন */}
              <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#00ffcc] via-[#00ffcc]/20 to-transparent sm:left-5" />
              
              {items.map((item, index) => (
                <motion.div
                  key={item.institution}
                  variants={index % 2 === 0 ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  className="relative"
                >
                  {/* টাইমলাইন নোড (সায়ান অ্যানিমেটেড পালস ডট) */}
                  <div className="absolute left-[-24px] top-7 sm:left-[-28px]">
                    <span className="relative flex h-3 w-3 rounded-full bg-[#00ffcc] shadow-[0_0_10px_#00ffcc]">
                      <span className="absolute inset-[-6px] animate-ping rounded-full border border-[#00ffcc]/30" />
                    </span>
                  </div>
                  
                  {/* টাইমলাইন কার্ড গ্রিড */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm group hover:border-[#00ffcc]/20 transition-all duration-300">
                    
                    {/* ডেট ব্যাজ: সায়ান টেক্সট */}
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#00ffcc]">
                      {item.date}
                    </div>
                    
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-white group-hover:text-[#00ffcc] transition-colors">
                      {item.institution}
                    </h3>
                    
                    <p className="mt-3 text-sm leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </motion.div>
    </div>
  );
}