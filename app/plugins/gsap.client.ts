// plugins/gsap.client.ts
import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap,
      scrollTrigger: ScrollTrigger
    }
  }
})
