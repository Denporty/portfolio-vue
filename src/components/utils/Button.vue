<template>
  <button class="group relative h-12 mx-auto w-48 overflow-hidden rounded-2xl bg-red-500 text-lg font-bold text-white cursor-pointer flex justify-center items-center border-none animation-hover" v-on:click="action">
    <slot></slot>
    <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>
</template>

<script setup>
const props = defineProps({
  action: Function
})
</script>

<style scoped lang="scss">

</style>