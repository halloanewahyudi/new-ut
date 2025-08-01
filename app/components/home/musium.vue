<template>
  <div>
    <section class="musium relative z-20 bg-gradient-to-b from-blue-100 to-blue-700 h-screen overflow-hidden">
   
      <!-- Gambar floating island -->
      <img 
        src="https://museumvirtual.unitedtractors.com/assets/images/floating_island.png"
        alt=""
        class="land absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-5xl object-contain inset-0"
      />

      <!-- Konten teks -->
      <div class="text-content max-w-3xl mx-auto flex flex-col items-center absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <div class="backdrop-blur-lg bg-black/60 p-6 rounded-lg"> 
       <h2 class="text-4xl font-bold mb-6">Tentang Museum Virtual UT</h2>
        <p class="text-lg mb-10 ">
          50 tahun sudah United Tractors berkiprah di Indonesia, ada banyak kisah dan tokoh yang lahir menjadi bagian penting dari United Tractors. Memperingati usia emas, United Tractors menyajikan Museum Virtual UT yang mengabadikan memori tentang pengalaman dan perjuangan para founding fathers serta semua pihak yang telah berkontribusi dari awal berdirinya United Tractors hingga saat ini.
        </p>
        <button class="group flex items-center mx-auto  gap-2 py-2 px-4 rounded-full bg-primary text-black  hover:bg-secondary hover:text-white duration-300 cursor-pointer z-20">
          Visit Museum 
         <icon name="fluent:arrow-circle-right-12-filled" class="group-hover:translate-x-2 duration-300" />
        </button>
      </div>
       
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: ".musium",
      start: "top top",
      end: "+=230%", // durasi scroll
      scrub: true,
      pin: true,
      // markers: true,
    },
  })

  // Step 1: zoom-in gambar
  tl.fromTo(
    ".land",
    { scale: 1, opacity: 1 },
    { scale: 1.5, opacity: 1, ease: "power2.out", duration: 1 }
  )

  // Step 2: text muncul stagger
  tl.from(
    ".text-content > *",
    {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: "power2.out",
      duration: 1,
    },
    "-=0.5" // mulai sedikit sebelum zoom selesai
  )
})
</script>
