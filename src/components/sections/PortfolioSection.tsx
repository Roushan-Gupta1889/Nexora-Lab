"use client";

import { useState, useRef, useEffect, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Sparkles, FolderOpen, ExternalLink, X } from "lucide-react";
import { SectionHeading, GoldText, Button } from "@/components/ui";
import { projects, portfolioCategories, type PortfolioCategory, type PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All Projects");
  const [active, setActive] = useState<PortfolioProject | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All Projects" || project.category === activeCategory
  );

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="work">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-[100]"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active ? (
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6">
              {/* Close Button - Responsive Position */}
              <motion.button
                key={`button-${active.id}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="absolute top-4 right-4 md:top-8 md:right-8 items-center justify-center bg-white rounded-full h-9 w-9 md:h-10 md:w-10 shadow-xl z-[102] hover:bg-primary-gold hover:text-white transition-colors"
                onClick={() => setActive(null)}
              >
                <X size={18} className="md:w-5 md:h-5" />
              </motion.button>

              <motion.div
                layoutId={`card-${active.id}-${id}`}
                ref={ref}
                className="relative w-full max-w-[550px] h-fit max-h-[85vh] flex flex-col bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-[101]"
              >
                <motion.div layoutId={`image-${active.id}-${id}`} className="relative h-32 sm:h-40 w-full shrink-0">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>

                <div className="overflow-y-auto custom-scrollbar bg-white">
                  <div className="flex flex-col sm:flex-row justify-between items-start p-5 sm:p-7 gap-4">
                    <div>
                      <motion.div 
                        layoutId={`category-${active.id}-${id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-gold/10 text-[9px] font-bold tracking-wider uppercase text-primary-gold mb-2"
                      >
                        {active.categoryLabel}
                      </motion.div>
                      <motion.h3
                        layoutId={`title-${active.id}-${id}`}
                        className="font-heading text-xl md:text-2xl font-bold text-text-dark"
                      >
                        {active.title}
                      </motion.h3>
                    </div>

                    <motion.a
                      layoutId={`button-${active.id}-${id}`}
                      href={active.link}
                      target="_blank"
                      className="w-full sm:w-auto text-center px-5 py-2.5 text-xs rounded-full font-bold bg-primary-gold text-white shadow-lg shadow-primary-gold/20 hover:bg-dark-gold transition-all"
                    >
                      Visit Project
                    </motion.a>
                  </div>
                  <div className="px-5 sm:px-7 pb-7">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-text-light text-[11px] sm:text-xs md:text-sm leading-relaxed flex flex-col gap-3"
                    >
                      <p>{active.description}</p>
                      <p>
                        Our approach for this project focused on creating a seamless user experience that aligns perfectly with the brand&apos;s identity. We implemented modern web technologies to ensure high performance, mobile responsiveness, and optimal conversion rates.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-xl bg-bg-warm">
                          <h4 className="font-bold text-text-dark text-xs uppercase tracking-wider mb-1">Impact</h4>
                          <p className="text-primary-gold font-bold text-lg">+120% Conversion</p>
                        </div>
                        <div className="p-4 rounded-xl bg-bg-warm">
                          <h4 className="font-bold text-text-dark text-xs uppercase tracking-wider mb-1">Performance</h4>
                          <p className="text-primary-gold font-bold text-lg">99/100 Score</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
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
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-16"
        >
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
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layoutId={`card-${project.id}-${id}`}
                key={project.id}
                onClick={() => setActive(project)}
                className="group flex flex-col h-full bg-white border border-black/[0.04] rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg-warm">
                  <motion.div layoutId={`image-${project.id}-${id}`} className="h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  {/* Category Badge overlaying image */}
                  <div className="absolute top-4 left-4 z-10">
                    <motion.span 
                      layoutId={`category-${project.id}-${id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase text-primary-gold shadow-sm"
                    >
                      <FolderOpen size={12} />
                      {project.categoryLabel}
                    </motion.span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <motion.h3 
                    layoutId={`title-${project.id}-${id}`}
                    className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-primary-gold transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-text-light text-sm mb-6 flex-1 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <motion.div 
                    layoutId={`button-${project.id}-${id}`}
                    className="mt-auto flex items-center text-sm font-semibold text-text-dark group-hover:text-primary-gold transition-colors pt-4 border-t border-black/[0.04]"
                  >
                    View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
