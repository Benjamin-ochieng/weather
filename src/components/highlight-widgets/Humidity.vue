<template>
  <div id="widget-humidity" class="my-5 py-6 bg-lightBlue rounded text-center lg:w-1/2 lg:-mx-6">
    <p class="text-base">Humidity</p>
    <p class="text-6xl py-1 font-bold">
      {{ humidity }}<span class="text-4xl mx-1 font-normal">%</span>
    </p>
    <div id="progress" class="px-12">
      <div id="mark" class="flex justify-between">
        <p class="text-xs">0</p>
        <p class="text-xs">50</p>
        <p class="text-xs">100</p>
      </div>
      <div id="bar" class="h-2 w-auto bg-white rounded-lg border-none">
        <div
          id="bar-progress"
          class="h-2 w-auto bg-yellow-300 rounded-lg border-none"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
      <div id="metric" class="flex justify-end">
        <p class="text-xs">%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    humidity: { type: Number, default: 84 },
  },
  computed: {
    progress() {
      return this.humidity.toString();
    },
  },
};
</script>

<style lang="scss" scoped></style>
