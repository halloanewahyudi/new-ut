<template>
  <div>
     <div v-for="i in 5" :key="i" class="flex gap-1 items-center mb-2 opacity-80 ">
      <div v-for="j in 15" :key="j" > 
      <div class="dot w-1 h-1 bg-primary rounded-full">
      </div>
      </div>
     </div>
  </div>
</template>

<script lang="ts" setup> 


</script>

<style scoped>
 .dot:hover {
  background-color: #000;
  transition: background-color 0.3s ease-in-out;
  transform: scale(1.2);
 }

</style>