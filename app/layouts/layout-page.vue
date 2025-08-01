<template>
  <div>
    <ui-navbar />

    <!-- Hero Section -->
    <div
      v-if="hero"
      class="relative min-h-screen   text-white"
    >
      <img
        v-if="hero.image"
        :src="hero.image"
        alt=""
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-secondary/70 via-primary/10 to-transparent"></div>
      
      <div class="relative z-10  container min-h-screen flex flex-col  justify-end pb-32">
      <div class="max-w-2xl">
      <h1 class="text-3xl lg:text-6xl font-bold mb-3 line-clamp-4">{{ hero.title }}</h1>
        <p class="text-lg">{{ hero.subtitle }}</p>
      </div>
        
      </div>
    </div>

    <!-- Content -->
    <div class="min-h-screen">
     
        <slot />
 
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const hero = computed(() => {
  return route.meta.hero as {
    image?: string
    title?: string
    subtitle?: string
  }
})
</script>
