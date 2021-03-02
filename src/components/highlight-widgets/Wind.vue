<template>
  <div id="widget-wind" class="my-5 py-6 bg-lightBlue rounded text-center lg:w-1/2 lg:-mx-6">
    <p class="text-base">Wind Status</p>
    <p class="text-6xl py-1 font-bold">
      {{ speed }}<span class="text-4xl mx-1 font-normal">mph</span>
    </p>
    <div class="flex justify-center items-center">
      <div id="wind-icon" class="w-4 h-4 mx-2 p-2 rounded-full bg-white opacity-50 text-white">
        <svg viewBox="0 0 45.923 45.923">
          <defs />
          <path
            d="M44.041 17.019L3.785.191a2.47 2.47 0 00-3.27 3.123l14.962 40.987a2.467 2.467 0 004.574.154l6.841-15.436a2.472 2.472 0 011.359-1.301l15.733-6.125a2.466 2.466 0 00.057-4.574z"
          />
        </svg>
      </div>
      <p>{{ compass }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    speed: {
      type: Number,
      default: 7,
    },
    compass: {
      type: String,
      default: 'WSW',
    },
  },
};
</script>

<style lang="scss" scoped></style>
