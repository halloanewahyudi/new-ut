<template>
  <div class="bg-white  rounded-xl p-4 w-full max-w-[260px] shadow-lg">
    <div class="flex flex-col gap-2 text-xs">
      <h3 class="mb-2 text-lg font-semibold">{{ props.title }}</h3>
      <div class="flex flex-col gap-2">
        <span class="flex"
        ><icon name="fluent:home-48-filled" class="mr-2 shrink-0" /> {{ props.alamat }}</span
      >
      <span class="flex"
        ><icon name="fluent:call-48-filled" class="mr-2 shrink-0" /> {{ props.telepon }}</span
      >
      <span class="flex"
        ><icon name="fluent:fax-16-filled" class="mr-2 shrink-0" />
        {{ props.fax }}
      </span>
      </div>
      <div>
      <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  alamat: string;
  telepon: string;
  fax: string;
}>();

</script>

