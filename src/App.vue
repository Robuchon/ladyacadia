<template>
  <div class="relative z-0 h-screen overflow-auto bg-white">
    <TopImage class="-z-10"></TopImage>
    <NavBar class=""></NavBar>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script setup>
import NavBar from "./Components/NavBar.vue";
import Footer from "./Components/Footer.vue";
import TopImage from "./Components/TopImage.vue";
</script>

<style scoped></style>
