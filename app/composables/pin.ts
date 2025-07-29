// composables/usePin.ts
export const usePin = () => {
  // Gunakan useState agar global dan persisten
  const pins = useState('pins', () => [
    { id: 'medan', x: 69.387, y: 58.364 },
    { id: 'pekanbaru', x: 133.213, y: 106.977 },
    { id: 'padang', x: 111.026, y: 156.18 },
    { id: 'jambi', x: 170.959, y: 161.056 },
    { id: 'palembang', x: 202.834, y: 200.457 },
    { id: 'lampung', x: 212.805, y: 240.321 },
    { id: 'jakarta', x: 249.271, y: 269.071 },
    { id: 'semarang', x: 324.229, y: 288.803 },
    { id: 'surabaya', x: 373.262, y: 298.203 },
    { id: 'pontianak', x: 308.446, y: 138.769 },
    { id: 'sampit', x: 393.995, y: 194.919 },
    { id: 'banjarmasin', x: 410.251, y: 201.428 },
    { id: 'balikpapan', x: 463.298, y: 164.863 },
    { id: 'samarinda', x: 485.203, y: 119.197 },
    { id: 'tarakan', x: 480.013, y: 57.542 },
    { id: 'makasar', x: 532.964, y: 246.869 },
    { id: 'palu', x: 535.287, y: 164.823 },
    { id: 'manado', x: 648.038, y: 103.737 },
    { id: 'sorong', x: 791.467, y: 155.681 },
    { id: 'jayapura', x: 977.327, y: 189.924 },
  ])

  const selectedPinId = useState<string | null>('selectedPinId', () => null)

  function pinById(id: string) {
    selectedPinId.value = id
    return pins.value.find(pin => pin.id === id) || null
  }

  return {
    pins,
    selectedPinId,
    pinById
  }
}
