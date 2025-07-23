export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: "Simplified Practices",
    position: "Full Stack Developer",
    duration: "2022 - 2025",
    location: "Estados Unidos - Remoto",
    description: "Desarrollo de aplicaciones web y móviles utilizando tecnologías modernas como React, Node.js y Flutter. Implementación de soluciones escalables y optimización del rendimiento.",
    responsibilities: [
      "Desarrollo de interfaces de usuario responsivas y accesibles.",
      "Integración de APIs y servicios externos.",
      "Colaboración con equipos multidisciplinarios para definir requisitos y entregar soluciones efectivas.",
      "Mantenimiento y mejora continua de aplicaciones existentes.",
      "Implementación de buenas prácticas de SEO para mejorar la visibilidad en buscadores.",
    ]
  },
  {
    company: "Trece Software",
    position: "Full Stack Developer",
    duration: "2024 - 2024",
    location: "Colombia - Remoto",
    description: "Desarrollo de microservicios y APIs utilizando NestJS. Implementación de soluciones de bases de datos con MongoDB.",
    responsibilities: [
      "Diseño y desarrollo de APIs RESTful.",
      "Implementación de autenticación y autorización de usuarios.",
      "Optimización de consultas a bases de datos.",
      "Colaboración con equipos de frontend para integrar servicios.",
      "Desarrollo de aplicaciones móviles utilizando Flutter.",
      "Integración de pasarelas de pago y servicios de terceros.",
    ]
  },
  {
    company: "PAYQA",
    position: "Flutter Developer",
    duration: "2021 - 2022",
    location: "Perú - Remoto",
    description: "Desarrollo de aplicaciones móviles utilizando Flutter.",
    responsibilities: [
      "Diseño y desarrollo de interfaces de usuario móviles.",
      "Implementación de lógica de negocio y gestión de estado.",
      "Integración con servicios backend y APIs.",
      "Optimización del rendimiento de aplicaciones móviles.",
    ]
  },
  {
    company: "INTITUTO SUPERIOR 17 DE JULIO",
    position: "Desarrollador Web",
    duration: "2020 - 2021",
    location: "Ecuador - Presencial",
    description: "Diseñé e implementé la página institucional del Instituto Superior 17 de Julio utilizando tecnologías web modernas. Implementé un sistema de gestión de contenidos para facilitar la actualización de información.",
    responsibilities: [
      "Diseño y desarrollo de la arquitectura de la información.",
      "Implementación de un sistema de gestión de contenidos.",
      "Optimización de la experiencia del usuario.",
      "Capacitación al personal en el uso de la plataforma.",
      "Aplicación de técnicas de SEO para mejorar el posicionamiento web.",
    ]
  },
];
