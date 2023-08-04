<template>
  <div class="top-banner animation-hover"></div>
  <p class="animation-hover">Portfolio Victor</p>
</template>

<script setup>

</script>

<style scoped lang="scss">

.top-banner {
  @apply bg-red-600 h-4 w-full absolute w-0 h-0 z-10;
  border-bottom: 50px solid black;
  border-left: 100vw solid transparent;
}
p {
  @apply absolute top-0 left-0 z-20 ml-1 md:ml-4 font-black text-red-800 mt-2 md:mt-4 hover:text-white duration-500 cursor-pointer;
  font-family: "Open Sans", serif;
}
</style>