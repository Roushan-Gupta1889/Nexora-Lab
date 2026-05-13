"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";
import { SectionHeading, GoldText } from "@/components/ui";
import { faqItems, type FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

function AccordionItem({ item, isOpen, onClick }: { item: FaqItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={cn(
        "bg-white border rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer",
        isOpen 
          ? "border-primary-gold/30 shadow-[0_8px_30px_rgba(230,165,32,0.06)] scale-[1.01]" 
          : "border-black/[0.04] hover:border-primary-gold/20 hover:shadow-md hover:-translate-y-0.5"
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-transparent outline-none"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "font-heading font-semibold text-base transition-colors duration-300 pr-4",
          isOpen ? "text-primary-gold" : "text-text-dark group-hover:text-primary-gold/80"
        )}>
          {item.question}
        </span>
        <div
          className={cn(
            "shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
            isOpen ? "bg-primary-gold text-white rotate-45 shadow-[0_0_10px_rgba(230,165,32,0.3)]" : "bg-bg-warm text-text-dark group-hover:bg-primary-gold/10 group-hover:text-primary-gold"
          )}
        >
          <Plus size={16} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-5 pb-5 pt-1 text-text-light text-sm leading-relaxed border-t border-black/[0.02]">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const leftColumn = faqItems.filter(item => item.column === "left");
  const rightColumn = faqItems.filter(item => item.column === "right");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-bg-warm" id="faq">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionHeading
            badge="GOT QUESTIONS?"
            badgeIcon={<Sparkles size={14} />}
            title={
              <>
                Frequently Asked <GoldText>Questions</GoldText>
              </>
            }
            description="Everything you need to know about our process, pricing, and services. Can't find the answer you're looking for? Reach out to our team."
            align="center"
            className="mb-12 md:mb-16"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-4"
          >
            {leftColumn.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <AccordionItem
                  item={item}
                  isOpen={openId === item.id}
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden md:flex flex-col gap-4"
          >
            {rightColumn.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <AccordionItem
                  item={item}
                  isOpen={openId === item.id}
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
