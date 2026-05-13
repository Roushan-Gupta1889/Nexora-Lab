"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Rocket, Zap, Heart, Target, Lightbulb, TrendingUp } from "lucide-react";
import { GoldText } from "@/components/ui/GoldText";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <main className="min-h-screen bg-bg-cream">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles size={18} className="text-primary-gold" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-dark-gold uppercase">
                About Kivox.in
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-dark leading-[1.1] mb-8">
              Building Modern Digital Experiences That Feel <GoldText>Premium</GoldText>
            </h1>
            <p className="text-text-light text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
              Kivox.in is a modern digital agency focused on building high-performance websites, AI-powered solutions, brand experiences, and scalable digital products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Concept Section */}
      <section className="py-20 px-6 bg-white/50 border-y border-black/[0.04]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Who We <GoldText>Are</GoldText>
            </h2>
            <p className="text-text-light text-lg mb-8 leading-relaxed">
              Kivox.in was created for businesses, creators, startups, and modern brands that want more than just a basic website. We combine strategy, design, development, automation, and modern web technologies to help brands stand out in a crowded digital world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Premium UI/UX Design",
                "Modern Web Development",
                "AI Automation & Integrations",
                "Brand Identity Systems",
                "Interactive Experiences",
                "Performance Optimization"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary-gold shrink-0" />
                  <span className="text-text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FDF4E3] to-[#FFFDF9] border border-primary-gold/10 p-12 flex items-center justify-center group"
          >
            <div className="text-center">
              <p className="font-heading italic text-2xl md:text-3xl text-text-dark leading-relaxed">
                "Create digital experiences that look <span className="text-primary-gold">premium</span>, feel <span className="text-primary-gold">fast</span>, and <span className="text-primary-gold font-bold">convert better</span>."
              </p>
            </div>
            <div className="absolute inset-0 bg-primary-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[32px] border border-black/[0.04] shadow-sm relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
            <div className="w-12 h-12 bg-primary-gold/10 rounded-xl flex items-center justify-center text-primary-gold mb-8">
              <Target size={24} />
            </div>
            <h3 className="font-heading text-3xl font-bold text-text-dark mb-6">Our Mission</h3>
            <p className="text-text-light text-lg leading-relaxed">
              To help modern brands grow online through clean design, intelligent systems, and next-generation digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 md:p-14 rounded-[32px] border border-black/[0.04] shadow-sm relative group overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-gold/5 rounded-full -mr-16 -mb-16 transition-transform duration-700 group-hover:scale-150" />
            <div className="w-12 h-12 bg-secondary-gold/10 rounded-xl flex items-center justify-center text-secondary-gold mb-8">
              <TrendingUp size={24} />
            </div>
            <h3 className="font-heading text-3xl font-bold text-text-dark mb-6">Our Vision</h3>
            <p className="text-text-light text-lg leading-relaxed">
              Kivox.in aims to become a creative technology brand that blends innovation, design, and AI to build the next generation of digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-24 px-6 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark mb-6">
              What Makes Kivox.in <GoldText>Different</GoldText>
            </h2>
            <div className="w-20 h-1 bg-primary-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Modern Design",
                desc: "Clean, premium, and visually engaging interfaces inspired by modern SaaS and luxury brands.",
                icon: <Lightbulb />
              },
              {
                title: "Performance First",
                desc: "Fast loading speeds, responsive layouts, and smooth interactions are part of every build.",
                icon: <Zap />
              },
              {
                title: "AI-Powered",
                desc: "Using AI tools and automation to improve workflows, content systems, and efficiency.",
                icon: <Rocket />
              },
              {
                title: "Built for Growth",
                desc: "Every website is designed with scalability, branding, and conversion in mind.",
                icon: <TrendingUp />
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-black/[0.04] hover:border-primary-gold/30 hover:shadow-xl hover:shadow-primary-gold/5 transition-all duration-300"
              >
                <div className="text-primary-gold mb-4">{feature.icon}</div>
                <h4 className="font-heading text-xl font-bold text-text-dark mb-3">{feature.title}</h4>
                <p className="text-text-light text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 text-center overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-primary-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-8">
              Let&apos;s Build Something <GoldText>Exceptional</GoldText>
            </h2>
            <p className="text-text-light text-lg mb-10 leading-relaxed">
              Whether you’re launching a startup, scaling a brand, or upgrading your online presence, Kivox.in helps transform ideas into premium digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <span className="text-dark-gold font-bold text-xl tracking-tight">
                 Kivox.in
               </span>
               <div className="w-[1px] h-6 bg-black/10 hidden sm:block" />
               <p className="text-text-dark font-medium italic">
                 Modern Digital Experiences Powered by Creativity & AI.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
