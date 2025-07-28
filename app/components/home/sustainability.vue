<template>
  <div class="py-20 min-h-screen">
    <div class="container flex flex-col gap-6 justify-center items-center mb-10">
      <div class="py-6 text-center">
        <h2 class="ut text-4xl lg:text-8xl font-bold text-gray-300">United Tractors</h2>
        <h2 class="sus text-2xl lg:text-5xl font-bold">Sustainability Initiatives</h2>
      </div>
    </div>

    <!-- Custom pagination dengan judul -->
    <div class="hidden lg:flex justify-center items-center mb-10">
      <button
        v-for="(item, index) in sustainability"
        :key="index"
        class="text-sm pb-2 px-3 border-b  inline-block max-w-max"
        :class="
          index === activeIndex ? 'font-bold text-primary border-b-4 border-primary' : ' '
        "
        @click="goTo(index)"
      >
        {{ item.title }}
      </button>
    </div>

    <Splide
      :id="splideId"
      ref="susSplide"
      :options="susOptions"
      aria-label="My Favorite Images"
    >
      <SplideSlide class="sus-item" v-for="(i, index) in sustainability" :key="index">
        <div
          class="grid h-[240px] grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden bg-white border border-blue-200"
        >
          <img  
            :src="i.image" 
            :alt="i.title"
            class="w-full h-[240px] object-cover object-center rounded-l-xl"
          />
          <div
            class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 flex flex-col justify-between"
          >
            <div>
              <h3 class="text-2xl font-bold mb-3" v-html="i.title"></h3>
              <div
                v-html="truncateText(i.description, 50)"
                class="flex flex-col gap-4"
              ></div>
            </div>

            <button
              @click=" openDetail(index)"
              class="text-wihite flex items-center gap-2  duration-300 cursor-pointer self-end py-1 px-4 rounded-full bg-primary text-black hover:bg-black hover:text-primary"
            >
              Explore <icon name="fluent:arrow-circle-right-12-filled" />
            </button>
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <transition name="fade" mode="out-in">
      <div
        v-if="selectedIndex !== null"
        class="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 h-full min-h-screen">
          <img
            :src="sustainability[selectedIndex]?.image"
            alt=""
            class="detail-image w-full h-full object-cover"
          />
          
          <div
            class="h-full w-full bg-primary flex flex-col  p-6 lg:p-10 relative overflow-y-auto"
          >
            <div class="flex justify-between items-center">
              <div class="text-white z-50 flex items-center gap-4">
                <button @click="prevDetail">Prev</button>
                <span class="text-lg font-bold"
                  >{{ selectedIndex + 1 }} / {{ sustainability.length }}</span
                >
                <button @click="nextDetail">Next</button>
              </div>

              <button class="duration-300 z-50 text-2xl" @click="closeDetail">
                <icon name="line-md:close" />
              </button>
            </div>

            <div class="detail-content mt-6">
              <h2
                class="text-3xl lg:text-5xl font-bold mb-4"
                v-html="sustainability[selectedIndex]?.title"
              ></h2>
              <div
                v-html="sustainability[selectedIndex]?.description"
                class="flex flex-col gap-4"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- end selected index -->
    </transition>
  </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp();
const { sustainability } = useSustainability();

const activeIndex = ref<number>(0);
const selectedIndex = ref<number | null>(null);

function openDetail(i: number) {
  selectedIndex.value = i;
}
function closeDetail() {
  selectedIndex.value = null;
}
function nextDetail() {
  if (selectedIndex.value === null) return;
  
  $gsap.from(".detail-image", {
    y: 100,
    duration:.5,
    ease: "power2.inOut",
    onComplete: () => {
      $gsap.from(".detail-image", {
        y: 0,
        duration:.5,
        ease: "power2.inOut",
      });
    },
  });

   $gsap.from(".detail-content", {
    y: -100,
    duration:.5,
    ease: "power2.inOut",
    onComplete: () => {
      $gsap.from(".detail-content", {
        y: 0,
        duration:.5,
        ease: "power2.inOut",
      });
    },
  });

  const total = sustainability.value.length;
  selectedIndex.value = (selectedIndex.value + 1) % total;
  
}
function prevDetail() {
  if (selectedIndex.value === null) return;

  $gsap.from(".detail-image", {
    y: -100,
    duration:.5,
    ease: "power2.inOut",
    onComplete: () => {
      $gsap.from(".detail-image", {
        y: 0,
        duration:.5,
        ease: "power2.inOut",
      });
    },
  });

   $gsap.from(".detail-content", {
    y: 100,
    duration:.5,
    ease: "power2.inOut",
    onComplete: () => {
      $gsap.from(".detail-content", {
        y: 0,
        duration:.5,
        ease: "power2.inOut",
      });
    },
  });

  const total = sustainability.value.length;
  selectedIndex.value = (selectedIndex.value - 1 + total) % total;
}

function goTo(index: number) {
  susSplide.value?.splide?.go(index);
  activeIndex.value = index;
}

onMounted(() => {
  const splide = susSplide.value?.splide;
  if (!splide) return;

  const onMove = () => {
    activeIndex.value = splide.index;
  };

  splide.on("move", onMove);
  splide.on("mounted", onMove);

  onBeforeUnmount(() => {
    splide.off("move", onMove);
  });
});

// section title animation
onMounted(() => {
  $gsap.from(".ut", {
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: ".ut",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    duration: 1,
  });

  $gsap.from(".sus", {
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: ".sus",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    duration: 1,
  });
  // splide js
});

const susOptions = {
  type: "loop",
  rewind: true,
  perPage: 2,
  perMove: 1,
  gap: "2rem",
  arrows: false,
  speed: 1200,
  pagination: false,
  focus: "center",
  breakpoints: {
    640: {
      perPage: 1,
      gap: "0.5rem",
    },
    1024: {
      perPage: 2,
      gap: "2rem",
    },
  },
};

const susSplide = ref(null);

// memotong description
function truncateText(text: string, maxLength = 50): string {
  // Hilangkan tag HTML
  const plain = text.replace(/<[^>]+>/g, "");
  return plain.length > maxLength ? plain.slice(0, maxLength) + "..." : plain;
}
</script>

<style>
.ut,
.sus {
  will-change: transform, opacity;
  transition: none;
}

</style>
