<template>
  <div class="welcome animation-hover">
    <div class="text-container">
      <p>Bienvenue sur mon <span>lorem ipsum</span> !</p>
      <p>Je vous invite à <span>scroller</span> pour voir la suite</p>
    </div>
    <img src="img/scroll-down.png" class="shake-vertical" alt="Scroll down"/>
  </div>
  <div class="triangle-bg"></div>
  <div class="triangle-border"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@keyframes shake-vertical{0%,100%{transform:translateY(0)}10%,30%,50%,70%{transform:translateY(-8px)}20%,40%,60%{transform:translateY(8px)}80%{transform:translateY(6.4px)}90%{transform:translateY(-6.4px)}}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}


.welcome {
  @apply w-screen h-screen flex items-center justify-center bg-black bg-contain bg-no-repeat bg-center duration-300;
  background-image: url("src/assets/home-bg.jpg");
  img {
    @apply absolute bottom-[10vh];
    -webkit-animation: shake-vertical 3s cubic-bezier(0.455, 0.030, 0.515, 0.955) alternate both infinite;
    animation: shake-vertical 3s cubic-bezier(0.455, 0.030, 0.515, 0.955) alternate both infinite;
  }
  .text-container {
    @apply flex flex-col text-center text-white;
    -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    p {
      @apply m-0 first:mb-2;
      font-family: "Open Sans",serif;
      span {
        @apply font-bold bg-red-600 text-white px-1;
      }
    }
  }
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