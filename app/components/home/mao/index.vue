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
        <p class="text-3xl leading-snug">
          Perjalanan Moving as One kami berpedoman pada <br> <span class="text-5xl font-bold"> 10 Aspirasi Berkelanjutan </span> <br>  United
          Tractors Group Menuju 2030, sebuah langkah kami untuk memimpin dengan solusi
          inovatif yang menggabungkan <br> 
          <span class="font-bold text-delay"><span> One Commitment, </span>  <span>Spirit, </span> <span>dan One Synergy. </span>  </span> 
        </p>
      </div>
    </section>

    <section class="section-3 min-h-screen relative z-50 py-20 bg-cover bg-center">
      <!-- slide move as one -->

      <div
        class="max-w-screen-lg mx-auto rounded-xl bg-white shadow-2xl border-gray-300 p-6 lg:p-10 relative"
      >
      
        <!-- slide wrap -->
        <div class="lg:flex justify-center items-center mb-10 rounded-full p-2 bg-gray-200 border border-gray-300 max-w-max mx-auto">
          <button
          v-html=" label"
            v-for="(label, index) in tabs"
            :key="index"
            class="text-sm py-2 px-3  inline-block max-w-max rounded-full"
            :class="
              index === activeIndex
                ? '  bg-gradient-to-tr from-yellow-300 to-primary border border-gray-400'
                : ''
            "
            @click="goTo(index)"
          >
            
          </button>
        </div>

        <Splide
          ref="maoSlide"
          class=""
          :options="{
            type: 'loop',
            perPage: 1,
            pagination: false,
            arrows: false,
            start: 1,
          }"
        >
          <SplideSlide>
            <!-- One COmmitment -->
            <OneCommitment />
          </SplideSlide>

          <SplideSlide>
            <!-- One Spirit -->

            <OneSpirit />
          </SplideSlide>

          <SplideSlide>
            <!-- One Synergy -->

            <OneSynergy />
          </SplideSlide>
        </Splide>
      </div>
      <!-- slide wrap end -->
    </section>
  </div>
</template>

<script lang="ts" setup>
import OneCommitment from "./one-commitment.vue";
import OneSpirit from "./one-spirit.vue";
import OneSynergy from "./one-synergy.vue";

const maoSlide = ref(null);
const activeIndex = ref(1);
const selectedIndex = ref<number | null>(null);
const tabs = ["<b>One</b> Commitment", "<b>One</b> Spirit", "<b>One</b> Synergy"];
// Function to handle slide change
const handleSlideChange = (splide: any) => {
  activeIndex.value = splide.index;
  selectedIndex.value = null; // Reset selected index when slide changes
};
// next and previous detail functions
const goTo = (index: number) => {
  if (maoSlide.value) {
    maoSlide.value.go(index);
  }
  activeIndex.value = index;
  selectedIndex.value = null; // Reset selected index when navigating
};

const { $gsap } = useNuxtApp();

onMounted(() => {
  const gsap = $gsap;

   const splide = maoSlide.value?.splide;
  if (splide) {
    splide.on("move", (newIndex: number) => {
      activeIndex.value = newIndex;
    });
  }

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
    .from('.text-delay', { opacity: 0, y: -50, duration: 2, delay: 0.5, ease: "power2.out",stagger: 0.3}, "<")
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
    .from(".section-3", { opacity: 0, y: 100, duration: 1 });
});
</script>
<style scoped>
.section-3 {
  background-image: url('/img/bg.png');
  background-size: cover;
  background-position: center;
 
}
</style>