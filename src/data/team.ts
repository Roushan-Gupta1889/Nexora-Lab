export interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  quote?: string;
  linkedin: string;
  portfolio?: string;
}

export const team: TeamMember[] = [
  {
    id: "arjun",
    image: "/images/team/team-arjun.png",
    name: "Arjun Dev",
    role: "Founder & CEO",
    bio: "Visionary leader with 7+ years of experience in building digital products and scaling businesses.",
    quote: "Building the future of digital experiences with precision and passion.",
    linkedin: "#",
    portfolio: "#",
  },
  {
    id: "neha",
    image: "/images/team/team-neha.png",
    name: "Neha Sharma",
    role: "Creative Director",
    bio: "Creative strategist and UI/UX expert passionate about designing experiences that connect and convert.",
    quote: "Design is not just what it looks like, it's how it works.",
    linkedin: "#",
    portfolio: "#",
  },
  {
    id: "rohit",
    image: "/images/team/team-rohit.png",
    name: "Rohit Verma",
    role: "Lead Developer",
    bio: "Full-stack developer who loves turning complex ideas into fast, secure, and scalable solutions.",
    quote: "Code is poetry when written with clarity and purpose.",
    linkedin: "#",
    portfolio: "#",
  },
  {
    id: "ananya",
    image: "/images/team/team-ananya.png",
    name: "Ananya Das",
    role: "Project Manager",
    bio: "Organized, detail-oriented, and focused on delivering projects on time with excellence.",
    quote: "Excellence is not an act, but a habit of discipline.",
    linkedin: "#",
    portfolio: "#",
  },
];
