export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  number: string;
}

export const services: Service[] = [
  {
    id: "web-design",
    icon: "layout",
    title: "Web Design",
    description: "Modern, user-centric designs that engage visitors and build trust.",
    bullets: ["UI/UX Design", "Landing Pages", "Custom Website Design"],
    number: "01",
  },
  {
    id: "web-development",
    icon: "code",
    title: "Web Development",
    description: "Fast, secure, and scalable websites built with modern technologies.",
    bullets: ["React & Next.js", "WordPress Development", "Custom Web Applications"],
    number: "02",
  },
  {
    id: "ecommerce",
    icon: "shopping-cart",
    title: "E-Commerce Solutions",
    description: "Online stores that convert visitors into loyal customers.",
    bullets: ["Shopify Development", "WooCommerce", "Store Optimization"],
    number: "03",
  },
  {
    id: "seo",
    icon: "bar-chart",
    title: "SEO & Performance Optimization",
    description: "Rank higher, load faster, and deliver a better experience for your users.",
    bullets: ["On-Page SEO", "Technical SEO", "Speed Optimization"],
    number: "04",
  },
  {
    id: "branding",
    icon: "rocket",
    title: "Branding & Identity",
    description: "Build a strong brand identity that connects and leaves a lasting impression.",
    bullets: ["Brand Strategy", "Logo Design", "Visual Identity"],
    number: "05",
  },
  {
    id: "support",
    icon: "headphones",
    title: "Support & Maintenance",
    description: "We keep your website secure, updated, and performing at its best.",
    bullets: ["Website Maintenance", "Security Updates", "24/7 Support"],
    number: "06",
  },
];
