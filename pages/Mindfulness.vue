<template>
  <PageContainer>
    <PageTitle>Bay School Mindfulness</PageTitle>
    <p class="text-center text-xl">Mindfulness Lengths</p>
    <div class="h-96">
      <Bar :data="chartData" :options="options" />
    </div>
    <PageNote>
      Prelude is measured from the beginning of the mindfulness explanation to
      the first ring of the bell.
    </PageNote>
    <PageNote :index="2">
      You may need to zoom out (ctrl/cmd and -) to see every date.
    </PageNote>
    <PageSource> myself </PageSource>
  </PageContainer>
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
