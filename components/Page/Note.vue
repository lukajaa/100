<template>
  <p class="mt-8 indent-8">
    <span class="font-bold">Note<span v-if="index">&nbsp;{{ index }}</span>:</span>
    <slot />
    </p>
</template>

<script setup lang="ts">
defineProps<{
  index?: Number,
}>();
</script>
