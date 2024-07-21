<template>
  <div
    class="mx-auto flex w-[95%] max-w-7xl flex-col items-center justify-between gap-2 py-4 md:flex-row md:py-12"
  >
    <div class="mx-auto flex flex-1 gap-4">
      <p>Créé par Robuchon Hugues</p>
      <a
        :key="navigation[0].name"
        :href="navigation[0].href"
        class="text-Green hover:text-Orange"
        target="_blank"
      >
        <span class="sr-only">{{ navigation[0].name }}</span>
        <Linkedin height="24" width="24"></Linkedin>
      </a>
    </div>
    <p class="mx-auto flex-1 text-center">©2020-2024 pour Lady Acadia.</p>
    <div class="mx-auto flex flex-1 justify-end space-x-6">
      <a
        :key="navigation[1].name"
        :href="navigation[1].href"
        class="text-Green hover:text-Orange"
        target="_blank"
      >
        <span class="sr-only">{{ navigation[1].name }}</span>
        <Instagram height="24" width="24"></Instagram>
      </a>
      <a
        :key="navigation[2].name"
        :href="navigation[2].href"
        class="text-Green hover:text-Orange"
        target="_blank"
      >
        <span class="sr-only">{{ navigation[2].name }}</span>
        <Youtube height="24" width="24"></Youtube>
      </a>
    </div>
  </div>
</template>

<script setup>
import Linkedin from "./../assets/Linkedin.vue";
import Instagram from "./../assets/Instagram.vue";
import Youtube from "./../assets/Youtube.vue";
const navigation = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/hugues-robuchon-311a2721a/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lady_acadia/",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@ladyacadia1611",
  },
];
</script>

<style lang="scss" scoped></style>
