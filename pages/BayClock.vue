<template>
  <div>
    <div class="py-24 2xl:py-48">
      <div class="mx-auto flex flex-col md:w-1/2">
        <p class="mb-2 text-4xl font-bold tracking-tight">Bay Clock</p>
        <p class="text-center text-xl">Visitors to bayclock.org</p>
        <div class="h-96">
          <Bar :data="chartData" :options="options" />
        </div>
        <p class="mt-8 indent-8">
          <span class="font-bold">Note:</span> Interesting patterns from
          different user behaviors on weekends, breaks, and during immersives
          can be seen.
        </p>
        <div class="p-8 text-center">
          <p>Data from myself</p>
        </div>
      </div>
    </div>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import userData from '~/assets/data/bayclock.json';

const start = new Date('2021-10-14');
const userLabels = userData.map((d, i) => {
  const date = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
});

const chartData = {
  labels: userLabels,
  datasets: [
    {
      label: 'Unique Visitors',
      backgroundColor: '#59A5DD',
      data: userData,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

useHead({
  title: '4 - Bay Clock',
});
</script>
