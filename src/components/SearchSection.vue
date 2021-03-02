<template>
  <div
    :class="showSearch ? 'block' : 'hidden'"
    class="absolute inset-y-0 inset-left-0 z-50 h-screen lg:w-1/3 bg-lightBlue"
  >
    <div id="close-icon" class="flex justify-end p-4" @click="toggle">
      <svg class="w-4 h-4 fill-current">
        <g clip-path="url(#clip0)">
          <path
            d="M9.466 8.013l6.23-6.23A1.035 1.035 0 1014.23.317L8 6.547 1.77.317A1.036 1.036 0 10.304 1.783l6.23 6.23-6.23 6.23a1.035 1.035 0 00.733 1.77c.265 0 .53-.102.733-.304L8 9.48l6.23 6.23a1.034 1.034 0 001.466 0 1.035 1.035 0 000-1.466l-6.23-6.23z"
          />
        </g>
      </svg>
    </div>
    <form id="search" class="p-4 flex" @submit.prevent="onSubmit">
      <div class="relative max-w-sm w-full border-2 border-solid">
        <div class="absolute pl-4 flex items-center inset-y-0 inset-left-0">
          <svg class="w-4 h-4 fill-current opacity-50">
            <defs />
            <g clip-path="url(#clip0)">
              <path
                d="M15.805 14.862l-4.55-4.55a6.302 6.302 0 001.411-3.979A6.34 6.34 0 006.333 0 6.34 6.34 0 000 6.333a6.34 6.34 0 006.333 6.334c1.507 0 2.89-.531 3.979-1.412l4.55 4.55a.665.665 0 00.943 0 .666.666 0 000-.943zm-9.472-3.529c-2.757 0-5-2.242-5-5 0-2.757 2.243-5 5-5 2.758 0 5 2.243 5 5 0 2.758-2.242 5-5 5z"
              />
            </g>
          </svg>
        </div>
        <input
          placeholder="Search location"
          class="w-full pl-12 py-3 bg-darkBlue focus:outline-none opacity-50"
          v-model="query"
        />
      </div>
      <button type="submit" value="Submit" class="ml-3 px-5 bg-buttonIndigo" @click="toggle">
        search
      </button>
    </form>
    <div id="saved-locations" class="px-4">
      <button class="my-6 w-full flex px-3 py-6 text-base hover:bg-buttonIndigo">London</button>
      <button class="my-6 w-full flex px-3 py-6 text-base hover:bg-buttonIndigo">Barcelona</button>
      <button class="my-6 w-full flex px-3 py-6 text-base hover:bg-buttonIndigo">Long Beach</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSearch: {
      type: Boolean,
    },
  },
  data() {
    return {
      query: '',
    };
  },
  methods: {
    toggle() {
      this.$emit('toggle-search');
    },
    onSubmit() {
      this.$emit('search-submited', this.query);
      this.query = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
