<template>
  <div class="mx-auto mt-20 flex w-[90%] flex-col gap-4 md:flex-row">
    <div name="gauche" class="space-y-1 md:w-1/3">
      <div v-for="(image, index) in galerie" class="flex">
        <div v-if="index % 3 === 0" class="relative my-auto" @click="(open = true), (imageTarget = image)">
          <div class="image-container">
            <h1
              class="overlay  z-10 text-center text-4xl font-semibold text-Green bg-white rounded-full px-4 py-2 bg-opacity-90">
              &gt; {{ image.title }} &lt;
            </h1>
            <img class="image" :src="image.src" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div name="centre" class="-mt-1 space-y-1 md:w-1/3">
      <div v-for="(image, index) in galerie" class="flex">
        <div v-if="index % 3 === 1" class="relative my-auto" @click="(open = true), (imageTarget = image)">
          <div class="image-container">
            <h1
              class="overlay  z-10 text-center text-4xl font-semibold text-Green bg-white rounded-full px-4 py-2 bg-opacity-90">
              &gt; {{ image.title }} &lt;
            </h1>
            <img class="image" :src="image.src" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div name="droite" class="-mt-2 space-y-1 md:w-1/3">
      <div v-for="(image, index) in galerie" class="flex">
        <div v-if="index % 3 === 2" class="relative my-auto" @click="(open = true), (imageTarget = image)">
          <div class="image-container">
            <h1
              class="overlay  z-10 text-center text-4xl font-semibold text-Green bg-white rounded-full px-4 py-2 bg-opacity-90">
              &gt; {{ image.title }} &lt;
            </h1>
            <img class="image" :src="image.src" alt="" />
          </div>
        </div>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
      <TransitionChild as="template" enter="ease-out duration-500"
        enter-from="opacity-0 translate-y-8 sm:translate-y-0 " enter-to="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-500" leave-from="opacity-100 translate-y-0 sm:scale-100"
        leave-to="opacity-0 translate-y-8 sm:translate-y-0">
        <div class="fixed top-0 left-0 right-0 bottom-0 z-20 flex overflow-hidden bg-white">
          <div class="relative flex h-full w-full flex-col items-center lg:flex-row justify-evenly">
            <XMarkIcon
              class="absolute top-4 right-4 m-1 h-10 w-10 rounded-full p-1 text-gray-600 hover:border-2 hover:border-Anthracite hover:text-Anthracite"
              aria-hidden="true" @click="open = false, imageTarget = ''" />
            <img :src="imageTarget.src" alt="" class="mx-auto lg:mx-0 max-h-[80%] max-w-[90%]" />
            <div class="flex flex-col justify-center text-center w-[90%] md:max-w-[25%] min-h-[20%]">
              <h1 class="">&gt; {{ imageTarget?.title }} &lt;</h1>
              <p class="">{{ imageTarget?.txt }}</p>
            </div>
          </div>
        </div>
      </TransitionChild>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from "vue";

import {
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { XMarkIcon } from "@heroicons/vue/24/outline";

const open = ref(false);
const imageTarget = ref("");

const galerie = ref([
  {
    src: "/HuTao.PNG",
    title: "Hu Tao",
    txt: "L'amour vous à t-il déjà donné des ailes? La rose et son symbole 'amour... Transpercée par la flèche de Cupidon le coeur ne sait résister mais le sentiment en vaut la chandelle.",
  },
  {
    src: "/IMG_2351.PNG",
    title: "Astromancienne",
    txt: "",
  },
  {
    src: "/Holdingthemoon.PNG",
    title: "Holding the moon",
    txt: "",
  },
  {
    src: "/Meditation.PNG",
    title: "Meditation",
    txt: "",
  },
  {
    src: "/Themusicnymph.PNG",
    title: "The music nymph",
    txt: "",
  },
  {
    src: "/Theforestdancers.PNG",
    title: "The forest dancers",
    txt: "",
  },
]);
</script>

<style>
.image-container {
  position: relative;
  display: inline-block;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  opacity: 1;
  transition: filter 0.5s ease;
  transition: opacity 0.5s ease;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translate(0, -50%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-container:hover .image {
  filter: grayscale(100%);
  opacity: 0.7;
}

.image-container:hover .overlay {
  opacity: 1;
}
</style>
