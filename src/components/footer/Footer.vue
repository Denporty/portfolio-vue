<template>
  <div class="mt-64">
    <div class="triangle-bg-footer"></div>
    <div class="triangle-border-footer"></div>
    <div class="footer-content">
      <div class="footer-list">
        <svg class="animation-hover with-action" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        <svg class="animation-hover with-action" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        <svg class="animation-hover with-action" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
        <svg class="animation-hover with-action" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"/></svg>
      </div>
    </div>
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
  @apply bg-black w-full py-8 flex;
  font-family: 'Open Sans', serif;
  .footer-list {
    @apply px-36;
    svg {
      @apply mr-4 last:mr-0 duration-500;
      fill: #fff;
      &:hover {
        @apply w-[60px] h-[60px];
        fill: #EF4444;
      }
    }
  }
}
</style>