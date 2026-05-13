"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Palette, Code2, TrendingUp, Search, Layers, Cpu, Globe } from "lucide-react";
import { GoldText } from "@/components/ui/GoldText";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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

  const categories = [
    "AI & Automation", "Website Design", "Development", "Branding",
    "UI/UX", "SEO & Growth", "Case Studies", "Digital Strategy"
  ];

  const trendingTopics = [
    "Next.js", "AI Tools", "Framer Motion", "Tailwind CSS",
    "SaaS Design", "LLM SEO", "Web Performance", "Modern Branding"
  ];

  const featuredArticles = [
    {
      title: "How Premium Websites Build Instant Trust",
      desc: "Discover the design principles, layouts, animations, and visual strategies modern brands use to create premium digital experiences.",
      category: "Website Design",
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "Best AI Tools for Modern Businesses",
      desc: "Explore powerful AI tools and automation systems that improve workflows, productivity, and customer experiences.",
      category: "AI & Automation",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Modern UI Trends in 2026",
      desc: "A look into the latest UI/UX trends shaping the future of websites, SaaS products, and digital brands.",
      category: "UI/UX",
      icon: <Layers className="w-5 h-5" />
    }
  ];

  const valueProps = [
    {
      title: "Premium Website Inspiration",
      desc: "Modern layouts, smooth interactions, landing page structures, and design systems inspired by top digital products.",
      icon: <Sparkles />
    },
    {
      title: "AI & Automation Insights",
      desc: "Guides, workflows, and tools that help businesses automate processes and scale faster using AI.",
      icon: <Zap />
    },
    {
      title: "Development Tutorials",
      desc: "Next.js, React, Tailwind CSS, Framer Motion, GSAP, and modern frontend development techniques.",
      icon: <Code2 />
    },
    {
      title: "Branding & Digital Growth",
      desc: "Content focused on visual identity, online positioning, SEO, and modern marketing strategies.",
      icon: <TrendingUp />
    }
  ];

  return (
    <main className="min-h-screen bg-bg-cream">
      {/* Blog Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full pointer-events-none">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary-gold/5 rounded-full blur-[100px]" />
          <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-secondary-gold/5 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles size={18} className="text-primary-gold" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-dark-gold uppercase">
                Insights & Ideas
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-dark leading-[1.1] mb-8">
              Digital <GoldText>Innovation</GoldText> & Premium Insights
            </h1>
            <p className="text-text-light text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
              Kivox.in shares modern insights on web design, AI automation, branding, development, SEO, and digital growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark">Featured <GoldText>Articles</GoldText></h2>
            <div className="hidden md:flex items-center gap-2 text-primary-gold font-medium cursor-pointer group">
              View all <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-8 rounded-[24px] border border-black/[0.04] hover:border-primary-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-gold/5"
              >
                <div className="w-12 h-12 bg-bg-warm rounded-xl flex items-center justify-center text-primary-gold mb-6 transition-colors group-hover:bg-primary-gold/10">
                  {article.icon}
                </div>
                <span className="text-[11px] font-bold tracking-widest text-dark-gold uppercase mb-3 block">{article.category}</span>
                <h3 className="font-heading text-xl font-bold text-text-dark mb-4 group-hover:text-primary-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.desc}
                </p>
                <div className="flex items-center gap-2 text-text-dark font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all cursor-pointer">
                  Read More <ArrowRight size={14} className="text-primary-gold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Trending */}
      <section className="py-20 px-6 bg-white/50 border-y border-black/[0.04]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h3 className="font-heading text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
              <Search size={20} className="text-primary-gold" /> Explore Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <div key={cat} className="px-4 py-3 bg-white border border-black/[0.04] rounded-xl text-sm font-medium text-text-light hover:border-primary-gold/40 hover:text-primary-gold transition-all cursor-pointer text-center">
                  {cat}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <h3 className="font-heading text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
              <TrendingUp size={20} className="text-primary-gold" /> Trending Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((topic) => (
                <span key={topic} className="px-3 py-1.5 bg-primary-gold/5 text-dark-gold rounded-full text-xs font-bold hover:bg-primary-gold/10 transition-colors cursor-pointer border border-primary-gold/10">
                  #{topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark mb-6">What You&apos;ll <GoldText>Find Here</GoldText></h2>
            <p className="text-text-light max-w-[600px] mx-auto">Explore premium UI inspiration, cutting-edge technologies, creative workflows, and growth strategies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop, i) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 bg-white p-8 rounded-3xl border border-black/[0.04] group hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-bg-warm rounded-2xl flex items-center justify-center text-primary-gold shrink-0 transition-transform group-hover:scale-110">
                  {prop.icon}
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-text-dark mb-3">{prop.title}</h4>
                  <p className="text-text-light text-sm leading-relaxed">{prop.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Stay Updated */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto bg-white p-10 md:p-16 rounded-[40px] border border-black/[0.04] shadow-sm text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-gold to-secondary-gold" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6">Stay <GoldText>Updated</GoldText></h2>
          <p className="text-text-light text-lg mb-10 leading-relaxed">
            Get the latest insights on design, AI, development, and digital growth delivered directly from Kivox.in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 rounded-full bg-bg-warm border border-black/[0.06] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-sm"
            />
            <button className="px-8 py-4 bg-primary-gold text-white rounded-full font-bold text-sm hover:bg-dark-gold transition-all shadow-lg shadow-primary-gold/20">
              Subscribe
            </button>
          </div>
          <p className="mt-8 text-text-light/60 text-[11px] font-medium tracking-widest uppercase">
            Explore ideas. Build smarter. Create exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-8">
              Let&apos;s Build Something <GoldText>Exceptional</GoldText>
            </h2>
            <p className="text-text-light text-lg mb-10 leading-relaxed">
              Whether you need a premium website, AI-powered solution, or a modern digital experience, Kivox.in helps turn ideas into scalable digital products.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-primary-gold font-bold text-2xl tracking-tighter">Kivox.in</span>
              <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
              <p className="text-text-dark font-medium italic">Powered by Creativity & AI</p>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
