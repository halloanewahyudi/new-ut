<template>
  <div>
     <div v-for="i in 5" :key="i" class="flex gap-2 items-center mb-2 opacity-80 ">
      <div v-for="j in 15" :key="j" class="dot w-2 h-2 bg-primary rounded-full"> 
      </div>
     </div>
  </div>
</template>

<script lang="ts" setup> 


</script>

<style scoped>

</style>