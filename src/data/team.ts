export interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: "arjun",
    image: "/images/team/arjun-dev.png",
    name: "Arjun Dev",
    role: "Founder & CEO",
    bio: "Visionary leader with 7+ years of experience in building digital products and scaling businesses.",
    linkedin: "#",
  },
  {
    id: "neha",
    image: "/images/team/neha-sharma.png",
    name: "Neha Sharma",
    role: "Creative Director",
    bio: "Creative strategist and UI/UX expert passionate about designing experiences that connect and convert.",
    linkedin: "#",
  },
  {
    id: "rohit",
    image: "/images/team/rohit-verma.png",
    name: "Rohit Verma",
    role: "Lead Developer",
    bio: "Full-stack developer who loves turning complex ideas into fast, secure, and scalable solutions.",
    linkedin: "#",
  },
  {
    id: "ananya",
    image: "/images/team/ananya-das.png",
    name: "Ananya Das",
    role: "Project Manager",
    bio: "Organized, detail-oriented, and focused on delivering projects on time with excellence.",
    linkedin: "#",
  },
];
