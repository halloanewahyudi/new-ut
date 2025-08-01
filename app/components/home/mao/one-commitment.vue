<template>
  <div>
     <div class="max-w-screen-md mx-auto px-6 text-center">
        <h4 class="text-3xl font-bold mb-2">Implementasi ESG</h4>

        <p class="text-center  mb-6 leading-relaxed">
          United Tractors berkomitmen untuk menjadi mitra terpercaya bagi pelanggan dengan
          memberikan solusi dan nilai tambah. Kami selalu berfokus pada keberlanjutan
          jangka panjang dalam implementasi ESG untuk membangun masa depan yang lebih
          baik. United Tractors berkomitmen menjadi mitra terpercaya bagi pelanggan dengan
          memberikan solusi dan nilai tambah. United Tractors selalu berfokus pada
          keberlanjutan jangka panjang dalam implementasi ESG untuk membangun masa depan
          yang lebih baik.
        </p>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-4">
        <img
          v-for="(image, index) in brandImages"
          :key="index"
          :src="image"
          alt="Brand Logo"
          class="w-[150px] h-[70px] object-contain cursor-pointer"
        />
      </div>
  </div>
</template>

<script lang="ts" setup>
const brandImages = [
  "https://www.unitedtractors.com/wp-content/uploads/2019/08/logo-utrees-323px-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utfuture-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utcare-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utaction-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utgrowth-300x141.png",
];
</script>

<style>

</style>