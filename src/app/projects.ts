export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  acronimon?: string;
  link?: string;
  slogan?: string;
  summary?: string;
  importantPoints?: string[];
  aboutBuilding?: string;
}
export const projects: Project[] = [
  {
    title: "Simplified Practice",
    description: "Diseño y Desarrollo",
    acronimon: "SP",
    link: "https://dev.simplifiedpractice.xyz/app",
    image: "/images/simplified_practice.png",
    technologies: ["React", "Redux", "Twilio", "Material UI"],
    slogan: "Software de gestión de franquicias",
    summary: `Simplified Practice es un software de gestion de franquisias ya que
     permite que una sola aplicación de software sirva a múltiples clientes (tenants)
     de forma aislada, eficiente y escalable. Cada tenant representa una organización,
      empresa o incluso puede ser un usuario independiente que accede al mismo sistema,
       pero con sus propios datos, configuraciones y permisos.`,
    importantPoints: [
      "Permite compartir la misma infraestructura.",
      "Facilita agregar nuevos tenants sin necesidad de desplegar instancias separadas.",
      "Las actualizaciones, parches de seguridad y mejoras solo deben aplicarse una vez",
      "Aunque comparten la misma aplicación, los datos de cada tenant están completamente aislados, garantizando privacidad y seguridad.",
      "Se pueden aplicar configuraciones, funcionalidades o estilos específicos por cada tenant (como logos, idiomas, módulos habilitados, etc.).",
    ],
    aboutBuilding: `El desarrollo de Simplified Practice se realizó utilizando React para la interfaz de usuario, Redux para
    la gestión del estado y Twilio para las funcionalidades
     de comunicación. La aplicación está diseñada para ser
      altamente escalable y segura, permitiendo a múltiples organizaciones operar
      en un entorno compartido sin comprometer la privacidad de sus datos.`,
  },
  {
    title: "Borondo",
    description: "Desarrollo",
    acronimon: "Borondo",
    image: "/images/borondo.png",
    technologies: ["Flutter", "Bloc", "Mapbox", "Stripe"],
    link: "https://borondo-app.com",
    slogan: "Mejora tu experiencia turística con rutas de verdadero interés.",
    summary: `Borondo es una aplicación móvil que permite a los usuarios descubrir y explorar rutas turísticas personalizadas
     basadas en sus intereses y preferencias. Utilizando tecnología avanzada de mapeo y geolocalización, Borondo ofrece
      una experiencia única para los amantes del turismo.`,
    importantPoints: [
      "Permiter a los usuarios crear y compartir rutas turísticas personalizadas.",
      "Utiliza Mapbox para proporcionar mapas interactivos y geolocalización precisa.",
      "Integra Stripe para facilitar pagos seguros y rápidos.",
      "Ofrece recomendaciones basadas en intereses personales y preferencias de los usuarios.",
    ],
    aboutBuilding: `El desarrollo de Borondo se realizó utilizando Flutter para la interfaz de usuario,
    Bloc para la gestión del estado y Mapbox para las funcionalidades de mapeo y geolocalización.
     La aplicación está diseñada para ser intuitiva y fácil de usar, permitiendo
      a los usuarios explorar nuevas rutas turísticas de manera eficiente y personalizada.`,
  },
  {
    title: "Hombrex",
    description: "Diseño & Desarrollo",
    image: "/images/hombrex.png",
    technologies: ["Nuxt", "Pinia", "Tailwind CSS", "Paypal"],
    // link: "https://hombrex.com",
    slogan: "Tu tienda de moda masculina online",
    summary: `Hombrex es una tienda de moda masculina online que ofrece una amplia gama productos de alta calidad,
    para el cuidado personal masculino. Desde ropa hasta accesorios, Hombrex se dedica a proporcionar
    productos que realzan la confianza y el estilo de los hombres modernos.`,
    importantPoints: [
      "Ofrece una amplia gama de productos de moda masculina.",
      "Utiliza Nuxt para una experiencia de usuario rápida y fluida.",
      "Implementa Pinia para una gestión eficiente del estado de la aplicación.",
      "Utiliza Tailwind CSS para un diseño moderno y responsivo.",
      "Integra Paypal para facilitar pagos seguros y rápidos.",
    ],
    aboutBuilding: `El desarrollo de Hombrex se realizó utilizando Nuxt para la interfaz de usuario,
    Pinia para la gestión del estado y Tailwind CSS para el diseño. La aplicación está diseñada para ser
    intuitiva y fácil de navegar, permitiendo a los usuarios explorar y comprar productos de moda masculina de manera eficiente.`,
  },
  {
    title: "Haz Conta",
    description: "Desarrollo",
    image: "/images/haz_conta.png",
    link: ' https://factura.hazconta.com/authentication/sign-in',
    slogan: "¡Emite Facturas, cumple con tus impuestos y toma decisiones informadas con menos esfuerzo!",
    summary: `Haz Conta es una aplicación de contabilidad y facturación que permite a los usuarios gestionar sus finanzas de manera eficiente y sencilla. Con una interfaz intuitiva y herramientas avanzadas, Haz Conta facilita la emisión de facturas, el cumplimiento de obligaciones fiscales y la toma de decisiones informadas.`,
    importantPoints: [
      "Permite emitir facturas electrónicas de manera rápida y sencilla.",
      "Facilita el cumplimiento de obligaciones fiscales y contables.",
      "Ofrece herramientas de análisis financiero para tomar decisiones informadas.",
      "Diseñada para ser intuitiva y fácil de usar, incluso para aquellos sin experiencia en contabilidad.",
    ],
    aboutBuilding: `El desarrollo de Haz Conta se realizó utilizando tecnologías modernas para garantizar una experiencia
    de usuario fluida y eficiente. La aplicación está diseñada para ser escalable y segura,
    permitiendo a los usuarios gestionar sus finanzas con confianza y facilidad.`,
    technologies: ["React", "Zustand", "Material UI", "GraphQL"],
  },
  {
    title: "Patient Portal",
    description: "Design & Development",
    image: "/images/patient_portal.png",
    technologies: ["Nuxt", "Pinia", "Tailwind CSS"],
    // link: 'https://patient-portal.com',
    slogan: "Tu salud, tu portal",
    summary: `Patient Portal es una plataforma diseñada para facilitar la comunicación entre pacientes y profesionales de la salud. A través de un acceso seguro y fácil, los pacientes pueden gestionar sus citas, acceder a sus historiales médicos y recibir información personalizada sobre su salud.`,
    aboutBuilding: `El desarrollo de Patient Portal se realizó utilizando Nuxt para la interfaz de usuario,
    Pinia para la gestión del estado y Tailwind CSS para el diseño. La aplicación está diseñada para ser
    intuitiva y fácil de usar, permitiendo a los pacientes acceder a su información médica de manera rápida y sencilla.`,
    importantPoints: [
      "Permite a los pacientes gestionar sus citas médicas de manera eficiente.",
      "Ofrece acceso seguro a historiales médicos y resultados de pruebas.",
      "Facilita la comunicación directa con profesionales de la salud.",
      "Diseñada para ser intuitiva y fácil de usar, mejorando la experiencia del paciente.",
    ],
  },
  {
    title: "Complete Family & Urgent Care",
    description: "Diseño & Desarrollo",
    image: "/images/complete_family.png",
    link: "https://completefamilycare.co/es/index.html",
    technologies: ["Html", "Css", "JavaScript"],
    summary: "Complete Family & Urgent Care es una práctica médica familiar comprometida en ofrecer un servicio excelente y asequible. Ofrecemos una variedad de servicios y herramientas de última generación para diagnosticar, atender y tratar de manera más efectiva a los miembros de nuestra comunidad.",
    importantPoints: [
      "Ofrecen servicios médicos familiares y de urgencias.",
      "Comprometidos con la atención al paciente y la comunidad.",
      "Utilizan herramientas y tecnologías avanzadas para mejorar la atención médica.",
      "Diseñados para ser accesibles y fáciles de usar para todos los pacientes.",
    ],
    aboutBuilding: `El desarrollo de Complete Family & Urgent Care se realizó utilizando tecnologías web
    modernas para garantizar una experiencia de usuario fluida y eficiente. La aplicación está diseñada para ser
    accesible y fácil de navegar, permitiendo a los pacientes encontrar la información que necesitan de manera rápida y sencilla.`,
  },
  // {
  //   title: "My Portfolio",
  //   description: "Design & Development",
  //   image: "/images/my_portfolio.png",
  //   technologies: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
  // },
  {
    title: "SP Members Portal",
    description: "Diseño & Desarrollo",
    image: "/images/sp_members_portal.png",
    technologies: ["Flutter", "Bloc", "Socket"],
    slogan: "Portal de miembros para Simplified Practice",
    summary: `El Portal de Miembros de SP es el complemento ideal para nuestro software, ya que consolida la comunicación de la clínica con los pacientes.
Esta aplicación te permitirá visualizar tus documentos, contactar con tu clínica a través del chat y cambiar tu foto de perfil. También podrás confirmar o cancelar tus citas de forma inmediata y consultar tus suplementos. No te preocupes si olvidas tomarlos: con el sistema de notificaciones del Portal de Miembros de SP, no se te pasará nada.`,
    importantPoints: [
      "Permite a los pacientes gestionar sus citas y documentos médicos.",
      "Facilita la comunicación directa con la clínica a través de chat en tiempo real.",
      "Incluye notificaciones para recordar a los pacientes sobre sus citas y suplementos.",
      "Diseñada para ser intuitiva y fácil de usar, mejorando la experiencia del paciente.",
    ],
    aboutBuilding: `El desarrollo del Portal de Miembros de SP se realizó utilizando Flutter para la interfaz de usuario,
    Bloc para la gestión del estado y Socket para las funcionalidades de chat en tiempo real. La aplicación está diseñada
    para ser rápida, segura y fácil de usar, permitiendo a los pacientes acceder a su información médica de manera eficiente.`,
  },
  {
    title: "Portal BiblioChat UTN",
    description: "Diseño & Desarrollo",
    image: "/images/bibliochat.png",
    slogan: "Portal de chat para la Biblioteca de la UTN",
    link: "https://bibliochat.utn.edu.ec",
    acronimon: "BiblioChat",
    technologies: ["Angular", "Redux", "Bootstrap", "Bot Framework"],
    summary: `Portal BiblioChat UTN es una plataforma de chat en línea diseñada para facilitar la comunicación entre estudiantes y bibliotecarios de la Universidad Tecnológica Nacional (UTN). A través de esta plataforma, los usuarios pueden realizar consultas, solicitar información y recibir asistencia en tiempo real.`,
    importantPoints: [
      "Permite a los estudiantes comunicarse directamente con los bibliotecarios.",
      "Facilita la consulta de información y recursos bibliográficos.",
      "Diseñado para ser accesible y fácil de usar para todos los estudiantes.",
      "Utiliza tecnologías modernas para garantizar una experiencia de usuario fluida.",
    ],
    aboutBuilding: `El desarrollo del Portal BiblioChat UTN se realizó utilizando Angular para la interfaz de usuario,
    Redux para la gestión del estado y Bootstrap para el diseño. La aplicación está diseñada para ser intuitiva y fácil de navegar,
    permitiendo a los estudiantes acceder a la información que necesitan de manera rápida y sencilla.`,
  },
];
