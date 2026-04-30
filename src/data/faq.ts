export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  column: "left" | "right";
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of your project. A standard website usually takes 2–4 weeks, while more advanced websites may take 4–8 weeks. We always share a clear timeline before we begin.",
    column: "left",
  },
  {
    id: "faq-2",
    question: "What is the cost of a website?",
    answer:
      "The cost varies based on the scope, features, and complexity of your project. We offer competitive pricing tailored to your needs. Contact us for a free quote.",
    column: "left",
  },
  {
    id: "faq-3",
    question: "What platform do you use to build websites?",
    answer:
      "We use modern technologies like React, Next.js, WordPress, and Shopify depending on your project requirements. We choose the best platform to match your goals.",
    column: "left",
  },
  {
    id: "faq-4",
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website we build is fully responsive and optimized for all devices — desktop, tablet, and mobile.",
    column: "left",
  },
  {
    id: "faq-5",
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes. We follow SEO best practices including clean code, fast loading times, proper meta tags, and structured content to help your website rank better on search engines.",
    column: "left",
  },
  {
    id: "faq-6",
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer ongoing website maintenance plans to keep your site secure, updated, and performing at its best.",
    column: "right",
  },
  {
    id: "faq-7",
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we specialize in website redesigns. We can transform your existing site into a modern, high-performing website that aligns with your brand.",
    column: "right",
  },
  {
    id: "faq-8",
    question: "What if I need changes after the website is live?",
    answer:
      "We offer post-launch support and revisions. Whether it's a small tweak or a major update, we're here to help.",
    column: "right",
  },
  {
    id: "faq-9",
    question: "Do you offer content writing as well?",
    answer:
      "Yes, we can help with content strategy and copywriting to ensure your website communicates your brand message effectively.",
    column: "right",
  },
  {
    id: "faq-10",
    question: "Do you work with businesses in my industry?",
    answer:
      "We work with businesses across various industries including SaaS, e-commerce, healthcare, real estate, and more. Our solutions are tailored to fit your specific industry needs.",
    column: "right",
  },
];
