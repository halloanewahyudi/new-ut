<template>
  <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
  <div>
   <DoughnutChart
      :labels="gender.labels"
      :values="gender.values"
      title="Gender"
   
    />
  </div>
   <div>
     <DoughnutChart
      :labels="agama.labels"
      :values="agama.values"
      title="Agama"
    />
   </div>
  <div>
     <DoughnutChart
      :labels="usia.labels"
      :values="usia.values"
      title="Usia"
    />
  </div>
 
  </div>
</template>

<script setup lang="ts">


// Jika datanya dari API, gunakan:
// const { data } = await useApiData('/statistik')
// const stats = data.value
const stats = {
  gender: {
    pria: '720',
    wanita: '425'
  },
  agama: {
    islam: '801',
    kristen: '230',
    katolik: '220',
    hindu: '40',
    budha: '20',
    konghucu: '10'
  },
  usia: {
    '20_30': '700',
    '31_40': '300',
    '41_50': '200',
    '51_60': '20',
    '61_70': ''
  }
}

// Helper: convert object to labels & numeric values
function toChartData(obj: Record<string, string>) {
  const labels = Object.keys(obj)
  const values = Object.values(obj).map(v => Number(v || 0))
  return { labels, values }
}

const gender = toChartData(stats.gender)
const agama = toChartData(stats.agama)
const usia = toChartData(stats.usia)
</script>
