<template>
  <div class="w-[90%] mx-auto">
    <NavBar></NavBar>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script setup>
import NavBar from "./Components/NavBar.vue";
import Footer from "./Components/Footer.vue";
</script>

<style lang="scss" scoped></style>
