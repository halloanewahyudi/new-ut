import { Chart,Legend,Tooltip, ArcElement } from "chart.js"

export default defineNuxtPlugin((nuxtApp) => {
    Chart.register(Legend,Tooltip,ArcElement)
    
})
