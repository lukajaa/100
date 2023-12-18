<template>
  <div
    class="mx-auto flex flex-col py-24 md:w-1/2 2xl:py-48"
    :class="{ 'md:w-full': isFullscreen && hasFullscreen }"
  >
    <slot />
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '~/stores/fullscreen';

const fullscreen = useFullscreen();
const { isFullscreen } = storeToRefs(fullscreen);

defineProps({
  hasFullscreen: {
    type: Boolean,
    default: true,
  },
});
</script>
