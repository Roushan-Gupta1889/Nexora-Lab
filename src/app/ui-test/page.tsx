"use client";

import {
  Button,
  Card,
  Badge,
  GoldText,
  IconCircle,
  SectionHeading,
  StatsStrip,
} from "@/components/ui";
import { stats } from "@/data/stats";
import {
  Rocket,
  Code,
  Shield,
  Smartphone,
  Target,
  Star,
  Sparkles,
  Users,
} from "lucide-react";

export default function UITestPage() {
  return (
    <main className="min-h-screen bg-bg-cream py-16 px-4">
      <div className="max-w-[1200px] mx-auto space-y-20">
        {/* ===================== PAGE TITLE ===================== */}
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-text-dark mb-2">
            UI Component <GoldText>Library</GoldText>
          </h1>
          <p className="text-text-light text-lg">
            Phase 3 — All components rendered for validation
          </p>
        </div>

        {/* ===================== BUTTONS ===================== */}
        <section>
          <h3 className="font-heading text-2xl font-semibold text-text-dark mb-8">
            1. Button Component
          </h3>

          {/* Primary variants */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-text-light uppercase tracking-wider mb-4">
              Primary
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">
                Small Button
              </Button>
              <Button variant="primary" size="md">
                Book a Free Strategy Call
              </Button>
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button
                variant="primary"
                size="md"
                icon={<Sparkles size={16} />}
                iconPosition="left"
              >
                Start Your Project
              </Button>
            </div>
          </div>

          {/* Outline variants */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-text-light uppercase tracking-wider mb-4">
              Outline
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="sm">
                Small Outline
              </Button>
              <Button variant="outline" size="md">
                Explore Our Work
              </Button>
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>

          {/* Ghost variants */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-text-light uppercase tracking-wider mb-4">
              Ghost
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="ghost" size="sm">
                Learn More
              </Button>
              <Button variant="ghost" size="md">
                View Case Study
              </Button>
              <Button variant="ghost" size="lg">
                Book a Free Call
              </Button>
            </div>
          </div>

          {/* Disabled state */}
          <div>
            <p className="text-sm font-semibold text-text-light uppercase tracking-wider mb-4">
              Disabled States
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" disabled>
                Disabled Primary
              </Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
              <Button variant="ghost" disabled>
                Disabled Ghost
              </Button>
            </div>
          </div>
        </section>

        {/* ===================== CARDS ===================== */}
        <section>
          <h3 className="font-heading text-2xl font-semibold text-text-dark mb-8">
            2. Card Component
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <IconCircle size="md" className="mb-4">
                <Target size={24} />
              </IconCircle>
              <h4 className="font-heading text-lg font-semibold text-text-dark mb-2">
                Default Card
              </h4>
              <div className="w-10 h-0.5 bg-primary-gold mb-3" />
              <p className="text-text-light text-sm leading-relaxed">
                Standard card with subtle border and hover elevation effect.
              </p>
            </Card>

            <Card variant="bordered">
              <IconCircle size="md" className="mb-4">
                <Rocket size={24} />
              </IconCircle>
              <h4 className="font-heading text-lg font-semibold text-text-dark mb-2">
                Bordered Card
              </h4>
              <div className="w-10 h-0.5 bg-primary-gold mb-3" />
              <p className="text-text-light text-sm leading-relaxed">
                Card with visible border that transitions to gold on hover.
              </p>
            </Card>

            <Card variant="featured">
              <IconCircle size="md" className="mb-4">
                <Shield size={24} />
              </IconCircle>
              <h4 className="font-heading text-lg font-semibold text-text-dark mb-2">
                Featured Card
              </h4>
              <div className="w-10 h-0.5 bg-primary-gold mb-3" />
              <p className="text-text-light text-sm leading-relaxed">
                Highlighted card with gold border and glow shadow effect.
              </p>
            </Card>
          </div>
        </section>

        {/* ===================== BADGE ===================== */}
        <section>
          <h3 className="font-heading text-2xl font-semibold text-text-dark mb-8">
            3. Badge Component
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Badge>WHAT WE DO</Badge>
            <Badge icon={<Star size={14} />}>OUR WORK</Badge>
            <Badge icon={<Sparkles size={14} />}>
              MODERN SOLUTIONS. REAL RESULTS.
            </Badge>
            <Badge icon={<Shield size={14} />}>
              TRUSTED BY GROWING BUSINESSES
            </Badge>
          </div>
        </section>

        {/* ===================== GOLD TEXT ===================== */}
        <section>
          <h3 className="font-heading text-2xl font-semibold text-text-dark mb-8">
            4. GoldText Component
          </h3>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
              Why Businesses Choose <GoldText>Nexora Labs</GoldText>
            </h2>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
              Digital Solutions That <GoldText>Drive Real Business Results</GoldText>
            </h2>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
              Our Works. <GoldText>Real Projects. Real Results.</GoldText>
            </h2>
          </div>
        </section>

        {/* ===================== ICON CIRCLE ===================== */}
        <section>
          <h3 className="font-heading text-2xl font-semibold text-text-dark mb-8">
            5. IconCircle Component
          </h3>
          <div className="flex flex-wrap items-end gap-6">
            <div className="text-center">
              <IconCircle size="sm">
                <Code size={18} />
              </IconCircle>
              <p className="text-xs text-text-light mt-2">Small</p>
            </div>
            <div className="text-center">
              <IconCircle size="md">
                <Rocket size={22} />
              </IconCircle>
              <p className="text-xs text-text-light mt-2">Medium</p>
            </div>
            <div className="text-center">
              <IconCircle size="lg">
                <Shield size={28} />
              </IconCircle>
              <p className="text-xs text-text-light mt-2">Large</p>
            </div>
            <div className="text-center">
              <IconCircle size="md">
                <Smartphone size={22} />
              </IconCircle>
              <p className="text-xs text-text-light mt-2">Mobile</p>
            </div>
            <div className="text-center">
              <IconCircle size="md">
                <Target size={22} />
              </IconCircle>
              <p className="text-xs text-text-light mt-2">Target</p>
            </div>
            <div className="text-center">
              <IconCircle size="md">
                <Users size={22} />
              </IconCircle>
              <p className="text-xs text-text-light mt-2">Users</p>
            </div>
          </div>
        </section>

        {/* ===================== SECTION HEADING ===================== */}
        <section>
          <h3 className="font-heading text-2xl font-semibold text-text-dark mb-8">
            6. SectionHeading Component
          </h3>

          <div className="space-y-16">
            {/* Center aligned */}
            <div className="rounded-[20px] bg-bg-warm p-8 md:p-12">
              <SectionHeading
                badge="WHAT WE DO"
                badgeIcon={<Sparkles size={14} />}
                title={
                  <>
                    Digital Solutions That{" "}
                    <GoldText>Drive Real Business Results</GoldText>
                  </>
                }
                description="From strategy and design to development and growth, we build high-performance websites and digital experiences that help your business scale."
                align="center"
              />
            </div>

            {/* Left aligned */}
            <div className="rounded-[20px] bg-bg-warm p-8 md:p-12">
              <SectionHeading
                badge="OUR WORK"
                badgeIcon={<Star size={14} />}
                title={
                  <>
                    Our Works.{" "}
                    <GoldText>Real Projects. Real Results.</GoldText>
                  </>
                }
                description="We take pride in delivering high-performance websites that not only look stunning but also drive measurable growth for our clients."
                align="left"
              />
            </div>
          </div>
        </section>

        {/* ===================== STATS STRIP ===================== */}
        <section>
          <h3 className="font-heading text-2xl font-semibold text-text-dark mb-8">
            7. StatsStrip Component
          </h3>
          <StatsStrip data={stats} />
        </section>

        {/* ===================== COMPOSITION DEMO ===================== */}
        <section>
          <h3 className="font-heading text-2xl font-semibold text-text-dark mb-8">
            8. Full Composition Demo
          </h3>
          <div className="rounded-[20px] bg-bg-warm p-8 md:p-12">
            <SectionHeading
              badge="HOW WE HELP YOU GROW"
              badgeIcon={<Sparkles size={14} />}
              title={
                <>
                  Why Businesses Choose <GoldText>Nexora Labs</GoldText>
                </>
              }
              description="We combine strategy, design, and technology to create high-performance websites that don't just look good—but deliver real results."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { icon: <Target size={24} />, title: "Conversion Focused", desc: "We build websites that turn visitors into paying customers with strategy-driven design and UX." },
                { icon: <Rocket size={24} />, title: "High Performance", desc: "Lightning-fast, SEO-friendly websites that deliver a smooth experience and rank better on Google." },
                { icon: <Smartphone size={24} />, title: "Mobile Optimized", desc: "Fully responsive designs that look perfect and perform seamlessly on every device." },
                { icon: <Shield size={24} />, title: "Secure & Reliable", desc: "We follow best practices to keep your website secure, stable, and ready to scale as you grow." },
              ].map((item) => (
                <Card key={item.title} variant="default" className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconCircle size="md">{item.icon}</IconCircle>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-text-dark mb-2">
                    {item.title}
                  </h4>
                  <div className="w-10 h-0.5 bg-primary-gold mx-auto mb-3" />
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
            <StatsStrip data={stats} />
          </div>
        </section>
      </div>
    </main>
  );
}
