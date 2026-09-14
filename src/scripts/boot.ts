import { initPreloader } from "./preloader";
import { initHero } from "./hero";
import { initSmoothScroll, destroySmoothScroll } from "./lenis-gsap";
import { initReveals, destroyReveals } from "./reveals";
import { initWorkFull, destroyWorkFull } from "./work-full";
import { initMobileMenu, destroyMobileMenu } from "./mobile-menu";
import { initWorkList, destroyWorkList } from "./work-list";
import { initWorkCase, destroyWorkCase } from "./work-case";

let booted = false;

function boot() {
  if (booted) return;
  booted = true;

  initSmoothScroll();
  initMobileMenu();

  const hasShownPreloader = sessionStorage.getItem("ottro:preloader-shown");

  if (!hasShownPreloader) {
    sessionStorage.setItem("ottro:preloader-shown", "1");
    initHero();
    initPreloader();
  } else {
    document.querySelector(".preloader")?.remove();
    initHero();
    setTimeout(() => {
      document.dispatchEvent(new CustomEvent("preloader:done"));
    }, 50);
  }

  document.addEventListener(
    "preloader:done",
    () => {
      setTimeout(() => {
        initReveals();
        initWorkFull();
        initWorkList();
        initWorkCase();
      }, 100);
    },
    { once: true },
  );
}

function cleanup() {
  destroySmoothScroll();
  destroyReveals();
  destroyWorkFull();
  destroyMobileMenu();
  destroyWorkList();
  destroyWorkCase();

  booted = false;
}

document.addEventListener("astro:page-load", boot);
document.addEventListener("astro:before-swap", cleanup);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
