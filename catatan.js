// splide mousewheell

const splide = ref(null);
const splideId = 'my-splide'

onMounted(() => {
  // Tambahkan listener untuk mouse wheel
  const container = document.getElementById(splideId)
  if (container) {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (!splide.value) return
      if (e.deltaY > 0) {
        splide.value.go('>')
      } else {
        splide.value.go('<')
      }
    }
    container.addEventListener('wheel', onWheel, { passive: false })

    onBeforeUnmount(() => {
      container.removeEventListener('wheel', onWheel)
      splide.value?.destroy()
    })
  }
})