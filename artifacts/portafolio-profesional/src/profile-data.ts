import type { LocalizedText } from './i18n';

const localized = (es: string, en: string): LocalizedText => ({ es, en });

type Project = {
  number: string;
  type: LocalizedText;
  title: string;
  description: LocalizedText;
  tags: string[];
  url: string;
  art: string;
  mark: string;
};

const projects: Project[] = [
  {
    number: "01",
    type: localized("Proyecto en GitHub · Python", "GitHub project · Python"),
    title: "CoffeeTrace 2.0",
    description: localized(
      "Sistema web para la trazabilidad de materias primas de cooperativas cafetaleras, desarrollado con Django REST Framework y conectado a SQL Server.",
      "A web system for tracking raw materials across coffee cooperatives, built with Django REST Framework and connected to SQL Server.",
    ),
    tags: ["Python", "Django REST Framework", "SQL Server"],
    url: "https://github.com/GaZeLa28/Pruebas-de-Calidad",
    art: "project-art--one",
    mark: "01",
  },
];

export const profile = {
  name: "Felipe Guillén",
  initials: "FG",
  role: localized(
    "Estudiante de Computer Science · Ciberseguridad",
    "Computer Science student · Cybersecurity",
  ),
  location: "Costa Rica",
  availability: localized("Abierto a oportunidades", "Open to opportunities"),
  headline: localized(
    "Tecnología con\nun enfoque en\nciberseguridad.",
    "Technology with\nan interest in\ncybersecurity.",
  ),
  introduction: localized(
    "Tengo 20 años y curso el último año de Computer Science. Me interesa la ciberseguridad y busco oportunidades para crecer profesionalmente, fortalecer mis capacidades y ampliar mis conocimientos.",
    "I am 20 and in my final year of Computer Science. I am interested in cybersecurity and looking for opportunities to grow professionally, strengthen my skills, and expand my knowledge.",
  ),
  aspiration: localized(
    "Busco oportunidades que me permitan crecer profesionalmente, desarrollar mis capacidades en ciberseguridad y aprender junto a un equipo que valore la colaboración y la curiosidad.",
    "I am looking for opportunities to grow professionally, develop my cybersecurity skills, and learn alongside a team that values collaboration and curiosity.",
  ),
  about: localized(
    "Me considero una persona trabajadora y con ganas de aprender nuevas habilidades, asumir responsabilidades y seguir creciendo. Suelo tomar la iniciativa y disfruto apoyar a otras personas, compartir lo que aprendo y trabajar en equipo.",
    "I am hardworking and eager to learn new skills, take on responsibility, and keep growing. I take initiative and enjoy supporting others, sharing what I learn, and working as part of a team.",
  ),
  principles: [
    {
      number: "01",
      title: localized("Aprender continuamente", "Keep learning"),
      detail: localized(
        "Me motiva adquirir nuevas habilidades y asumir responsabilidades que impulsen mi crecimiento.",
        "I am motivated by learning new skills and taking on responsibilities that help me grow.",
      ),
    },
    {
      number: "02",
      title: localized("Interés en ciberseguridad", "Cybersecurity"),
      detail: localized(
        "Quiero profundizar mis conocimientos y aportar a sistemas y proyectos más seguros.",
        "I want to deepen my knowledge and contribute to safer systems and projects.",
      ),
    },
    {
      number: "03",
      title: localized("Crecer en equipo", "Growing as a team"),
      detail: localized(
        "Me gusta tomar la iniciativa, apoyar a otras personas y compartir lo que aprendo.",
        "I like taking initiative, supporting others, and sharing what I learn.",
      ),
    },
  ],
  skills: [
    localized("Ciberseguridad", "Cybersecurity"),
    localized("Programación", "Programming"),
    localized("Bases de datos", "Databases"),
    localized("Desarrollo", "Development"),
    localized("Pensamiento crítico", "Critical thinking"),
    localized("Liderazgo", "Leadership"),
    localized("Aprendizaje rápido", "Quick learner"),
    localized("Actitud flexible y positiva", "Flexible, positive attitude"),
  ],
  experience: [
    {
      period: localized("Feb 2024 — Abr 2024", "Feb 2024 — Apr 2024"),
      title: "Client Service Specialist",
      organization: "Concentrix",
      description: localized(
        "Atendí consultas bancarias sobre tarjetas de crédito y apoyé a los clientes a resolver problemas de pago.",
        "Handled banking inquiries about credit cards and helped customers resolve payment issues.",
      ),
    },
    {
      period: localized("Jul 2025 — Ago 2025", "Jul 2025 — Aug 2025"),
      title: "Collections Agent",
      organization: "Client Services Inc.",
      description: localized(
        "Apoyé a los consumidores para mantenerse al día con sus pagos y cuentas, ayudando a prevenir atrasos en sus obligaciones.",
        "Helped consumers stay up to date with their payments and accounts, working to prevent overdue balances.",
      ),
    },
    {
      period: localized("Último año · 2026", "Final year · 2026"),
      title: "Computer Science",
      organization: "ULACIT · San José",
      description: localized(
        "Curso el último año de Computer Science. Me interesa profundizar en programación, bases de datos, desarrollo y ciberseguridad.",
        "I am in my final year of Computer Science and interested in deepening my skills in programming, databases, development, and cybersecurity.",
      ),
    },
  ],
  projects,
  note: {
    title: localized(
      "Aprender, compartir y crecer en equipo.",
      "Learn, share, and grow as a team.",
    ),
    body: localized(
      "Me gusta tomar la iniciativa y apoyar a las personas a mi alrededor para que puedan aprender y avanzar. Creo en el valor del trabajo colaborativo.",
      "I like taking initiative and supporting people around me so they can learn and move forward. I believe in the value of collaboration.",
    ),
  },
  links: {
    email: "pipe.guillen07@gmail.com",
    cv: "/cv-felipe-guillen.pdf",
    linkedin: "https://www.linkedin.com/in/felipe-guillén-5084162ba",
    github: "https://github.com/GaZeLa28",
  },
  footerLine: localized(
    "Felipe Guillén · Informática y ciberseguridad.",
    "Felipe Guillén · Computer Science and cybersecurity.",
  ),
};
