<template>
  <div>
    <div class="relative max-h-max">
      <cabang-peta-indonesia />
      <cabang-titik-cabang />
  

<!-- test -->

<div v-if="status === 'success'" class="space-y-4">
    <h2 class="font-bold text-lg">Cabang: {{ cabang?.title }}</h2>

    <!-- Gender -->
    <div>
      <h3 class="font-semibold">Gender (Total: {{ genderTotal }})</h3>
      <ul>
        <li v-for="g in genderList" :key="g.key">
          {{ g.key }}: {{ g.value }}
        </li>
      </ul>
    </div>

    <!-- Putra Daerah -->
    <div>
      <h3 class="font-semibold">Putra Daerah (Total: {{ daerahTotal }})</h3>
      <ul>
        <li v-for="d in daerahList" :key="d.key">
          {{ d.key }}: {{ d.value }}
        </li>
      </ul>
    </div>

    <!-- Pendidikan -->
    <div>
      <h3 class="font-semibold">Pendidikan (Total: {{ pendidikanTotal }})</h3>
      <ul>
        <li v-for="p in pendidikanList" :key="p.key">
          {{ p.key }}: {{ p.value }}
        </li>
      </ul>
    </div>
  </div>

<!-- end test -->

      <h2 class="text-center mb-5 capitalize">Data Cabang {{ selectedPinId }}</h2>
       
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
     <div class="uppercase">
      <DoughnutChart
        v-if="labelsGender.length && valuesGender.length"
        :labels="labelsGender"
        :values="valuesGender"
        title="Gender"
      />
      </div>

<div class="uppercase">
      <DoughnutChart
        v-if="labelsPutraDaerah.length && valuesPutraDaerah.length"
        :labels="labelsPutraDaerah"
        :values="valuesPutraDaerah"
        title="Komposisi Putra daerah"
      />
      </div>

      <div class="uppercase">
      <DoughnutChart
        v-if="labelsPendidikan.length && valuesPendidikan.length"
        :labels="labelsPendidikan"
        :values="valuesPendidikan"
        title="Jenjang Pendidikan"
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

// putra daerah
const labelsPutraDaerah = computed(() => {
  const putra_daerah = getData.value?.acf?.putra_daerah
  return putra_daerah ? Object.keys(putra_daerah) : []
})

const valuesPutraDaerah = computed(() => {
  const putra_daerah = getData.value?.acf?.putra_daerah
  return putra_daerah ? Object.values(putra_daerah).map(v => Number(v)) : []
})

// pendidikan
const labelsPendidikan = computed(() => {
  const pendidikan = getData.value?.acf?.pendidikan
  return pendidikan ? Object.keys(pendidikan) : []
})

const valuesPendidikan = computed(() => {
  const pendidikan = getData.value?.acf?.pendidikan
  return pendidikan ? Object.values(pendidikan).map(v => Number(v)) : []
})

// data nasional cabang
const {
  cabang,
  status,
  genderList,
  genderTotal,
  daerahList,
  daerahTotal,
  pendidikanList,
  pendidikanTotal
} = useCabangStats('/api/v1/posts/cabang')

// Ambil data API setiap kali selectedPinId berubah
watchEffect(() => {
  if (selectedPinId.value) {
    const { data } = useApiData(`/api/v1/content/${selectedPinId.value}`)
    getData.value = data.value
  }
})

watch(cabang, (val) => {
  console.log('Data cabang:', val)
})




</script>
