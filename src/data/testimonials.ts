export interface Testimonial {
  id: string;
  avatar: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "rohit",
    avatar: "/images/testimonials/testimonial-rohit.png",
    name: "Rohit Mehta",
    role: "Founder",
    company: "Brewora Coffee Co.",
    quote:
      "Nexora Labs transformed our online presence completely. The new website not only looks stunning but also increased our leads by 3X within just a few months.",
    rating: 5,
  },
  {
    id: "neha",
    avatar: "/images/testimonials/testimonial-neha.png",
    name: "Neha Kapoor",
    role: "CEO",
    company: "FitFuel Nutrition",
    quote:
      "Professional, responsive, and highly skilled team. Nexora Labs delivered a fast, secure, and SEO-friendly website that helped us scale our business effortlessly.",
    rating: 5,
  },
  {
    id: "aman",
    avatar: "/images/testimonials/testimonial-aman.png",
    name: "Aman Verma",
    role: "Marketing Head",
    company: "Apexivo Architects",
    quote:
      "From design to development, everything was handled with expertise and care. The results speak for themselves—our website traffic and conversions improved significantly.",
    rating: 5,
  },
];
