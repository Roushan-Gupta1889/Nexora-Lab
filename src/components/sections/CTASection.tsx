"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { 
  Sparkles, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GoldText } from "@/components/ui/GoldText";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-10 md:py-12 bg-bg-cream relative" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* The Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#FFFDF9] to-[#FDF4E3] border border-primary-gold/15 shadow-[0_20px_80px_rgba(230,165,32,0.08)]"
        >
          {/* Main Background Image */}
          <div 
            className="hidden md:block absolute right-0 bottom-0 w-full h-full md:w-[80%] z-0 opacity-[0.50] pointer-events-none"
            style={{ animation: 'teamFloat 6s ease-in-out infinite' }}
          >
            <Image
              src="/images/cta-img-section.png"
              alt="Background"
              fill
              className="object-cover md:object-contain object-bottom md:object-right-bottom scale-[1.1] md:scale-[1.2] origin-bottom-right"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 p-4 md:p-6 lg:p-8 gap-5 lg:gap-8 relative z-10">
            
            {/* 1. Heading Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col justify-center relative z-10 order-1 lg:col-start-1 lg:row-start-1"
            >
              
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={16} className="text-primary-gold" />
                <span className="text-xs md:text-sm font-bold tracking-[0.15em] text-dark-gold uppercase">
                  Let&apos;s Connect
                </span>
                <div className="w-8 h-[1px] bg-primary-gold/30" />
              </div>

              {/* Heading */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-text-dark leading-[1.1] mb-2 lg:mb-4">
                Got Questions? <br className="hidden md:block"/>
                <GoldText>We&apos;re Here to Help</GoldText>
              </h2>

              {/* Description */}
              <p className="hidden md:block text-text-light text-sm md:text-base mb-8 leading-relaxed max-w-[450px]">
                Whether you have questions about features, need technical support, or want to share feedback — our team is ready to assist you.
              </p>
            </motion.div>
            {/* 3. Contact Cards Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden md:flex flex-col justify-end order-3 lg:col-start-1 lg:row-start-2"
            >
              <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-4 max-w-full">
                
                <div className="flex-1 flex flex-col items-center text-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/60 hover:bg-white border border-primary-gold/10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold shrink-0">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[16px] lg:h-[16px]" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h5 className="font-bold text-text-dark text-[11px] sm:text-[13px] leading-tight mb-0.5">Email Us</h5>
                    <p className="text-text-light text-[9px] sm:text-[11px] lg:text-[12px] leading-tight">labsnexoraa@gmail.com</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/60 hover:bg-white border border-primary-gold/10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold shrink-0">
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[16px] lg:h-[16px]" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h5 className="font-bold text-text-dark text-[11px] sm:text-[13px] leading-tight mb-0.5">Whatsapp Us</h5>
                    <p className="text-text-light text-[9px] sm:text-[11px] lg:text-[12px] leading-tight">+91 7500085107</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/60 hover:bg-white border border-primary-gold/10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[16px] lg:h-[16px]" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h5 className="font-bold text-text-dark text-[11px] sm:text-[13px] leading-tight mb-0.5">Response Time</h5>
                    <p className="text-text-light text-[9px] sm:text-[11px] lg:text-[12px] leading-tight">Usually within 24h</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* 2. Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.97 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full relative z-10 group order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2"
            >
              <div className="bg-white rounded-2xl p-4 md:p-5 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-visible transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(230,165,32,0.08)] group-hover:border-primary-gold/20">
                
                {/* Hover Background Image */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.10] transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
                  <Image
                    src="/images/cta-img-section.png"
                    alt="Background"
                    fill
                    className="object-cover object-bottom scale-[1.15]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-text-dark mb-1">Send a Message</h3>
                  <p className="text-text-light text-[12px] mb-4">Fill out the form and we&apos;ll be in touch.</p>

                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-[12px] font-semibold text-text-dark">Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-3 py-2 rounded-lg bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-xs sm:text-[13px] text-text-dark placeholder:text-text-light/70"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-[12px] font-semibold text-text-dark">Mobile No.</label>
                      <input 
                        type="tel" 
                        placeholder="+91 " 
                        className="w-full px-3 py-2 rounded-lg bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-xs sm:text-[13px] text-text-dark placeholder:text-text-light/70"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-[12px] font-semibold text-text-dark">Email</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-3 py-2 rounded-lg bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-xs sm:text-[13px] text-text-dark placeholder:text-text-light/70"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-[12px] font-semibold text-text-dark">Subject</label>
                      <input 
                        type="text" 
                        placeholder="Inquiry Topic" 
                        className="w-full px-3 py-2 rounded-lg bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-xs sm:text-[13px] text-text-dark placeholder:text-text-light/70"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-[12px] font-semibold text-text-dark uppercase tracking-wider">Service</label>
                    <select 
                      defaultValue=""
                      className="w-full px-3 py-2 rounded-lg bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-xs sm:text-[13px] text-text-dark appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                      }}
                    >
                      <option value="" disabled>Choose a service</option>
                      <option value="new-website">New website</option>
                      <option value="website-redesign">Website redesign</option>
                      <option value="e-commerce">E-Commerce development</option>
                      <option value="landing-page">Landing page design</option>
                      <option value="seo">SEO optimization</option>
                      <option value="web-app">Web application</option>
                      <option value="launch-support">Launch support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-[12px] font-semibold text-text-dark">Message</label>
                    <textarea 
                      placeholder="Tell us more..." 
                      rows={2}
                      className="w-full px-3 py-2 rounded-lg bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-xs sm:text-[13px] text-text-dark placeholder:text-text-light/70 resize-none"
                    />
                  </div>

                  <Button variant="primary" size="sm" className="w-full mt-2 group shadow-[0_8px_24px_rgba(230,165,32,0.2)]">
                    <Send size={16} className="mr-2 opacity-80" />
                    Send Message
                  </Button>
                </form>
                </div>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
