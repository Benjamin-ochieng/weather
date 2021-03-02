<template>
  <div id="upcoming-weather" class="flex flex-wrap flex-row justify-between px-10 py-5 lg:px-24">
    <weather-widget v-for="day in days" :key="day.id">
      <p slot="date" class="text-base text-center">
        {{ days.indexOf(day) === 0 ? 'Tomorrow' : day.date }}
      </p>
      <base-icon slot="icon" :name="day.icon"></base-icon>
      <p id="widget-high" slot="temp_high">{{ day.min }}°C</p>
      <p id="widget-high" class="opacity-75" slot="temp_low">{{ day.max }}°C</p>
    </weather-widget>
    <!-- <div id="widget-weather" class="mx-3 my-4 px-5 py-4 bg-lightBlue">
      <p class="text-base">Tomorrow</p>
      <base-icon name="Shower" />
      <div id="widget-highLow" class="flex justify-between">
        <p id="widget-high">16°C</p>
        <p id="widget-low" class="opacity-75">11°C</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import WeatherWidget from '@/components/WeatherWidget.vue';

export default {
  props: {
    days: {
      type: Array,
      // default:
    },
  },
  components: {
    WeatherWidget,
  },
};
</script>

<style lang="scss" scoped></style>
