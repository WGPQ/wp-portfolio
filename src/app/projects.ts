export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}
export const projects: Project[] = [
  {
    title: "Simplified Practice",
    description: "Design & Development",
    image: "/images/simplified_practice.png",
    technologies: ["React", "Redux", "Twilio", "Material UI"],
  },
  {
    title: "Borondo",
    description: "Development",
    image: "/images/borondo.png",
    technologies: ["Flutter", "Bloc", "Mapbox", "Stripe"],
  },
  {
    title: "Hombrex",
    description: "Design & Development",
    image: "/images/hombrex.png",
    technologies: ["Nuxt", "Pinia", "Tailwind CSS", "Paypal"],
  },
  {
    title: "Haz Conta",
    description: "Development",
    image: "/images/haz_conta.png",
    technologies: ["React", "Zustand", "Material UI", "GraphQL"],
  },
  {
    title: "Patient Portal",
    description: "Design & Development",
    image: "/images/patient_portal.png",
    technologies: ["Nuxt", "Pinia", "Tailwind CSS"],
  },
  {
    title: "Complete Family & Urgent Care",
    description: "Design & Development",
    image: "/images/complete_family.png",
    technologies: ["Html", "Css", "JavaScript"],
  },
  // {
  //   title: "My Portfolio",
  //   description: "Design & Development",
  //   image: "/images/my_portfolio.png",
  //   technologies: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
  // },
  {
    title: "SP Members Portal",
    description: "Design & Development",
    image: "/images/sp_members_portal.png",
    technologies: ["Flutter", "Bloc", "Socket"],
  },
  {
    title: "Portal BiblioChat UTN",
    description: "Design & Development",
    image: "/images/bibliochat.png",
    technologies: ["Angular", "Redux", "Bootstrap", "Bot Framework"],
  },
];
