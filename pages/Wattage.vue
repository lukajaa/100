<template>
  <PageContainer no-fullscreen>
    <PageTitle no-fullscreen>Wattage</PageTitle>
    <div class="flex flex-row space-x-2 justify-center mt-6">
      <UInput v-model="watts" type="number" placeholder="Wattage" class="flex flex-col w-96" />
      <UButton @click="watts = Math.floor(Math.random() * 10000);" class="flex flex-col" color="yellow">🔄</UButton>
    </div>
    <div class="mt-10 text-center">
      <p v-if="canPower.length == 0" class="text-xl font-medium">You can't power anything :(</p>
      <p v-else class="text-xl font-medium">You can power:</p>
      <p
        v-for="appliance in canPower"
        :key="appliance"
        class="text-md"
      >
        {{ appliance }}
      </p>
    </div>
    <PageSource> myself </PageSource>
  </PageContainer>
</template>

<script setup lang="ts">
import appliances from '~/assets/data/wattage.json'

const watts = ref();
const canPower = computed(function () {
  var output = [];
  var tempWatts = Number(watts.value);
  for (const [appliance, wattage] of Object.entries(appliances)) {
    if (tempWatts / wattage >= 1) {
      let times = Math.floor(tempWatts / wattage);
      output.push(`${appliance} x${times.toLocaleString("en-US")}`);
      tempWatts -= wattage * times;
    }
  }
  return output;
});
</script>
