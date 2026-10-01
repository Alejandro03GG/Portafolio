export type Language = 'es' | 'en';

export interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'devops';
  brandColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  highlights: {
    es: string[];
    en: string[];
  };
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface LearningPillar {
  id: string;
  status: {
    es: string;
    en: string;
  };
  title: {
    es: string;
    en: string;
  };
  domain: {
    es: string;
    en: string;
  };
  narrative: {
    es: string;
    en: string;
  };
  currentExploration: {
    es: string;
    en: string;
  };
  tags: string[];
  learningPillarsTags?: string[];
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    stack: string;
    learning: string;
    projects: string;
    contact: string;
    cvBtn: string;
    cvEn: string;
    cvEs: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    role: string;
    title: string;
    statement: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    coreValues: string[];
    techHighlights: string[];
  };
  about: {
    badge: string;
    headline: string;
    intro: string;
    subIntro: string;
    focusAreas: {
      title: string;
      desc: string;
    }[];
  };
  stackSection: {
    badge: string;
    title: string;
    subtitle: string;
  };
  learningSection: {
    badge: string;
    title: string;
    subtitle: string;
  };
  projectsSection: {
    badge: string;
    title: string;
    subtitle: string;
    highlightsLabel: string;
    viewLive: string;
    viewCode: string;
  };
  contactSection: {
    badge: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    directTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    socialLabel: string;
  };
  footer: {
    builtWith: string;
    rights: string;
    backToTop: string;
  };
}

export const PORTFOLIO_DATA: Record<Language, PortfolioContent> = {
  es: {
    meta: {
      title: 'Alejandro Hernández Lara — Full Stack Developer',
      description: 'Portafolio de Alejandro Hernández Lara. Desarrollo de software moderno, arquitecturas web escalables, microservicios e inteligencia artificial aplicada.',
    },
    nav: {
      about: 'Quién soy',
      stack: 'Mi Stack',
      learning: 'Aprendizaje',
      projects: 'Proyectos',
      contact: 'Contacto',
      cvBtn: 'Ver CV',
      cvEs: 'CV en Español (PDF)',
      cvEn: 'CV en Inglés (PDF)',
    },
    hero: {
      badge: 'Full Stack & AI Integrations · Bucaramanga, Colombia',
      greeting: 'Hola, soy',
      name: 'Alejandro Hernández Lara',
      role: 'Desarrollador de Software',
      title: 'Construyo aplicaciones web completas, backend robusto y soluciones de IA.',
      statement: 'Desarrollador con visión de producto y mentalidad técnica integral: desde interfaces fluidas y componentes modulares hasta arquitecturas backend resilientes, bases de datos multi-tenant e integraciones de modelos locales de IA.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Iniciar conversación',
      ctaCv: 'Hoja de Vida',
      coreValues: ['Arquitectura Limpia', 'IA Privada & RAG', 'Microservicios', 'Multi-Tenant SaaS'],
      techHighlights: ['Next.js', 'React', 'Python', 'FastAPI', 'Java', 'PostgreSQL', 'Ollama & RAG', 'Docker/K8s', 'Linux'],
    },
    about: {
      badge: 'Quién soy & Enfoque',
      headline: 'Ingeniero de software impulsado por la curiosidad técnica y la utilidad real.',
      intro: 'No concibo el desarrollo como simplemente unir librerías o escribir código sin contexto. Me interesa entender la raíz de cada problema de negocio, evaluar la arquitectura más adecuada y construir soluciones digitales sólidas que los usuarios disfruten usar y los equipos puedan escalar.',
      subIntro: 'Mi trayectoria combina el análisis y desarrollo de software con la puesta en práctica continua: desde la construcción de microservicios corporativos en Java y orquestación con Kubernetes, hasta el despliegue de sistemas SaaS multi-tenant con FastAPI, PostgreSQL y modelos locales de IA adaptados a flujos empresariales.',
      focusAreas: [
        {
          title: 'Full Stack con Enfoque en Producto',
          desc: 'Construyo la experiencia completa: interfaces modernas, accesibles y reactivas en Next.js/React, respaldadas por lógica de negocio confiable en el servidor.',
        },
        {
          title: 'IA Aplicada & Privacidad de Datos',
          desc: 'Implemento pipelines RAG, fine-tuning y agentes automatizados sobre modelos locales (Ollama), garantizando soberanía de datos y cero fugas a servicios externos.',
        },
        {
          title: 'Arquitectura & Escalabilidad',
          desc: 'Diseño esquemas relacionales optimizados, procedimientos almacenados, aislamiento por inquilino y despliegues contenerizados en Linux y Kubernetes.',
        },
      ],
    },
    stackSection: {
      badge: 'Ecosistema Tecnológico',
      title: 'Las herramientas con las que construyo',
      subtitle: 'Un stack seleccionado conscientemente por su fiabilidad, rendimiento y capacidad para crear software de nivel de producción.',
    },
    learningSection: {
      badge: 'Evolución Continua',
      title: 'Siempre aprendiendo, experimentando e investigando',
      subtitle: 'La tecnología evoluciona rápido; mi objetivo es dominar los fundamentos y adoptar con criterio las herramientas que marcan la pauta en la industria.',
    },
    projectsSection: {
      badge: 'Proyectos',
      title: 'Proyectos destacados',
      subtitle: 'Sistemas donde aplico arquitectura multi-tenant, microinteracciones avanzadas, persistencia relacional y automatización inteligente.',
      highlightsLabel: 'Aportes & Características Clave:',
      viewLive: 'Ver Demo en Vivo',
      viewCode: 'Ver Repositorio',
    },
    contactSection: {
      badge: 'Hablemos',
      title: '¿Tienes un reto técnico o una oportunidad profesional?',
      subtitle: 'Me interesa colaborar en proyectos ambiciosos, equipos de alto rendimiento y soluciones que requieran desarrollo full stack o backend.',
      formName: 'Tu Nombre',
      formEmail: 'Tu Correo Electrónico',
      formMessage: 'Cuéntame sobre el proyecto o propuesta',
      formSubmit: 'Enviar Mensaje',
      formSending: 'Enviando...',
      formSuccess: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.',
      directTitle: 'Canales Directos',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'WhatsApp / Teléfono',
      locationLabel: 'Ubicación',
      socialLabel: 'Perfiles Profesionales',
    },
    footer: {
      builtWith: 'Diseñado y desarrollado con Astro, React, TypeScript y Tailwind CSS.',
      rights: 'Alejandro Hernández Lara · Todos los derechos reservados.',
      backToTop: 'Volver arriba',
    },
  },
  en: {
    meta: {
      title: 'Alejandro Hernández Lara — Full Stack Developer',
      description: 'Portfolio of Alejandro Hernández Lara. Modern software engineering, scalable web architectures, microservices, and applied AI integrations.',
    },
    nav: {
      about: 'Who I Am',
      stack: 'My Stack',
      learning: 'Always Learning',
      projects: 'Projects',
      contact: 'Contact',
      cvBtn: 'View Resume',
      cvEs: 'Spanish Resume (PDF)',
      cvEn: 'English Resume (PDF)',
    },
    hero: {
      badge: 'Full Stack & AI Integrations · Bucaramanga, Colombia',
      greeting: "Hi, I'm",
      name: 'Alejandro Hernández Lara',
      role: 'Software Developer',
      title: 'I engineer complete web applications, resilient backends, and AI solutions.',
      statement: 'Software developer with a product mindset and full-spectrum technical agility: from responsive, fluid user interfaces to resilient backend services, multi-tenant databases, and private local AI models.',
      ctaProjects: 'Explore Projects',
      ctaContact: "Let's Talk Engineering",
      ctaCv: 'View Resume',
      coreValues: ['Clean Architecture', 'Private AI & RAG', 'Microservices', 'Multi-Tenant SaaS'],
      techHighlights: ['Next.js', 'React', 'Python', 'FastAPI', 'Java', 'PostgreSQL', 'Ollama & RAG', 'Docker/K8s', 'Linux'],
    },
    about: {
      badge: 'Who I Am & Engineering Mindset',
      headline: 'A software engineer driven by technical depth and tangible real-world utility.',
      intro: 'I view software development as far more than stitching libraries together. I care deeply about diagnosing the business root cause, selecting the right architectural trade-offs, and building robust systems that users trust and teams can easily maintain.',
      subIntro: 'My background bridges formal software analysis with continuous production execution: from building enterprise backend microservices with Java and Kubernetes orchestration, to shipping multi-tenant SaaS platforms with FastAPI, PostgreSQL, and local AI workflows adapted to business processes.',
      focusAreas: [
        {
          title: 'Full Stack with Product Ownership',
          desc: 'Delivering end-to-end user experiences: interactive, accessible client interfaces in Next.js/React backed by solid server-side business logic.',
        },
        {
          title: 'Applied AI & Data Sovereignty',
          desc: 'Engineering RAG pipelines, fine-tuning, and autonomous agents powered by local models (Ollama), ensuring complete confidentiality and zero external API leaks.',
        },
        {
          title: 'Architecture & Scalability',
          desc: 'Designing optimized relational schemas, stored procedures, tenant data isolation, and containerized deployments in Linux and Kubernetes.',
        },
      ],
    },
    stackSection: {
      badge: 'Technical Ecosystem',
      title: 'The tools I use to build',
      subtitle: 'A stack curated for dependability, developer ergonomics, and the capacity to ship high-standard production software.',
    },
    learningSection: {
      badge: 'Continuous Evolution',
      title: 'Always learning, experimenting, and researching',
      subtitle: 'Technology moves fast; my goal is to anchor in solid engineering fundamentals while proactively adopting the tools shaping the future.',
    },
    projectsSection: {
      badge: 'Projects',
      title: 'Featured Projects',
      subtitle: 'Real-world platforms featuring multi-tenant isolation, fluid micro-interactions, relational data integrity, and intelligent automation.',
      highlightsLabel: 'Key Contributions & Features:',
      viewLive: 'Live Demo',
      viewCode: 'Source Code',
    },
    contactSection: {
      badge: 'Get in Touch',
      title: 'Have a technical challenge or a software role to fill?',
      subtitle: 'I am excited to collaborate on ambitious products, high-standard teams, and systems requiring rigorous full-stack or backend engineering.',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formMessage: 'Tell me about your project or opportunity',
      formSubmit: 'Send Message',
      formSending: 'Sending...',
      formSuccess: 'Message sent successfully! I will reach back to you shortly.',
      directTitle: 'Direct Channels',
      emailLabel: 'Email Address',
      phoneLabel: 'WhatsApp / Phone',
      locationLabel: 'Location',
      socialLabel: 'Professional Networks',
    },
    footer: {
      builtWith: 'Engineered with Astro, React, TypeScript, and Tailwind CSS.',
      rights: 'Alejandro Hernández Lara · All rights reserved.',
      backToTop: 'Back to top',
    },
  },
};

export const CORE_STACK: TechItem[] = [
  { id: 'nextjs', name: 'Next.js', category: 'frontend', brandColor: '#ffffff' },
  { id: 'react', name: 'React', category: 'frontend', brandColor: '#58c4dc' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', brandColor: '#3178c6' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', brandColor: '#38bdf8' },
  { id: 'python', name: 'Python', category: 'backend', brandColor: '#ffd43b' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', brandColor: '#05998b' },
  { id: 'java', name: 'Java', category: 'backend', brandColor: '#f89820' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', brandColor: '#336791' },
  { id: 'ollama', name: 'Ollama & Local LLMs', category: 'ai', brandColor: '#ffffff' },
  { id: 'rag-vector', name: 'RAG & Vector Workflows', category: 'ai', brandColor: '#a78bfa' },
  { id: 'mcp-protocol', name: 'Model Context Protocol (MCP)', category: 'ai', brandColor: '#38bdf8' },
  { id: 'docker', name: 'Docker', category: 'devops', brandColor: '#2496ed' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'devops', brandColor: '#326ce5' },
  { id: 'linux', name: 'Linux Servers', category: 'devops', brandColor: '#facc15' },
];

export const LEARNING_PILLARS: LearningPillar[] = [
  {
    id: 'pillar-mcp',
    status: {
      es: 'Exploración Activa',
      en: 'Active Exploration',
    },
    title: {
      es: 'Servidores Model Context Protocol (MCP) & Ecosistema de Agentes',
      en: 'Model Context Protocol (MCP) Servers & Agentic Ecosystems',
    },
    domain: {
      es: 'Herramientas de IA para Empresas',
      en: 'Enterprise AI Tooling',
    },
    narrative: {
      es: 'El verdadero valor de los modelos de lenguaje radica en su capacidad para consultar herramientas de forma determinista. Estoy investigando e implementando servidores MCP para conectar modelos de IA con ERPs, bases de datos y CRMs sin inventar APIs ad-hoc.',
      en: 'The true value of language models is unlocked when they can invoke deterministic tools. I am actively engineering MCP servers to connect LLMs with ERPs, databases, and CRMs without writing brittle, ad-hoc API wrappers.',
    },
    currentExploration: {
      es: 'Estandarización de invocación de herramientas (tool calling) y flujos autónomos de asignación de tareas con control de permisos granular.',
      en: 'Standardizing tool-calling protocols and autonomous workflow execution with strict permission guardrails.',
    },
    tags: ['MCP', 'AI Agents', 'Tool Calling', 'FastAPI'],
  },
  {
    id: 'pillar-local-slms',
    status: {
      es: 'En Práctica',
      en: 'In Practice',
    },
    title: {
      es: 'Modelos de Lenguaje Pequeños (SLMs) & Fine-Tuning Eficiente',
      en: 'Small Language Models (SLMs) & Parameter-Efficient Fine-Tuning',
    },
    domain: {
      es: 'Inferencia Eficiente',
      en: 'Efficient Inference',
    },
    narrative: {
      es: 'Para muchas tareas empresariales, modelos hiper-gigantes son innecesarios y costosos. Estoy profundizando en la optimización de modelos de 3B a 14B mediante cuantización (GGUF), LoRA y ajuste fino sobre conjuntos de datos específicos para tareas de extracción y estructuración.',
      en: 'For focused corporate tasks, multi-hundred-billion parameter models are overkill and cost-prohibitive. I focus on optimizing 3B to 14B models via GGUF quantization, LoRA, and domain fine-tuning for structured data extraction.',
    },
    currentExploration: {
      es: 'Maximizando la velocidad de inferencia por token en hardware local y evaluando consistencia contra benchmarks de alucinaciones.',
      en: 'Maximizing token throughput on local workstation hardware and benchmarking hallucination reduction.',
    },
    tags: ['Ollama', 'Quantization', 'GGUF', 'LoRA', 'Python'],
  },
  {
    id: 'pillar-sena',
    status: {
      es: 'Formación 2024-2026',
      en: 'Formal Training 2024-2026',
    },
    title: {
      es: 'Fundamentos de Ingeniería de Software (SENA)',
      en: 'Software Engineering Foundations (SENA)',
    },
    domain: {
      es: 'Bases Metodológicas',
      en: 'Core Methodology',
    },
    narrative: {
      es: 'Mi formación como Tecnólogo en Análisis y Desarrollo de Software en el SENA me proporciona el marco formal: modelado de bases de datos relacionales, patrones de diseño de software (SOLID), análisis de requerimientos y metodologías ágiles que sustentan cada proyecto.',
      en: 'My formal technologist training at SENA grounds my work in essential engineering rigor: relational database design, SOLID software design patterns, structured requirements gathering, and agile methodologies supporting every project.',
    },
    currentExploration: {
      es: 'Integración de patrones arquitectónicos clásicos con paradigmas modernos de desarrollo web y microservicios.',
      en: 'Bridging classic architectural patterns with modern serverless, asynchronous, and cloud-native paradigms.',
    },
    tags: ['Software Analysis', 'Relational Design', 'SOLID', 'Agile'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'compralo',
    title: 'Compralo | SaaS Platform',
    featured: true,
    image: '/images/compralo.png',
    liveUrl: 'https://compralo.revital.cloud',
    subtitle: {
      es: 'Plataforma de comercio SaaS multi-tenant con backend en Python, PostgreSQL y asistencia con IA',
      en: 'Multi-tenant e-commerce SaaS platform with Python backend, isolated PostgreSQL databases, and AI features',
    },
    description: {
      es: 'Compralo es una plataforma SaaS completa para comercio digital y gestión empresarial. Diseñada bajo una arquitectura multi-inquilino altamente adaptable, permite a múltiples empresas operar sus tiendas con bases de datos aisladas, pasarela de pagos Wompi, métricas en tiempo real e integraciones de IA para soporte administrativo.',
      en: 'Compralo is a comprehensive digital commerce and business operations SaaS platform. Built on an adaptable multi-tenant architecture, it enables multiple clients to run custom stores with isolated databases, Wompi payments, live KPI dashboards, and AI-assisted admin tooling.',
    },
    highlights: {
      es: [
        'Diseño e implementación de arquitectura multi-tenant con esquemas y bases de datos aisladas para garantizar seguridad absoluta entre clientes.',
        'Desarrollo del sistema de autenticación y autorización robusto basado en JSON Web Tokens (JWT) y roles granulares.',
        'Modelado avanzado de datos relacionales y optimización de procedimientos almacenados en PostgreSQL.',
        'Construcción del panel administrativo con analíticas en tiempo real para control de inventario, pedidos y toma de decisiones.',
        'Integración de funcionalidades impulsadas por IA para asistir en la automatización de procesos operativos y catalogación.',
      ],
      en: [
        'Architected and implemented multi-tenant infrastructure with isolated databases to ensure absolute tenant data segregation.',
        'Implemented fine-grained authentication and authorization workflows using secure JSON Web Tokens (JWT).',
        'Engineered complex relational database schemas and stored procedures in PostgreSQL for high data consistency.',
        'Developed interactive administrative dashboards displaying real-time analytics for catalog control and executive decision-making.',
        'Integrated AI-powered capabilities to streamline routine administrative queries and business workflows.',
      ],
    },
    technologies: ['Next.js', 'React', 'Python', 'FastAPI', 'PostgreSQL', 'JWT', 'AI Integration', 'Tailwind CSS', 'Wompi'],
  },
  {
    id: 'alegaming',
    title: 'AleGaming',
    featured: true,
    image: '/images/alegaming.png',
    liveUrl: 'https://alegaming.vercel.app/',
    subtitle: {
      es: 'Experiencia web interactiva para comunidad gamer con diseño de alta fidelidad y animaciones fluidas con GSAP',
      en: 'Interactive gaming community web portal featuring high-fidelity dark visuals and GSAP-driven scroll animations',
    },
    description: {
      es: 'AleGaming es una plataforma web desarrollada para entusiastas del gaming y streamers, enfocada en brindar una experiencia visual de alto nivel. Cuenta con interfaces dinámicas, transiciones cinematográficas mediante GSAP, diseño responsivo minucioso y estructura modular de componentes en React.',
      en: 'AleGaming is a dynamic web portal crafted for gaming communities and digital content enthusiasts, focusing on delivering a premium visual interface. It highlights cinematic GSAP motion choreography, responsive component hierarchies, and optimized rendering.',
    },
    highlights: {
      es: [
        'Implementación de animaciones avanzadas basadas en scroll y microinteracciones con GSAP.',
        'Construcción de componentes visuales modulares y reutilizables con React y Tailwind CSS.',
        'Optimización de carga multimedia y renders gráficos para mantener 60 FPS consistentes en desktop y móvil.',
        'Diseño de interfaz oscuro de alta fidelidad enfocado en usabilidad y estética tecnológica.',
      ],
      en: [
        'Implemented advanced scroll-triggered choreographies and responsive hover microinteractions with GSAP.',
        'Engineered modular, reusable UI components using modern React patterns and utility-first Tailwind CSS.',
        'Optimized heavy multimedia assets and DOM nodes to preserve a steady 60 FPS across both mobile and desktop screens.',
        'Crafted a high-contrast dark aesthetic tuned for gaming aesthetics and intuitive usability.',
      ],
    },
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Vite', 'Responsive Design'],
  },
];
