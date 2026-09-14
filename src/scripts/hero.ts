import gsap from "gsap";

export function initHero() {
  const lines = gsap.utils.toArray<HTMLElement>(".hero-line");
  const rule = document.querySelector<HTMLElement>(".hero-rule");
  const dot = document.querySelector<HTMLElement>(".hero-dot");
  const meta = gsap.utils.toArray<HTMLElement>(".hero-meta li");
  if (!lines.length) return;

  // 1. Aplicar TODOS los estados iniciales de GSAP
  gsap.set(lines, { yPercent: 110 });
  if (rule) gsap.set(rule, { scaleX: 0, transformOrigin: "right center" });
  if (dot) gsap.set(dot, { scale: 0 });
  gsap.set(meta, { y: 20, opacity: 0 });

  // 2. AHORA que GSAP tiene el control, revelar el hero
  document.documentElement.classList.add("hero-ready");

  // 3. Timeline de entrada (igual que antes)
  const play = () => {
    const tl = gsap.timeline();

    tl.to(lines, {
      yPercent: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.1,
    });

    if (rule) {
      tl.to(rule, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.6");
    }

    if (dot) {
      tl.to(dot, { scale: 1, duration: 0.5, ease: "back.out(2)" }, "-=0.3");
    }

    tl.to(
      meta,
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.06 },
      "-=0.4",
    );
  };

  document.addEventListener("preloader:done", play, { once: true });
}
