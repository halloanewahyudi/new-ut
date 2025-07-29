// composables/useApiData.ts
export function useApiData<T>(
  endpoint: string,
  opts?: { lazy?: boolean; [key: string]: any }
) {
  const config = useRuntimeConfig()

  // Pilih antara useFetch atau useLazyFetch
  const fetchFn = opts?.lazy ? useLazyFetch : useFetch

  return fetchFn<T>(endpoint, {
    baseURL: config.public.baseUrl,
    credentials: 'include',
    ...opts
  })
}

// SSG (fetch di build)
// const { data, pending } = await useApiData('/posts')

// Lazy (fetch di client)
// const { data, pending } = await useApiData('/stats', { lazy: true })
