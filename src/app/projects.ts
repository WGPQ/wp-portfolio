export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}
export const projects: Project[] = [
  {
    title: "SP Members Portal",
    description: "Design & Development",
    image: "/images/sp_members_portal.png",
    technologies: ["Flutter", "Bloc", "Socket"],
  },
  {
    title: "Borondo",
    description: "Development",
    image: "/images/borondo.png",
    technologies: ["Flutter", "Bloc", "Mapbox", "Stripe"],
  },
  {
    title: "Simplified Practice",
    description: "Design & Development",
    image: "/images/simplified_practice.png",
    technologies: ["React", "Redux", "Twilio", "Material UI"],
  },
  {
    title: "Hombrex",
    description: "Design & Development",
    image: "/images/hombrex.png",
    technologies: ["Nuxt", "Pinia", "Tailwind CSS", "Paypal"],
  },
  {
    title: "Complete Family & Urgent Care",
    description: "Design & Development",
    image: "/images/complete_family.png",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    title: "Patient Portal",
    description: "Design & Development",
    image: "/images/patient_portal.png",
    technologies: ["Nuxt", "Pinia", "Tailwind CSS"],
  },
  {
    title: "My Portfolio",
    description: "Design & Development",
    image: "/images/my_portfolio.png",
    technologies: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Portal BiblioChat UTN",
    description: "Design & Development",
    image: "/images/bibliochat.png",
    technologies: ["Angular", "Redux", "Bootstrap", "Bot Framework"],
  },
];
