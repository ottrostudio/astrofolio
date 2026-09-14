import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let ctx: gsap.Context | null = null;

export function initReveals() {
  // Limpiar instancia previa (convivencia con ClientRouter)
  if (ctx) {
    ctx.revert();
    ctx = null;
  }

  // Context = agrupa todos los ScrollTrigger para hacer cleanup fácil
  ctx = gsap.context(() => {
    // ────────────────────────────────────────
    // 1. Reveals sutiles genéricos: [data-reveal]
    // ────────────────────────────────────────
    const revealEls = gsap.utils.toArray<HTMLElement>("[data-reveal]");

    revealEls.forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    // ────────────────────────────────────────
    // 2. Reveals de headings por líneas: [data-reveal-lines]
    //    Presupone que dentro hay .mask-line > .reveal-line
    // ────────────────────────────────────────
    const lineEls = gsap.utils.toArray<HTMLElement>("[data-reveal-lines]");

    lineEls.forEach((el) => {
      const lines = el.querySelectorAll<HTMLElement>(".reveal-line");
      if (!lines.length) return;

      gsap.from(lines, {
        yPercent: 110,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    // ────────────────────────────────────────
    // 3. Parallax sutil en imágenes: [data-parallax]
    // ────────────────────────────────────────
    const parallaxEls = gsap.utils.toArray<HTMLElement>("[data-parallax]");

    parallaxEls.forEach((el) => {
      gsap.fromTo(
        el,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    // ────────────────────────────────────────
    // 4. Stagger en hijos: [data-reveal-stagger]
    //    Anima los hijos directos uno a uno
    // ────────────────────────────────────────
    const staggerEls = gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]");

    staggerEls.forEach((el) => {
      const children = el.children;
      if (!children.length) return;

      gsap.from(children, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });
  });
}

export function destroyReveals() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
}
