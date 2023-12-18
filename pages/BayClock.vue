<template>
  <PageContainer>
    <PageTitle>Bay Clock</PageTitle>
    <p class="text-center text-xl">Visitors to bayclock.org</p>
    <div class="h-96">
      <Bar :data="chartData" :options="options" />
    </div>
    <PageNote>
      Interesting patterns from different user behaviors on weekends, breaks,
      and during immersives can be seen.
    </PageNote>
    <PageSource> myself </PageSource>
  </PageContainer>
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
