<template>
  <div class="hero">
    <Snow class="icon-wrapper snow"></Snow>
    <div class="hero__content mx-auto w-[90%]">
      <NavBar class="z-10"></NavBar>
      <RouterView />
      <Footer></Footer>
      <svg width="100" height="100" viewBox="0 0 100 100">
  
</svg>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./Components/NavBar.vue";
import Footer from "./Components/Footer.vue";
import Snow from "./Components/Snow.vue";
import { ref, onMounted } from "vue";

const icon = ref(null);
const body = ref(null);

onMounted(() => {
  body.value = document.querySelector("body");
  icon.value = document.querySelector(".icon-wrapper");
  const movementStrength = 25;
  const height = movementStrength / window.innerHeight;
  const width = movementStrength / window.innerWidth;
  const bodyTrack = body.value;
  const iconElement = icon.value;

  bodyTrack.addEventListener("mousemove", (e) => {
    const mouseX = e.pageX - window.innerWidth / 2;
    const mouseY = e.pageY - window.innerHeight / 2;
    const newPositionX = width * mouseX * -1 - 10;
    const newPositionY = height * mouseY * -1 - 10;

    iconElement.style.transform = `translate(${newPositionX}px, ${newPositionY}px)`;
  });

  iconElement.addEventListener("mouseleave", () => {
    iconElement.style.transform = "translate(0, 0)";
  });
});
</script>

<style scoped>
.icon-wrapper {
  position: relative;
  display: inline-block;
}

.icon {
  display: block;
  width: 100%;
  height: auto;
}

.hero {
  background: radial-gradient(ellipse at center, #c8d9f2, #06192262),
    radial-gradient(ellipse at bottom, #061922b4, #c8d9f2);
  min-height: 30rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
}
.snow {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.hero__content {
  min-height: 30rem;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-content: center;
  position: relative;
  align-self: center;
  padding: 3rem 0;
}
</style>
