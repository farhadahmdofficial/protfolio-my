






'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // গিটহাব ও লাইভ আইকন ইম্পোর্ট করা হলো
import { fadeUp, staggerContainer } from "@/utils/motionVariants";

import qurbanip from "@/assets/projects/tt.png";
import digitools from "@/assets/projects/digitools.png";
import keenkeeper from "@/assets/projects/keenkeper.png";
import issu from "@/assets/projects/issu.png";

// ১. আপনার নিজের প্রজেক্টের ডাটাবেস (গিটহাব এবং লাইভ লিংক সহ)
const myProjectsData = [
  {
    id: "qurbanihat",
    title: "QurbaniHat",
    description: "An advanced digital agro-farm and livestock marketplace engineered to automate and streamline secure cattle trading, featuring intuitive management dashboards.",
    category: "Full-Stack",
    year: "2026",
    // image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80", 

    image: qurbanip, // লোকাল ইমেজ ইম্পোর্ট করা হলো

    tags: ["Next.js", "MongoDB", "Better Auth", "Tailwind CSS"],
    githubUrl: "https://github.com/farhadahmdofficial/qurbanihat-livestock-booking-by-farhad", // গিটহাব লিংক
    liveUrl: "https://qurbanihat-livestock-booking-by-far-pi.vercel.app/" // লাইভ ডোমেন লিংক (এখানে আপনার অরিজিনাল লিংক বসিয়ে দিন)
  },
  {
    id: "digitools",
    title: "DigiTools",
    description: "A premium, high-performance platform for discovering and exploring modern digital tools. Built with absolute focus on fluid user interfaces and structural breakdown.",
    category: "Frontend",
    year: "2026",
    image: digitools, 
    tags: ["React", "JavaScript (ES6+)", "Tailwind CSS", "daisyUI"],
    githubUrl: "https://github.com/farhadahmdofficial/my-assignment6-digtools-2026", // গিটহাব লিংক
    liveUrl: "https://farhad-my-assingnment-6-digtools.netlify.app/" // লাইভ ডোমেন লিংক (এখানে আপনার অরিজিনাল লিংক বসিয়ে দিন)
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    description: "A production-grade task management system deploying dynamic state routers to track operations, lifecycle events, and individual flow updates flawlessly.",
    category: "Frontend",
    year: "2026",
    image: keenkeeper, 
    tags: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/farhadahmdofficial/keenkeper-by-react", // গিটহাব লিংক (যদি থাকে)
    liveUrl: "https://keen-keper-by-farhad-reactrouter.netlify.app/" // লাইভ লিংক
  },
  {
    id: "issue-tracker",
    title: "Issue Tracker",
    description: "🛠️ GitHub Issue Tracker — Core System Architecture",
    category: "Frontend",
    year: "2026",
    image: issu, 
    tags: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/farhadahmdofficial/issue-tracker-by-farhad", // গিটহাব লিংক (যদি থাকে)
    liveUrl: "https://farhadahmdofficial.github.io/issue-tracker-by-farhad/home.html" // লাইভ লিংক
  }
];

const categories = ["All", "Frontend", "Full-Stack"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All" 
      ? myProjectsData 
      : myProjectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div id="projects" className="section-shell py-24 sm:py-32 bg-[#030712]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="space-y-12"
      >
        <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-[0.3em] text-[#00ffcc]">
          03 — Selected Portfolio
        </motion.p>
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-white max-w-3xl">
            Selected work with premium execution and structural clarity.
          </motion.h2>
          
          <motion.div variants={fadeUp} className="flex w-fit flex-wrap gap-2 rounded-full border border-white/5 bg-white/[0.02] p-1.5 backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-gray-400 transition-colors hover:text-white"
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="projectFilter"
                    className="absolute inset-0 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 shadow-[0_0_15px_rgba(0,255,204,0.1)]"
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 hover:border-[#00ffcc]/20"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
              </div>
              
              <div className="space-y-4 p-6">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#00ffcc]">
                  {String(index + 1).padStart(2, "0")} · {project.year}
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#00ffcc] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-gray-500 group-hover:border-[#00ffcc]/10 group-hover:text-gray-400 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* FIXED: এখানে দুটি আলাদা বাটন যোগ করা হয়েছে (GitHub ও Live Link) 
                  সায়ান গ্লো ইফেক্ট ও রেসপন্সিভ স্টাইলিং সহ।
                */}
                <div className="flex flex-wrap gap-4 pt-3 border-t border-white/5 mt-4">
                  {/* গিটহাব সোর্স কোড বাটন */}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-gray-400 transition-colors hover:text-[#00ffcc]"
                  >
                    <FiGithub className="text-sm" /> GitHub Repository
                  </a>

                  {/* লাইভ প্রজেক্ট প্রিভিউ বাটন */}
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-white transition-colors hover:text-[#00ffcc]"
                  >
                    <FiExternalLink className="text-sm" /> Live Preview <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>→</span>
                  </a>
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}




















