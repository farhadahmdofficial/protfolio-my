







'use client';

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import avtr from "@/assets/avtr.png";

const socialLinks = [
  { href: "https://github.com/farhadahmdofficial", icon: FaGithub, label: "GitHub" },
  

  { href: "https://www.linkedin.com/in/farhadahmedofficial/", icon: FaLinkedinIn, label: "LinkedIn" },



  { href: "https://web.facebook.com/Farhadahmed.Officials/", icon: FaFacebookF, label: "Facebook" },




  { href: "https://www.instagram.com/farhad.ahmed_", icon: FaInstagram, label: "Instagram" }
];

const marqueeItems = ["REACT", "VERCEL", "NEXT.JS", "BETTER AUTH", "FIGMA", "MONGODB", "NODEJS", "FRAMER MOTION", "TAILWIND CSS", "DAISY UI"];

export default function Hero() {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // স্ক্রল অ্যানিমেশন (প্যারালাক্স ও ব্লার)
  const blur = useTransform(scrollYProgress, [0, 0.7], reducedMotion ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(20px)"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], reducedMotion ? [1, 1] : [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.7], reducedMotion ? [0, 0] : [0, -40]);

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.12, 0]);

  return (
    <section ref={heroRef} className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden bg-[#030712]">
      
      {/* ─── ১. নতুন ব্যাকগ্রাউন্ড ইমেজ ও কালার ওভারলে (Tech Abstract Node Theme) ─── */}
      <motion.div 
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
          alt="Cyber Network Background"
          fill
          priority
          className="object-cover opacity-40"
          unoptimized
        />
        {/* সায়ান/সবুজ ভাইবের জন্য রেডিয়াল গ্রেডিয়েন্ট এবং ডার্ক মাস্ক */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/70 to-[#030712]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,204,0.08),transparent_45%)]" />
      </motion.div>

      <div className="section-shell relative z-10 w-full px-4 sm:px-8 lg:px-16">
        <motion.div 
          style={{ filter: blur, opacity, scale, y }} 
          className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 text-left"
        >
          
          {/* ─── ২. ইমেজ পজিশন পরিবর্তন: এখন এটি বাম পাশে (LEFT SIDE) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start"
          >
            <div className="relative rounded-[2rem] border-2 border-[#00ffcc]/20 bg-[#00ffcc]/[0.02] p-3 shadow-[0_0_50px_rgba(0,255,204,0.05)] backdrop-blur-md">
              <motion.div
                animate={reducedMotion ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-[1.75rem] border border-white/10"
              >
                <Image
                  src={avtr}
                  alt="Farhad Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              {/* ইমেজের কোণায় একটি সুন্দর ডেকোরেটিভ গ্লোয়িং ডট */}
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#00ffcc] shadow-[0_0_12px_#00ffcc] animate-pulse" />
            </div>
          </motion.div>

          {/* ─── ৩. টেক্সট ও কন্টেন্ট: এখন ডান পাশে (RIGHT SIDE) ─── */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* নতুন সায়ান কালার ব্যাজ */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/[0.06] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[#00ffcc]"
            >
              <span className="h-2 w-2 rounded-full bg-[#00ffcc] animate-pulse" />
              Farhad Ahmed · Portfolio 2026
            </motion.div>

            {/* হেডলাইন - নতুন কালার গ্রেডিয়েন্ট (White to Cyan) */}
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.05] tracking-tight text-white">
              Designing the Future <br />
              <span className="bg-gradient-to-r from-[#00ffcc] via-[#00e6ff] to-white bg-clip-text text-transparent">
                With Clean Code.
              </span>
            </h1>

            {/* সাবটাইটেল টেক্সট */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-400">
            I am a Full-Stack Web Developer. Harnessing the power of React, Next.js, and MongoDB, I build responsive, high-performance, and pixel-perfect full-stack web applications from front to back.
            </p>

            {/* নতুন স্টাইলের বোতাম (Cyan Theme Glow) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(0, 255, 204, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto text-center rounded-xl bg-[#00ffcc] px-8 py-3.5 text-sm font-semibold text-[#030712] transition-shadow"
              >
                MY PROJECTS
              </motion.a>
              <motion.a
                href="/farhad.pdf"
                download
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto text-center rounded-xl border border-white/10 bg-white/[0.02] px-8 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all"
              >
                Download Resume
              </motion.a>
            </div>

            {/* সোশ্যাল আইকনসমূহ */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks?.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, borderColor: "#00ffcc", color: "#00ffcc" }}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-gray-400 transition-colors"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ─── ৪. ইনফিনিটি মার্কি (নতুন কালার থিম) ─── */}
        <div className="mt-20 overflow-hidden border-y border-white/[0.04] py-4 bg-[#030712]/50 backdrop-blur-sm">
          <motion.div
            animate={reducedMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex min-w-max gap-12 font-mono text-[11px] uppercase tracking-[0.25em] text-gray-600"
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="hover:text-[#00ffcc] transition-colors cursor-default">
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* স্ক্রল ইন্ডিকেটর */}
        <div className="mt-8 flex justify-center w-full">
          <motion.a
            href="#about"
            animate={reducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#00ffcc] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
            <FiChevronDown className="text-lg" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}













// 'use client';

// import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";
// import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { FiChevronDown } from "react-icons/fi";
// import avtr from "@/assets/avtr.png";

// const socialLinks = [
//   { href: "https://github.com/Zabedfolio", icon: FaGithub, label: "GitHub" },
//   { href: "https://www.linkedin.com/in/zabedfolio/", icon: FaLinkedinIn, label: "LinkedIn" },
//   { href: "https://www.facebook.com/profile.php?id=61585623848571", icon: FaFacebookF, label: "Facebook" },
//   { href: "https://www.instagram.com/zaabed_maahmud/", icon: FaInstagram, label: "Instagram" }
// ];

// const marqueeItems = ["REACT", "VERCEL", "NEXT.JS", "BETTER AUTH", "FIGMA", "MONGODB", "NODEJS", "FRAMER MOTION", "HERO UI", "DAISY UI", "TAILWIND CSS"];

// export default function Hero() {
//   const heroRef = useRef(null);
//   const reducedMotion = useReducedMotion();

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"]
//   });

//   const blur = useTransform(scrollYProgress, [0, 0.7], reducedMotion ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(20px)"]);
//   const opacity = useTransform(scrollYProgress, [0.1, 0.8], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.7], reducedMotion ? [1, 1] : [1, 0.9]);
//   const y = useTransform(scrollYProgress, [0, 0.7], reducedMotion ? [0, 0] : [0, -60]);

//   const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
//   const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0]);

//   const badgeBlur = useTransform(scrollYProgress, [0.1, 0.5], reducedMotion ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(16px)"]);
//   const headlineBlur = useTransform(scrollYProgress, [0.2, 0.65], reducedMotion ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(14px)"]);
//   const subBlur = useTransform(scrollYProgress, [0.3, 0.75], reducedMotion ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(10px)"]);
//   const buttonsBlur = useTransform(scrollYProgress, [0.4, 0.85], reducedMotion ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(8px)"]);

//   return (
//     <section ref={heroRef} className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden">
      
//       {/* BACKGROUND BANNER IMAGE */}
//       <motion.div 
//         style={{ y: bgY, opacity: bgOpacity }}
//         className="absolute inset-0 pointer-events-none z-0"
//       >
//         <Image
//           src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop"
//           alt="Hero Banner Background"
//           fill
//           priority
//           className="object-cover"
//           unoptimized
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#050505]/80 to-[#050505]" />
//         <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 20%, #050505 100%)" />
//       </motion.div>

//       <div className="section-shell relative z-10 w-full">
//         <motion.div style={{ filter: blur, opacity, scale, y }} className="mx-auto max-w-5xl text-center">
          
//           {/* UPDATED: Status Badge */}
//           <motion.div
//             style={{ filter: badgeBlur }}
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-[#ff4d00]/20 bg-[#ff4d00]/[0.08] px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-white/75"
//           >
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff4d00]/70" />
//               <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff4d00]" />
//             </span>
//             Frontend Developer · Portfolio 2026
//           </motion.div>

//           {/* Avatar Portrait */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="mx-auto mb-8 w-fit rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 shadow-accent-glow backdrop-blur-sm"
//           >
//             <motion.div
//               animate={reducedMotion ? {} : { y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="relative h-28 w-28 overflow-hidden rounded-2xl"
//             >
//               <Image
//                 src={avtr}
//                 alt="Farhad Ahmed"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </motion.div>
//           </motion.div>

//           {/* UPDATED: Headline with name */}
//           <motion.div style={{ filter: headlineBlur }} className="space-y-2">
//             <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
//               <motion.span initial={{ y: 60, opacity: 0, filter: "blur(8px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} className="block">
//                 I'm Farhad Ahmed,
//               </motion.span>
//               <motion.span
//                 initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
//                 animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//                 transition={{ delay: 0.08 }}
//                 className="block bg-gradient-to-r from-white via-[#ff4d00] to-[#ff8c00] bg-clip-text text-transparent"
//               >
//                 Building Web Solutions.
//               </motion.span>
//             </h1>
//           </motion.div>

//           {/* UPDATED: Subtitle for high performance web development */}
//           <motion.p
//             style={{ filter: subBlur }}
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl"
//           >
//             Crafting high-performance frontend interfaces with React and Next.js. Turning complex designs into clean, responsive, and pixel-perfect web experiences.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             style={{ filter: buttonsBlur }}
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
//           >
//             <motion.a
//               href="#projects"
//               whileHover={reducedMotion ? {} : { scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="rounded-full border border-[#ff4d00]/20 bg-[#ff4d00] px-7 py-4 text-sm font-medium text-white shadow-accent-glow transition-transform"
//             >
//               Explore My Projects
//             </motion.a>
//             <motion.a
//               href="/resume.pdf"
//               download
//               whileHover={reducedMotion ? {} : { scale: 1.05, borderColor: "rgba(255,77,0,0.4)" }}
//               whileTap={{ scale: 0.98 }}
//               className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 backdrop-blur-xl transition-all"
//             >
//               Download Resume
//             </motion.a>
//           </motion.div>

//           {/* Social Links */}
//           <div className="mt-10 flex items-center justify-center gap-3">
//             {socialLinks?.map(({ href, icon: Icon, label }) => (
//               <motion.a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noreferrer"
//                 whileHover={reducedMotion ? {} : { y: -4, borderColor: "rgba(255,77,0,0.4)" }}
//                 className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-white/60 transition hover:text-white hover:bg-white/5"
//               >
//                 <Icon />
//               </motion.a>
//             ))}
//           </div>

//           {/* Marquee Text */}
//           <div className="mt-16 overflow-hidden border-y border-white/10 py-5">
//             <motion.div
//               animate={reducedMotion ? {} : { x: ["0%", "-50%"] }}
//               transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//               className="flex min-w-max gap-10 font-mono text-xs uppercase tracking-[0.3em] text-white/30"
//             >
//               {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
//                 <span key={`${item}-${index}`}>{item}</span>
//               ))}
//             </motion.div>
//           </div>

//           {/* Scroll Down Indicator */}
//           <motion.a
//             href="#about"
//             animate={reducedMotion ? {} : { y: [0, 8, 0] }}
//             transition={{ duration: 1.6, repeat: Infinity }}
//             className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-white/35"
//           >
//             <span className="font-mono text-[11px] uppercase tracking-[0.24em]">Scroll Down</span>
//             <FiChevronDown className="text-xl" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
