"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { footerData } from "@/data/footer";
import { Dock, DockIcon } from "@/components/ui/dock";

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case "twitter": 
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
      );
    case "linkedin": 
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case "instagram": 
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    default: return null;
  }
};

export function FooterSection() {
  return (
    <footer className="bg-[#FCF9F2] pt-24 pb-8 text-text-dark overflow-hidden relative border-t border-black/[0.04]">
      
      {/* Decorative subtle gradient background */} 
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-gradient-to-tl from-[#FDEFD8]/60 to-transparent pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-3 flex flex-col">
            <Link href="/" className="relative w-[280px] h-20 mb-6 block">
              <Image
              src="/images/logo1.png"
              alt="Kivox.in"
              fill
              className="object-contain object-left scale-150 origin-left"
              sizes="280px"
              />
            </Link>
            <p className="text-text-light text-[15px] leading-relaxed mb-8 max-w-[260px]">
              {footerData.brand.description}
            </p>
            <Dock direction="middle" className="mx-0 mt-0 h-auto justify-start gap-4 border-none bg-transparent p-0 supports-backdrop-blur:bg-transparent shadow-none">
              {footerData.brand.socials.map((social) => (
                <DockIcon
                  key={social.platform}
                  className="border border-[#E6A520]/30 text-[#B08D46] hover:bg-[#E6A520] hover:text-white transition-colors duration-300 shadow-sm"
                >
                  <Link
                    href={social.href}
                    className="w-full h-full flex items-center justify-center rounded-full"
                    aria-label={social.platform}
                  >
                    <SocialIcon platform={social.platform} />
                  </Link>
                </DockIcon>
              ))}
            </Dock>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-heading text-[22px] font-semibold text-text-dark mb-2">Quick Links</h4>
            <div className="w-8 h-[2px] bg-[#E6A520] mb-6" />
            <ul className="space-y-4">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-text-light text-[15px] hover:text-[#7A4A00] transition-colors"
                  >
                    <ChevronRight size={14} className="text-[#E6A520] mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-[22px] font-semibold text-text-dark mb-2">Services</h4>
            <div className="w-8 h-[2px] bg-[#E6A520] mb-6" />
            <ul className="space-y-4">
              {footerData.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-text-light text-[15px] hover:text-[#7A4A00] transition-colors"
                  >
                    <ChevronRight size={14} className="text-[#E6A520] mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-[22px] font-semibold text-text-dark mb-2">Company</h4>
            <div className="w-8 h-[2px] bg-[#E6A520] mb-6" />
            <ul className="space-y-4">
              {footerData.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-text-light text-[15px] hover:text-[#7A4A00] transition-colors"
                  >
                    <ChevronRight size={14} className="text-[#E6A520] mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-[22px] font-semibold text-text-dark mb-2">Get in Touch</h4>
            <div className="w-8 h-[2px] bg-[#E6A520] mb-6" />
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-text-light group">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#B08D46]" />
                <span className="text-[15px] leading-relaxed whitespace-pre-line">{footerData.contact.address}</span>
              </li>
              <li>
                <a href={`mailto:${footerData.contact.email}`} className="flex items-start gap-3 text-text-light hover:text-[#7A4A00] transition-colors break-words">
                  <Mail size={18} className="mt-0.5 shrink-0 text-[#B08D46]" />
                  <span className="text-[15px] break-all">{footerData.contact.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-start gap-3 text-text-light hover:text-[#7A4A00] transition-colors">
                  <Phone size={18} className="mt-0.5 shrink-0 text-[#B08D46]" />
                  <span className="text-[15px]">{footerData.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-light group">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#B08D46]" />
                <span className="text-[15px]">{footerData.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/[0.04] mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          <p className="text-[#6B6B6B] text-[14px]">
            © {new Date().getFullYear()} Nexora Labs. All rights reserved.
          </p>
          
          

          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#6B6B6B] text-[14px] hover:text-[#7A4A00] transition-colors">Privacy Policy</Link>
            <span className="text-[#E6A520]/40">|</span>
            <Link href="#" className="text-[#6B6B6B] text-[14px] hover:text-[#7A4A00] transition-colors">Terms of Service</Link>
            <span className="text-[#E6A520]/40">|</span>
            <Link href="#" className="text-[#6B6B6B] text-[14px] hover:text-[#7A4A00] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
