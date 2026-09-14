import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let ctx: gsap.Context | null = null;

export function initWorkCase() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }

  const article = document.querySelector<HTMLElement>(".work-case");
  if (!article) return;

  ctx = gsap.context(() => {
    // Parallax de la imagen hero
    const parallaxEls =
      article.querySelectorAll<HTMLElement>("[data-parallax]");
    parallaxEls.forEach((el) => {
      gsap.fromTo(
        el,
        { yPercent: -10 },
        {
          yPercent: 10,
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
  }, article);
}

export function destroyWorkCase() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
}
