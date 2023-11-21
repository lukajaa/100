<template>
  <div>
    <div class="py-24 2xl:py-48">
      <div class="mx-auto flex flex-col md:w-1/2">
        <p class="mb-2 text-4xl font-bold tracking-tight">
          Bay School Mindfulness
        </p>
        <p class="text-center text-xl">Mindfulness Lengths</p>
        <div class="h-96">
          <Bar :data="chartData" :options="options" />
        </div>
        <p class="mt-8 indent-8">
          <span class="font-bold">Note:</span> Prelude is measured from the
          beginning of the mindfulness explanation to the first ring of the
          bell.
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
import data from '~/assets/data/mindfulness.json';

const dataLabels = data.map((d) => d.date);
const preludeData = data.map((d) => d.prelude);
const meditationData = data.map((d) => d.meditation);

const chartData = {
  labels: dataLabels,
  datasets: [
    {
      label: 'Prelude',
      backgroundColor: '#f59e0b',
      data: preludeData,
    },
    {
      label: 'Meditation',
      backgroundColor: '#eab308',
      data: meditationData,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  x: {
    stacked: true,
  },
  y: {
    stacked: true,
  },
  scales: {
    y: {
      max: 600,
      min: 0,
      ticks: {
        stepSize: 50,
      },
      title: {
        display: true,
        text: 'Length (seconds)',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Date (MM/DD/YY)',
      },
    },
  },
};

useHead({
  title: '3 - Mindfulness',
});
</script>
