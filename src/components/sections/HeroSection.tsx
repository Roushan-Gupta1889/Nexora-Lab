"use client";

import { useRef } from "react";
import Image from "next/image";
import { Badge, Button, GoldText } from "@/components/ui";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const tiltRef = useTiltEffect<HTMLDivElement>(8);
  const floatRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);


  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Page load animation sequence
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.4"
      )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          buttonsRef.current?.children ? Array.from(buttonsRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
          "-=0.6"
        )
        .fromTo(
          tiltRef.current,
          { opacity: 0, x: 40, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 1.2 },
          "-=1.5"
        );

      // Floating animation for image
      if (floatRef.current) {
        gsap.to(floatRef.current, {
          y: -15,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // Soft pulse for gradient circle
      gsap.to(".hero-glow", {
        scale: 1.05,
        opacity: 0.8,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-[120px] pb-16 md:pt-[160px] md:pb-24 lg:pt-[200px] lg:pb-32 overflow-hidden"
    >
      {/* Mobile Background Image */}
      <div className="absolute inset-0 z-0 lg:hidden opacity-[0.3] pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-full scale-125 sm:scale-100">
          <Image
            src="/images/hero-img copy.png"
            alt="Hero Background"
            fill
            className="object-contain object-center"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div ref={badgeRef} className="mb-6" style={{ opacity: 0 }}>
              <Badge icon={<Sparkles size={14} />}>
                MODERN SOLUTIONS. REAL RESULTS.
              </Badge>
            </div>

            <h1
              ref={headingRef}
              className="font-heading text-text-dark mb-6 tracking-tight"
              style={{ opacity: 0 }}
            >
              We build websites that turn traffic into <GoldText>real customers,</GoldText> not just clicks.
            </h1>

            <p
              ref={textRef}
              className="text-text-light text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ opacity: 0 }}
            >
              From <GoldText>speed</GoldText> and <GoldText>conversion</GoldText> to{" "}
              <GoldText>long-term growth</GoldText>, we design and develop digital experiences that scale with your business.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Book a Free Strategy Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-text-dark bg-white"
              >
                Explore Our Work
              </Button>
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] hidden lg:flex items-center justify-center lg:justify-end">
            {/* Gold Gradient Glow */}
            <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] bg-gradient-to-tr from-primary-gold/10 to-secondary-gold/20 rounded-full blur-[80px] pointer-events-none" />

            <div
              ref={tiltRef}
              className="relative z-10 w-full h-full flex items-center justify-center cursor-default"
              style={{ opacity: 0 }}
            >
              <div
                ref={floatRef}
                className="relative w-[100%] sm:w-[110%] lg:w-[160%] h-full max-w-[1000px] -right-0 lg:-right-24"
              >
                <Image
                  src="/images/hero-img copy.png"
                  alt="Nexora Labs High-Performance Websites"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] scale-[1.15] lg:scale-[1.3] origin-center lg:origin-right"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
