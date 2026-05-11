"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Rocket,
  TrendingUp,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GoldText } from "@/components/ui/GoldText";
import { IconCircle } from "@/components/ui/IconCircle";

const features = [
  {
    icon: <Rocket size={20} />,
    title: "Fast Delivery",
    desc: "On-time, every time."
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Results-Focused",
    desc: "Built to convert and drive real growth."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Secure & Scalable",
    desc: "Future-ready websites that grow with you."
  },
  {
    icon: <Headphones size={20} />,
    title: "Reliable Support",
    desc: "We're here whenever you need us."
  }
];

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-bg-cream relative" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* The Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#FFFDF9] to-[#FDF4E3] border border-primary-gold/15 shadow-[0_20px_80px_rgba(230,165,32,0.08)]"
        >
          {/* Top content wrapper */}
          <div className="flex flex-col lg:flex-row p-8 md:p-14 lg:p-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5 lg:pr-12 relative z-10 flex flex-col justify-center">
              
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={16} className="text-primary-gold" />
                <span className="text-xs md:text-sm font-bold tracking-[0.15em] text-dark-gold uppercase">
                  Ready to take the next step?
                </span>
                <div className="w-8 h-[1px] bg-primary-gold/30" />
              </div>

              {/* Heading */}
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[54px] font-semibold text-text-dark leading-[1.1] mb-6">
                Let&apos;s Build a Digital Experience <br className="hidden md:block"/>
                That <GoldText>Drives Real Business Results.</GoldText>
              </h2>

              {/* Description */}
              <p className="text-text-light text-base md:text-lg max-w-[540px] mb-10 leading-relaxed">
                Partner with Nexora Labs to create a high-performance website that converts visitors into real customers and helps your business grow faster, smarter, and stronger.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <Link href="#contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto group shadow-[0_8px_24px_rgba(230,165,32,0.2)]">
                    <Sparkles size={18} className="mr-2 opacity-80" />
                    Start Your Project
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link href="#work" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto group bg-transparent border-primary-gold/20 hover:border-primary-gold/40 hover:bg-primary-gold/5 text-text-dark">
                    View Our Work
                    <ArrowRight size={18} className="ml-2 text-primary-gold transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Trust Text */}
              <div className="flex items-center gap-2 text-sm text-text-light/80 font-medium">
                <ShieldCheck size={16} className="text-primary-gold" />
                <span>No commitment. No pressure. Just a clear path to growing your business.</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-2/5 mt-12 lg:mt-0 relative flex items-center justify-center min-h-[300px]">
              {/* Decorative background glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] scale-110 lg:scale-125 origin-center lg:origin-right transform-gpu">
                <Image
                  src="/images/cta-img-section.png"
                  alt="Let's Connect"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="border-t border-primary-gold/10 bg-white/40 backdrop-blur-sm p-6 md:px-14 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="shrink-0">
                    <IconCircle size="md" className="group-hover:scale-110 transition-transform bg-white border border-primary-gold/10 shadow-[0_4px_12px_rgba(230,165,32,0.05)]">
                      <div className="text-primary-gold">
                        {feature.icon}
                      </div>
                    </IconCircle>
                  </div>
                  <div>
                    <h5 className="text-[15px] font-bold text-text-dark mb-0.5">{feature.title}</h5>
                    <p className="text-[13px] text-text-light leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
