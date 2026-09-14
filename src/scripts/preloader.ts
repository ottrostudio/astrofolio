import gsap from "gsap";

export function initPreloader() {
  const preloader = document.querySelector<HTMLElement>(".preloader");
  const counter = document.querySelector<HTMLElement>(".preloader-counter");
  const bar = document.querySelector<HTMLElement>(".preloader-bar");

  if (!preloader || !counter || !bar) {
    return;
  } // Estado inicial
  const state = { progress: 0 };
  counter.textContent = "0";

  // Timeline maestra
  const tl = gsap.timeline({
    onComplete: () => {
      preloader.remove();
    },
  });

  // 1. Contador del 0 al 100
  tl.to(
    state,
    {
      progress: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        counter.textContent = Math.round(state.progress).toString();
      },
    },
    0,
  );

  // 2. Barra de progreso (sincronizada)
  tl.to(
    bar,
    {
      scaleX: 1,
      duration: 1.8,
      ease: "power2.inOut",
    },
    0,
  );

  // 3. Pausa breve
  tl.to({}, { duration: 0.2 });

  // 4. Cortina sube
  tl.to(preloader, {
    yPercent: -100,
    duration: 1,
    ease: "expo.inOut",
  });

  // 5. Lanza la entrada del hero (espera al evento custom)
  tl.add(() => {
    document.dispatchEvent(new CustomEvent("preloader:done"));
  });
}
