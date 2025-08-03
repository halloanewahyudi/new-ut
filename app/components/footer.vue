<template>
  <div class="footer bg-gradient-to-tr from-yellow-500 to-primary pt-10 text-gray-800 text-sm relative z-50">
    <div class="container relative z-40">
      <div class="flex justify-between flex-wrap gap-6 lg:gap-20">

        <div class="flex flex-col gap-4"> <!-- coloumn one -->
        
          <h4 class="text-xl font-bold">PT United Tractors Tbk</h4>
          <address class="not-italic">
            Jl. Raya Bekasi Km 22, <br />
            Cakung, Jakarta Timur <br />
            Indonesia, 13910 <br />
            Phone +62 21 2457 9999
          </address>

          
        <div class="flex gap-3 items-center">
          <div v-for="(i, index) in socmed" :key="index">
          <a :href="i.link" target="_blank" class="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-black text-primary hover:text-black hover:bg-primary  duration-300">
            <icon :name="i.icon" class=" text-lg " />
          </a>
          </div>
        </div>
        
        </div>
        <div>
         <img src="/logo.png" alt="" class="w-[230px] h-auto object-contain" />

          <img src="/img/satu-indonesia.png" alt="" class="w-[130px] h-auto object-contain">
        </div>

         <div class="flex max-w-[500px] ">
          <img src="/img/yellow-map.png" alt="">
         </div>

      </div>
    </div>
    <div class="py-2 mt-10 bg-gradient-to-tr from-gray-900 via-black to-gray-950 text-gray-500 text-center text-sm border-t border-gray-600">
      <div class="container text-xs flex flex-col gap-2 items-end">
        <p>© 2025 United Tractors all right reserved.</p>
              <ul class="flex items-center justify-center gap-4">
           <li><nuxt-link to="/privacy-policy" class="hover:text-primary duration-300 underline">Privacy Policy</nuxt-link></li>
            <li><nuxt-link to="/privacy-policy" class="hover:text-primary duration-300 underline">Kontak</nuxt-link></li>
           </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const socmed = [
  {
    name: "Facebook",
    icon: "bi:facebook",
    link: "https://www.facebook.com/UnitedTractors/"
  },
  {
    name: "Instagram",
    icon: "bi:instagram",
    link: "https://www.instagram.com/unitedtractors/"
  },
  {
    name: "Linkedin",
    icon: "bi:linkedin",
    link: "https://www.linkedin.com/company/united-tractors/"
  },
  {
    name: "Youtube",
    icon: "bi:youtube",
    link: "https://www.youtube.com/@unitedtractors"
  }
]

</script>

<style scoped>
/* .footer{
  position: relative;
  background: url('/img/bg-2.jpg') repeat-x center center / cover ;
} */
/* .footer::after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  max-height: 260px;
  height: 100%;
  background: url('/img/yellow-map.png') no-repeat center right / contain;
  z-index: 0;
  
} */
</style>
