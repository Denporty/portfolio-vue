<template>
  <main>
    <ScrollUp></ScrollUp>
    <Header></Header>
    <Welcome></Welcome>
    <AboutMe></AboutMe>
    <Timeline></Timeline>
    <ProjectCarousel :projects="[1, 2, 3]"></ProjectCarousel>
    <Contact></Contact>
    <Footer></Footer>
  </main>
  <Cursor></Cursor>
  <Animations></Animations>
</template>

<script lang="ts" setup>

import Welcome from "@/components/Welcome.vue";
import ScrollUp from "@/components/ScrollUp.vue";
import Timeline from "@/components/Timeline.vue";
import AboutMe from "@/components/AboutMe.vue";
import Animations from "@/components/utils/Animations.vue";
import ProjectCarousel from "@/components/ProjectCarousel.vue";
import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/header/Header.vue";
import Contact from "@/components/Contact.vue";
import Cursor from "@/components/Cursor.vue";

</script>
