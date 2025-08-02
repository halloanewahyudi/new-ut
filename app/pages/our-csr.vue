<template>
  <section class="pt-16 pb-20"> 
  <div class="contaner">
   <div class="flex flex-wrap justify-center items-center gap-6">
   <div v-for="image in brandImages">
    <nuxt-link 
      to="/#">
      <img :src="image" alt="Brand Logo" class="w-[150px] h-[70px] object-contain cursor-pointer" />
      </nuxt-link>
   </div>
   
   </div>
  </div>
  </section>
  <section class="py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ui-counter
          v-for="(item, index) in stats"
          :key="index"
          :target="item.value"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


definePageMeta({
  layout: "layout-page",
  name: "About Our CSR",
  hero: {
    image: "/img/sustainability-hero.jpg",
    title: "Bagaimana Keberlanjutan Kami Membuat Perbedaan",
    subtitle:
      "Kami berkomitmen untuk memberikan dampak positif bagi lingkungan sekitar, dan bisnis kami berperan penting dalam menciptakan masa depan yang berkelanjutan.",
  },
});


const stats = [
  {
    value: '13.7',
    unit: '',
    description: 'Energy consumption (in million gigajoule)',
    subtext: '34.02% renewable energy share in the energy consumption mix'
  },
  {
    value: '250',
    unit: 'MW',
    description: 'Installed Solar Capacity',
    subtext: 'Increased by 20% year-on-year'
  },
  {
    value: '78.5',
    unit: '%',
    description: 'Energy Efficiency',
    subtext: 'Target achieved for 2024'
  },
  {
    value: '100',
    unit: '',
    description: 'EV Charging Stations',
    subtext: 'Operational across the country'
  },
  {
    value: '45',
    unit: '',
    description: 'Green Projects Initiated',
    subtext: 'Aligned with sustainability goals'
  },
  {
    value: 5.2,
    unit: 'TWh',
    description: 'Annual Renewable Generation',
    subtext: 'Covers 12% of total consumption'
  }
]

const brandImages = [
  "https://www.unitedtractors.com/wp-content/uploads/2019/08/logo-utrees-323px-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utfuture-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utcare-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utaction-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utgrowth-300x141.png",
];
</script>

<style></style>
