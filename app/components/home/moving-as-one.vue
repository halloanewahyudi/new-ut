<template>
  <div class="relative">
    <section
      class="moving-as-one flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
    >
   

      <div class="relative flex items-center max-w-max pr-[5px]">
        <h2 class="text-3xl font-bold italic relative z-10">Moving as one</h2>
        <div
          id="dot-moving"
          class="w-[70px] h-[70px] rounded-full bg-primary absolute right-0"
        ></div>
      </div>
    </section>

    <!-- Next section ditempatkan fixed agar muncul di tengah -->
    <section
      class="next-section bg-primary fixed inset-0 flex items-center justify-center opacity-0 pointer-events-none z-20"
    >
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-3xl">
          Perjalanan Moving as One kami berpedoman pada 10 Aspirasi Berkelanjutan United
          Tractors Group Menuju 2030, sebuah langkah kami untuk memimpin dengan solusi
          inovatif yang menggabungkan One Commitment, One Spirit, dan One Synergy.
        </p>
      </div>
    </section>

    <!-- Tambahan spacer supaya ada konten setelahnya -->
    <div class="section-3 w-full bg-white z-50 py-20">
    <div class="max-w-screen-md mx-auto px-6">

     <p class="text-center text-xl mb-6 leading-relaxed">
       United Tractors berkomitmen untuk menjadi mitra terpercaya bagi pelanggan dengan memberikan solusi dan nilai tambah. Kami selalu berfokus pada keberlanjutan jangka panjang dalam implementasi ESG untuk membangun masa depan yang lebih baik.
     United Tractors berkomitmen menjadi mitra terpercaya bagi pelanggan dengan memberikan solusi dan nilai tambah. United Tractors selalu berfokus pada keberlanjutan jangka panjang dalam implementasi ESG untuk membangun masa depan yang lebih baik.
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

const { $gsap } = useNuxtApp();

onMounted(() => {
  const gsap = $gsap;

  // Timeline 1: animasi moving-as-one
  const tl1 = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    scrollTrigger: {
      trigger: ".moving-as-one",
      start: "top top",
      end: "+=1500",
      scrub: 1,
      pin: true,
     //  markers: true,
    },
  });

  tl1
    .from(".moving-as-one h2", { x: -300, opacity: 0, duration: 2 })
    .from("#dot-moving", { x: -300, scale: 0.5, duration: 2 }, "<")
    .to({}, { duration: 0.5 })
    .to("#dot-moving", {
      scale: 25,
      x: 0,
      y: 0,
      duration: 3,
      ease: "power1.inOut",
    })
    .to(".moving-as-one", { backgroundColor: "bg-primary" }, "<")
    // next-section fade-in setelah lingkaran penuh
    .to(".next-section", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1.5,
      ease: "power2.out",
    })
    .to(".moving-as-one", { opacity: 0, duration: .5 });

  // Timeline 2: next-section fade-out setelah user scroll lebih jauh
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-3",
      start: "top 80%",
      end: "top 30%",
      scrub: true,
     // markers: true,
    },
  }).to(".next-section", { opacity: 0, duration: 1 });

  // Timeline 3: animasi munculnya section-3 (images)
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-3",
      start: "top 80%",
      end: "top 50%",
      scrub: true,
     // markers: true,
    },
  })
    .from(".section-3", { opacity: 0, y: 100, duration: 1 })
    .from(
      ".section-3 img",
      {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );
});


</script>
