<template>
  <div>
    <!-- navbar -->
    <div
      class="fixed left-0 right-0 z-50 transition-all duration-300"
      :class="[
        isVisible ? 'translate-y-0' : '-translate-y-full',
        isScrolled ? 'bg-white py-2 top-0 shadow' : 'top-6 bg-transparent',
      ]"
    >
      <div class="container">
        <nav class="flex justify-between items-center gap-4 transition-colors duration-300">
          <div class="logo max-w-[220px] lg:max-w-[260px]">
            <nuxt-link to="/">
              <img :src="logo" alt="logo" class="w-full h-auto" />
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
              @click="toggleMenu"
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

    <!-- overlay menu -->
    <Transition
  @enter="onEnter"
  @leave="onLeave"
>
   <div
  v-if="openMenu"
  class="overlayer-menu fixed flex justify-center items-center top-0 left-0 w-full h-full py-6 z-50 bg-black/90"
>

      <div class="container h-full">
       <div
  ref="menuBox"
  class="p-6 lg:p-10 bg-primary rounded-2xl max-h-[calc(100vh-3rem)] w-full overflow-hidden flex flex-col"
>
          <div class="flex justify-between  mb-5">
            <nuxt-link to="/" >
              <img src="/logo.png" alt="logo" class="w-full h-10 object-contain" />
            </nuxt-link>
            <div class="flex gap-4 items-center w-full max-w-max shrink-0">
             <img src="/moving-as-one.png" alt="logo" class="w-full h-12 object-contain bg-white p-1 rounded-full" />
            <button
              class="w-10 h-10 shrink-0 rounded-full flex items-center justify-center duration-300 cursor-pointer hover:bg-white hover:text-primary "
              @click="toggleMenu"
            >
              <icon name="material-symbols:close-rounded" class="text-2xl" />
            </button>
            </div>
           
          </div>

          <div class="overflow-y-auto scrollbar-custom flex-1 pr-2"> <!-- untuk scroll menu -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <ul class="flex flex-col gap-3">
                <li
                  v-for="(menu, index) in menus"
                  :key="index"
                  @mouseenter="getMenuChild(menu)"
                  class="menu-item"
                >
                  <nuxt-link
                    :to="menu.link"
                    @click="closeMenu"
                    class="text-xl lg:text-3xl font-bold text-white hover:text-black duration-300"
                  >
                    {{ menu.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <div>
              <ul class="flex flex-col gap-3 h-full">
                <li v-for="(childMenu, index) in selectedMenu" :key="index">
                  <nuxt-link
                    :to="childMenu.link"
                    @click="closeMenu"
                    class="text-black font-bold hover:text-secondary duration-300"
                  >
                    {{ childMenu.name }}
                  </nuxt-link>
                  <ul v-if="childMenu.child" class="flex flex-col flex-wrap gap-2">
                    <li
                      v-for="(ccmenu, index) in childMenu.child"
                      :key="index"
                      class="relative"
                    >
                      <nuxt-link
                        :to="ccmenu.link"
                        @click="closeMenu"
                        class="text-secondary duration-300 block text-sm"
                        >{{ ccmenu.name }}</nuxt-link
                      >

                      <ul
                        v-if="ccmenu.child"
                        class="flex flex-wrap w-full max-w-[460px] gap-2"
                      >
                        <li
                          v-for="(cccmenu, index) in ccmenu.child"
                          :key="index"
                        >
                          <nuxt-link
                            :to="cccmenu.link"
                            @click="closeMenu"
                            class="text-black hover:text-secondary duration-300 block text-xs"
                            >{{ cccmenu.name }}</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          </div>

          
        </div>
      </div>
    </div>
    </Transition>
    <!-- end overlay menu -->
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const { menus } = useMenu()
const isScrolled = ref(false)
const openMenu = ref(false)
const isVisible = ref(true)
let lastScrollTop = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  isVisible.value = currentScroll <= lastScrollTop
  isScrolled.value = currentScroll > 50
  lastScrollTop = currentScroll
}

const selectedMenu = ref(null)

const getMenuChild = (menu: any) => {
  if (menu.child === null) return
  selectedMenu.value = menu.child
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const logo = computed(() => {
  return isScrolled.value ? '/logo.png' : '/logo-white.png'
})

const menuBox = ref<HTMLElement | null>(null)

const animateOpen = async () => {
  await nextTick()
  if (menuBox.value) {
    gsap.set(menuBox.value, { scale: 0.8})
    gsap.to(menuBox.value, {
      scale: 1,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
    })
  }
}

const animateClose = () => {
  if (menuBox.value) {
    gsap.to(menuBox.value, {
      scale: 0.8,
      duration: 0.5,
      ease: 'power2.in',
    })
  }
}

const onEnter = async (el: Element, done: () => void) => {
  await nextTick()
  if (menuBox.value) {
    gsap.fromTo(
      menuBox.value,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.4)',
        onComplete: done,
      }
    )
  }
}

const onLeave = (el: Element, done: () => void) => {
  if (menuBox.value) {
    gsap.to(menuBox.value, {
      scale: 0.8,
      opacity: 0,
      duration:.5,
      delay: 0.2,
      ease: 'elastic.out(1, 0.4)',
      onComplete: done, // penting!
    })
  } else {
    done()
  }
}


const toggleMenu = () => {
  openMenu.value = !openMenu.value
}

const closeMenu = () => {
    openMenu.value = false
}
</script>
