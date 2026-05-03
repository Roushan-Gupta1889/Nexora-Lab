export interface PortfolioProject {
  id: string;
  image: string;
  category: string;
  categoryLabel: string;
  title: string;
  description: string;
  link: string;
}

export const portfolioCategories = [
  "All Projects",
  "Business",
  "E-Commerce",
  "SaaS",
  "Portfolio",
  "Healthcare",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export const projects: PortfolioProject[] = [
  {
    id: "brewora",
    image: "/images/portfolio/portfolio-brewora.png",
    category: "E-Commerce",
    categoryLabel: "E-COMMERCE",
    title: "Brewora Coffee Co.",
    description:
      "A modern e-commerce store that increased online sales by 120% in just 3 months.",
    link: "#",
  },
  {
    id: "fitfuel",
    image: "/images/portfolio/portfolio-fitfuel.png",
    category: "Healthcare",
    categoryLabel: "HEALTHCARE",
    title: "FitFuel Nutrition",
    description:
      "A health & nutrition platform with a clean UI that improved user engagement by 85%.",
    link: "#",
  },
  {
    id: "saasly",
    image: "/images/portfolio/portfolio-saasly.png",
    category: "SaaS",
    categoryLabel: "SAAS",
    title: "SaaSly Dashboard",
    description:
      "A SaaS dashboard that helps businesses streamline operations and save time.",
    link: "#",
  },
  {
    id: "apexivo",
    image: "/images/portfolio/portfolio-apexivo.png",
    category: "Business",
    categoryLabel: "BUSINESS",
    title: "Apexivo Architects",
    description:
      "A professional website that elevated brand credibility and generated 3X more leads.",
    link: "#",
  },
];
