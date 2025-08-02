<template>
  <div class="bg-gradient-to-bl from-black  to-gray-950 pt-10 text-gray-400 text-sm relative z-50">
    <div class="container">
      <div class="flex justify-between items-center flex-wrap gap-6 lg:gap-10">

        <div class="flex flex-col gap-4"> <!-- coloumn one -->
          <img src="/logo-white.png" alt="" class="w-[230px] h-auto object-contain" />
          <h4 class="text-xl font-bold">PT United Tractors Tbk</h4>
          <address class="not-italic">
            Jl. Raya Bekasi Km 22, <br />
            Cakung, Jakarta Timur <br />
            Indonesia, 13910 <br />
            Phone +62 21 2457 9999
          </address>
        
          <ul>
           <li><nuxt-link to="/privacy-policy" class="hover:text-primary duration-300">Privacy Policy</nuxt-link></li>
            <li><nuxt-link to="/privacy-policy" class="hover:text-primary duration-300">Kontak</nuxt-link></li>
           </ul>
        </div>

        <div class="flex gap-3 items-center">
          <div v-for="(i, index) in socmed" :key="index">
          <a :href="i.link" target="_blank" class="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 text-primary hover:text-black hover:bg-primary  duration-300">
            <icon :name="i.icon" class=" text-lg " />
          </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-2 mt-10 bg-gray-950 text-center text-sm border-t border-gray-800">
      <div class="container">
        <p>© 2025 United Tractors all right reserved.</p>
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

<style></style>
