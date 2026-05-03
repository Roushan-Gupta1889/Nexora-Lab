export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const whyChooseUsFeatures: Feature[] = [
  {
    id: "conversion",
    icon: "target",
    title: "Conversion Focused",
    description:
      "We design interfaces and user journeys specifically optimized to turn visitors into paying customers and qualified leads.",
  },
  {
    id: "performance",
    icon: "zap",
    title: "High Performance",
    description:
      "Lightning-fast load times and optimized code architectures ensure a seamless experience that boosts both SEO and user retention.",
  },
  {
    id: "mobile",
    icon: "smartphone",
    title: "Mobile Optimized",
    description:
      "Flawless responsive design guarantees your site looks and functions perfectly across all devices and screen sizes.",
  },
  {
    id: "secure",
    icon: "shield",
    title: "Secure & Reliable",
    description:
      "Built with modern security practices and robust infrastructure to keep your business and customer data safe at all times.",
  },
];
