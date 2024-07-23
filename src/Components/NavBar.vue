<template>
  <div class="mx-auto flex w-[90%] flex-col items-center">
    <RouterLink class="flex flex-col items-center" to="/home">
      <img class="icon w-44 rounded-full" src="/logo.png" alt="" />
      
        <h1
          class="rounded-full bg-white bg-opacity-90 px-4 text-center text-4xl font-semibold text-Green"
        >
          &gt; Lady Acadia &lt;
        </h1>
      
    </RouterLink>
    <div class="flex justify-center space-x-6 mt-2 rounded-full bg-white bg-opacity-90 p-2">
          <a
            v-for="item in social"
            :key="item.name"
            :href="item.href"
            class="text-Green hover:text-Orange z-20"
            target="_blank"
          >
            <span class="sr-only">{{ item.name }}</span>
            <Instagram
              v-if="item.name === 'Instagram'"
              :height="24"
              :width="24"
            ></Instagram>
            <Youtube
              v-if="item.name === 'Youtube'"
              :height="24"
              :width="24"
            ></Youtube>
          </a>
        </div>
    <div class="my-4 h-0.5 w-[90%] max-w-[940px] bg-Orange"></div>
    <Disclosure
      as="nav"
      class="rounded-full bg-white bg-opacity-90 px-4"
      v-slot="{ open }"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between">
          <PopoverGroup
            as="nav"
            class="mx-auto flex flex-wrap justify-center space-x-2 lg:space-x-6"
          >
            <div v-for="item in navigation">
              <div v-if="item.dataNav === undefined" class="flex">
                <router-link
                  :aria-label="item.name"
                  :to="item.goto"
                  class="my-auto flex w-full items-center rounded-md p-1 text-center text-2xl font-normal no-underline md:px-3 md:py-2"
                  :class="
                    item.goto === router.currentRoute.value.path
                      ? 'cursor-not-allowed text-Gray'
                      : 'text-black'
                  "
                >
                  <span class=" text-inherit block">
                    {{ item.name }}
                  </span>
                </router-link>
              </div>
              <Popover v-else class="flex" @mouseleave="opendropdown = false">
                <PopoverButton
                  @mouseover="opendropdown = true"
                  :aria-label="item.name"
                >
                  <p
                    class="hover:bg-Secondary hover:text-Accent my-auto flex w-full items-center rounded-md p-1 text-center text-2xl font-normal md:px-3 md:py-2"
                    :class="
                      'Input' === router.currentRoute.value.name ||
                      'Button' === router.currentRoute.value.name
                        ? 'cursor-not-allowed text-Gray'
                        : 'text-black'
                    "
                  >
                    <span class="text-inherit block">
                      {{ item.name }}
                    </span>
                  </p>
                </PopoverButton>
                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="translate-y-5 opacity-0"
                  enter-to-class="opacity-100 translate-y-0 translate-x-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0 translate-x-0"
                  leave-to-class="translate-y-5 opacity-0"
                >
                  <PopoverPanel
                    v-if="opendropdown"
                    class="absolute z-10 mt-7 -ml-8 md:mt-10"
                    :class="opendropdown"
                    static
                  >
                    <DropDown
                      class=""
                      :dataNav="item.dataNav"
                      @action="opendropdown = false"
                    ></DropDown>
                  </PopoverPanel>
                </transition>
              </Popover>
            </div>
          </PopoverGroup>
          <!-- Mobile menu button -->
        </div>
      </div>
      <!-- Mobile menu -->
    </Disclosure>
  </div>
</template>

<script setup>
import router from "@router";
import { ref } from "vue";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
} from "@headlessui/vue";
import Instagram from "./../assets/Instagram.vue";
import Youtube from "./../assets/Youtube.vue";
import DropDown from "./navbarComponents/DropDown.vue";
const social = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/lady_acadia/",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@ladyacadia1611",
  },
];

const navigation = ref([
  { name: "Accueil", goto: "/home", logo: "" },
  {
    name: "Galerie",
    logo: "",
    dataNav: [
      { name: "Illustrations", goto: "/illustrations" },
      { name: "Tarot", goto: "/tarot" },
      { name: "Challenges", goto: "/challenges" },
    ],
  },
  { name: "Produit", goto: "/produit", logo: "" },
  { name: "Blog", goto: "/blog", logo: "" },
]);
const opendropdown = ref(false);
</script>
<style></style>
