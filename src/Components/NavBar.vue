<template>
  <div class="mx-auto flex max-w-[940px] flex-col items-center">
    <RouterLink class="flex flex-col items-center" to="/home">
      
        <img class="icon rounded-full" src="/IMG_1128.png" alt="" />
      <h1 class="text-2xl font-light">Lady Acadia</h1>
    </RouterLink>
    <div class="my-6 h-0.5 w-[90%] max-w-[940px] bg-Anthracite"></div>
    <div class="flex space-x-4">
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/galerie">Galerie</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>

<script setup>
</script>


