"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Sparkles, FolderOpen, ExternalLink } from "lucide-react";
import { SectionHeading, GoldText, Badge, Button, StatsStrip } from "@/components/ui";
import { projects, portfolioCategories, type PortfolioCategory } from "@/data/portfolio";
import { stats } from "@/data/stats";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All Projects");
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All Projects" || project.category === activeCategory
  );

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="work">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="OUR WORK"
          badgeIcon={<Sparkles size={14} />}
          title={
            <>
              Our Works · <GoldText>Real Projects. Real Results.</GoldText>
            </>
          }
          description="Explore our recent collaborations and see how we've helped brands scale their digital presence."
          align="center"
          className="mb-12"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-16">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-white shadow-md"
                    : "text-text-light hover:text-text-dark bg-bg-warm hover:bg-black/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolioTabIndicator"
                    className="absolute inset-0 bg-primary-gold rounded-full z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group flex flex-col h-full bg-white border border-black/[0.04] rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg-warm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  {/* Category Badge overlaying image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase text-primary-gold shadow-sm">
                      <FolderOpen size={12} />
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-primary-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-light text-sm mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-semibold text-text-dark group-hover:text-primary-gold transition-colors pt-4 border-t border-black/[0.04]">
                    View Case Study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA & Stats */}
        <div className="flex flex-col items-center gap-16">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <StatsStrip data={stats} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
