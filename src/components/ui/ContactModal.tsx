"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { Button } from "@/components/ui/Button";

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  service: string;
  message: string;
}

type ToastType = "success" | "error" | null;

const initialFormData: FormData = {
  name: "",
  mobile: "",
  email: "",
  subject: "",
  service: "",
  message: "",
};

// ─── Toast Component ─────────────────────────────────────────────────────────
function Toast({
  type,
  message,
  onClose,
}: {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1100] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl max-w-[90vw] ${
        type === "success"
          ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
          : "bg-red-50 border border-red-200 text-red-800"
      }`}
    >
      {type === "success" ? (
        <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
      ) : (
        <AlertCircle size={20} className="text-red-500 shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 shrink-0 hover:opacity-70 transition-opacity"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}

// ─── Input Class ─────────────────────────────────────────────────────────────
const inputClass =
  "w-full px-4 py-2.5 rounded-xl bg-bg-warm border border-black/[0.04] focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all text-sm text-text-dark placeholder:text-text-light/60";

// ─── Component ───────────────────────────────────────────────────────────────
export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: ToastType; message: string }>({
    type: null,
    message: "",
  });
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show toast with auto-dismiss
  const showToast = (type: "success" | "error", message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(() => {
      setToast({ type: null, message: "" });
    }, 5000);
  };

  const dismissToast = () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type: null, message: "" });
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) return showToast("error", "Please enter your name.");
    if (!formData.mobile.trim() || formData.mobile.trim().length < 10)
      return showToast("error", "Please enter a valid mobile number.");
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return showToast("error", "Please enter a valid email address.");
    if (!formData.subject.trim()) return showToast("error", "Please enter a subject.");
    if (!formData.service) return showToast("error", "Please select a service.");
    if (!formData.message.trim() || formData.message.trim().length < 10)
      return showToast("error", "Message must be at least 10 characters.");

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast("success", result.message || "Message sent successfully!");
        setFormData(initialFormData);
        // Close modal after a short delay so user sees the success toast
        setTimeout(() => closeModal(), 1500);
      } else {
        showToast("error", result.error || "Something went wrong. Please try again.");
      }
    } catch {
      showToast("error", "Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when modal closes
  const handleClose = () => {
    setFormData(initialFormData);
    dismissToast();
    closeModal();
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.type && (
          <Toast type={toast.type} message={toast.message} onClose={dismissToast} />
        )}
      </AnimatePresence>

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
              onClick={handleClose}
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
                  onClick={handleClose}
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-semibold text-text-dark">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-semibold text-text-dark">Mobile No.</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 "
                        className={inputClass}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-semibold text-text-dark">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-semibold text-text-dark">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Inquiry Topic"
                        className={inputClass}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-text-dark uppercase tracking-wider">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`${inputClass} appearance-none cursor-pointer`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                      }}
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more..."
                      rows={3}
                      disabled={isSubmitting}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={null}
                    disabled={isSubmitting}
                    className="w-full mt-2 group shadow-[0_8px_24px_rgba(230,165,32,0.2)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2 opacity-80" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
