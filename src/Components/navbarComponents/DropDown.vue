<template>
  <div
    class="overflow-hidden rounded-lg border border-Orange ring-1 ring-Orange"
  >
    <div class="mx-auto flex w-56 flex-col bg-white bg-opacity-80">
      <div>
        <div class="grid gap-2 py-2">
          <button
            v-for="item in dataNav"
            :key="item.name"
            class="my-auto block w-full rounded-md px-3 py-2 text-2xl font-normal"
            :class="
              item.name === router.currentRoute.value.name
                ? 'cursor-not-allowed text-Gray'
                : 'text-black'
            "
            @click="goTo(item)"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@router";

const props = defineProps(["dataNav"]);
const emit = defineEmits(["action"]);

function goTo(value) {
  emit("action");
  if (value.param) {
    router.push({
      name: value.goto,
      params: { view: value.param },
    });
  } else {
    router.push({
      path: value.goto,
    });
  }
}
</script>

<style lang="scss" scoped></style>
