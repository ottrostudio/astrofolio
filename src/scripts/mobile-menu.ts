import gsap from "gsap";
import { getLenis } from "./lenis-gsap";

let ctx: gsap.Context | null = null;
let isOpen = false;

export function initMobileMenu() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }

  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  const toggle = document.querySelector<HTMLElement>("[data-menu-toggle]");
  if (!menu || !toggle) return;

  const lines = menu.querySelectorAll<HTMLElement>(".menu-line");
  const footerLine = menu.querySelector<HTMLElement>(".menu-footer-line");
  const hamburgerLines =
    toggle.querySelectorAll<HTMLElement>(".hamburger-line");
  const menuLinks = menu.querySelectorAll<HTMLElement>("[data-menu-link]");

  // Estado inicial: menú fuera de pantalla, líneas desplazadas
  gsap.set(menu, { yPercent: -100 });
  gsap.set(lines, { yPercent: 110 });
  if (footerLine)
    gsap.set(footerLine, { scaleX: 0, transformOrigin: "left center" });

  ctx = gsap.context(() => {
    const openTl = gsap.timeline({ paused: true });

    // 1. Overlay baja desde arriba
    openTl.to(
      menu,
      {
        yPercent: 0,
        duration: 0.8,
        ease: "expo.inOut",
      },
      0,
    );

    // 2. Línea larga (arriba): solo gira a 45°
    openTl.to(
      hamburgerLines[0],
      {
        rotate: 45,
        y: 3.5,
        duration: 0.5,
        ease: "power3.inOut",
      },
      0,
    );

    // 3. Línea corta (abajo): crece Y gira a la vez
    //    Empieza midiendo 20px y termina en 28px (igual que la larga)
    openTl.to(
      hamburgerLines[1],
      {
        rotate: -45,
        y: -3.5,
        width: 28, // ← crece durante el giro, no antes
        duration: 0.5,
        ease: "power3.inOut",
      },
      0,
    );

    // 4. Líneas del menú suben
    openTl.to(
      lines,
      {
        yPercent: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
      },
      0.3,
    );

    // 5. Línea cian del footer
    if (footerLine) {
      openTl.to(
        footerLine,
        { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
        0.5,
      );
    }

    const open = () => {
      if (isOpen) return;
      isOpen = true;
      menu.setAttribute("aria-hidden", "false");

      // Bloquear scroll
      document.body.style.overflow = "hidden";
      const lenis = getLenis();
      lenis?.stop();

      openTl.play();
    };

    const close = () => {
      if (!isOpen) return;
      isOpen = false;
      menu.setAttribute("aria-hidden", "true");

      // Restaurar scroll
      document.body.style.overflow = "";
      const lenis = getLenis();
      lenis?.start();

      openTl.reverse();
    };

    // Listeners
    toggle.addEventListener("click", () => {
      isOpen ? close() : open();
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        close();
      });
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    window.addEventListener("keydown", onKey);

    menu.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-menu-link]") && !target.closest("a")) {
        close();
      }
    });

    const cleanup = () => {
      window.removeEventListener("keydown", onKey);
      openTl.kill();
    };

    return cleanup;
  });
}

export function destroyMobileMenu() {
  if (ctx) {
    ctx.revert();
    ctx = null;
    isOpen = false;
    document.body.style.overflow = "";
  }
}
