<template>
  <div class="flex flex-row items-center justify-between">
    <p class="mb-2 text-4xl font-bold tracking-tight">
      <slot />
    </p>
    <UIcon
      v-if="hasFullscreen"
      :name="
        isFullscreen
          ? 'i-heroicons-arrows-pointing-in'
          : 'i-heroicons-arrows-pointing-out'
      "
      class="invisible h-8 w-8 transition ease-in-out hover:scale-105 md:visible"
      @click="toggleFullscreen"
    />
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '~/stores/fullscreen';

const fullscreen = useFullscreen();
const { isFullscreen } = storeToRefs(fullscreen);
const { toggleFullscreen } = useFullscreen();

defineProps({
  hasFullscreen: {
    type: Boolean,
    default: true,
  },
});
</script>
