<template>
  <div class="mx-auto flex max-w-[940px] flex-col items-center">
    <RouterLink class="flex flex-col items-center" to="/home">
      <img class="icon rounded-full" src="/IMG_1128.png" alt="" />
      <h1 class="text-2xl font-light">
        <h1
          class="text-with-shadow-white z-10 text-center text-4xl font-semibold text-Green"
        >
          &gt; Lady Acadia &lt;
        </h1>
      </h1>
    </RouterLink>
    <div class="my-6 h-0.5 w-[90%] max-w-[940px] bg-Green"></div>
    <div class="flex space-x-4">
      <RouterLink class="text-with-shadow-white z-10 text-center text-2xl font-semibold text-Green" to="/home">Home</RouterLink>
      <RouterLink class="text-with-shadow-white z-10 text-center text-2xl font-semibold text-Green" to="/galerie">Galerie</RouterLink>
      <RouterLink class="text-with-shadow-white z-10 text-center text-2xl font-semibold text-Green" to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>

<script setup></script>
<style>
.text-with-shadow-white {
  text-shadow: 2px 2px 2px #000000;
}</style>
