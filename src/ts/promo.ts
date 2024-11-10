import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const promoTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".js-promo-section",
    start: "top 70%",
    end: "bottom 95%",
    markers: false,
  }
});

promoTimeline
  .from('.js-promo-item-3', {
    bottom: -200,
    right: -100,
    opacity: 0,
    scale: 0,
    rotate: 360
  })
  .from('.js-promo-item-2', {
    top: -200,
    right: -200,
    opacity: 0,
    scale: 0,
    rotate: 360
  }, "-=0.1")
  .from('.js-promo-item-1', {
    top: -200,
    left: -200,
    opacity: 0,
    scale: 0,
    rotate: 360
  }, "-=0.1")


