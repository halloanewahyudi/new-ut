<template>
  <div>
    <!-- Map Pins -->
    <div
      v-for="pin in pins"
      :key="pin.id"
      class="pin absolute text-sm"
      :id="pin.id"
      :style="{ left: pin.x + 'px', top: pin.y + 'px' }"
      @click="handlePinClick(pin.id)"
    >
      <icon
        :name="selectedPinId === pin.id ? 'mdi-map-marker' : 'mdi-map-marker-outline'"
        class="text-red-500 text-2xl"
        :class="{ 'scale-150 duration-300 shadow-2xl': selectedPinId === pin.id }"
      />
      <span class="tooltiptext uppercase text-xs">{{ pin.id }}</span>
    </div>

    <!-- Card -->
    <ui-map-card
      v-if="getData"
      :title="getData?.title"
      :alamat="getData?.acf?.kontak_cabang?.alamat"
      :telepon="getData?.acf?.kontak_cabang?.telepon"
      :fax="getData?.acf?.kontak_cabang?.fax"
      class="absolute"
      :style="{ left: 20 + posisi.x + 'px', top: posisi.y + 'px' }"
    >
      <div class="flex justify-between items-center gap-3 text-sm">
    

        <button
          @click="closeCard"
          class="mt-2 px-4 py-1 bg-red-500 text-white rounded-full hover:bg-black hover:text-primary duration-300"
        >
          Close
        </button>
      </div>
    </ui-map-card>
  </div>
</template>

<script setup lang="ts">
const { pins, selectedPinId, pinById } = usePin()

const getData = ref<any>(null)
const posisi = ref({ x: 0, y: 0 })

/** Fungsi ketika pin di-klik */
const handlePinClick = async (id: string) => {
  // set global state
  pinById(id)

  // ambil data API
  const { data, status } = await useApiData(`/api/v1/content/${id}`, { lazy: false })

  // watch status perubahan data
  watchEffect(() => {
    if (status.value === 'success') {
      // posisi berdasarkan pin
      const pin = pins.value.find(p => p.id === id)
      if (pin) {
        posisi.value = { x: pin.x, y: pin.y }
      }
      getData.value = data.value
    }
  })
}

/** Hapus selection tapi tetap tampilkan card */
const clearSelection = () => {
  selectedPinId.value = null
}

/** Tutup card sepenuhnya */
const closeCard = () => {
  getData.value = null
  selectedPinId.value = null
}
</script>
