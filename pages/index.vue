<template>
  <div class="py-24 2xl:py-48">
    <div class="mx-auto flex flex-col md:w-1/2 2xl:w-1/3">
      <p class="mb-2 text-4xl font-bold tracking-tight">100 Visualizations</p>
      <div class="flex flex-wrap">
        <div
          v-for="n in 5"
          :key="n"
          class="flex w-1/2 flex-col p-2 md:w-1/3 2xl:w-1/5"
        >
          <NuxtLink
            v-for="i in 20"
            :key="i"
            :to="
              links[i - 1 + (n - 1) * 20]
                ? `/${links[i - 1 + (n - 1) * 20]
                    .replace(/\s+/g, '')
                    .toLowerCase()}`
                : ''
            "
            :class="{ 'cursor-pointer': links[i - 1 + (n - 1) * 20] }"
          >
            <p class="text-gray-400 hover:text-gray-500">
              {{ i + (n - 1) * 20 }} {{ links[i - 1 + (n - 1) * 20] }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="mt-4 text-center">
        <p class="text-center font-bold">Other Projects</p>
        <p>
          <a
            class="text-gray-400 hover:text-gray-500"
            href="https://ed.lucaskchang.com"
            target="_blank"
          >
            Ed-nalysis
          </a>
        </p>
        <p>
          <a
            class="text-gray-400 hover:text-gray-500"
            href="https://lunch.lucaskchang.com"
            target="_blank"
          >
            School Lunch
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = ['Surnames', 'HSR Pairs', 'Mindfulness', 'Bay Clock', 'Wattage'];

useHead({
  title: '100 Visualizations',
});
</script>
