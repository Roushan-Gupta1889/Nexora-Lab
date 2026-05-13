"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { Button } from "@/components/ui/Button";

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-3xl w-full max-w-[520px] p-8 md:p-10 relative shadow-2xl shadow-black/10 pointer-events-auto border border-black/[0.04]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-bg-warm flex items-center justify-center text-text-light hover:text-text-dark hover:bg-primary-gold/10 transition-all"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-2">
                Send a Message
              </h3>
              <p className="text-text-light text-sm mb-8">
                Fill out the form and we&apos;ll be in touch.
              </p>

              {/* Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-text-dark">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-sm text-text-dark placeholder:text-text-light/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-text-dark">Mobile No.</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-sm text-text-dark placeholder:text-text-light/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-text-dark">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-sm text-text-dark placeholder:text-text-light/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-text-dark">Subject</label>
                    <input
                      type="text"
                      placeholder="Inquiry Topic"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-sm text-text-dark placeholder:text-text-light/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-semibold text-text-dark uppercase tracking-wider">Service</label>
                  <select
                    defaultValue=""
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-sm text-text-dark appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                    }}
                  >
                    <option value="" disabled>Choose a service</option>
                    <option value="new-website">New website</option>
                    <option value="website-redesign">Website redesign</option>
                    <option value="e-commerce">E-Commerce development</option>
                    <option value="landing-page">Landing page design</option>
                    <option value="seo">SEO optimization</option>
                    <option value="web-app">Web application</option>
                    <option value="launch-support">Launch support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-semibold text-text-dark">Message</label>
                  <textarea
                    placeholder="Tell us more..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-sm text-text-dark placeholder:text-text-light/60 resize-none"
                  />
                </div>

                <Button
                  variant="primary"
                  size="md"
                  className="w-full mt-2 group shadow-[0_8px_24px_rgba(230,165,32,0.2)]"
                >
                  <Send size={16} className="mr-2 opacity-80" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
