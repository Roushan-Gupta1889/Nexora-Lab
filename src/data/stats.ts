export interface Stat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "clients", icon: "users", value: "50+", label: "Happy Clients" },
  { id: "projects", icon: "briefcase", value: "100+", label: "Projects Completed" },
  { id: "experience", icon: "trending-up", value: "5+", label: "Years of Experience" },
  { id: "satisfaction", icon: "shield-check", value: "99%", label: "Client Satisfaction" },
];
