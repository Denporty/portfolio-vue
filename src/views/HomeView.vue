<template>
  <main>
    <div class="top-banner"></div>
    <ScrollUp></ScrollUp>
    <Welcome></Welcome>
    <div class="triangle-bg"></div>
    <div class="triangle-border"></div>
    <div class="about-me hide">
      <div class="content">
        <div class="container">
          <div class="about-me-img">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
          </div>
          <div class="about-me-desc">
            <h2>Nuxt development is carried out by passionate developers</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
          </div>
        </div>
      </div>
    </div>
    <Timeline></Timeline>

    <div class="fake-content"></div>
  </main>
</template>

<script lang="ts" setup>

import Welcome from "@/components/Welcome.vue";
import ScrollUp from "@/components/ScrollUp.vue";
import Timeline from "@/components/Timeline.vue";

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
  if (isElementInViewport(aboutMeElement)) {
    aboutMeElement.classList.remove('hide');
    aboutMeElement.classList.add('animate');
  }
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
  border-bottom: 50px solid rgb(17 24 39);
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
  border-top: 175px solid rgb(17 24 39);
  border-left: 100vw solid transparent;
}
.about-me {
  @apply py-16 mt-16 w-3/4 shadow-xl rounded-2xl bg-white;
  @apply mx-auto;
  font-family: "Open Sans",serif;
  &.animate {
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  .content {
    @apply m-auto px-6 text-gray-600 md:px-12 xl:px-6;
    .container {
      @apply space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12;
      .about-me-img {
        @apply md:w-5/12 lg:w-5/12;
        img {
          @apply w-full;
        }
      }
      .about-me-desc {
        @apply md:w-7/12 lg:w-6/12;
        h2 {
          @apply text-2xl text-gray-900 font-bold md:text-4xl;
        }
        p {
          @apply text-gray-600 first:mt-6 last:mt-4;
        }
      }
    }
  }
}



@keyframes slide-in-left {
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
