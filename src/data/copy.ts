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
      viewProject: "Ver proyecto",
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
          slug: "l-atelier-del-foc",
          name: "L'Atelier del Foc",
          year: "2026",
          category: "Web",
          client: "L'Atelier del Foc",
          role: "Desarrollo",
          duration: "6 semanas",
          live: "https://latelierdelfoc.com",
          context:
            'L\'Atelier del Foc es un taller de arte fallero e ilustración que necesitaba pasar de Instagram a un portfolio profesional. El reto: posicionarse en búsquedas como "artista fallero" y "fallas artísticas", construir un archivo de obra y canalizar el contacto sin perder la comodidad de las redes.',
          approach:
            "Empezamos con una sesión para definir objetivos y auditar el material existente: obras, fotos, logotipos y redes. A partir de ahí, diseñamos un sistema visual que diera protagonismo absoluto a las obras, con una estructura clara para el archivo de fallas. La web se construyó en Astro para que cargue rápido y sea fácil de mantener por el propio artista sin depender de un CMS complejo.",
          decisions: [
            {
              title: "Las obras como protagonistas",
              text: "El cliente venía de Instagram, donde las obras compiten con filtros, stories y ruido visual. Decidimos que la web sería lo opuesto: fondo neutro, mucho espacio negativo y tipografía discreta. La obra manda, el diseño acompaña.",
            },
            {
              title: "Archivo de fallas navegable por año",
              text: "En lugar de una galería plana, organizamos las fallas por año y tipo. Esto convierte la web en un archivo histórico del taller, no solo en un portfolio. Es lo que diferencia a un artista con trayectoria de una cuenta de Instagram.",
            },
            {
              title: "Contacto como puente, no como formulario",
              text: "En lugar de meter un formulario genérico, la web canaliza el contacto directo a Instagram y email. Es donde el cliente está cómodo, donde ya tiene conversaciones activas, y donde puede mostrar más contexto de su trabajo.",
            },
          ],
          stack: ["Figma", "Astro", "Markdown", "Vercel"],
          result:
            'La web está live desde agosto de 2026. En el primer mes recibió más visitas que las que el artista tenía en Instagram en el mismo periodo. Ahora aparece en búsquedas como "artista fallero Valencia" — algo impensable con solo Instagram. El artista gestiona su propio contenido sin depender de nadie.',
          next: "two-world-backpackers",
        },
        {
          slug: "two-world-backpackers",
          name: "Two World Backpackers",
          year: "2026",
          category: "Branding + Rediseño web",
          client: "Laura y Andrés",
          role: "Desarrollo + Diseño",
          duration: "2 meses",
          live: "https://twoworldbackpackers.com",
          context:
            "Two World Backpackers es un blog de viajes y gastronomía con años de contenido. Llegaron con un WordPress a medio hacer, sin diseño atractivo y abandonado durante 1-2 años. Querían dar el salto a una web profesional, con identidad visual propia y un blog que pudiera escalar a un proyecto mayor.",
          approach:
            "Partimos de una auditoría de contenido y una nueva identidad visual: paleta, tipografía, design system. Después rehicimos la estructura de WordPress con Custom Post Types y ACF para que el blog pudiera crecer sin fricción, y les dimos formación para que publicaran sin depender de nadie.",
          decisions: [
            {
              title: "Rehacer la identidad, no solo la web",
              text: 'El WordPress estaba abandonado y la identidad no representaba el proyecto. En lugar de solo "mejorar el diseño", diseñamos una identidad visual completa desde cero: paleta, tipografía, sistema de componentes. La web ahora comunica lo que el proyecto es, no lo que era.',
            },
            {
              title: "WordPress con Custom Post Types y ACF",
              text: "El cliente quería seguir usando WordPress, pero necesitaba una estructura que soportara el crecimiento del blog. Implementamos Custom Post Types y ACF para que cada tipo de contenido tuviera su propia estructura, campos y plantillas. Publicar es ahora una experiencia ordenada, no un caos.",
            },
            {
              title: "Formación como parte de la entrega",
              text: "Entregar la web no era suficiente. Hicimos una sesión de formación para que Laura y Andrés pudieran gestionar su contenido con la nueva dinámica de trabajo. El cliente es autónomo desde el día 1, sin depender de mí para cada cambio.",
            },
          ],
          stack: ["WordPress", "ACF", "PHP", "Tailwind"],
          result:
            "La web está live desde 2026. El proyecto pasó de un WordPress abandonado a una plataforma ordenada con identidad propia, contenido estructurado y un blog que puede crecer sin fricción. Laura y Andrés gestionan su propio contenido con autonomía total.",
          next: "nova-coffee",
        },
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
          next: "l-atelier-del-foc",
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
        { label: "GitHub", url: "https://github.com/ottrostudio" },
        { label: "Instagram", url: "https://instagram.com/ottro.studio" },
        { label: "LinkedIn", url: "https://linkedin.com/in/ottrostudio" },
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
      viewProject: "View project",
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
          slug: "l-atelier-del-foc",
          name: "L'Atelier del Foc",
          year: "2026",
          category: "Web",
          client: "L'Atelier del Foc",
          role: "Development",
          duration: "6 weeks",
          live: "https://latelierdelfoc.com",
          context:
            'L\'Atelier del Foc is a fallas art and illustration workshop that needed to move from Instagram to a professional portfolio. The challenge: to rank for searches like "fallas artist" and "Valencia fallas art", build an archive of their work, and channel contact without losing the convenience of social media.',
          approach:
            "We started with a session to define goals and audit existing material: artworks, photos, logos, and social media. From there, we designed a visual system that gave absolute prominence to the artworks, with a clear structure for the fallas archive. The site was built with Astro so it loads fast and is easy for the artist to maintain without depending on a complex CMS.",
          decisions: [
            {
              title: "The artworks as protagonists",
              text: "The client came from Instagram, where artworks compete with filters, stories, and visual noise. We decided the website would be the opposite: neutral background, lots of negative space, and discreet typography. The artwork leads, the design follows.",
            },
            {
              title: "A fallas archive navigable by year",
              text: "Instead of a flat gallery, we organized the fallas by year and type. This turns the site into a historical archive of the workshop, not just a portfolio. It's what separates an artist with a career from an Instagram account.",
            },
            {
              title: "Contact as a bridge, not a form",
              text: "Instead of a generic contact form, the site channels direct contact to Instagram and email. That's where the client is comfortable, where he already has active conversations, and where he can show more context about his work.",
            },
          ],
          stack: ["Figma", "Astro", "Markdown", "Vercel"],
          result:
            'The site has been live since August 2026. In its first month, it received more visits than the artist had on Instagram in the same period. It now ranks for searches like "fallas artist Valencia" — unthinkable with Instagram alone. The artist manages his own content without depending on anyone.',
          next: "two-world-backpackers",
        },
        {
          slug: "two-world-backpackers",
          name: "Two World Backpackers",
          year: "2026",
          category: "Branding + Web redesign",
          client: "Laura & Andrés",
          role: "Development + Design",
          duration: "2 months",
          live: "https://twoworldbackpackers.com",
          context:
            "Two World Backpackers is a travel and food blog with years of content. They came with a half-finished WordPress site, no attractive design, and abandoned for 1-2 years. They wanted to jump to a professional website, with their own visual identity and a blog that could scale into something bigger.",
          approach:
            "We started with a content audit and a new visual identity: palette, typography, design system. Then we rebuilt the WordPress structure with Custom Post Types and ACF so the blog could grow without friction, and trained them to publish without depending on anyone.",
          decisions: [
            {
              title: "Rebuilding the identity, not just the site",
              text: 'The WordPress site was abandoned and the identity didn\'t represent the project. Instead of just "improving the design", we created a complete visual identity from scratch: palette, typography, component system. The site now communicates what the project is, not what it was.',
            },
            {
              title: "WordPress with Custom Post Types and ACF",
              text: "The client wanted to keep using WordPress, but needed a structure that supported the growth of the blog. We implemented Custom Post Types and ACF so each content type had its own structure, fields, and templates. Publishing is now an organized experience, not chaos.",
            },
            {
              title: "Training as part of the delivery",
              text: "Delivering the site wasn't enough. We held a training session so Laura and Andrés could manage their content with the new workflow. The client is autonomous from day 1, without depending on me for every change.",
            },
          ],
          stack: ["WordPress", "ACF", "PHP", "Tailwind"],
          result:
            "The site has been live since 2026. The project went from an abandoned WordPress to an organized platform with its own identity, structured content, and a blog that can grow without friction. Laura and Andrés manage their own content with total autonomy.",
          next: "nova-coffee",
        },
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
          next: "l-atelier-del-foc",
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
        { label: "GitHub", url: "https://github.com/ottrostudio" },
        { label: "Instagram", url: "https://instagram.com/ottro.studio" },
        { label: "LinkedIn", url: "https://linkedin.com/in/ottrostudio" },
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
