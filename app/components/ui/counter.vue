<script setup lang="ts">
interface Props {
  target: number
  duration?: number
  formatter?: (val: number) => string
  decimals?: number // opsional, untuk tentukan berapa angka desimal
}

const props = defineProps<Props>()

const rawCount = ref(0)
const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const displayValue = computed(() => {
  if (props.formatter) {
    return props.formatter(rawCount.value)
  }

  const decimals = props.decimals ?? 2
  return rawCount.value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })
})

const animateCount = () => {
  const start = 0
  const end = props.target
  const duration = props.duration || 1500
  const startTime = performance.now()

  const step = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    // tidak pakai floor, biarkan float
    rawCount.value = progress * (end - start) + start
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
