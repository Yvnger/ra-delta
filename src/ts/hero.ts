import { countHeaderHeight } from "./header";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const hero: HTMLElement | null = document.getElementById('hero');
setHeroTopPadding();

function setHeroTopPadding() {
  const headerHeight = countHeaderHeight();
  hero?.setAttribute('style', `padding-top: ${headerHeight}px`);
}

window.addEventListener('resize', () => setHeroTopPadding());

// Illustration

function animateHeroIllustrations() {
  const folder = document.querySelector('.hero__illustration-folder');
  const laptop = document.querySelector('.hero__illustration-laptop');
  const window = document.querySelector('.hero__illustration-window');
  const photo1 = document.querySelectorAll('.hero__illustration-photo--1');
  const photo2 = document.querySelectorAll('.hero__illustration-photo--2');
  const photo3 = document.querySelectorAll('.hero__illustration-photo--3');

  gsap.fromTo(window, { x: 100, opacity: 0 }, {
    x: 0,
    opacity: 1,
    duration: 1,
    onComplete: () => {
      gsap.fromTo(folder, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    }
  })

  gsap.fromTo(laptop, { y: 50, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1, onComplete: () => {
      gsap.fromTo(photo1, {
        opacity: 0,
        x: -50,
        y: 100,
        scale: 0,
        rotate: -28
      }, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0
      });

      gsap.fromTo(photo2, {
        opacity: 0,
        x: -155,
        y: 147,
        scale: 0,
        rotate: -37
      }, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        delay: .1,
      });

      gsap.fromTo(photo3, {
        opacity: 0,
        x: -285,
        y: 136,
        scale: 0,
        rotate: -45,
      }, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        delay: .2,
      });
    }
  })

}

window.addEventListener('load', animateHeroIllustrations);

// Анимация преимуществ в Hero
gsap.registerPlugin(ScrollTrigger)

// Создаем timeline для анимации всех элементов
const heroFeaturesTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".js-hero-features",
    start: "top 70%",
    end: "bottom 95%",
    markers: false,
  }
});

heroFeaturesTimeline
  .from(".js-hero-features-item-1", {
    opacity: 0,
    top: "-200px",
    left: "-200px",
    duration: 1,
  })
  .from(".js-hero-features-item-2", {
    opacity: 0,
    top: "-200px",
    duration: 1,
  }, "-=1.0")
  .from(".js-hero-features-item-3", {
    opacity: 0,
    top: "-200px",
    right: "-200px",
    duration: 1,
  }, "-=1.0")
  .from(".js-hero-features-item-4", {
    opacity: 0,
    bottom: "-200px",
    left: "-100px",
    duration: 1,
  }, "-=1.0")
  .from(".js-hero-features-item-5", {
    opacity: 0,
    bottom: "-200px",
    right: "-100px",
    duration: 1,
  }, "-=1.0");
