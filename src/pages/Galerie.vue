<template>
  <div class="mt-20 w-[80%] mx-auto flex gap-4">
    <div name="gauche" class="space-y-2">
      <div v-for="(image, index) in galerie" class="flex">
        <div
          v-if="index % 2 === 0"
          class="relative my-auto"
          @click="(open = true), (imageTarget = image)"
        >
          <div class="image-container">
            <h1
              class="overlay text-with-shadow z-10 text-center text-4xl font-semibold text-Green"
            >
              &gt; {{ image.title }} &lt;
            </h1>
            <img class="image" :src="image.src" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div name="droite" class="-mt-2 space-y-2">
      <div v-for="(image, index) in galerie" class="flex">
        <div
          v-if="index % 2 !== 0"
          class="relative my-auto"
          @click="(open = true), (imageTarget = image)"
        >
          <div class="image-container">
            <h1
              class="overlay text-with-shadow z-10 text-center text-4xl font-semibold text-Green"
            >
              &gt; {{ image.title }} &lt;
            </h1>
            <img class="image" :src="image.src" alt="" />
          </div>
        </div>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
      <TransitionChild
        as="template"
        enter="ease-out duration-500"
        enter-from="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-85"
        enter-to="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-500"
        leave-from="opacity-100 translate-y-0 sm:scale-100"
        leave-to="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-85"
      >
        <div
          class="fixed top-0 left-0 right-0 flex transform overflow-clip bg-white"
          style="z-index: 9999; height: 100%; width: 100%"
        >
          <div class="relative flex h-screen w-full justify-evenly px-4">
            <XMarkIcon
              class="absolute top-4 right-4 m-1 h-10 w-10 rounded-full p-1 text-gray-600 hover:border-2 hover:border-Anthracite hover:text-Anthracite"
              aria-hidden="true"
              @click="open = false"
            />
            <div class="max-w-3/4 my-auto">
              <img
                :src="imageTarget.src"
                alt=""
                class="max-h-screen w-[95%]"
              />
            </div>
            <div
              class="basis-1/4 flex flex-col justify-center text-center"
            >
              <div class="flex h-14 justify-end">
              </div>
              <h1 class="">&gt; {{ imageTarget?.title }} &lt;</h1>
              <p class="max-w-1/2">{{ imageTarget?.txt }}</p>
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
  Dialog,
  DialogPanel,
  DialogTitle,
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

.text-with-shadow {
  text-shadow: 2px 2px 2px #000;
}
</style>
