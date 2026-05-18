// const navLinks = [
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#projects", label: "Projects" },
//   { href: "#education", label: "Timeline" },
//   { href: "#contact", label: "Contact" }
// ];

// export default function Footer() {
//   return (
//     <footer className="relative z-30 border-t border-white/5 bg-[rgba(5,5,5,0.8)] py-12 backdrop-blur-xl">
//       <div className="section-shell">
//         <div className="grid gap-10 md:grid-cols-3">
//           <div>
//             <div className="text-sm font-bold uppercase tracking-[0.35em] text-white">FARHAD</div>
//             <div className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff4d00]">AHMED</div>
//             <p className="mt-4 max-w-sm text-white/45">Cinematic digital experiences for brands and products that need more than a template.</p>
//           </div>

//           <div className="flex flex-col gap-3">
//             {navLinks.map((link) => (
//               <a key={link.href} href={link.href} className="text-white/55 transition hover:text-white">
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           <div className="space-y-3 text-white/55">
//             <a href="https://github.com/farhadahmdofficial" target="_blank" rel="noreferrer" className="block transition hover:text-white">
//               GitHub
//             </a>
//             <a href="https://www.linkedin.com/in/farhadahmedofficial/" target="_blank" rel="noreferrer" className="block transition hover:text-white">
//               LinkedIn
//             </a>
//             <a href="mailto:hello@zabed.dev" className="block transition hover:text-white">
//               fa99.official@gmail.com
//             </a>
//           </div>
//         </div>

//         <div className="mt-10 border-t border-white/5 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-white/15">
//           © 2026 Farhad Ahmed · Made with Next.js & ♥
//         </div>
//       </div>
//     </footer>
//   );
// }





'use client';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Timeline" },
  { href: "#contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="relative z-30 border-t border-white/5 bg-[#030712]/80 py-12 backdrop-blur-xl">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* ব্র্যান্ডিং এরিয়া - সায়ান কালার সিঙ্ক */}
          <div>
            <div className="text-sm font-black uppercase tracking-[0.35em] text-white">FARHAD</div>
            <div className="text-sm font-black uppercase tracking-[0.35em] text-[#00ffcc] shadow-[0_0_15px_rgba(0,255,204,0.1)]">AHMED</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              High-performance full-stack web architectures for modern products and digital experiences.
            </p>
          </div>

          {/* নেভিগেশন লিংকস */}
          <div className="flex flex-col gap-3 font-medium text-sm text-gray-400">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="w-fit transition-colors hover:text-[#00ffcc]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* সোশ্যাল ও ইমেল হ্যান্ডেলস (লিঙ্ক ফিক্সড) */}
          <div className="space-y-3 font-medium text-sm text-gray-400">
            <a 
              href="https://github.com/farhadahmdofficial" 
              target="_blank" 
              rel="noreferrer" 
              className="block w-fit transition-colors hover:text-[#00ffcc]"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/farhadahmedofficial/" 
              target="_blank" 
              rel="noreferrer" 
              className="block w-fit transition-colors hover:text-[#00ffcc]"
            >
              LinkedIn
            </a>
            {/* 👈 এখানে মেল্টো লিঙ্কটি আপনার ইমেলে ফিক্স করা হলো */}
            <a 
              href="mailto:fa99.official@gmail.com" 
              className="block w-fit transition-colors hover:text-[#00ffcc] font-mono text-xs text-gray-500 hover:text-[#00ffcc]"
            >
              fa99.official@gmail.com
            </a>
          </div>
        </div>

        {/* বটম কপিরাইট এরিয়া */}
        <div className="mt-10 border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
          <div>
            © 2026 Farhad Ahmed · All Rights Reserved.
          </div>
          <div className="transition-colors hover:text-[#00ffcc]/60">
            Engineered with Next.js & ♥
          </div>
        </div>
        
      </div>
    </footer>
  );
}