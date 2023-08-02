<template>
  <div class="animation-by-right about-me hide">
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