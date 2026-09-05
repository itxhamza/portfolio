import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setup() {
  // Reduced motion: show everything, animate nothing.
  if (reduced()) {
    gsap.set("[data-reveal], [data-hero-item]", { opacity: 1, y: 0, clearProps: "all" });
    return;
  }

  // 1) Hero — a small choreographed load-in timeline (GSAP timeline).
  const hero = document.querySelector("[data-hero]");
  if (hero) {
    const items = hero.querySelectorAll("[data-hero-item]");
    if (items.length) {
      gsap.set(items, { opacity: 0, y: 26 });
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(items, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, delay: 0.05 });
    }
  }

  // 2) Every section — scroll-triggered reveal, batched with stagger.
  const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  if (reveals.length) {
    gsap.set(reveals, { opacity: 0, y: 24 });
    ScrollTrigger.batch("[data-reveal]", {
      start: "top 88%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.09,
          ease: "power3.out",
          overwrite: true,
        }),
    });
  }

  // 3) Subtle parallax drift on any [data-parallax] element.
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    const depth = Number(el.dataset.parallax) || 40;
    gsap.to(el, {
      yPercent: -depth,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  ScrollTrigger.refresh();
}

function cleanup() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}

// astro:page-load fires on first load AND after every View Transition swap.
document.addEventListener("astro:page-load", setup);
document.addEventListener("astro:before-swap", cleanup);
