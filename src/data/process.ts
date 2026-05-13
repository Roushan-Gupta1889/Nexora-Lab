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
    icon: "message",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and audience to understand exactly what you need.",
  },
  {
    id: "strategy",
    number: "02",
    icon: "file",
    title: "Strategy & Plan",
    description:
      "We create a clear plan — structure, content flow, and design direction that supports your goals.",
  },
  {
    id: "develop",
    number: "03",
    icon: "code",
    title: "Design & Development",
    description:
      "We design and build a fast, modern, and responsive website that represents your brand perfectly.",
  },
  {
    id: "launch",
    number: "04",
    icon: "rocket",
    title: "Launch & Support",
    description:
      "We launch your website and provide ongoing support to help you grow and scale with confidence.",
  },
];
