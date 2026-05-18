// 'use client';

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { fadeUp, staggerContainer } from "@/utils/motionVariants";
// import emailjs from "emailjs-com";


// const contactCards = [
//   {
//     label: "Email",
//     value: "fa99.official@gmail.com",
//     icon: FaEnvelope,
//     href: "mailto:fa99.official@gmail.com"
//   },
//   {
//     label: "Phone",
//     value: "+880 1783955375",
//     icon: FaPhoneAlt,
//     href: "tel:+8801783955375"
//   },
//   {
//     label: "WhatsApp",
//     value: "+880 1783955375",
//     icon: FaWhatsapp,
//     href: "https://wa.me/8801783955375"
//   }
// ];

// const initialState = {
//   name: "",
//   email: "",
//   phone: "",
//   message: ""
// };

// export default function Contact() {
//   const [form, setForm] = useState(initialState);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm((current) => ({ ...current, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//   event.preventDefault();
//   setLoading(true);

//   const templateParams = {
//     name: form.name,
//     email: form.email,
//     phone: form.phone,
//     message: form.message,
//   };

//   try {
//     await emailjs.send(
//       "service_t1jbkqn",     
//       "template_xhala38",     
//       templateParams,
//       "aPfInZVkZDN3gQXkT"       
//     );

//     toast.success("Message sent successfully!", {
//       className: "toast-theme",
//       bodyClassName: "text-sm",
//     });

//     setForm(initialState);
//   } catch (error) {
//     console.error("EmailJS Error:", error);
//     toast.error("Failed to send message. Try again.");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div id="contact" className="section-shell py-24 sm:py-32">
//       <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid gap-10 lg:grid-cols-5">
//         <div className="space-y-8 lg:col-span-2">
//           <motion.p variants={fadeUp} className="section-label">
//             05 — Let&apos;s Talk
//           </motion.p>
//           <motion.h2 variants={fadeUp} className="section-title">
//             Let&apos;s Build Something Exceptional.
//           </motion.h2>
//           <motion.p variants={fadeUp} className="text-lg leading-8 text-white/58">
//             If you need a portfolio, product landing page, or a high-end frontend presence that feels deliberately crafted, I&apos;m ready to help.
//           </motion.p>

//           <motion.div variants={fadeUp} className="space-y-4">
//             {contactCards.map(({ label, value, icon: Icon, href }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 <div className="glass-panel hover-glow flex items-center gap-4 rounded-2xl p-4 cursor-pointer">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ff4d00]/20 bg-[#ff4d00]/10 text-[#ff8c00]">
//                     <Icon />
//                   </div>

//                   <div>
//                     <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/30">
//                       {label}
//                     </div>
//                     <div className="mt-1 text-white/75">{value}</div>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </motion.div>

//           <motion.a
//             variants={fadeUp}
//             href="#"
//             className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/80"
//           >
//             Book a 45-min Call
//           </motion.a>
//         </div>

//         <motion.div variants={fadeUp} className="lg:col-span-3">
//           <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 sm:p-8">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <label className="space-y-2 sm:col-span-2">
//                 <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">Name</span>
//                 <input
//                   required
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-white transition focus:border-[#ff4d00] focus:shadow-[0_0_0_1px_rgba(255,77,0,0.2),0_0_24px_rgba(255,77,0,0.12)]"
//                 />
//               </label>
//               <label className="space-y-2">
//                 <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">Email</span>
//                 <input
//                   required
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-white transition focus:border-[#ff4d00] focus:shadow-[0_0_0_1px_rgba(255,77,0,0.2),0_0_24px_rgba(255,77,0,0.12)]"
//                 />
//               </label>
//               <label className="space-y-2">
//                 <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">Phone</span>
//                 <input
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-white transition focus:border-[#ff4d00] focus:shadow-[0_0_0_1px_rgba(255,77,0,0.2),0_0_24px_rgba(255,77,0,0.12)]"
//                 />
//               </label>
//               <label className="space-y-2 sm:col-span-2">
//                 <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">Message</span>
//                 <textarea
//                   required
//                   rows={6}
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-white transition focus:border-[#ff4d00] focus:shadow-[0_0_0_1px_rgba(255,77,0,0.2),0_0_24px_rgba(255,77,0,0.12)]"
//                 />
//               </label>
//             </div>

//             <motion.button
//               whileTap={{ scale: 0.98 }}
//               disabled={loading}
//               className="mt-6 rounded-full bg-[#ff4d00] px-7 py-4 text-sm font-medium text-white shadow-accent-glow disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </motion.button>
//           </form>
//         </motion.div>
//       </motion.div>

//       <ToastContainer position="bottom-right" theme="dark" toastClassName="toast-theme" />
//     </div>
//   );
// }



'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fadeUp, staggerContainer } from "@/utils/motionVariants";
import emailjs from "emailjs-com";

// আপনার অরিজিনাল কন্টাক্ট ডিটেইলস এবং সায়ান ডিরেকশন লিংক
const contactCards = [
  {
    label: "Email",
    value: "fa99.official@gmail.com",
    icon: FaEnvelope,
    href: "mailto:fa99.official@gmail.com"
  },
  {
    label: "Phone",
    value: "+880 1783955375",
    icon: FaPhoneAlt,
    href: "tel:+8801783955375"
  },
  {
    label: "WhatsApp",
    value: "+880 1783955375",
    icon: FaWhatsapp,
    href: "https://wa.me/8801783955375"
  }
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    try {
      await emailjs.send(
        "service_t1jbkqn",     
        "template_xhala38",     
        templateParams,
        "aPfInZVkZDN3gQXkT"      
      );

      toast.success("Message sent successfully!", {
        className: "bg-[#030712] border border-[#00ffcc]/30 text-white font-mono",
        bodyClassName: "text-sm text-gray-300",
      });

      setForm(initialState);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="section-shell py-24 sm:py-32 bg-[#030712]">
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={staggerContainer} 
        className="grid gap-10 lg:grid-cols-5 items-start"
      >
        {/* বাম পাশের টেক্সট ও কন্টাক্ট মেথড কলাম */}
        <div className="space-y-8 lg:col-span-2">
          
          <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-[0.3em] text-[#00ffcc]">
            05 — Let&apos;s Connect
          </motion.p>
          
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Let&apos;s Build Something Exceptional.
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-gray-400">
            Whether you are planning a dynamic full-stack ecosystem, an automated workflow architecture, or a production-ready web platform, I am ready to design and engineer the core engine.
          </motion.p>

          {/* কন্টাক্ট মেথড কার্ডস - সায়ান থিমে আপগ্রেডেড */}
          <motion.div variants={fadeUp} className="space-y-4">
            {contactCards.map(({ label, value, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-4 flex items-center gap-4 hover:border-[#00ffcc]/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                  
                  {/* সায়ান নিয়ন আইকন বক্স */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00ffcc]/20 bg-[#00ffcc]/5 text-[#00ffcc] shadow-[0_0_15px_rgba(0,255,204,0.05)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="text-lg" />
                  </div>

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500 group-hover:text-[#00ffcc] transition-colors">
                      {label}
                    </div>
                    <div className="mt-1 text-sm text-gray-300 group-hover:text-white transition-colors">
                      {value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* বুক কল বাটন - প্রিমিয়াম সায়ান গ্লো */}
          <motion.a
            variants={fadeUp}
            href="#"
            className="inline-flex rounded-full border border-[#00ffcc]/20 bg-[#00ffcc]/5 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#00ffcc]/10 hover:border-[#00ffcc]/40 shadow-[0_0_20px_rgba(0,255,204,0.02)]"
          >
            Book a Technical Briefing
          </motion.a>
        </div>

        {/* ডান পাশের মেসেজ ফর্ম সাবমিশন কলাম */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 sm:p-8 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.3)]">
            
            <div className="grid gap-5 sm:grid-cols-2">
              
              {/* নাম ইনপুট */}
              <label className="space-y-2 sm:col-span-2 flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Full Name</span>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white outline-none transition duration-300 focus:border-[#00ffcc] focus:bg-[#00ffcc]/[0.01] focus:shadow-[0_0_20px_rgba(0,255,204,0.08)]"
                />
              </label>

              {/* ইমেইল ইনপুট */}
              <label className="space-y-2 flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Email Address</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white outline-none transition duration-300 focus:border-[#00ffcc] focus:bg-[#00ffcc]/[0.01] focus:shadow-[0_0_20px_rgba(0,255,204,0.08)]"
                />
              </label>

              {/* ফোন ইনপুট */}
              <label className="space-y-2 flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Phone (Optional)</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white outline-none transition duration-300 focus:border-[#00ffcc] focus:bg-[#00ffcc]/[0.01] focus:shadow-[0_0_20px_rgba(0,255,204,0.08)]"
                />
              </label>

              {/* মেসেজ টেক্সট-এরিয়া */}
              <label className="space-y-2 sm:col-span-2 flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Project Strategy & Message</span>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white outline-none transition duration-300 focus:border-[#00ffcc] focus:bg-[#00ffcc]/[0.01] focus:shadow-[0_0_20px_rgba(0,255,204,0.08)] resize-none"
                />
              </label>
            </div>

            {/* সাবমিট বাটন: সায়ান নিওন সলিড ফিনিশিং */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="mt-6 w-full sm:w-auto rounded-full bg-[#00ffcc] px-8 py-4 text-sm font-bold tracking-wide text-black shadow-[0_0_25px_rgba(0,255,204,0.2)] hover:shadow-[0_0_35px_rgba(0,255,204,0.4)] transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Transmitting..." : "Send Engine Request"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* সায়ান টোস্ট নোটিফিকেশন সিঙ্ক */}
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}