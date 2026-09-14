export const copy = {
  es: {
    nav: {
      work: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      l1: "DESARROLLO",
      l2: "WEB Y",
      l3: "DISEÑO DE MARCA",
      meta: ["Astro", "GSAP", "Disponible", "Madrid"],
    },
    work: {
      index: "01",
      label: "Proyectos",
      title: "Trabajo",
      seeAll: "Ver todo",
      nextProject: "Siguiente proyecto",
      backToList: "Volver a proyectos",
      viewLive: "Ver proyecto live",
      role: "Rol",
      duration: "Duración",
      year: "Año",
      client: "Cliente",
      context: "Contexto",
      approach: "Enfoque",
      decisions: "Decisiones clave",
      stack: "Stack",
      result: "Resultado",
      projects: [
        {
          slug: "nova-coffee",
          name: "Nova Coffee",
          year: "2026",
          category: "Branding + Web",
          client: "Nova Coffee Co.",
          role: "Desarrollo + Diseño de marca",
          duration: "4 meses",
          live: "https://ejemplo.com",
          context:
            "Nova Coffee es una tostadora de café de especialidad que necesitaba una identidad visual y una web que transmitieran la calidad de su producto. Llegaron con un logo genérico y una web de plantilla que no reflejaba su posicionamiento.",
          approach:
            "Empezamos por definir el sistema de marca completo — tipografía, color y símbolo — y luego construimos una web que lo aplicara con coherencia. La web es rápida, tiene animaciones sutiles y deja que el producto hable por sí solo.",
          decisions: [
            {
              title: "Sistema tipográfico editorial",
              text: "En lugar de usar una fuente genérica para todo, elegimos una display condensada para los titulares y una sans neutra para el cuerpo. Esto da jerarquía clara sin sacrificar legibilidad.",
            },
            {
              title: "Animaciones al servicio del contenido",
              text: "Cada animación tiene una razón: guiar la lectura, marcar un cambio de sección, o reforzar un mensaje. Nada de movimiento decorativo.",
            },
            {
              title: "Astro por rendimiento",
              text: "El sitio carga en menos de 1s en 4G. Astro nos permite enviar cero JavaScript por defecto y solo hidratar lo que necesita interactividad.",
            },
          ],
          stack: ["Astro", "Tailwind", "GSAP", "Sanity", "Vercel"],
          result:
            "La web está live desde enero de 2026. Nova Coffee ha duplicado sus consultas de mayoristas en los primeros 3 meses y la marca se percibe como una tostadora de especialidad premium.",
          next: "studio-kiriko",
        },
        {
          slug: "studio-kiriko",
          name: "Studio Kiriko",
          year: "2025",
          category: "Identidad visual",
          client: "Studio Kiriko",
          role: "Diseño de marca",
          duration: "3 meses",
          live: "https://ejemplo.com",
          context:
            "Studio Kiriko es un estudio de arquitectura de interior con base en Madrid. Necesitaban una identidad visual que reflejara su enfoque minimalista y japonés del espacio.",
          approach:
            'Diseñamos un sistema de identidad basado en la idea de "vacío activo" — mucho espacio negativo, tipografía precisa y un único acento de color. La marca respira calma y precisión.',
          decisions: [
            {
              title: "Un solo acento",
              text: "El sistema usa negro, blanco roto y un único verde musgo. Cualquier color adicional rompería la sensación de calma.",
            },
            {
              title: "Tipografía como estructura",
              text: "La fuente principal es una serif contemporánea que aporta carácter sin ser estridente. Todo el sistema gira alrededor de ella.",
            },
            {
              title: "Aplicaciones cuidadas",
              text: "Diseñamos desde tarjetas de visita hasta señalética del estudio, pasando por papelería completa. La marca funciona en cualquier soporte.",
            },
          ],
          stack: ["Figma", "Illustrator", "InDesign"],
          result:
            "Studio Kiriko ha renovado su identidad completa y la ha aplicado en todos sus puntos de contacto. La marca se percibe ahora como un estudio de referencia en su sector.",
          next: "aurora-app",
        },
        {
          slug: "aurora-app",
          name: "Aurora App",
          year: "2025",
          category: "Producto digital",
          client: "Aurora Health",
          role: "Desarrollo frontend",
          duration: "6 meses",
          live: "https://ejemplo.com",
          context:
            "Aurora es una app de seguimiento de hábitos saludables. Necesitaban una interfaz que fuera agradable de usar a diario y que no cayera en el cliché de las apps de fitness.",
          approach:
            "Construimos una interfaz con mucho aire, tipografía clara y animaciones que celebran los logros del usuario sin ser infantiles. La app se siente como una herramienta, no como un juego.",
          decisions: [
            {
              title: "Animaciones de recompensa",
              text: "Cada vez que el usuario completa un hábito, una animación sutil lo celebra. No es un confeti, pero se nota.",
            },
            {
              title: "Modo oscuro por defecto",
              text: "La app se usa mucho por la noche, así que diseñamos primero en modo oscuro y luego adaptamos a claro.",
            },
            {
              title: "Componentes accesibles",
              text: "Todos los componentes cumplen WCAG AA. La app es usable con lector de pantalla y navegación por teclado.",
            },
          ],
          stack: ["React", "TypeScript", "Framer Motion", "Tailwind"],
          result:
            "Aurora tiene 4.7 estrellas en App Store y más de 50.000 usuarios activos. La retención a 30 días ha subido un 35% desde el rediseño.",
          next: "otro-studio",
        },
        {
          slug: "otro-studio",
          name: "Otro Studio",
          year: "2024",
          category: "Web corporativa",
          client: "Otro Studio",
          role: "Desarrollo + Diseño web",
          duration: "2 meses",
          live: "https://ejemplo.com",
          context:
            "Otro Studio es un estudio de fotografía y producción audiovisual. Necesitaban una web que mostrara su portfolio de forma elegante y que no dependiera de un CMS complicado.",
          approach:
            "Diseñamos una web minimalista donde las fotos son las protagonistas. Sin distracciones, sin colores fuertes. Todo gira alrededor del trabajo del estudio.",
          decisions: [
            {
              title: "Tipografía discreta",
              text: "El texto no compite con las fotos. Usamos una sans neutra en tamaños pequeños y mucho espacio negativo.",
            },
            {
              title: "Galería sin fricción",
              text: "Las fotos cargan rápido, se pueden ver a pantalla completa y se navega entre ellas con teclado o swipe.",
            },
            {
              title: "Sin CMS, sin complicaciones",
              text: "El estudio sube sus fotos directamente a una carpeta y se despliegan solas. Cero fricción para el cliente.",
            },
          ],
          stack: ["Astro", "Tailwind", "Cloudinary", "Vercel"],
          result:
            "La web está live desde 2024 y es la principal herramienta de venta del estudio. Han aumentado un 40% las solicitudes de presupuesto.",
          next: "nova-coffee",
        },
      ],
    },
    about: {
      index: "02",
      label: "Sobre mí",
      title: "Desarrollo con ojo de diseñador.",
      text: "Construyo productos digitales con criterio visual. Desarrollo web de principio a fin, con la sensibilidad de quien también piensa en tipografía, color y movimiento. Trabajo con clientes que valoran el detalle.",
      services: [
        "Desarrollo web",
        "Diseño de marca",
        "Design systems",
        "Motion",
      ],
    },
    aboutPage: {
      index: "02",
      label: "Sobre mí",
      title1: "Desarrollo con",
      title2: "ojo de diseñador",
      bio: [
        "Soy desarrollador web con ojo de diseñador. Construyo productos digitales donde la técnica y el detalle visual van de la mano: sitios que cargan rápido, se sienten bien al usarlos y transmiten la marca de quien los encarga.",
        "Trabajo con clientes que valoran el criterio. No hago webs genéricas ni plantillas. Cada proyecto es un sistema con decisiones propias de tipografía, color, motion y estructura.",
      ],
      servicesLabel: "Qué hago",
      services: [
        "Desarrollo web",
        "Diseño de marca",
        "Design systems",
        "Motion y animación",
      ],
      stackLabel: "Stack",
      stack: [
        "Astro",
        "TypeScript",
        "GSAP",
        "Tailwind",
        "React",
        "Figma",
        "Node",
        "Vercel",
        "Sanity",
        "Lenis",
      ],
      processLabel: "Cómo trabajo",
      process: [
        {
          title: "Colaboración directa",
          text: "Sin intermediarios. Hablas conmigo en cada fase del proyecto y las decisiones se toman en conjunto.",
        },
        {
          title: "Iteración rápida",
          text: "Prefiero enseñar y ajustar a trabajar semanas a ciegas. Cada semana hay algo nuevo que ver.",
        },
        {
          title: "Detalle hasta el final",
          text: "El último 5% del proyecto es lo que lo hace bueno. Los microdetalles son los que se recuerdan.",
        },
      ],
      cta: {
        label: "¿Trabajamos juntos?",
        link: "Escríbeme",
      },
    },
    footer: {
      label: "03 — Contacto",
      title: "¿Trabajamos juntos?",
      email: "hola@ottro.studio",
      socialsLabel: "Redes",
      socials: [
        { label: "GitHub", url: "https://github.com" },
        { label: "LinkedIn", url: "https://linkedin.com" },
        { label: "X", url: "https://x.com" },
      ],
      location: "Madrid",
      year: "2026",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      l1: "WEB",
      l2: "DEVELOPMENT",
      l3: "& BRAND DESIGN",
      meta: ["Astro", "GSAP", "Available", "Madrid"],
    },
    work: {
      index: "01",
      label: "Work",
      title: "Selected work",
      seeAll: "See all",
      nextProject: "Next project",
      backToList: "Back to work",
      viewLive: "View live project",
      role: "Role",
      duration: "Duration",
      year: "Year",
      client: "Client",
      context: "Context",
      approach: "Approach",
      decisions: "Key decisions",
      stack: "Stack",
      result: "Result",
      projects: [
        {
          slug: "nova-coffee",
          name: "Nova Coffee",
          year: "2026",
          category: "Branding + Web",
          client: "Nova Coffee Co.",
          role: "Development + Brand design",
          duration: "4 months",
          live: "https://example.com",
          context:
            "Nova Coffee is a specialty coffee roaster that needed a visual identity and a website that conveyed the quality of their product. They came with a generic logo and a template site that didn't reflect their positioning.",
          approach:
            "We started by defining the complete brand system — typography, color, and symbol — and then built a website that applied it consistently. The site is fast, has subtle animations, and lets the product speak for itself.",
          decisions: [
            {
              title: "Editorial typographic system",
              text: "Instead of using one generic font for everything, we chose a condensed display for headlines and a neutral sans for body text. This gives clear hierarchy without sacrificing legibility.",
            },
            {
              title: "Animation at the service of content",
              text: "Every animation has a reason: guiding the reading, marking a section change, or reinforcing a message. No decorative motion.",
            },
            {
              title: "Astro for performance",
              text: "The site loads in under 1s on 4G. Astro lets us ship zero JavaScript by default and only hydrate what needs interactivity.",
            },
          ],
          stack: ["Astro", "Tailwind", "GSAP", "Sanity", "Vercel"],
          result:
            "The site has been live since January 2026. Nova Coffee has doubled wholesale inquiries in the first 3 months and the brand is now perceived as a premium specialty roaster.",
          next: "studio-kiriko",
        },
        {
          slug: "studio-kiriko",
          name: "Studio Kiriko",
          year: "2025",
          category: "Visual identity",
          client: "Studio Kiriko",
          role: "Brand design",
          duration: "3 months",
          live: "https://example.com",
          context:
            "Studio Kiriko is an interior architecture studio based in Madrid. They needed a visual identity that reflected their minimalist and Japanese approach to space.",
          approach:
            'We designed an identity system based on the idea of "active emptiness" — lots of negative space, precise typography, and a single color accent. The brand breathes calm and precision.',
          decisions: [
            {
              title: "A single accent",
              text: "The system uses black, off-white, and a single moss green. Any additional color would break the sense of calm.",
            },
            {
              title: "Typography as structure",
              text: "The main typeface is a contemporary serif that brings character without being loud. The whole system revolves around it.",
            },
            {
              title: "Considered applications",
              text: "We designed everything from business cards to studio signage and full stationery. The brand works on any medium.",
            },
          ],
          stack: ["Figma", "Illustrator", "InDesign"],
          result:
            "Studio Kiriko has renewed its complete identity and applied it across all touchpoints. The brand is now perceived as a reference studio in its field.",
          next: "aurora-app",
        },
        {
          slug: "aurora-app",
          name: "Aurora App",
          year: "2025",
          category: "Digital product",
          client: "Aurora Health",
          role: "Frontend development",
          duration: "6 months",
          live: "https://example.com",
          context:
            "Aurora is a healthy habit tracking app. They needed an interface that was pleasant to use daily and didn't fall into the fitness app cliché.",
          approach:
            "We built an interface with lots of breathing room, clear typography, and animations that celebrate user achievements without being childish. The app feels like a tool, not a game.",
          decisions: [
            {
              title: "Reward animations",
              text: "Every time the user completes a habit, a subtle animation celebrates it. It's not confetti, but you notice it.",
            },
            {
              title: "Dark mode by default",
              text: "The app is used a lot at night, so we designed dark first and then adapted to light.",
            },
            {
              title: "Accessible components",
              text: "All components meet WCAG AA. The app is usable with a screen reader and keyboard navigation.",
            },
          ],
          stack: ["React", "TypeScript", "Framer Motion", "Tailwind"],
          result:
            "Aurora has 4.7 stars on the App Store and over 50,000 active users. 30-day retention is up 35% since the redesign.",
          next: "otro-studio",
        },
        {
          slug: "otro-studio",
          name: "Otro Studio",
          year: "2024",
          category: "Corporate site",
          client: "Otro Studio",
          role: "Development + Web design",
          duration: "2 months",
          live: "https://example.com",
          context:
            "Otro Studio is a photography and audiovisual production studio. They needed a website that showcased their portfolio elegantly and didn't depend on a complicated CMS.",
          approach:
            "We designed a minimalist site where photos are the protagonists. No distractions, no strong colors. Everything revolves around the studio's work.",
          decisions: [
            {
              title: "Discreet typography",
              text: "Text doesn't compete with the photos. We use a neutral sans in small sizes and lots of negative space.",
            },
            {
              title: "Frictionless gallery",
              text: "Photos load fast, can be viewed full screen, and are navigable with keyboard or swipe.",
            },
            {
              title: "No CMS, no complications",
              text: "The studio uploads photos directly to a folder and they deploy themselves. Zero friction for the client.",
            },
          ],
          stack: ["Astro", "Tailwind", "Cloudinary", "Vercel"],
          result:
            "The site has been live since 2024 and is the studio's main sales tool. They've seen a 40% increase in quote requests.",
          next: "nova-coffee",
        },
      ],
    },
    about: {
      index: "02",
      label: "About",
      title: "Development with a designer's eye.",
      text: "I build digital products with visual judgment. Full-stack web development with the sensibility of someone who also thinks about typography, color and motion. I work with clients who care about detail.",
      services: ["Web development", "Brand design", "Design systems", "Motion"],
    },
    aboutPage: {
      index: "02",
      label: "About",
      title1: "Development with",
      title2: "a designer's eye",
      bio: [
        "I'm a web developer with a designer's eye. I build digital products where craft and visual detail go hand in hand: sites that load fast, feel right to use, and convey the brand of whoever commissions them.",
        "I work with clients who value judgement. No generic websites, no templates. Every project is a system with its own decisions about typography, color, motion, and structure.",
      ],
      servicesLabel: "What I do",
      services: [
        "Web development",
        "Brand design",
        "Design systems",
        "Motion and animation",
      ],
      stackLabel: "Stack",
      stack: [
        "Astro",
        "TypeScript",
        "GSAP",
        "Tailwind",
        "React",
        "Figma",
        "Node",
        "Vercel",
        "Sanity",
        "Lenis",
      ],
      processLabel: "How I work",
      process: [
        {
          title: "Direct collaboration",
          text: "No middlemen. You talk to me at every stage of the project and decisions are made together.",
        },
        {
          title: "Fast iteration",
          text: "I'd rather show and adjust than work blind for weeks. Every week there's something new to see.",
        },
        {
          title: "Detail to the end",
          text: "The last 5% of the project is what makes it good. Micro-details are what people remember.",
        },
      ],
      cta: {
        label: "Let's work together",
        link: "Get in touch",
      },
    },
    footer: {
      label: "03 — Contact",
      title: "Let's work together.",
      email: "hola@ottro.studio",
      socialsLabel: "Social",
      socials: [
        { label: "GitHub", url: "https://github.com" },
        { label: "LinkedIn", url: "https://linkedin.com" },
        { label: "X", url: "https://x.com" },
      ],
      location: "Madrid",
      year: "2026",
    },
  },
} as const;

export type Lang = keyof typeof copy;

export function getCopy(lang: string | undefined) {
  const safeLang: Lang = lang === "en" ? "en" : "es";
  return copy[safeLang];
}
