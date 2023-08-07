<template>
  <div class="animation-by-right about-me hide">
    <div class="content">
      <div class="container">
        <div class="about-me-img">
          <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
        </div>
        <div class="about-me-desc">
          <h2>Bienvenue sur mon portfolio</h2>
          <p>Je suis un développeur web passionné avec cinq années d'expérience dans le domaine, titulaire d'un diplôme de master en ingénierie web et mobile. </p>
          <p>Ma maîtrise des langages JavaScript et PHP, ainsi que mon expertise dans les frameworks Laravel et Vue.js, m'ont permis de créer des solutions numériques innovantes et performantes. </p>
          <p>Mon parcours reflète ma détermination à créer des expériences en ligne exceptionnelles, tout en restant constamment ouvert aux nouvelles opportunités et aux défis passionnants.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.about-me {
  @apply py-16 mt-16 w-3/4 shadow-xl rounded-2xl bg-white;
  @apply mx-auto;
  font-family: "Open Sans",serif;
  .content {
    @apply m-auto px-6 text-gray-600 md:px-12 xl:px-6;
    .container {
      @apply space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12;
      .about-me-img {
        @apply md:w-5/12 lg:w-5/12 my-auto;
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
</style>