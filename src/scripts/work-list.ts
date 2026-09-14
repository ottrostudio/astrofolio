import gsap from "gsap";

let ctx: gsap.Context | null = null;
let cleanup: (() => void) | null = null;

export function initWorkList() {
  console.log("[work-list] init");

  if (ctx) {
    ctx.revert();
    ctx = null;
  }
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const items = document.querySelectorAll<HTMLElement>("[data-work-item]");
  const listContainer = document.querySelector<HTMLElement>(".work-items");
  const bg = document.querySelector<HTMLElement>("[data-work-bg]");
  const bgBlur = document.querySelector<HTMLElement>("[data-work-bg-blur]");
  const bgText = document.querySelector<HTMLElement>("[data-work-bg-text]");

  console.log(
    "[work-list] items:",
    items.length,
    "bg:",
    !!bg,
    "text:",
    !!bgText,
  );
  if (!items.length || !listContainer || !bg || !bgBlur || !bgText) return;

  const hasPointer = !window.matchMedia("(pointer: coarse)").matches;
  if (!hasPointer) return;

  // Gradientes CSS para el texto (deben coincidir con los de Tailwind)
  const textGradients: Record<string, string> = {
    "from-accent via-accent/40 to-accent2/60":
      "linear-gradient(135deg, #FF5B1F 0%, rgba(255,91,31,0.6) 50%, rgba(94,234,212,0.8) 100%)",
    "from-accent2 via-accent2/40 to-accent/60":
      "linear-gradient(135deg, #5EEAD4 0%, rgba(94,234,212,0.6) 50%, rgba(255,91,31,0.8) 100%)",
    "from-accent via-accent2/50 to-transparent":
      "linear-gradient(135deg, #FF5B1F 0%, rgba(94,234,212,0.7) 50%, transparent 100%)",
    "from-accent2 via-accent/50 to-transparent":
      "linear-gradient(135deg, #5EEAD4 0%, rgba(255,91,31,0.7) 50%, transparent 100%)",
    "from-accent via-transparent to-accent2":
      "linear-gradient(135deg, #FF5B1F 0%, transparent 50%, #5EEAD4 100%)",
    "from-accent2 via-transparent to-accent":
      "linear-gradient(135deg, #5EEAD4 0%, transparent 50%, #FF5B1F 100%)",
  };

  const applyTextGradient = (gradientClass: string) => {
    const gradient =
      textGradients[gradientClass] ||
      textGradients["from-accent via-accent/40 to-accent2/60"];

    bgText.style.backgroundImage = gradient;
    bgText.style.webkitBackgroundClip = "text";
    bgText.style.backgroundClip = "text";
    bgText.style.color = "transparent";
  };

  let currentIndex = -1;

  const showBg = (gradientClass: string, name: string, index: number) => {
    // Si es el mismo proyecto, no hacemos nada (evita parpadeo al mover dentro del mismo item)
    if (index === currentIndex) return;
    currentIndex = index;

    bgBlur.className = `work-bg-blur absolute bg-gradient-to-br blur-3xl transition-none ${gradientClass}`;
    bgText.textContent = name;
    applyTextGradient(gradientClass);

    // Aparecer si está oculto, o cambiar suavemente si ya está visible
    gsap.to(bg, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    // Micro animación del texto al cambiar de proyecto
    gsap.fromTo(
      bgText,
      { opacity: 0.5 },
      { opacity: 0.4, duration: 0.4, ease: "power3.out" },
    );
  };

  const hideBg = () => {
    currentIndex = -1;
    gsap.to(bg, {
      opacity: 0,
      scale: 0.98,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  // Delegación de eventos
  const onPointerOver = (e: PointerEvent) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>(
      "[data-work-item]",
    );
    if (!target) return;

    const gradient =
      target.dataset.workGradient || "from-accent via-accent/40 to-accent2/60";
    const name = target.dataset.workName || "";
    const index = Number(target.dataset.workIndex ?? "0");

    showBg(gradient, name, index);
  };

  const onPointerLeave = () => {
    hideBg();
  };

  listContainer.addEventListener("pointerover", onPointerOver);
  listContainer.addEventListener("pointerleave", onPointerLeave);

  // Estado inicial: fondo oculto, ligeramente escalado por debajo
  gsap.set(bg, { opacity: 0, scale: 0.98 });

  cleanup = () => {
    listContainer.removeEventListener("pointerover", onPointerOver);
    listContainer.removeEventListener("pointerleave", onPointerLeave);
  };
}

export function destroyWorkList() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
  if (cleanup) {
    cleanup();
    cleanup = null;
  }
}
