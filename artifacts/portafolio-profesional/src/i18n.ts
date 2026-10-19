export type Language = 'es' | 'en';

export type LocalizedText = Record<Language, string>;

export const translations = {
  es: {
    documentTitle: 'Felipe Guillén — Informática y ciberseguridad',
    metaDescription:
      'Conoce a Felipe Guillén, estudiante de último año de Computer Science con interés en ciberseguridad, su recorrido y contacto.',
    languageSelector: 'Seleccionar idioma',
    switchToSpanish: 'Cambiar idioma a español',
    switchToEnglish: 'Cambiar idioma a inglés',
    primaryNavigation: 'Navegación principal',
    homeLink: 'Volver al inicio',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    cv: 'Abrir CV',
    cvLinkLabel: 'Abrir el CV en una pestaña nueva (PDF)',
    pendingLink: 'Enlace pendiente de agregar',
    nav: {
      about: 'Sobre mí',
      journey: 'Recorrido',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      scrollLabel: 'Desplazarse a sobre mí',
      portfolio: 'Portafolio personal',
      codeImageAlt: 'Ejemplo de código HTML para una página personal.',
    },
    about: {
      sectionLabel: 'Punto de partida',
      statement: 'No tengo una respuesta única.',
      emphasis: 'Tengo una forma de buscar.',
      aspirationLabel: 'Lo que busco',
      talk: 'Hablemos de posibilidades',
    },
    contribution: {
      sectionLabel: 'Lo que puedo aportar',
      titleFirst: 'Un conjunto',
      titlePrefix: 'de',
      titleEmphasis: 'herramientas',
      titleLast: 'no una etiqueta.',
      introduction:
        'Las palabras clave ayudan a encontrarme. La conversación ayuda a conocerme.',
      footnote:
        'Interés en ciberseguridad · pensamiento crítico · aprendizaje continuo.',
      note: 'Me interesa crecer y aportar en proyectos de',
      noteEmphasis: 'ciberseguridad, desarrollo y tecnología',
      chapter: 'Siguiente capítulo',
    },
    journey: {
      sectionLabel: 'El recorrido',
      introduction:
        'Una trayectoria no es una línea recta.\nEs una colección de decisiones y aprendizajes.',
      footerLeft: 'Estudio · trabajo · colaboración · curiosidad',
      footerRight: 'La historia sigue',
    },
    projects: {
      sectionLabel: 'Trabajo seleccionado',
      titleFirst: 'Hecho, probado,',
      titleEmphasis: 'compartido.',
      introduction:
        'Una pequeña selección de proyectos y exploraciones.\nCada historia empieza con una pregunta.',
      study: 'Estudio',
      project: 'Proyecto',
      openProject: 'Ver el proyecto',
      viewDetails: "Ver detalles",
      hideDetails: "Ocultar detalles",
      objective: "Objetivo",
      activities: "Actividades técnicas",
      results: "Resultados",
      skills: "Competencias profesionales",
      scope: "Alcance",

      openProjectLabel: 'Ver',
      empty:
        'Pronto compartiré aquí una selección de proyectos personales. Mientras tanto, puedes visitar mi perfil de GitHub.',
      github: 'Explorar GitHub',
      githubLinkLabel: 'Visitar perfil de GitHub',
    },
    reflection: {
      sectionLabel: 'En voz propia',
      stamp: 'Notas\nabiertas',
    },
    contact: {
      sectionLabel: 'La próxima conversación',
      invitation: 'Una invitación, no un formulario',
      titleFirst: '¿Vemos qué',
      titleEmphasis: 'podemos hacer?',
      introduction:
        'Si algo de esta historia conecta con lo que estás construyendo, me encantará escucharte. También agradezco una pregunta, una idea o una perspectiva distinta.',
      emailLinkLabel: 'Escribir un correo',
      emailFallback: '[tu correo electrónico]',
      copyEmail: 'Copiar correo',
      copied: 'Copiado',
      copyEmailLabel: 'Copiar correo electrónico',
      linkedinLabel: 'Abrir LinkedIn',
      githubLabel: 'Abrir GitHub',
      cv: 'Currículum',
    },
    footer: {
      backToTop: 'Volver arriba',
    },
  },
  en: {
    documentTitle: 'Felipe Guillén — Computer Science & Cybersecurity',
    metaDescription:
      'Meet Felipe Guillén, a final-year Computer Science student interested in cybersecurity, professional growth, and collaboration.',
    languageSelector: 'Choose language',
    switchToSpanish: 'Switch language to Spanish',
    switchToEnglish: 'Switch language to English',
    primaryNavigation: 'Main navigation',
    homeLink: 'Back to home',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    cv: 'Open CV',
    cvLinkLabel: 'Open CV in a new tab (PDF)',
    pendingLink: 'Link to be added',
    nav: {
      about: 'About',
      journey: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      scrollLabel: 'Scroll to the about section',
      portfolio: 'Personal portfolio',
      codeImageAlt: 'HTML code example for a personal webpage.',
    },
    about: {
      sectionLabel: 'Starting point',
      statement: "I don't have one single answer.",
      emphasis: 'I have a way of searching.',
      aspirationLabel: "What I'm looking for",
      talk: "Let's talk about opportunities",
    },
    contribution: {
      sectionLabel: 'What I can bring',
      titleFirst: 'A set of',
      titlePrefix: '',
      titleEmphasis: 'tools',
      titleLast: 'not a label.',
      introduction:
        'Keywords help people find me. A conversation helps them get to know me.',
      footnote:
        'Interested in cybersecurity · critical thinking · continuous learning.',
      note: 'I want to grow and contribute to projects in',
      noteEmphasis: 'cybersecurity, software development, and technology',
      chapter: 'Next chapter',
    },
    journey: {
      sectionLabel: 'The journey',
      introduction:
        'A career path is not a straight line.\nIt is a collection of choices and lessons.',
      footerLeft: 'Study · work · collaboration · curiosity',
      footerRight: 'The story continues',
    },
    projects: {
      sectionLabel: 'Selected work',
      titleFirst: 'Built, tested,',
      titleEmphasis: 'shared.',
      introduction:
        'A small selection of projects and explorations.\nEvery story starts with a question.',
      study: 'Study',
      project: 'Project',
      openProject: 'View project',
      viewDetails: "View details",
      hideDetails: "Hide details",
      objective: "Objective",
      activities: "Technical activities",
      results: "Results",
      skills: "Professional skills",
      scope: "Scope",

      openProjectLabel: 'View',
      empty:
        "I'll share a selection of personal projects here soon. In the meantime, visit my GitHub profile.",
      github: 'Explore GitHub',
      githubLinkLabel: 'Visit GitHub profile',
    },
    reflection: {
      sectionLabel: 'In my own words',
      stamp: 'Open\nnotes',
    },
    contact: {
      sectionLabel: 'The next conversation',
      invitation: 'An invitation, not a form',
      titleFirst: 'Shall we see what',
      titleEmphasis: 'we can build?',
      introduction:
        "If anything here connects with what you're building, I'd love to hear from you. Questions, ideas, and different perspectives are always welcome.",
      emailLinkLabel: 'Send an email',
      emailFallback: '[your email address]',
      copyEmail: 'Copy email',
      copied: 'Copied',
      copyEmailLabel: 'Copy email address',
      linkedinLabel: 'Open LinkedIn',
      githubLabel: 'Open GitHub',
      cv: 'CV',
    },
    footer: {
      backToTop: 'Back to top',
    },
  },
} as const;
