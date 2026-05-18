// 'use client';
// import { BiSolidPhoneCall } from "react-icons/bi";

// import * as Dialog from "@radix-ui/react-dialog";
// import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

// const navItems = [
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#projects", label: "Projects" },
//   { href: "#education", label: "Timeline" },
//   { href: "#contact", label: "Contact" }
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("#about");
//   const { scrollY } = useScroll();

//   const navBg = useTransform(scrollY, [0, 200], ["rgba(5,5,5,0)", "rgba(5,5,5,0.85)"]);
//   const navBorder = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0)", "rgba(255,255,255,0.07)"]);
//   const navBlur = useTransform(scrollY, [0, 200], [0, 24]);

//   useEffect(() => {
//     const sectionIds = navItems.map((item) => item.href.replace("#", ""));
//     const observers = [];
//     const visibleSections = new Set();

//     const updateActive = () => {
//       for (const item of navItems) {
//         const id = item.href.replace("#", "");
//         if (visibleSections.has(id)) {
//           setActive(item.href);
//           return;
//         }
//       }
//     };

//     sectionIds.forEach((id) => {
//       const el = document.getElementById(id);
//       if (!el) return;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               visibleSections.add(id);
//             } else {
//               visibleSections.delete(id);
//             }
//           });
//           updateActive();
//         },
//         {
//           rootMargin: "-20% 0px -60% 0px",
//           threshold: 0,
//         }
//       );

//       observer.observe(el);
//       observers.push(observer);
//     });

//     return () => {
//       observers.forEach((obs) => obs.disconnect());
//     };
//   }, []);

//   return (
//     <motion.header
//       style={{
//         backgroundColor: navBg,
//         borderBottomColor: navBorder,
//         backdropFilter: useTransform(navBlur, (v) => `blur(${v}px) saturate(180%)`)
//       }}
//       className="sticky top-0 z-50 border-b"
//     >
//       <div className="section-shell">
//         <div className="flex h-20 items-center justify-between gap-4">
//           <Link href="#" className="relative z-10 leading-tight">
//             <div className="text-sm font-bold uppercase tracking-[0.35em] text-[#e44906]">FARHAD</div>
//             <div className="text-sm font-bold uppercase tracking-[0.35em] text-[#b36341]">AHMED</div>
//           </Link>

//           <nav className="hidden rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl md:flex">
//             {navItems.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setActive(item.href)}
//                 className="relative px-4 py-1.5 text-sm text-white/55 transition hover:text-white"
//               >
//                 {active === item.href && (
//                   <motion.span
//                     layoutId="navPill"
//                     className="absolute inset-0 rounded-full border border-[#ff4d00]/30 bg-[#ff4d00]/10 shadow-accent-glow"
//                   />
//                 )}
//                 <span className="relative z-10">{item.label}</span>
//               </a>
//             ))}
//           </nav>

//           <div className="hidden md:block">
//             <motion.a
//               href="#contact"
//               whileTap={{ scale: 0.97 }}
//               className="rounded-full border border-white/10  border-l-[#6a321a] bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#ff4d00]/10"
//             >
//              <samp className="flex items-center gap-2 border-2 border-rose-500 p-2 rounded-2xl"> <BiSolidPhoneCall /> Call</samp>
//              {/* Call */}
//             </motion.a>
//           </div>

//           <Dialog.Root open={open} onOpenChange={setOpen}>
//             <Dialog.Trigger asChild>
//               <button className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-white md:hidden">
//                 <HiOutlineMenuAlt4 className="text-xl" />
//               </button>
//             </Dialog.Trigger>

//             <AnimatePresence>
//               {open && (
//                 <Dialog.Portal forceMount>
//                   <Dialog.Overlay asChild>
//                     <motion.div
//                       className="fixed inset-0 z-50 bg-black/70 backdrop-blur-2xl"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     />
//                   </Dialog.Overlay>

//                   <Dialog.Content asChild>
//                     <motion.div
//                       initial={{ opacity: 0, y: -20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       className="fixed inset-0 z-[60] flex flex-col justify-between p-6"
//                     >
//                       <div className="flex items-center justify-between">
//                         <div className="text-sm font-bold uppercase tracking-[0.35em] text-white">
//                           Navigation
//                         </div>
//                         <Dialog.Close asChild>
//                           <button className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-white">
//                             <HiOutlineX className="text-xl" />
//                           </button>
//                         </Dialog.Close>
//                       </div>

//                       <div className="flex flex-1 flex-col items-start justify-center gap-6">
//                         {navItems.map((item, index) => (
//                           <motion.a
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => {
//                               setActive(item.href);
//                               setOpen(false);
//                             }}
//                             initial={{ opacity: 0, x: -30 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.08 }}
//                             className="text-4xl font-semibold tracking-[-0.04em] text-white/90"
//                           >
//                             {item.label}
//                           </motion.a>
//                         ))}
//                       </div>

//                       <a
//                         href="#contact"
//                         onClick={() => setOpen(false)}
//                         className="rounded-full border border-[#ff4d00]/20 bg-[#ff4d00]/10 px-5 py-4 text-center text-white"
//                       >
//                         Book a 45-min Call
//                       </a>
//                     </motion.div>
//                   </Dialog.Content>
//                 </Dialog.Portal>
//               )}
//             </AnimatePresence>
//           </Dialog.Root>
//         </div>
//       </div>
//     </motion.header>
//   );
// }





















'use client';

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Timeline" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const { scrollY } = useScroll();

  // স্ক্রল থিম টগল (গভীর ডার্ক ব্যাকগ্রাউন্ডের সাথে সামঞ্জস্যপূর্ণ)
  const navBg = useTransform(scrollY, [0, 200], ["rgba(3,7,18,0)", "rgba(3,7,18,0.85)"]);
  const navBorder = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0)", "rgba(255,255,255,0.05)"]);
  const navBlur = useTransform(scrollY, [0, 200], [0, 20]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers = [];
    const visibleSections = new Set();

    const updateActive = () => {
      for (const item of navItems) {
        const id = item.href.replace("#", "");
        if (visibleSections.has(id)) {
          setActive(item.href);
          return;
        }
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.add(id);
            } else {
              visibleSections.delete(id);
            }
          });
          updateActive();
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: navBg,
        borderBottomColor: navBorder,
        backdropFilter: useTransform(navBlur, (v) => `blur(${v}px) saturate(180%)`)
      }}
      className="sticky top-0 z-50 border-b border-transparent transition-all duration-300"
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* লোগো সেকশন: কালার আপডেট (সায়ান থিম) */}
          <Link href="#" className="relative z-10 leading-tight group">
            <div className="text-sm font-black uppercase tracking-[0.35em] text-[#00ffcc] transition-colors group-hover:text-white">
              FARHAD
            </div>
            <div className="text-sm font-bold uppercase tracking-[0.35em] text-gray-500 transition-colors group-hover:text-[#00ffcc]">
              AHMED
            </div>
          </Link>

          {/* ডেস্কটপ মেনু: একটিভ পিল কালার পরিবর্তন করে সায়ান করা হয়েছে */}
          <nav className="hidden rounded-full border border-white/5 bg-white/[0.02] p-1.5 backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className="relative px-4 py-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                {active === item.href && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 shadow-[0_0_15px_rgba(0,255,204,0.15)]"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* কল বাটন: ডাবল বর্ডার কোড ক্লিন করা হয়েছে এবং প্রিমিয়াম লুক দেওয়া হয়েছে */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0,255,204,0.2)", borderColor: "#00ffcc" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:text-[#00ffcc]"
            >
              {/* <BiSolidPhoneCall className="text-base text-[#00ffcc]" /> */}
              <span>Let's Talk</span>
            </motion.a>
          </div>

          {/* মোবাইল মেনু ট্রিগার */}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-white md:hidden hover:border-[#00ffcc]/50 transition-colors">
                <HiOutlineMenuAlt4 className="text-xl" />
              </button>
            </Dialog.Trigger>

            <AnimatePresence>
              {open && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      className="fixed inset-0 z-50 bg-[#030712]/90 backdrop-blur-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </Dialog.Overlay>

                  <Dialog.Content asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="fixed inset-0 z-[60] flex flex-col justify-between p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-bold uppercase tracking-[0.35em] text-[#00ffcc]">
                          Navigation
                        </div>
                        <Dialog.Close asChild>
                          <button className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-white hover:border-[#00ffcc]/40">
                            <HiOutlineX className="text-xl" />
                          </button>
                        </Dialog.Close>
                      </div>

                      <div className="flex flex-1 flex-col items-start justify-center gap-6 pl-4">
                        {navItems.map((item, index) => (
                          <motion.a
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setActive(item.href);
                              setOpen(false);
                            }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.06 }}
                            className={`text-4xl font-bold tracking-tight transition-colors ${
                              active === item.href ? "text-[#00ffcc]" : "text-white/70 hover:text-white"
                            }`}
                          >
                            {item.label}
                          </motion.a>
                        ))}
                      </div>

                      {/* মোবাইল কল বাটন আপডেট */}
                      <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="rounded-xl border border-[#00ffcc]/30 bg-[#00ffcc]/10 py-4 text-center text-sm font-semibold text-[#00ffcc] shadow-[0_0_20px_rgba(0,255,204,0.05)]"
                      >
                        Book a Call
                      </a>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </div>
    </motion.header>
  );
}
