<template>
  <PageContainer>
    <PageTitle>High Speed Rail Pairs</PageTitle>
    <p class="text-center text-xl">Top {{ numPairs }} HSR Pairs</p>
    <div class="h-96">
      <Bar :data="chartData" :options="options" />
    </div>
    <div class="mt-8 flex justify-center gap-4">
      <UButton
        label="Show More"
        color="green"
        variant="outline"
        @click="numPairs += 1"
      />
      <UButton
        label="Reset"
        color="gray"
        variant="outline"
        @click="numPairs = 10"
      />
      <UButton
        label="Show Less"
        color="red"
        variant="outline"
        @click="numPairs > 1 ? (numPairs -= 1) : (numPairs = 1)"
      />
    </div>
    <PageNote>
      The score is a gravity score between the central city of the two combined
      statistical areas (CSAs). The gravity score is calculated by the following
      formula: population<sub>1</sub><sup>0.8</sup> * population<sub>2</sub
      ><sup>0.8</sup> / distance<sup>2</sup>. Lastly, a distance modifier that
      favors CSAs that are an ideal distance away from each other for high speed
      rail is applied.
    </PageNote>
    <PageSource>
      <a href="https://www.census.gov/" target="_blank" class="link">
        US Census
      </a>
    </PageSource>
  </PageContainer>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import data from '~/assets/data/hsr_pairs.json';

const numPairs = ref(10);
const dataLabels = computed(() => {
  return data.slice(0, numPairs.value).map((d) => `${d.CSA1} - ${d.CSA2}`);
});
const dataValues = computed(() => {
  return data.slice(0, numPairs.value).map((d) => d.Gravity);
});

const chartData = computed(() => {
  return {
    labels: dataLabels.value,
    datasets: [
      {
        label: 'Score',
        backgroundColor: '#16a34a',
        data: dataValues.value,
      },
    ],
  };
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

useHead({
  title: '2 - HSR Pairs',
});
</script>
