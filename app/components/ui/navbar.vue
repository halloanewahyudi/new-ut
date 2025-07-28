<template>
  <div>
    <div
      class=" fixed  left-0 right-0 z-50 transition-all duration-300"
      :class="[
        isVisible ? 'translate-y-0'  : '-translate-y-full',
        isScrolled ? 'bg-white py-2 top-0 shadow' : 'top-6 bg-transparent',
      ]" 
    >
      <div class="container">
        <nav class="flex justify-between items-center gap-4 transition-colors duration-300 ">
          <div class="logo max-w-[220px] lg:max-w-[260px]">
            <nuxt-link to="/">
              <img :src="logo" alt="logo" class="w-full h-auto " />
            </nuxt-link>
          </div>

          <div class="flex items-center gap-2">
            <button
              class="w-10 h-10 rounded-full flex items-center justify-center duration-300 cursor-pointer"
              :class="
                isScrolled
                  ? 'bg-primary text-black hover:bg-black hover:text-white'
                  : 'bg-primary text-black hover:bg-black hover:text-primary'
              "
            >
              EN
            </button>

            <button
              class="w-auto h-10 rounded-full flex items-center gap-2 justify-center lg:px-4 duration-300 cursor-pointer"
              :class="
                isScrolled
                  ? 'text-black hover:bg-primary'
                  : 'text-white hover:bg-primary hover:text-black'
              "
            >
              <span>Menu</span>
              <icon name="fluent:list-28-regular" class="text-2xl" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { menus } = useMenu();
const isScrolled = ref(false);

const isVisible = ref(true);
let lastScrollTop = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  // navbar hilang kalau scroll ke bawah
  if (currentScroll > lastScrollTop) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }

  // ubah style navbar hanya kalau sudah lewat 50px
  isScrolled.value = currentScroll > 50;

  lastScrollTop = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const logo = computed(() => {
  return isScrolled.value ? "/logo.png" : "/logo-white.png";
});
</script>
