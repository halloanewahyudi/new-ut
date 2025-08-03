<template>
  <div>
    <section class="py-20">
      <div class="container">
        <div class="mb-10 relative">
        <div class="relative max-w-xl w-full">
                  <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari pekerjaan..."
            class="w-full  border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring"
            @focus="showSuggestions = true"
            @blur="hideSuggestions"
          />

<icon  name="fluent:search-20-regular" class="absolute right-4 top-3 cursor-pointer text-xl" />
        </div>

          <!-- Suggestions -->
          <ul
            v-if="showSuggestions && searchQuery && suggestions.length"
            class="absolute left-0 mt-1 w-full md:w-1/2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto z-10"
          >
            <li
              v-for="(item, index) in suggestions"
              :key="index"
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @mousedown.prevent="selectSuggestion(item)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>

        <div class="grid cols-1 md:grid-cols-2 lg:grid-cols-4 *:gap-6 lg:gap-10">
          <div v-for="job in paginatedJobs" class="p-4 rounded-xl border border-gray-200">
            <div>
              <h4 class="font-bold mb-3">{{ job.title }}</h4>
              <p class="text-sm">{{ job.description }}</p>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-xs py-1 px-3 rounded-full bg-yellow-100">{{
                job.employment_type
              }}</span>
              <button
                class="px-3 py-1 rounded-full bg-secondary text-white hover:bg-black hover:text-primary duration-300"
              >
                Lamar
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-2 mt-10">
          <button
            class="px-4 py-1 rounded-full bg-secondary/20"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            Prev
          </button>
          <span class="px-3 py-1">{{ currentPage }} / {{ totalPages }}</span>
          <button
            class="px-4 py-1 rounded-full bg-secondary/20"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "layout-page",
  name: "Karir",
  hero: {
    image: "/img/career-hero.jpg",
    title: "Lowongan Tersedia",
    subtitle: "Bersama United Tractors Untuk Hari Ini dan Masa Depan Indonesia.",
  },
});

const { jobs } = useCareer();

const searchQuery = ref("");
const showSuggestions = ref(false);
const perPage = 12;
const currentPage = ref(1);

const filteredJobs = computed(() => {
  if (!searchQuery.value) return jobs.value;
  const q = searchQuery.value.toLowerCase();
  return jobs.value.filter(
    (job) =>
      job.title.toLowerCase().includes(q) ||
      job.description.toLowerCase().includes(q) ||
      job.employment_type.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q)
  );
});

const suggestions = computed(() => {
  const q = searchQuery.value.toLowerCase();
  return jobs.value
    .filter(
      (job) =>
        job.title.toLowerCase().includes(q) || job.location.toLowerCase().includes(q)
    )
    .slice(0, 5); // batasi 5 saran
});

const totalPages = computed(() => Math.ceil(jobs.value.length / perPage));

const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredJobs.value.slice(start, start + perPage);
});

// Reset ke halaman 1 jika query search berubah
watch(searchQuery, () => {
  currentPage.value = 1;
});

function selectSuggestion(item) {
  searchQuery.value = item.title;
  showSuggestions.value = false;
}

function hideSuggestions() {
  // delay sedikit agar @mousedown pada suggestion bisa jalan
  setTimeout(() => {
    showSuggestions.value = false;
  }, 150);
}
</script>

<style></style>
