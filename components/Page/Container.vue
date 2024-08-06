<template>
  <div
    class="mx-auto flex flex-col py-24 md:w-1/2 2xl:py-48"
    :class="{ 'md:w-full': isFullscreen && !noFullscreen }"
  >
    <slot />
    <BackButton v-if="$route.query.embed !== 'true'" />
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '~/stores/fullscreen';

const fullscreen = useFullscreen();
const { isFullscreen } = storeToRefs(fullscreen);

defineProps({
  noFullscreen: {
    type: Boolean,
    default: false,
  },
});
</script>
