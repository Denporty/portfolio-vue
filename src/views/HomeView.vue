<template>
  <main>
    <Animations></Animations>
    <div class="top-banner"></div>
    <ScrollUp></ScrollUp>
    <Welcome></Welcome>
    <div class="triangle-bg"></div>
    <div class="triangle-border"></div>
    <AboutMe></AboutMe>
    <Timeline></Timeline>

    <div class="fake-content"></div>
  </main>
</template>

<script lang="ts" setup>

import Welcome from "@/components/Welcome.vue";
import ScrollUp from "@/components/ScrollUp.vue";
import Timeline from "@/components/Timeline.vue";
import AboutMe from "@/components/AboutMe.vue";
import Animations from "@/components/utils/Animations.vue";

// Fonction pour détecter si un élément est visible dans la fenêtre
function isElementInViewport(element) {
  const rect = element?.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter une classe lorsque l'élément est visible dans la fenêtre
function animateOnScroll() {
  const aboutMeElement = document.querySelector('.about-me');
  const animationByRight = document.querySelectorAll('.animation-by-right');
  if (isElementInViewport(aboutMeElement)) {
    aboutMeElement.classList.remove('hide');
    aboutMeElement.classList.add('animate');
  }
  animationByRight.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.remove('hide');
      element.classList.add('animate');
    }
  })
}

// Déclencher la fonction d'animation lors du chargement initial de la page et lors du scroll
document.addEventListener('DOMContentLoaded', animateOnScroll);
document.addEventListener('scroll', animateOnScroll);

</script>

<style scoped lang="scss">
.hide {
  @apply opacity-0;
}
.top-banner {
  @apply bg-red-600 h-4 w-full absolute w-0 h-0 z-10;
  border-bottom: 50px solid black;
  border-left: 100vw solid transparent;
}
.fake-content {
  @apply h-[2000px];
}
.triangle-border {
  @apply w-0 h-0 absolute z-[-1] top-[100vh];
  border-top: 220px solid rgb(220 38 38);
  border-left: 100vw solid transparent;
}
.triangle-bg {
  @apply w-0 h-0 z-10;
  border-top: 175px solid black;
  border-left: 100vw solid transparent;
}

</style>
