<template>
  <div>
     <div class="container">
        <div class="max-w-screen-md mx-auto px-6 text-center">
          <h4 class="text-3xl font-bold mb-2">Lini Bisnis</h4>

          <p class="text-center  mb-6 leading-relaxed mb-">
            United Tractors berdedikasi melayani pelanggan dengan sepenuh hati dan
            mengutamakan kerja sama. Mengedepankan kolaborasi dengan semua
            pemangku kepentingan dan menciptakan praktik berkelanjutan jangka panjang
            melalui produk, layanan, dan semua lini bisnis kami.
          </p>     

        </div>

        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 juztify-center items-center">
            <div
              v-for="(item, index) in oneSpiritItems"
              :key="index"
              class="flex flex-col items-center text-center relative overflow-hidden rounded-xl  lg:w-[150px] h-[150px] mx-auto group cursor-pointer"
            >
              <img
                :src="item.image"
                alt="One Spirit Image"
                class="w-full h-[150px] object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <h3 class="text-sm absolute text-white bottom-6 z-10">{{ item.title }}</h3>
              <div class="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent"> </div>
            </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

const oneSpiritItems = [
  {
    title: "Mesin Konstruksi",
    image: "/img/mesin-konstruksi.jpg",
  },
  {
    title: "Kontraktor Penambangan",
    image: "/img/kontraktor-pertambangan-1.jpg",
  },
  {
    title: "Pertambangan",
    image: "/img/kontraktor-pertambangan.jpg",
  },
  {
    title: "Industri Konstruksi",
    image: "/img/industri-konstruksi.jpg",
  },
  {
    title: "Energi",
    image: "/img/energi-1.jpg",
  },
];
</script>

<style>

</style>