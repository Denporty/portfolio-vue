<template>

</template>

<script setup>
function isElementInViewport(element) {
  const rect = element?.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll() {
  const animationByLeft = document.querySelectorAll('.animation-by-left');
  const animationByRight = document.querySelectorAll('.animation-by-right');
  animationByLeft.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.remove('hide');
      element.classList.add('animate');
    }
  })

  animationByRight.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.remove('hide');
      element.classList.add('animate');
    }
  })
}

// Déclencher la fonction d'animation lors du chargement initial de la page et lors du scroll
document.addEventListener('DOMContentLoaded', animateOnScroll);
document.addEventListener('scroll', animateOnScroll);
</script>

<style lang="scss">
.hide {
  @apply opacity-0;
}
.animation-by-left {
  &.animate {
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
}

.animation-by-right {
  &.animate {
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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