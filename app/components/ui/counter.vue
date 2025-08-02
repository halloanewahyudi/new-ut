<script setup lang="ts">
interface Props {
  target: number
  duration?: number
  formatter?: (val: number) => string
}

const props = defineProps<Props>()

const rawCount = ref(0)
const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

// computed untuk format angka
const displayValue = computed(() => {
  if (props.formatter) {
    return props.formatter(rawCount.value)
  }
  // default: ribuan pakai koma
  return rawCount.value.toLocaleString()
})

const animateCount = () => {
  const start = 0
  const end = props.target
  const duration = props.duration || 1500
  const startTime = performance.now()

  const step = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    rawCount.value = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount()
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )

  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div ref="el" class="text-4xl font-bold">
    {{ displayValue }}
  </div>
</template>
