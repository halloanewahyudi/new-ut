<template>
  <div class="">
     <section class="ruang-media bg-gray-100 py-30 relative z-20 ">
     <div class="content container flex flex-col items-center">
        <h2 class="text-3xl font-bold mb-10 text-center">Ruang Media</h2>
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(newsItem, index) in news"
            :key="index"
            class="flex flex-col items-center text-center rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 ease-in-out group"
          >
            <img
              :src="newsItem.image"
              alt="News Image"
              class="w-full h-[200px] object-cover  group-hover:scale-105 transition-transform duration-300"
            />
            <h3 class="text-sm p-4">{{ newsItem.title }}</h3>
          </div>
       </div>

        <button
            class="py-3 px-6 rounded-full bg-primary text-xl font-bold mb-5 hover:bg-black hover:text-white duration-300 cursor-pointer mx-auto mt-10 "
          >
            Lihat Semua Berita
          </button>

     </div>
     </section>
  </div>
</template>

<script lang="ts" setup>
 const news = ref([
  {
    title: "Mekanik United Tractors Harumkan Nama Indonesia pada Ajang Advanced Technique Contest 2025 di Thailand",
    image: "https://www.unitedtractors.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-10-at-10.52.02-980x616.jpeg",
  },
  {
    title: "Wujudkan Keberlanjutan Sosial dan Lingkungan, Grup Turangga Resources Raih Empat Penghargaan ISRA 2025",
    image: "https://www.unitedtractors.com/wp-content/uploads/2025/07/Grup-Turangga-Resources-Raih-Empat-Penghargaan-ISRA-2025-SMM-1-768x512.jpeg",
  },
  {
    title: "Aksi Keberlanjutan yang Berdampak, KPP Mining Raih Dua Penghargaan Internasional di AREA 2025",
    image: "https://www.unitedtractors.com/wp-content/uploads/2025/07/KPP-Mining-Raih-Dua-Penghargaan-Internasional-di-AREA-2025-1-1080x675.jpeg",
  },
  {
    title: "Torehkan Prestasi di Swedia, Atlet SOIna Binaan United Tractors Raih Juara 3 di Gothia Cup 2025",
    image: "https://www.unitedtractors.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-10.53.17-980x735.jpeg",
  }
 ])


</script>

<style>

</style>