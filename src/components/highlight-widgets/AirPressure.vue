<template>
  <div
    id="widget-air-pressure"
    class="my-5 py-6 bg-lightBlue rounded text-center lg:w-1/2 lg:-mx-6"
  >
    <p class="text-base">Air Pressure</p>
    <p class="text-6xl py-1 font-bold">
      {{ pressure }}<span class="text-4xl mx-1 font-normal">mb</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    pressure: {
      type: Number,
      default: 884,
    },
  },
};
</script>

<style lang="scss" scoped></style>
