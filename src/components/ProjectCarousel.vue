<template>
  <carousel :autoplay="5000" :wrapAround="1" class="carousel">
    <slide v-for="slide in projects" :key="slide">
        <div class="w-full">
          <div class="logo"/>
          <div class="slide-content">
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu lacus eget metus mattis bibendum. Morbi molestie luctus sapien ac placerat. Pellentesque suscipit ipsum ac pulvinar faucibus. Sed vitae dui sed orci viverra dapibus in ac leo. Mauris ac tincidunt felis. </p>
          </div>
          <a href="#">
            <div class="group relative h-12 mx-auto w-48 overflow-hidden rounded-2xl bg-red-500 text-lg font-bold text-white cursor-pointer flex justify-center items-center">
              Visiter
              <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </div>
          </a>
        </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

const props = defineProps({
  projects: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped lang="scss">
a {
  @apply text-inherit;
  text-decoration: none;
}
.carousel {
  @apply md:w-2/3 lg:w-1/2 mx-auto mt-32;
  font-family: "Open Sans", serif;
}
.logo {
  @apply rounded-full w-40 h-40 border-red-500 border-solid border-4 mx-auto mt-4 bg-contain;
  background-image: url("https://cdn-icons-png.flaticon.com/512/3135/3135715.png");
}
.slide-content {
  @apply px-8 md:px-32 lg:px-32;
}
</style>