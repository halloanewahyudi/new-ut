export const useCabangStats = (endpoint = '/api/v1/posts/cabang') => {
  const { data: cabang, status } = useApiData(endpoint)

  // helper: ubah {key:"123"} menjadi array { key, value:number }
  const parseSection = (section?: Record<string, string>) => {
    if (!section) return []
    return Object.entries(section).map(([key, value]) => ({
      key,
      value: Number(value)
    }))
  }

  const totalFromSection = (section?: Record<string, string>) => {
    if (!section) return 0
    return Object.values(section).reduce((sum, v) => sum + Number(v), 0)
  }

  // Jika API mengembalikan array, ambil item pertama
  const cabangData = computed(() => {
    const val = cabang.value
    return Array.isArray(val) ? val[0] : val
  })

  // Debug: lihat di console
  watch(cabangData, (val) => {
    console.log('cabangData terupdate:', val)
  }, { immediate: true })

  // --- Gender ---
  const genderList = computed(() => parseSection(cabangData.value?.acf?.gender))
  const genderTotal = computed(() => totalFromSection(cabangData.value?.acf?.gender))

  // --- Putra Daerah ---
  const daerahList = computed(() => parseSection(cabangData.value?.acf?.putra_daerah))
  const daerahTotal = computed(() => totalFromSection(cabangData.value?.acf?.putra_daerah))

  // --- Pendidikan ---
  const pendidikanList = computed(() => parseSection(cabangData.value?.acf?.pendidikan))
  const pendidikanTotal = computed(() => totalFromSection(cabangData.value?.acf?.pendidikan))

  // --- Persentase (contoh untuk gender) ---
  const genderPercentages = computed(() => {
    const total = genderTotal.value
    if (total === 0) return []
    return genderList.value.map(item => ({
      key: item.key,
      value: item.value,
      percentage: ((item.value / total) * 100).toFixed(1)
    }))
  })

  return {
    status,
    cabangData,

    genderList,
    genderTotal,
    genderPercentages,

    daerahList,
    daerahTotal,

    pendidikanList,
    pendidikanTotal,
  }
}
