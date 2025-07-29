<template>
  <div>
    <div class="relative max-h-max">
      <cabang-peta-indonesia />
      <cabang-titik-cabang />


      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
      <DoughnutChart
        v-if="labelsGender.length && valuesGender.length"
        :labels="labelsGender"
        :values="valuesGender"
        title="Gender"
      />
      </div>

<div>
      <DoughnutChart
        v-if="labelsUsia.length && valuesUsia.length"
        :labels="labelsUsia"
        :values="valuesUsia"
        title="Usia"
      />
      </div>

      <div>
      <DoughnutChart
        v-if="labelsAgama.length && valuesAgama.length"
        :labels="labelsAgama"
        :values="valuesAgama"
        title="Agama"
      />
      </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
const { pins, selectedPinId, pinById } = usePin()

const getData = ref<any>(null)

// Pakai computed agar labels & values otomatis update saat getData berubah
const labelsGender = computed(() => {
  const gender = getData.value?.acf?.gender
  return gender ? Object.keys(gender) : []
})

const valuesGender = computed(() => {
  const gender = getData.value?.acf?.gender
  return gender ? Object.values(gender).map(v => Number(v)) : []
})

// usia
const labelsUsia = computed(() => {
  const usia = getData.value?.acf?.usia
  return usia ? Object.keys(usia) : []
})

const valuesUsia = computed(() => {
  const usia = getData.value?.acf?.usia
  return usia ? Object.values(usia).map(v => Number(v)) : []
})

// agama
const labelsAgama = computed(() => {
  const agama = getData.value?.acf?.agama
  return agama ? Object.keys(agama) : []
})

const valuesAgama = computed(() => {
  const agama = getData.value?.acf?.agama
  return agama ? Object.values(agama).map(v => Number(v)) : []
})

// Ambil data API setiap kali selectedPinId berubah
watchEffect(() => {
  if (selectedPinId.value) {
    const { data } = useApiData(`/api/v1/content/${selectedPinId.value}`)
    getData.value = data.value
  }
})
</script>
