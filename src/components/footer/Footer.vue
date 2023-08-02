<template>
  <div class="mt-64">
    <div class="triangle-bg-footer"></div>
    <div class="triangle-border-footer"></div>
    <div class="footer-content"></div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

.triangle-bg-footer {
  @apply w-0 h-0 z-10 absolute mt-[-10.75rem];
  border-bottom: 175px solid black;
  border-left: 100vw solid transparent;
}

.triangle-border-footer {
  @apply w-0 h-0 z-[-1] mt-[-13.75rem] absolute;
  border-bottom: 220px solid rgb(220 38 38);
  border-left: 100vw solid transparent;
}

.footer-content {
  @apply bg-black w-full h-60;
}
</style>