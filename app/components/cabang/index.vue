<template>
    <div class="relative max-h-max">
      <cabang-peta-indonesia />
      <cabang-titik-cabang />

      <div id="chart">

      <!-- datanasional
      =============================================  -->

      <div v-if="status === 'success' && !selectedPinId " class="space-y-4">

       <h2 class="text-center mb-5 capitalize">Data Nasional {{ selectedPinId }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm ">
          <div class="uppercase p-4 border border-gray-200 rounded-xl">
            <!-- Gender -->
            <DoughnutChart
              v-if="allGenderLabels.length && allGenderValues.length"
              :labels="allGenderLabels"
              :values="allGenderValues"
              title="Gender"
            />
            <div>
              <h3 class="font-semibold mb-2">Gender : {{ genderTotal }}</h3>
              <ul class="flex flex-col divide-y divide-gray-200">
                <li v-for="g in genderList" :key="g.key" class="text-xs flex justify-between py-1">
                <span> {{ g.key }} </span> <span> {{ g.value }} </span> </li>
              </ul>
            </div>
          </div>

          <div class="uppercase p-4 border border-gray-200 rounded-xl">
            <!-- Putra Daerah -->
            <DoughnutChart
              v-if="allDaerahLabels.length && allDaerahValues.length"
              :labels="allDaerahLabels"
              :values="allDaerahValues"
              title="Putra Daerah"
            />
            <div>
              <h3 class="font-semibold mb-2">Komposisi Putra Daerah: {{ daerahTotal }}</h3>
              <ul class="flex flex-col divide-y divide-gray-200">
                <li v-for="d in daerahList" :key="d.key" class="text-xs flex justify-between py-1">
                <span> {{ d.key }} </span> <span> {{ d.value }} </span></li>
              </ul>
            </div>
          </div>

          <div class="uppercase p-4 border border-gray-200 rounded-xl">
            <!-- Pendidikan -->
            <DoughnutChart
              v-if="allPendidikanLabels.length && allPendidikanValues.length"
              :labels="allPendidikanLabels"
              :values="allPendidikanValues"
              title="Pendidikan"
            />

            <div>
              <h3 class="font-semibold mb-2">Jenjang Pendidikan : {{ pendidikanTotal }}</h3>
               <ul class="flex flex-col divide-y divide-gray-200">
                <li v-for="p in pendidikanList" :key="p.key" class="text-xs flex justify-between py-1">
                <span> {{ p.key }} </span> <span> {{ p.value }} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- end data nasionao -->

      <!-- data cabang
      =============================================  -->
      <div v-else>
  
      <h2 class="text-center mb-5 capitalize">Data Cabang {{ selectedPinId }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="uppercase p-4 border border-gray-200 rounded-xl">
          <DoughnutChart
            v-if="labelsGender.length && valuesGender.length"
            :labels="labelsGender"
            :values="valuesGender"
            title="Gender"
          />

           <div>
              <h3 class="font-semibold mb-2">Gender : {{ valuesGender.reduce((a, b) => a + b, 0) }}</h3>
               <ul class="flex flex-col divide-y divide-gray-200">
                <li v-for="(g,index) in valuesGender" :key="g" class="text-xs flex justify-between py-1">
                <span> {{  labelsGender[index] }} </span>
                <span> {{ g }} </span>
                  
                </li>
              </ul>
            </div>

        </div>

        <div class="uppercase p-4 border border-gray-200 rounded-xl">
          <DoughnutChart
            v-if="labelsPutraDaerah.length && valuesPutraDaerah.length"
            :labels="labelsPutraDaerah"
            :values="valuesPutraDaerah"
            title="Komposisi Putra daerah"
          />

          <div>
              <h3 class="font-semibold mb-2">Komposisi Putra Daerah: {{ valuesPutraDaerah.reduce((a, b) => a + b, 0) }}</h3>
               <ul class="flex flex-col divide-y divide-gray-200">
                <li v-for="(g,index) in valuesPutraDaerah" :key="g" class="text-xs flex justify-between py-1">
                <span> {{  labelsPutraDaerah[index] }} </span>
                <span> {{ g }} </span>
                  
                </li>
              </ul>
            </div>

        </div>

        <div class="uppercase p-4 border border-gray-200 rounded-xl">
          <DoughnutChart
            v-if="labelsPendidikan.length && valuesPendidikan.length"
            :labels="labelsPendidikan"
            :values="valuesPendidikan"
            title="Jenjang Pendidikan"
          />
          <div>
              <h3 class="font-semibold mb-2">Jenjang Pendidikan : {{ valuesPendidikan.reduce((a, b) => a + b, 0) }}</h3>
               <ul class="flex flex-col divide-y divide-gray-200">
                <li v-for="(g,index) in valuesPendidikan" :key="g" class="text-xs flex justify-between py-1">
                <span> {{  labelsPendidikan[index] }} </span>
                <span> {{ g }} </span>
                  
                </li>
              </ul>
            </div>
        </div>
      </div>
</div>
      <!-- end data cabang -->
      </div>
    </div>
</template>

<script lang="ts" setup>
const { pins, selectedPinId, pinById } = usePin();

const getData = ref<any>(null);

// Pakai computed agar labels & values otomatis update saat getData berubah
const labelsGender = computed(() => {
  const gender = getData.value?.acf?.gender;
  return gender ? Object.keys(gender) : [];
});

const valuesGender = computed(() => {
  const gender = getData.value?.acf?.gender;
  return gender ? Object.values(gender).map((v) => Number(v)) : [];
});

// putra daerah
const labelsPutraDaerah = computed(() => {
  const putra_daerah = getData.value?.acf?.putra_daerah;
  return putra_daerah ? Object.keys(putra_daerah) : [];
});

const valuesPutraDaerah = computed(() => {
  const putra_daerah = getData.value?.acf?.putra_daerah;
  return putra_daerah ? Object.values(putra_daerah).map((v) => Number(v)) : [];
});

// pendidikan
const labelsPendidikan = computed(() => {
  const pendidikan = getData.value?.acf?.pendidikan;
  return pendidikan ? Object.keys(pendidikan) : [];
});

const valuesPendidikan = computed(() => {
  const pendidikan = getData.value?.acf?.pendidikan;
  return pendidikan ? Object.values(pendidikan).map((v) => Number(v)) : [];
});

// dougnut secara global

const allGenderLabels = computed(() => genderList.value.map((item) => item.key));
const allGenderValues = computed(() => genderList.value.map((item) => item.value));

const allDaerahLabels = computed(() => daerahList.value.map((item) => item.key));
const allDaerahValues = computed(() => daerahList.value.map((item) => item.value));

const allPendidikanLabels = computed(() => pendidikanList.value.map((item) => item.key));
const allPendidikanValues = computed(() =>
  pendidikanList.value.map((item) => item.value)
);

// data nasional cabang
const {
  cabang,
  status,
  genderList,
  genderTotal,
  daerahList,
  daerahTotal,
  pendidikanList,
  pendidikanTotal,
} = useCabangStats("/api/v1/posts/cabang");

// Ambil data API setiap kali selectedPinId berubah
watchEffect(() => {
  if (selectedPinId.value) {
    const { data } = useApiData(`/api/v1/content/${selectedPinId.value}`);
    getData.value = data.value;
  }
});

watch(cabang, (val) => {
  console.log("Data cabang:", val);
});
</script>
