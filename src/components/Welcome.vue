<template>
  <p>This is my <span>try</span> component</p>
</template>

<script setup>

</script>

<style lang="scss" scoped>
p {
  @apply font-bold;
  span {
    @apply bg-red-500 text-white hover:text-black hover:bg-transparent;
  }
}
</style>