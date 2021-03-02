<template>
  <div id="weather-icon" :name="name" class="w-16 h-auto my-3">
    <!-- <img src="../assets/images/weatherIcons/Shower.png" alt="shower image" /> -->
    <img :src="require('@/assets/images/weatherIcons/' + name + '.png')" :alt="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped></style>
