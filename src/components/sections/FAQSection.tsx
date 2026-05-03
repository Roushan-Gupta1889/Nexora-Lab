"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";
import { SectionHeading, GoldText } from "@/components/ui";
import { faqItems, type FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

function AccordionItem({ item, isOpen, onClick }: { item: FaqItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={cn(
        "bg-white border rounded-2xl overflow-hidden transition-all duration-300",
        isOpen ? "border-primary-gold/30 shadow-[0_8px_30px_rgba(230,165,32,0.06)]" : "border-black/[0.04] hover:border-black/10"
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-transparent"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "font-heading font-semibold text-lg transition-colors duration-300 pr-4",
          isOpen ? "text-primary-gold" : "text-text-dark"
        )}>
          {item.question}
        </span>
        <div
          className={cn(
            "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            isOpen ? "bg-primary-gold text-white rotate-45" : "bg-bg-warm text-text-dark"
          )}
        >
          <Plus size={18} />
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
            <div className="px-6 pb-6 pt-2 text-text-light leading-relaxed border-t border-black/[0.02]">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const leftColumn = faqItems.filter(item => item.column === "left");
  const rightColumn = faqItems.filter(item => item.column === "right");

  return (
    <section className="py-16 md:py-24 bg-bg-warm" id="faq">
      <div className="max-w-[1000px] mx-auto px-6">
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
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
