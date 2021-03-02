<template>
  <div id="widget-weather" class="w-2/5 mx-3 my-4 px-5 py-4 bg-lightBlue lg:w-32">
    <slot name="date">Tomorrow</slot>
    <div class="flex justify-center">
      <slot name="icon"></slot>
    </div>
    <div class="flex justify-between text-sm">
      <slot name="temp_high">16°C</slot>
      <slot name="temp_low">11°C</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
