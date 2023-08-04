<template>
  <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
    <div :style="cursorCircle" class="g-cursor__circle cursor-element"></div>
    <div class="g-cursor__point cursor-element cursor-point" ref="point" :style="cursorPoint"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Cursor',
  el: "#app",
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
    }
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false;
    });
    let animationAtOver = document.querySelectorAll('.animation-hover');
    let cursorToTransform = document.querySelectorAll('.cursor-element');
    let cursorPoint = document.querySelector('.cursor-point');
    document.body.addEventListener('onclick', () => {
      cursorPoint.classList.add('cursor-point-enable')
    })
    animationAtOver.forEach(item => {
      item.addEventListener('mouseover', () => {
        cursorToTransform.forEach(element => {
          element.classList.add('cursor-hover')
        })
      })
      item.addEventListener('mouseleave', () => {
        cursorToTransform.forEach(element => {
          element.classList.remove('cursor-hover')
        })
      })
    })

  }
}
</script>

<style lang="css">
_::-webkit-full-page-media, _:future, :root body, html {

  cursor: auto !important;

}
</style>

<style lang="scss">
body, html {
  @apply m-0 cursor-none flex justify-center items-center;
}

.cursor-point-enable {
  @apply w-[20px] h-[20px] duration-300 #{!important};
}


.g-cursor {
  &_hide {
    @apply hidden w-[60px] h-[60px];
    transition: width .6s ease,
    height .6s ease,
    opacity .6s ease;
  }

  &__circle {
    @apply pointer-events-none top-0 left-0 fixed w-[30px] h-[30px];
    border: 2px solid #EF4444;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity .6s ease;
    &.cursor-hover {
      border: 2px solid #fff;
    }
  }

  &__point {
    @apply top-0 left-0 fixed w-[10px] h-[10px] pointer-events-none bg-red-500;
    user-select: none;
    border-radius: 100%;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
    &.cursor-hover {
      @apply bg-white;
    }
  }

  &_hover {
    .g-cursor__circle {
      @apply opacity-0 w-[60px] h-[60px];
      transition: width .6s ease,
      height .6s ease,
      opacity .6s ease;
    }
  }
}
</style>