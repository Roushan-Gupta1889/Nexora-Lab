export interface ProcessStep {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    icon: "users",
    title: "Discover & Plan",
    description:
      "We learn about your business, goals, and target audience to create a strategic plan that sets the right foundation.",
  },
  {
    id: "design",
    number: "02",
    icon: "edit",
    title: "Design & Wireframe",
    description:
      "We create user-focused wireframes and stunning designs that reflect your brand and engage users.",
  },
  {
    id: "develop",
    number: "03",
    icon: "code",
    title: "Develop & Build",
    description:
      "Our developers bring the design to life with clean, scalable code and modern technologies.",
  },
  {
    id: "test",
    number: "04",
    icon: "settings",
    title: "Test & Optimize",
    description:
      "We thoroughly test across devices and browsers to ensure speed, security, and a flawless experience.",
  },
  {
    id: "launch",
    number: "05",
    icon: "rocket",
    title: "Launch & Deploy",
    description:
      "We launch your website seamlessly and ensure everything is optimized for performance from day one.",
  },
  {
    id: "support",
    number: "06",
    icon: "headphones",
    title: "Support & Grow",
    description:
      "We provide ongoing support and continuous improvements to help your business grow and stay ahead.",
  },
];
