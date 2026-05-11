"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import { SectionHeading, GoldText, Badge } from "@/components/ui";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-slide every 5 seconds, pause on hover
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, nextTestimonial]);

  // Generate an array of 3 indices to show (prev, active, next)
  // For 3 items, this maps to the full array. We just need to determine their visual position.
  const getVisibleCards = () => {
    const len = testimonials.length;
    const prev = (activeIndex - 1 + len) % len;
    const next = (activeIndex + 1) % len;
    
    // On mobile we only show active. On desktop we show 3. 
    // We can just render all 3 and use CSS to position them or flex them.
    // Actually, mapping them in order of rendering:
    return [
      { ...testimonials[prev], position: "prev" },
      { ...testimonials[activeIndex], position: "active" },
      { ...testimonials[next], position: "next" },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="CLIENT TESTIMONIALS"
          badgeIcon={<Sparkles size={14} />}
          title={
            <>
              What Our <GoldText>Clients Say</GoldText>
            </>
          }
          description="Don't just take our word for it. Read what founders and marketing leaders have to say about working with Nexora Labs."
          align="center"
          className="mb-16 md:mb-24"
        />

        {/* Testimonials Slider Area */}
        <div 
          className="relative max-w-[1000px] mx-auto mb-16 md:mb-24 h-[450px] sm:h-[400px] md:h-[450px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((card) => {
                const isActive = card.position === "active";
                const isPrev = card.position === "prev";
                const isNext = card.position === "next";

                // Animation variants based on position
                const variants = {
                  active: {
                    x: "0%",
                    scale: 1,
                    opacity: 1,
                    zIndex: 30,
                    filter: "blur(0px)",
                  },
                  prev: {
                    x: "-60%",
                    scale: 0.85,
                    opacity: 0.4,
                    zIndex: 20,
                    filter: "blur(2px)",
                  },
                  next: {
                    x: "60%",
                    scale: 0.85,
                    opacity: 0.4,
                    zIndex: 20,
                    filter: "blur(2px)",
                  },
                };

                return (
                  <motion.div
                    key={`${card.id}-${card.position}`}
                    layout
                    initial={false}
                    animate={variants[card.position as keyof typeof variants]}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={cn(
                      "absolute w-[90%] sm:w-[500px] md:w-[600px] rounded-[24px] bg-white p-8 md:p-10 text-left",
                      "border shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-colors duration-300",
                      isActive ? "border-primary-gold/40" : "border-black/[0.04]",
                      // Hide prev/next cards completely on mobile to avoid overlap mess, show on md+
                      !isActive && "hidden md:block cursor-pointer"
                    )}
                    onClick={() => {
                      if (isPrev) prevTestimonial();
                      if (isNext) nextTestimonial();
                    }}
                  >
                    {/* Top Right Star Badge for Active Card */}
                    {isActive && (
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-gold to-secondary-gold rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-gold/30 rotate-12">
                        <Star size={20} className="fill-white" />
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full bg-bg-warm flex items-center justify-center text-primary-gold shrink-0">
                        <Quote size={20} className="fill-primary-gold" />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(card.rating)].map((_, i) => (
                          <Star key={i} size={18} className="fill-primary-gold text-primary-gold" />
                        ))}
                      </div>
                    </div>

                    <p className="text-text-dark text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                      "{card.quote}"
                    </p>

                    <div className="w-full h-[1px] bg-black/[0.04] mb-6" />

                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-black/[0.04]">
                        <Image
                          src={card.avatar}
                          alt={card.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <h5 className="font-heading font-bold text-text-dark text-lg">
                          {card.name}
                        </h5>
                        <p className="text-sm text-text-light font-medium">
                          {card.role}, <span className="text-primary-gold">{card.company}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-0 z-40 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); prevTestimonial(); }}
              className="w-12 h-12 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-text-dark hover:text-primary-gold hover:border-primary-gold/30 hover:shadow-md transition-all pointer-events-auto md:-ml-6 bg-opacity-90 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextTestimonial(); }}
              className="w-12 h-12 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-text-dark hover:text-primary-gold hover:border-primary-gold/30 hover:shadow-md transition-all pointer-events-auto md:-mr-6 bg-opacity-90 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === idx
                  ? "w-8 bg-primary-gold"
                  : "w-2 bg-black/[0.08] hover:bg-black/20"
              )}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
