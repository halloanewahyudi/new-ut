<template>
  <div >

      <NuxtLayout>
        <VueLenis root :options="lenisOptions" />
        <transition name="fade" mode="out-in">
        <NuxtPage />
        </transition>
      </NuxtLayout>

  </div>  
</template>
<script setup lang="ts">
import { VueLenis, useLenis } from 'lenis/vue';

const lenisOptions = {
  // lenis options (optional)
}

const lenis = useLenis((lenis) => {
  // called every scroll
  // console.log(lenis)
})

watch(
  lenis,
  (lenis) => {
    // lenis instance
  //   console.log(lenis)
  },
  { immediate: true }
)
</script>
<style>
 /* Enter and leave animations can use different */
 .fade-enter-active, .fade-leave-active {
   transition: opacity .5s ease;
   opacity: 1;
 }

 .fade-enter-from, .fade-leave-to {
   opacity: 0; 
 }
</style>