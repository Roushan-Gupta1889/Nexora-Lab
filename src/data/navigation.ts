export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationData {
  links: NavLink[];
  cta: {
    label: string;
    href: string;
  };
}

export const navigation: NavigationData = {
  links: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About Us", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    label: "Let's Work Together",
    href: "#contact",
  },
};
