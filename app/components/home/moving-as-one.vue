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

    <!-- One COmmitment -->
    <section class="section-3 w-full z-50 py-20 relative">
      <div class="max-w-screen-md mx-auto px-6 text-center">
        <button
          class="py-3 px-6 rounded-full bg-primary text-xl font-bold mb-5 hover:bg-black hover:text-white duration-300 cursor-pointer"
        >
          One Commitment
        </button>

        <p class="text-center text-xl mb-6 leading-relaxed">
          United Tractors berkomitmen untuk menjadi mitra terpercaya bagi pelanggan dengan
          memberikan solusi dan nilai tambah. Kami selalu berfokus pada keberlanjutan
          jangka panjang dalam implementasi ESG untuk membangun masa depan yang lebih
          baik. United Tractors berkomitmen menjadi mitra terpercaya bagi pelanggan dengan
          memberikan solusi dan nilai tambah. United Tractors selalu berfokus pada
          keberlanjutan jangka panjang dalam implementasi ESG untuk membangun masa depan
          yang lebih baik.
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
    </section>

    <!--   One Spirit -->
    <section class="one-spirit py-20 relative z-10">
      <div class="container">
        <div class="max-w-screen-md mx-auto px-6 text-center">
          <button
            class="py-3 px-6 rounded-full bg-primary text-xl font-bold mb-5 hover:bg-black hover:text-white duration-300 cursor-pointer"
          >
            One Spirit
          </button>

          <p class="text-center text-xl mb-6 leading-relaxed mb-">
            United Tractors berdedikasi melayani pelanggan dengan sepenuh hati dan
            mengutamakan kerja sama. Mengedepankan kolaborasi dengan semua
            pemangku kepentingan dan menciptakan praktik berkelanjutan jangka panjang
            melalui produk, layanan, dan semua lini bisnis kami.
          </p>     

        </div>

        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div
              v-for="(item, index) in oneSpiritItems"
              :key="index"
              class="flex flex-col items-center text-center relative overflow-hidden rounded-xl h-[260px] group cursor-pointer"
            >
              <img
                :src="item.image"
                alt="One Spirit Image"
                class="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <h3 class="text-sm absolute text-white bottom-6 z-10">{{ item.title }}</h3>
              <div class="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent"> </div>
            </div>
        </div>
        </div>
      </div>
    </section>  <!--  end one spirit -->


     <!--   One Sinergy -->
    <section class="one-spirit py-20 relative z-20">
      <div class="container">
        <div class="max-w-screen-md mx-auto px-6 text-center">
          <button
            class="py-3 px-6 rounded-full bg-primary text-xl font-bold mb-5 hover:bg-black hover:text-white duration-300 cursor-pointer"
          >
            One Sinergy
          </button>

          <p class="text-center text-xl mb-6 leading-relaxed">
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
              class="flex flex-col items-center text-center relative overflow-hidden rounded-xl h-[260px] group cursor-pointer"
            >
              <img
                :src="item.image"
                alt="One Synergy Image"
                class="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <h3 class="text-sm absolute text-white bottom-6 z-10">{{ item.title }}</h3>
              <div class="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent"> </div>
            </SplideSlide>
          </Splide>
        </div>
    </section>  <!--  end one spirit -->

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
    .to(".moving-as-one", { opacity: 0, duration: 0.5 });

  // Timeline 2: next-section fade-out setelah user scroll lebih jauh
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-3",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        // markers: true,
      },
    })
    .to(".next-section", { opacity: 0, duration: 1 });

  // Timeline 3: animasi munculnya section-3 (images)
  gsap
    .timeline({
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
