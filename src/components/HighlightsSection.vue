<template>
  <div id="weather-highlights" class="px-6 py-6 lg:px-32">
    <h2 class="text-2xl font-bold">Today's highlights</h2>
    <div class="lg:flex lg:flex-wrap lg:flex-row lg:justify-between">
      <wind :speed="highlights.speed" :compass="highlights.compass" />
      <humidity :humidity="highlights.humidity" />
      <visibility :visibility="highlights.clarity" />
      <air-pressure :pressure="highlights.millibars" />
    </div>
  </div>
</template>

<script>
import AirPressure from '@/components/highlight-widgets/AirPressure.vue';
import Humidity from '@/components/highlight-widgets/Humidity.vue';
import Visibility from '@/components/highlight-widgets/Visibility.vue';
import Wind from '@/components/highlight-widgets/Wind.vue';

export default {
  components: {
    AirPressure,
    Humidity,
    Visibility,
    Wind,
  },
  props: {
    highlights: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
