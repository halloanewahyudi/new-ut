<template>
  <div>
    <div class="p-4 rounded-xl flex flex-col group">
      <img
        :src="props.image"
        alt=""
        class="w-full h-full object-cover absolute top-0 left-0 group-hover:scale-105 duration-300"
      />
      <div class="relative z-10 flex flex-col gap-4">
        <h2 class="text-3xl lg:text-6xl">{{ props.title }}</h2>
        <div v-html="props.description"></div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: String,
  title: String,
  description: String,
});
</script>

<style></style>
