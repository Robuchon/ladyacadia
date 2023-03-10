<template>
    <div class="flex flex-col items-center max-w-[940px] mx-auto">
    <div class="flex flex-col items-center" @click="goTo('Home')">
        <img src="/IMG_1128.png" alt="" />
        <h1 class="text-2xl font-light">Lady Acadia</h1>
    </div>
    <div class="bg-Anthracite max-w-[940px] w-[90%] h-0.5 my-6"></div>
    <div class="flex space-x-4">
        <RouterLink to="Home">Home</RouterLink>
        <RouterLink to="Galerie">Galerie</RouterLink>
        <RouterLink to="Contact">Contact</RouterLink>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>