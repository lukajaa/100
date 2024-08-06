<template>
  <PageContainer no-fullscreen>
    <PageTitle no-fullscreen>Surnames</PageTitle>
    <div class="flex flex-row text-center">
      <div class="flex w-1/2 flex-col pr-4">
        <p class="text-xl">🇰🇷</p>
        <div class="h-96">
          <Pie :data="koreaChartData" :options="options" />
        </div>
        <p class="mt-4 font-bold">Most Common Korean Surnames</p>
        <p v-for="surname in koreanSurnames" :key="surname.surname">
          {{ surname.surname }}: {{ surname.percentage }}%
        </p>
      </div>
      <div class="flex w-1/2 flex-col pl-4">
        <p class="text-xl">🇺🇸</p>
        <div class="h-96">
          <Pie :data="americaChartData" :options="options" />
        </div>
        <p class="mt-4 font-bold">Most Common American Surnames</p>
        <p v-for="surname in americanSurnames" :key="surname.surname">
          {{ surname.surname }}: {{ surname.percentage }}%
        </p>
      </div>
    </div>
    <PageSource>
      <a href="https://www.census.gov/" target="_blank" class="link">
        US Census
      </a>
      and
      <a href="http://kostat.go.kr/anse/" target="_blank" class="link">
        Statistics Korea
      </a>
    </PageSource>
  </PageContainer>
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs';

const koreaChartData = {
  labels: ['김 (Kim)', 'Other'],
  datasets: [
    {
      backgroundColor: ['#CD2E3A', '#0047A0'],
      data: [21.5, 78.5],
    },
  ],
};

const americaChartData = {
  labels: ['100 top surnames', 'Other'],
  datasets: [
    {
      backgroundColor: ['#CD2E3A', '#0047A0'],
      data: [17.11, 82.89],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const koreanSurnames = [
  { surname: '김 (Kim)', percentage: 21.5065 },
  { surname: '이 (Lee)', percentage: 14.701 },
  { surname: '박 (Park)', percentage: 8.4338 },
  { surname: '정 (Jung)', percentage: 4.8437 },
  { surname: '최 (Choi)', percentage: 4.7089 },
  { surname: '조 (Cho)', percentage: 2.9252 },
  { surname: '강 (Kang)', percentage: 2.5536 },
  { surname: '장 (Chang)', percentage: 2.0543 },
  { surname: '윤 (Yoon)', percentage: 2.0532 },
  { surname: '임 (Im)', percentage: 2.0424 },
];

const americanSurnames = [
  { surname: 'Smith', percentage: 0.8444 },
  { surname: 'Johnson', percentage: 0.6599 },
  { surname: 'Williams', percentage: 0.5451 },
  { surname: 'Brown', percentage: 0.4904 },
  { surname: 'Jones', percentage: 0.4842 },
  { surname: 'Miller', percentage: 0.4008 },
  { surname: 'Davis', percentage: 0.381 },
  { surname: 'Garcia', percentage: 0.305 },
  { surname: 'Rodriguez', percentage: 0.2858 },
  { surname: 'Wilson', percentage: 0.2782 },
];

useHead({
  title: '1 - Surnames',
});
</script>
