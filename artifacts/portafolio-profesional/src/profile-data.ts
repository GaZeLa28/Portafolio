import type { LocalizedText } from './i18n';

const localized = (es: string, en: string): LocalizedText => ({ es, en });

type Project = {
  number: string;
  type: LocalizedText;
  title: string;
  description: LocalizedText;
  tags: string[];
  url?: string;
  details?: {
    objective: LocalizedText;
    activities: LocalizedText[];
    result: LocalizedText;
    skills: LocalizedText[];
    scope: LocalizedText;
  };
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
    details: {
      objective: localized("Facilitar la trazabilidad de materias primas en cooperativas cafetaleras.", "Support raw-material traceability across coffee cooperatives."),
      activities: [localized("Desarrollo de un sistema web con Django REST Framework y conexión a SQL Server.", "Developed a web system with Django REST Framework and a SQL Server connection.")],
      result: localized("Sistema web de trazabilidad disponible en el repositorio del proyecto.", "Traceability web system available in the project repository."),
      skills: [localized("Desarrollo web", "Web Development"), localized("Integración de bases de datos", "Database Integration")],
      scope: localized("Proyecto de desarrollo de software; el repositorio permite consultar su implementación.", "Software development project; its implementation can be reviewed in the repository."),
    },
  },
  {
    number: "02",
    type: localized("Administración de sistemas e infraestructura Linux", "Linux Systems & Infrastructure Administration"),
    title: "Linux System Administration & OS Deployment",
    description: localized("Experiencia práctica en la creación de medios de instalación USB booteables, instalación, migración y configuración de distribuciones Linux como Ubuntu, Parrot OS y Arch Linux.\n\nAdministración y diagnóstico de entornos Linux, incluyendo configuración de BIOS/UEFI, gestores de arranque GRUB, compatibilidad de hardware, controladores, conectividad de red y recuperación de funcionalidades del sistema.", "Hands-on experience creating bootable USB installation media, deploying, migrating, and configuring Linux distributions, including Ubuntu, Parrot OS, and Arch Linux.\n\nPractical Linux system administration and troubleshooting involving BIOS/UEFI configurations, GRUB bootloader management, hardware compatibility, drivers, network connectivity, and system functionality recovery."),
    tags: ["Ubuntu Linux", "Parrot OS", "Arch Linux", "BIOS/UEFI", "GRUB Bootloader", "Linux CLI", "Bootable USB Media", "NetworkManager"],
    art: "project-art--two",
    mark: "02",
    details: {
      objective: localized("Instalar, migrar y recuperar sistemas Linux en equipos físicos.", "Deploy, migrate, and recover Linux systems on physical hardware."),
      activities: [localized("Creación de USB booteables e instalación y migración de Ubuntu, Parrot OS y Arch Linux.", "Created bootable USB media and installed and migrated Ubuntu, Parrot OS, and Arch Linux."), localized("Configuración de BIOS/UEFI y GRUB; diagnóstico de hardware, controladores y conectividad.", "Configured BIOS/UEFI and GRUB; diagnosed hardware, drivers, and connectivity.")],
      result: localized("Implementación, configuración y recuperación funcional de sistemas Linux en equipos físicos, resolviendo problemas de arranque, red, audio y dispositivos de entrada.", "Deployed, configured, and restored Linux functionality on physical hardware, resolving boot, network, audio, and input-device issues."),
      skills: [localized("Administración de sistemas Linux", "Linux System Administration"), localized("Despliegue y migración de sistemas operativos", "Operating System Deployment and Migration"), localized("Diagnóstico de hardware y controladores", "Hardware and Driver Troubleshooting"), localized("Configuración de arranque", "Boot Configuration"), localized("Resolución de problemas de conectividad", "Network Troubleshooting"), localized("Troubleshooting de sistemas operativos", "System Diagnostics")],
      scope: localized("Experiencia práctica en equipos físicos.", "Practical experience on physical hardware."),
    },
  },
  {
    number: "03",
    type: localized("Ciberseguridad ofensiva y evaluación de vulnerabilidades", "Offensive Security & Vulnerability Assessment"),
    title: "Ethical Hacking & Vulnerability Assessment — EternalBlue (MS17-010)",
    description: localized("Proyecto académico de análisis de vulnerabilidades y pruebas de penetración en un entorno virtual controlado, centrado en EternalBlue (MS17-010 / CVE-2017-0144), asociado al protocolo SMBv1 en sistemas Windows vulnerables.\n\nEl trabajo contempla reconocimiento de servicios, análisis de exposición, estudio del proceso de explotación, evaluación de impacto potencial y elaboración de recomendaciones de mitigación y hardening.", "Academic cybersecurity project focused on vulnerability assessment and penetration testing methodology in a controlled virtual laboratory, examining EternalBlue (MS17-010 / CVE-2017-0144) and the security risks associated with SMBv1 in vulnerable Windows systems.\n\nThe project covers service reconnaissance, vulnerability assessment, conceptual exploitation analysis, potential impact evaluation, technical documentation, and system-hardening recommendations."),
    tags: ["Kali Linux", "Windows 7", "SMB / SMBv1", "EternalBlue (MS17-010)", "CVE-2017-0144", "Metasploit Framework", "TCP/IP Networking", "Windows Firewall", "Virtualized Laboratory"],
    art: "project-art--three",
    mark: "03",
    details: {
      objective: localized("Analizar MS17-010 en un laboratorio académico controlado y documentar medidas de mitigación.", "Analyze MS17-010 in a controlled academic laboratory and document mitigations."),
      activities: [localized("El trabajo documenta reconocimiento de servicios, análisis de exposición y recomendaciones de hardening.", "The work documents service reconnaissance, exposure assessment, and hardening recommendations."), localized("El proceso de explotación se presenta como análisis conceptual, sin afirmar un compromiso exitoso comprobado.", "The exploitation process is presented as conceptual analysis, without claiming a verified successful compromise.")],
      result: localized("Análisis y documentación de los riesgos asociados a MS17-010, con recomendaciones orientadas a reducir la exposición mediante actualización de sistemas, deshabilitación de SMBv1, control del puerto TCP 445 y segmentación de red.", "Analyzed and documented MS17-010 risks, recommending system updates, disabling SMBv1, TCP port 445 controls, and network segmentation."),
      skills: [localized("Evaluación de vulnerabilidades", "Vulnerability Assessment"), localized("Fundamentos de penetration testing", "Penetration Testing Fundamentals"), localized("Reconocimiento y análisis de servicios", "Service Reconnaissance"), localized("Evaluación de riesgos de seguridad", "Security Risk Assessment"), localized("Documentación técnica", "Technical Security Reporting"), localized("Hardening de sistemas", "System Hardening"), localized("Análisis de vulnerabilidades conocidas", "Vulnerability Analysis")],
      scope: localized("Contexto académico y laboratorio virtual controlado. Evaluación de impacto potencial y análisis conceptual de explotación.", "Academic context and controlled virtual laboratory. Potential impact assessment and conceptual exploitation analysis."),
    },
  },
  {
    number: "04",
    type: localized("Infraestructura y replicación de bases de datos", "Database Infrastructure & Replication"),
    title: "High Availability & MySQL Database Replication",
    description: localized("Diseño y validación de un laboratorio virtualizado orientado al estudio de alta disponibilidad mediante replicación de bases de datos MySQL.\n\nImplementación de un entorno con máquinas virtuales Ubuntu Linux utilizando VMware Workstation y MySQL Server 8.0, con una arquitectura origen-réplica destinada a comprobar la sincronización de información.\n\nValidación mediante operaciones SQL, revisión del estado de replicación, administración de servicios Linux y comprobación de registros sincronizados.", "Designed and validated a virtualized database infrastructure laboratory focused on high-availability fundamentals through MySQL replication.\n\nThe environment used Ubuntu Linux virtual machines running on VMware Workstation and MySQL Server 8.0, configured with a source-replica architecture to validate data synchronization.\n\nPerformed SQL-based verification, replication-status monitoring, Linux service administration, and consistency checks on replicated records."),
    tags: ["VMware Workstation", "Ubuntu Linux", "MySQL Server 8.0", "SQL", "MySQL Source–Replica Replication", "GTID / Auto Positioning", "Linux CLI / Bash", "systemd / systemctl", "Virtual Networking"],
    art: "project-art--four",
    mark: "04",
    details: {
      objective: localized("Validar la sincronización MySQL y estudiar fundamentos de alta disponibilidad.", "Validate MySQL synchronization and study high availability fundamentals."),
      activities: [localized("Configuración de máquinas virtuales Ubuntu en VMware Workstation y replicación origen-réplica con MySQL Server 8.0.", "Configured Ubuntu virtual machines in VMware Workstation and MySQL Server 8.0 source-replica replication."), localized("Validación mediante SQL, revisión del estado de replicación, administración de servicios Linux y comprobación de registros sincronizados.", "Validated using SQL, replication-status checks, Linux service administration, and synchronized-record checks.")],
      result: localized("Durante la demostración: Replica_IO_Running: Yes; Replica_SQL_Running: Yes; Seconds_Behind_Source: 0. Verificación de registros mediante consultas SQL.", "During the demonstration: Replica_IO_Running: Yes; Replica_SQL_Running: Yes; Seconds_Behind_Source: 0. Records verified through SQL queries."),
      skills: [localized("Administración de bases de datos", "Database Administration"), localized("Replicación de bases de datos", "Database Replication"), localized("Sincronización de datos", "Data Synchronization"), localized("Administración de infraestructura Linux", "Linux Infrastructure Administration"), localized("Virtualización", "Virtualization"), localized("Validación de consistencia", "Data Consistency Validation"), localized("Monitoreo de servicios", "Service Monitoring"), localized("Fundamentos de alta disponibilidad", "High Availability Fundamentals"), localized("Diagnóstico de infraestructura", "Infrastructure Troubleshooting")],
      scope: localized("Estado observado durante la prueba, no métricas permanentes. Replicación y fundamentos de alta disponibilidad, sin failover ni recuperación automáticos ni garantías de disponibilidad o RTO/RPO.", "Status observed during testing, not ongoing metrics. Replication and high availability fundamentals, without automatic failover or recovery, availability guarantees, or RTO/RPO claims."),
    },
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
