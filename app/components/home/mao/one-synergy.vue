<template>
  <div>
      <div class="container">
        <div class="max-w-screen-md mx-auto px-6 text-center">
          <button
            class="py-3 px-6 rounded-full bg-primary text-xl font-bold mb-5 hover:bg-black hover:text-white duration-300 cursor-pointer"
          >
            One Sinergy
          </button>

          <p class="text-center mb-6 leading-relaxed">
           United Tractors bersinergi dengan pelanggan untuk membangun hubungan mutualisme dan keberhasilan bersama. Dalam setiap kontribusi yang diberikan, United Tractors mendukung pertumbuhan keberlanjutan Indonesia melalui tata kelola perusahaan yang baik dan praktik bisnis yang berkelanjutan & bertanggung jawab.
          </p>     

        </div>


      </div>
          <div class="">

         <Splide :options="{ 
          type: 'loop',
          perPage: 5,
        
          perMove: 1,
          gap: '1rem',
          autoplay: true,
          pauseOnHover: true,
          speed: 25000,
          rewind: true,
          focus: 'center',
          pagination: false, 
          arrows: false,
          breakpoints: {
            640: {
              perPage: 2,
            },
            768: {
              perPage: 3,
            },
            1024: {
              perPage: 4,
            },
          },
          }">
            <SplideSlide
              v-for="(item, index) in oneSynergyItems"
              :key="index"
              class="flex flex-col items-center text-center relative overflow-hidden rounded-xl w-[150px] h-[150px]  group cursor-pointer"
            >
              <img
                :src="item.image"
                alt="One Synergy Image"
                class="w-150 h-[150px] object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <h3 class="text-sm absolute text-white bottom-6 z-10">{{ item.title }}</h3>
              <div class="absolute bottom-0 left-0 right-0 w-150 h-150 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-25 duration-300"> </div>
            </SplideSlide>
          </Splide>
        </div>
  </div>
</template>

<script lang="ts" setup>

const oneSynergyItems = [
  {
    title: "img 1",
    image: "https://www.unitedtractors.com/wp-content/uploads/2023/07/1.1.2-One-Synergy-3-300x200.jpg",
  },
  {
    title: "img 2",
    image: "https://www.unitedtractors.com/wp-content/uploads/2023/07/1.1.2-One-Synergy-5-scaled-e1689820394613-300x200.jpg",
  },
  {
    title: "img 3",
    image: "https://www.unitedtractors.com/wp-content/uploads/2023/07/1.1.2-One-Synergy-2-e1689820365570-300x225.jpeg",
  },
  {
    title: "img 4",
    image: "https://www.unitedtractors.com/wp-content/uploads/2023/07/1.1.2-One-Synergy-1-scaled-e1689820420996-300x168.jpg",
  },
  {
    title: "img 5",
    image: "https://www.unitedtractors.com/wp-content/uploads/2023/07/1.1.2-One-Synergy-1-300x225.jpeg",
  },
  {
    title: "img 6",
    image: "https://www.unitedtractors.com/wp-content/uploads/2023/07/1.1.2-One-Synergy-4-scaled-e1689820383405-300x200.jpg",
  },

];
</script>

<style>

</style>