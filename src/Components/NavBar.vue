<template>
  <div class="mx-auto flex max-w-[940px] flex-col items-center">
    <RouterLink class="flex flex-col items-center" to="/home">
      <img class="icon rounded-full w-44" src="/logo.png" alt="" />
      <h1 class="text-2xl font-light">
        <h1
          class="text-center text-4xl font-semibold text-Green bg-white rounded-full px-4 bg-opacity-90"
        >
          &gt; Lady Acadia &lt;
        </h1>
      </h1>
    </RouterLink>
    <div class="my-6 h-0.5 w-[90%] max-w-[940px] bg-Orange"></div>
    <div class="space-x-4 bg-white rounded-full px-4 bg-opacity-90">
      <RouterLink class="text-with-shadow text-center text-2xl font-normal text-black" to="/home">Home</RouterLink>
      <RouterLink class="text-with-shadow text-center text-2xl font-normal text-black" to="/galerie">Galerie</RouterLink>
      <RouterLink class="text-with-shadow text-center text-2xl font-normal text-black" to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>

<script setup>

</script>
<style>

</style>
