<template>
  <div class="relative">
    <Splide ref="splide" :options="slideOptions" aria-label="My Favorite Images">
      <SplideSlide v-for="(i, index) in slideShow" :key="index">
        <div v-if="i.video">
          <video-background
            :src="i.video"
            
            class="w-full min-h-screen flex flex-col justify-center items-center -left-[2px]"
          >
            <div class="container min-h-screen flex flex-col justify-end pb-32 ">
              <div
                class="max-w-2xl slide-content flex flex-col gap-6 relative "
              >
                <h1
                  v-html="i.title"
                  class="slide-title text-3xl lg:text-6xl text-white font-bold"
                ></h1>
                <div v-html="i.content" class="text-white flex flex-col gap-4"></div>
                <div
                  v-if="i.buttons"
                  class="flex flex-wrap justify-center lg:justify-start items-center gap-4"
                >
                  <button
                    v-for="(j, index) in i.buttons"
                    :key="index"
                    class="rounded-full border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-black duration-300"
                  >
                    <a :href="j.link" target="_blank">{{ j.title }}</a>
                  </button>
                </div>
              </div>
            </div>
          </video-background>
        </div>

        <div
          v-else
          class="slide min-h-screen flex flex-col justify-end pb-32 bg-no-repeat bg-cover"
        >
          <img
            :src="i.image"
            alt=""
            class="w-full h-screen object-cover absolute top-0 left-0"
          />
          <div class="container relative z-10">
            <div
              class="max-w-2xl slide-content flex flex-col gap-6 relative backdrop-blur-2xl backdrop-saturate-100 p-6 rounded-xl border border-light/40"
            >
              <h1
                v-html="i.title"
                class="slide-title text-3xl lg:text-6xl text-white font-bold"
              ></h1>
              <div v-html="i.content" class="text-white flex flex-col gap-4"></div>
              <div
                v-if="i.buttons"
                class="flex flex-wrap justify-center lg:justify-start items-center gap-4"
              >
                <button
                  v-for="(j, index) in i.buttons"
                  :key="index"
                  class="rounded-full border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-black duration-300"
                >
                  <a :href="j.link" target="_blank">{{ j.title }}</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>

 <!-- Custom pagination dengan judul -->
    <div class="hidden lg:flex justify-center items-center mb-10 absolute right-0 bottom-5 left-0">
      <button
        v-for="(item, index) in slideShow"
        :key="index"
        class="text-sm pb-2 px-3 border-b  inline-block max-w-max"
        :class="
          index === activeIndex ? ' text-primary border-b-4 border-primary' : ' text-white'
        "
        @click="goTo(index)"

        v-html="item.title"
      >
      
      </button>
    </div>

  </div>
</template>

<script lang="ts" setup>



const slideShow = [
  {
    title: `<h1> Evolve and Grow </h1>`,
    content: `<p> Diversifikasi, inovasi, diferensiasi, dan operational excellence</p>`,
    // image: "/img/slide-1.jpg",
    video: "/vid-slider-1.mp4",
    buttons: [
      {
        title: "agincourtresources.com",
        link: "#",
      },
      {
        title: "turanggaresources.com",
        link: "#",
      },
    ],
  },
  {
    title: `<h1> Taking Step Toward Our Sustainable Journey </h1>`,
    content: `<p>United Tractors berkomitmen menjadi perusahaan bekelanjutan dan Tangguh.</p>`,
    image: "/img/slide-3.jpg",

  },
];

const slideOptions = {
  type: "fade",
  rewind: true,
  perPage: 1,
  perMove: 1,
  // autoplay: true,
  interval: 5000,
  pauseOnHover: false,
  speed: 1500,
  arrows: false,
};

const { $gsap } = useNuxtApp();
const splide = ref(null);

const activeIndex = ref<number>(0);
const selectedIndex = ref<number | null>(null);

function goTo(index: number) {
  splide.value?.splide?.go(index);
  activeIndex.value = index;
}

</script>

<style scoped>
.splide__slide img {
  transform: scale(1);
}
.splide__slide.is-active img {
  transform: scale(1.2);
  transition: all 7s ease-in-out;
}
.slide-title,
.slide-content {
  transform: translateX(-50%);
  opacity: 0;
}

.splide__slide.is-active .slide-title {
  transform: translateX(0);
  opacity: 1;
  transition: all 0.8s ease-in-out;
  transition-delay: 0.25s;
}
.splide__slide.is-active .slide-content {
  transform: translateX(0);
  opacity: 1;
  transition: all 1s ease-in-out;
}
</style>
