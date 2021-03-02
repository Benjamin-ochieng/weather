<template>
  <div id="widget-visibility" class="my-5 py-6 bg-lightBlue rounded text-center lg:w-1/2 lg:-mx-6">
    <p class="text-base">Visibility</p>
    <p class="text-6xl py-1 font-bold">
      {{ visibility }}<span class="text-4xl mx-1 font-normal">miles</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    visibility: {
      type: Number,
      default: 64,
    },
  },
};
</script>

<style lang="scss" scoped></style>
