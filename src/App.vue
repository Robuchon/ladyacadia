<template>
  <div class="bg-white relative h-screen overflow-auto z-0">
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
