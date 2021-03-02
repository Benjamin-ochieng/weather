<template>
  <div
    id="current-weather"
    class="showCurrent ? 'block' : 'hidden' px-3 py-5 bg-lightBlue lg:w-1/3"
    style="background-image: url('../assets/images/weatherIcons/Cloud-background.png')"
  >
    <div id="nav" class="flex justify-between">
      <button class="px-4 py-3 text-xs bg-white bg-opacity-50" @click="toggle">
        Search for places
      </button>
    </div>
    <div class="flex flex-col items-center py-16">
      <base-icon :name="weather.icon" class="w-40 h-auto" />
      <div class="mt-4">
        <p class="text-10xl font-body">
          {{ weather.temp }}<span class="text-4xl opacity-75">℃</span>
        </p>
        <p class="text-4xl text-center opacity-75">{{ weather.name }}</p>
        <div
          class="flex mt-12 justify-around items-center text-lg opacity-75 tracking-wider lg:my-10"
        >
          <p>Today</p>
          <span>.</span>
          <p>{{ weather.date }}</p>
        </div>
        <div class="flex mt-12 justify-center items-center text-lg opacity-75">
          <svg class="w-6 h-6 mx-1 fill-current opacity-75">
            <g clip-path="url(#clip0)">
              <path
                fill="#fff"
                d="M11.983 24c1.586-2.446 7.83-12.326 7.83-16.17a7.83 7.83 0 10-15.66 0c0 3.845 6.245 13.724 7.83 16.17zm0-19.215a3.045 3.045 0 110 6.09 3.045 3.045 0 010-6.09z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </svg>
          <p>{{ weather.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
    },
    showCurrent: {
      type: Boolean,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle-search');
    },
  },
};
</script>

<style lang="scss" scoped></style>
