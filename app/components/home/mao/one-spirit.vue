<template>
  <div>
     <div class="container">
        <div class="max-w-screen-md mx-auto px-6 text-center">
          <button
            class="py-3 px-6 rounded-full bg-primary text-xl font-bold mb-5 hover:bg-black hover:text-white duration-300 cursor-pointer"
          >
            One Spirit
          </button>

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
              <div class="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent"> </div>
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
    image: "https://www.unitedtractors.com/wp-content/uploads/2020/07/Slide-96-1-768x432.png",
  },
  {
    title: "Kontraktor Penambangan",
    image: "https://www.unitedtractors.com/wp-content/uploads/2019/08/mesin-konstruksi-united-tractor-header-1-768x214.jpg",
  },
  {
    title: "Pertambangan",
    image: "https://www.unitedtractors.com/wp-content/uploads/2020/09/DSC_5606-768x512.jpg",
  },
  {
    title: "Industri Konstruksi",
    image: "https://www.unitedtractors.com/wp-content/uploads/2020/09/Amman-K-025-2-e1719367115568-768x215.jpeg",
  },
  {
    title: "Energi",
    image: "https://www.unitedtractors.com/wp-content/uploads/2020/09/Slide-214-768x511.jpg",
  },
];
</script>

<style>

</style>