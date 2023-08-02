<template>
  <div class="timeline">
    <div class="main-container">
      <div class="experiences">
        <div class="red-line left-1/2"></div>
        <div class="red-line right-1/2"></div>
        <div v-for="(item, key) in TIMELINE_CONTENT"
             class="hide"
             :class="{ 'right-timeline animation-by-right' : key % 2 === 0, 'left-timeline animation-by-left' : key % 2 !== 0 }">
          <div class="experience"></div>
          <div class="experience other" :class="{ 'text-left' : key % 2 === 0, 'text-right' : key % 2 !== 0 }">
            <p class="date-title">{{ item.date }}</p>
            <h4 class="title">{{ item.title }}</h4>
            <p class="content">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="illustration-container animation-by-left hide">
        <img alt="Timeline illustration" src="src/assets/timeline.svg" />
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TIMELINE_CONTENT } from '@/constants/timeline';
</script>

<style scoped lang="scss">
.timeline {
  @apply mx-auto lg:w-2/3 sticky mt-12;
  font-family: "Open Sans", serif;

  .red-line {
    @apply border-red-500 absolute h-full border;
    border: 2px solid rgb(239 68 68);
    border-radius: 1%;
  }
  .left-timeline {
    @apply mb-8 flex justify-between flex-row-reverse items-center w-full;
  }
  .right-timeline {
    @apply mb-8 flex justify-between items-center w-full;
  }
  .experience {
    @apply order-1 w-5/12;
    &.other {
      @apply px-1 py-4;
    }
    .date-title {
      @apply mb-3 text-base text-red-500;
    }
    .title {
      @apply mb-3 font-bold text-lg md:text-2xl;
    }
    .content {
      @apply text-sm md:text-base leading-snug text-opacity-100;
    }
  }
  .illustration-container {
    @apply flex flex-col max-w-min text-center;
    img {
      @apply mx-auto -mt-24 max-w-sm;
    }
    p {
      @apply font-bold text-xl text-red-500 mb-[-3rem];
      @apply md:mb-0;
    }
  }
  .main-content {
    @apply container mx-auto w-full h-full;
    .experiences {
      @apply relative overflow-hidden p-10 h-full flex flex-col;
    }
  }
}
</style>
