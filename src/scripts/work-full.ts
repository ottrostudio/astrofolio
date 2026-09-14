import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let ctx: gsap.Context | null = null;

export function initWorkFull() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }

  const projects = gsap.utils.toArray<HTMLElement>("[data-project]");
  if (!projects.length) return;

  ctx = gsap.context(() => {
    projects.forEach((project, i) => {
      const image = project.querySelector<HTMLElement>(".project-image");

      // 1. Entrada con clip-path
      gsap.fromTo(
        project,
        { clipPath: "inset(50% 50% 50% 50%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            once: true,
          },
        },
      );

      // 2. Parallax de la imagen
      if (image) {
        gsap.fromTo(
          image,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      // 3. El siguiente proyecto sube con escala
      if (i < projects.length - 1) {
        const next = projects[i + 1];
        gsap.fromTo(
          next,
          { scale: 0.9, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: "top 30%",
              scrub: true,
            },
          },
        );
      }
    });
  });
}

export function destroyWorkFull() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
}
