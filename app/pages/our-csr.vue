<template>
  <section class="pt-16 pb-20">
    <div class="contaner">
      <div class="flex flex-wrap justify-center items-center gap-6">
        <div v-for="image in brandImages">
          <nuxt-link to="/#">
            <img
              :src="image"
              alt="Brand Logo"
              class="w-[150px] h-[70px] object-contain cursor-pointer"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container text-center">
       <p class="leading-snug text-4xl mb-5 font-bold text-secondary">
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
          </p>

           <p class="leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry’s standard dummy text.
          </p>
    </div>

  </section>
  <section class="py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        <div
          class="rounded-2xl overflow-hidden p-6 min-h-[360px]  flex flex-col justify-between gap-6 relative"
          v-for="(item, index) in stats"
          :key="index"
          :class="item.bg"
        >

          <icon :name="`${item.icon}`" class="text-5xl lg:text-7xl opacity-65" />
          <div>
           <div class="flex items-end text-4xl  mt-2">
            <ui-counter
              :target="item.value"
              :decimals="item.decimal"
              :duration="item.duration"
              class="text-6xl font-bold"
            />
            <span> {{ item.unit }} </span>
          </div>
            <p class="text-xl lg:text-3xl mt-2 font-bold">{{ item.description }}</p>
            <p class="text-sm mt-2">{{ item.subtext }}</p>
          </div>
        </div>
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
    value: "11.15",
    decimal: 2,
    unit: "%",
    duration: 1500,
    description: "Penurunan Emisi Gas Rumah Kaca",
    subtext: "Reduction of greenhouse gas emissions",
    bg: "bg-blue-200",
    icon: "material-symbols:cloud-sync-outline",
  },
  {
    value: "31.93",
    unit: "%",
    decimal: 2,
    description: "Bauran Energi Terbarukan",
    subtext: "Renewable Energy Mix",
    bg: "bg-purple-200",
    icon: "material-symbols:sunny-rounded",
  },
   {
    value: "40.76",
    unit: "%",
    description: "Penurunan Itensitas Pengambilan Air",
    subtext: "Reduction in Water Intake Intensity",
    bg: "bg-blue-200",
    icon: "material-symbols:water-drop",
  },
  {
    value: "68.43",
    unit: "%",
    decimal: 2,
    description: "LImbah Padat Terolah",
    subtext: "Processed Solid Waste",
     bg: "bg-lime-200",
    icon: "mdi:delete-variant",
  },
  {
    value: "0.12",
    unit: "%",
    description: "Tingkat Frekuensi Cedera ",
    subtext: "Lost Time Injury Frequency Rate",
    bg: "bg-red-200",
    icon: "ic:outline-personal-injury",
  },
  {
    value: "630.023",
    unit: "",
    decimal:3,
    description: "Jumlah Penerima Manfaat Pengembangan Masyarakat",
    subtext: "Number of Community Development Beneficiaries",
    bg: "bg-lime-200",
    icon: "material-symbols:location-home-outline-rounded",
  },
];

const brandImages = [
  "https://www.unitedtractors.com/wp-content/uploads/2019/08/logo-utrees-323px-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utfuture-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utcare-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utaction-300x141.png",
  "https://www.unitedtractors.com/wp-content/uploads/2019/07/logo-utgrowth-300x141.png",
];
</script>

<style></style>
