<template>
  <DoughnutChart :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

// Register Chart.js components (hanya sekali)
ChartJS.register(Title, Tooltip, Legend, ArcElement)

interface Props {
  labels: string[]
  values: number[]
  title?: string
}

const props = defineProps<Props>()

const chartData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      label: props.title || '',
      data: props.values,
      backgroundColor: [
        '#3B82F6', // biru
        '#F59E0B', // kuning
        '#EF4444', // merah
        '#10B981', // hijau
        '#8B5CF6', // ungu
        '#F472B6'  // pink
      ]
    }
  ]
}))

const chartOptions = computed(() => ({
  responsive: true,
  plugins: {
    legend: { position: 'bottom' },
    title: { display: !!props.title, text: props.title }
  }
}))

const DoughnutChart = Doughnut
</script>
