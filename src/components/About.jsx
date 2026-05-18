// 'use client';

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { fadeUp, slideRight, staggerContainer } from "@/utils/motionVariants";
// import pic from "@/assets/zabed.png"

// const stats = [
//   { value: "6+", label: "Months" },
//   { value: "15+", label: "Projects" },
//   // { value: "10+", label: "Clients" }
// ];

// export default function About() {
//   return (
//     <div id="about" className="section-shell py-24 sm:py-32">
//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={staggerContainer}
//         className="grid gap-16 lg:grid-cols-5"
//       >
//         <div className="space-y-8 lg:col-span-3">
//           <motion.p variants={fadeUp} className="section-label">
//             01 — About
//           </motion.p>
//           <motion.h2 variants={fadeUp} className="section-title max-w-3xl">
//             The person behind the code.
//           </motion.h2>
//           <motion.div variants={fadeUp} className="space-y-5 text-lg leading-8 text-white/58">
//           <p>Hi, I'm <span className="font-bold text-[#ff5f1a]">Zabed Mahmud</span></p>
//             <p>
//               I started by obsessing over how interfaces feel, not just how they function. That curiosity evolved into a
//               practice built around <span className="font-medium text-white">precision, atmosphere, and storytelling</span>.
//             </p>
//             <p>
//               The work I enjoy most lives at the intersection of <span className="font-medium text-white">design systems,
//               motion, and product strategy</span>, where every detail helps a brand feel more intentional.
//             </p>
//             <p>
//               Outside of building, I spend time exploring visual references, refining creative direction, and studying how
//               strong digital experiences create trust before a single word is read.
//             </p>
//             <p>
//               I bring a calm, structured workflow with a bias for craftsmanship, clear communication, and solutions that
//               feel <span className="font-medium text-white">elevated rather than merely complete</span>.
//             </p>
//           </motion.div>

//           <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
//             {stats?.map((stat) => (
//               <div key={stat.label} className="glass-panel hover-glow rounded-2xl border-l-2 border-l-[#ff4d00] p-5">
//                 <div className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] text-white">{stat.value}</div>
//                 <div className="font-mono text-xs uppercase tracking-[0.24em] text-white/35">{stat.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <motion.div variants={slideRight} className="lg:col-span-2">
//           <motion.div
//             whileHover={{ y: -6 }}
//             animate={{ y: [0, -12, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             className="glass-panel hover-glow relative aspect-[3/4] overflow-hidden rounded-[2rem] p-3"
//           >
//             <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
//               <Image
//                 src={pic}
//                 alt="Portrait"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }











'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideRight, staggerContainer } from "@/utils/motionVariants";
import pic from "@/assets/farhad.png"; // আপনার প্রোফাইল পিকচারটি এখানে লিঙ্ক করা হলো

const stats = [
  { value: "1+", label: "Years Coding" },
  { value: "12+", label: "Projects Built" },
  { value: "4+", label: "Core Stacks" }
];

export default function About() {
  return (
    <div id="about" className="section-shell py-24 sm:py-32 bg-[#030712]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid gap-16 lg:grid-cols-5 items-center"
      >
        {/* কন্টেন্ট সেকশন */}
        <div className="space-y-8 lg:col-span-3">
          
          {/* সায়ান থিম লেবেল */}
          <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-[0.3em] text-[#00ffcc]">
            01 — About Me
          </motion.p>
          
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-white max-w-3xl">
            The Engineer Behind The Architecture.
          </motion.h2>
          
          {/* আপনার নিজস্ব প্রফেশনাল ফুল-স্ট্যাক ও একাডেমিক ব্যাকগ্রাউন্ড স্টোরি */}
          <motion.div variants={fadeUp} className="space-y-5 text-base sm:text-lg leading-relaxed text-gray-400">
            <p>
              Hi, I'm <span className="font-bold text-[#00ffcc]">Farhad Ahmed</span>, a passionate Full-Stack Developer driven by creating high-performance web systems.
            </p>
            <p>
              While pursuing my business education (**BBA at Moulvibazar Govt College**), I discovered my deep fascination for logic and programming. What started as exploring simple designs quickly evolved into building scalable web solutions with absolute <span className="font-medium text-white">precision, speed, and optimization</span>.
            </p>
            <p>
              My expertise thrives within the full-stack spectrum—architecting complex frontend flows with <span className="font-medium text-white">React & Next.js</span>, and structuring dynamic backends powered by <span className="font-medium text-white">Node.js and MongoDB</span>.
            </p>
            <p>
              I believe in clean folder architecture, bulletproof authentication, and writing maintainable code. I don't just put elements on a page—I build secure, interactive digital platforms that perform seamlessly under any load.
            </p>
          </motion.div>

          {/* স্ট্যাটস কার্ডস - সায়ান থিমে কনভার্ট করা */}
          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3 pt-4">
            {stats?.map((stat) => (
              <div key={stat.label} className="border border-white/5 bg-white/[0.02] hover:border-[#00ffcc]/30 transition-all rounded-2xl border-l-2 border-l-[#00ffcc] p-5 shadow-[0_0_20px_rgba(0,255,204,0.02)] group hover:shadow-[0_0_25px_rgba(0,255,204,0.06)]">
                <div className="text-[clamp(1.8rem,4vw,2.5rem)] font-black tracking-tight text-white group-hover:text-[#00ffcc] transition-colors">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ইমেজ সেকশন - সায়ান ভাইব গ্লো */}
        <motion.div variants={slideRight} className="lg:col-span-2">
          <motion.div
            whileHover={{ y: -6 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.01] p-3 shadow-[0_0_40px_rgba(0,255,204,0.03)] backdrop-blur-md"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] border border-white/5">
              <Image
                // src={/farhad.png} // এখানে avtr.png রেন্ডার হবে
                src={pic} // এখানে avtr.png রেন্ডার হবে
                alt="Farhad Ahmed Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড গ্লো */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}