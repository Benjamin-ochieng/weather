<template>
  <div id="show" class="lg:flex">
    <search-section
      :showSearch="showSearch"
      @toggle-search="toggleSearch"
      @search-submited="updateWoeid"
    ></search-section>
    <current-section :weather="today" @toggle-search="toggleSearch" />
    <section class="lg:w-2/3 lg:py-24">
      <upcoming-section :days="comingDays" />
      <highlights-section :highlights="today.highlights" />
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
import CurrentSection from '@/components/CurrentSection.vue';
import UpcomingSection from '@/components/UpcomingSection.vue';
import HighlightsSection from '@/components/HighlightsSection.vue';
import SearchSection from '@/components/SearchSection.vue';

import api from '../service/weatherService';
import { getTodaysForecast, getUpcomingForecast } from '../service/utility';

export default {
  components: {
    SearchSection,
    CurrentSection,
    UpcomingSection,
    HighlightsSection,
  },
  data() {
    return {
      forecast: {
        consolidated_weather: [
          {
            id: 6584631945068544,
            weather_state_name: 'Light Rain',
            weather_state_abbr: 'lr',
            wind_direction_compass: 'SW',
            created: '2020-10-28T15:20:02.317028Z',
            applicable_date: '2020-10-28',
            min_temp: 9.04,
            max_temp: 12.845,
            the_temp: 13.025,
            wind_speed: 10.290454595596383,
            wind_direction: 232.00356445429645,
            air_pressure: 1002,
            humidity: 70,
            visibility: 9.476842738407699,
            predictability: 75,
          },
          {
            id: 4920621890797568,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'SW',
            created: '2020-10-28T15:20:02.617199Z',
            applicable_date: '2020-10-29',
            min_temp: 8.379999999999999,
            max_temp: 14.25,
            the_temp: 12.73,
            wind_speed: 8.9383839689785,
            wind_direction: 220.69011088476043,
            air_pressure: 1013,
            humidity: 88,
            visibility: 7.484416010498688,
            predictability: 77,
          },
          {
            id: 5085021565091840,
            weather_state_name: 'Heavy Cloud',
            weather_state_abbr: 'hc',
            wind_direction_compass: 'SW',
            created: '2020-10-28T15:20:01.808559Z',
            applicable_date: '2020-10-30',
            min_temp: 13.875,
            max_temp: 17.009999999999998,
            the_temp: 16.869999999999997,
            wind_speed: 10.854197373291974,
            wind_direction: 227.3310915578502,
            air_pressure: 1017,
            humidity: 77,
            visibility: 12.255614710093056,
            predictability: 71,
          },
          {
            id: 4856904040841216,
            weather_state_name: 'Light Rain',
            weather_state_abbr: 'lr',
            wind_direction_compass: 'SSW',
            created: '2020-10-28T15:20:02.466714Z',
            applicable_date: '2020-10-31',
            min_temp: 12.825,
            max_temp: 16.310000000000002,
            the_temp: 15.925,
            wind_speed: 11.318110727789708,
            wind_direction: 194.36215920470232,
            air_pressure: 1012.5,
            humidity: 80,
            visibility: 13.46200687982184,
            predictability: 75,
          },
          {
            id: 6414459636547584,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'SW',
            created: '2020-10-28T15:20:02.475220Z',
            applicable_date: '2020-11-01',
            min_temp: 13.719999999999999,
            max_temp: 17.57,
            the_temp: 16.85,
            wind_speed: 13.964835158474507,
            wind_direction: 214.79388651848552,
            air_pressure: 1003,
            humidity: 76,
            visibility: 10.764013163127336,
            predictability: 77,
          },
          {
            id: 5027504503914496,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'SW',
            created: '2020-10-28T15:20:05.294605Z',
            applicable_date: '2020-11-02',
            min_temp: 9.35,
            max_temp: 16.725,
            the_temp: 12.44,
            wind_speed: 8.320280959198282,
            wind_direction: 232.5,
            air_pressure: 1004,
            humidity: 74,
            visibility: 9.314975542829874,
            predictability: 77,
          },
        ],
        time: '2020-10-28T16:05:19.148724Z',
        sun_rise: '2020-10-28T06:47:39.146456Z',
        sun_set: '2020-10-28T16:40:06.071623Z',
        timezone_name: 'LMT',
        parent: {
          title: 'England',
          location_type: 'Region / State / Province',
          woeid: 24554868,
          latt_long: '52.883560,-1.974060',
        },
        sources: [
          {
            title: 'BBC',
            slug: 'bbc',
            url: 'http://www.bbc.co.uk/weather/',
            crawl_rate: 360,
          },
          {
            title: 'Forecast.io',
            slug: 'forecast-io',
            url: 'http://forecast.io/',
            crawl_rate: 480,
          },
          {
            title: 'HAMweather',
            slug: 'hamweather',
            url: 'http://www.hamweather.com/',
            crawl_rate: 360,
          },
          {
            title: 'Met Office',
            slug: 'met-office',
            url: 'http://www.metoffice.gov.uk/',
            crawl_rate: 180,
          },
          {
            title: 'OpenWeatherMap',
            slug: 'openweathermap',
            url: 'http://openweathermap.org/',
            crawl_rate: 360,
          },
          {
            title: 'Weather Underground',
            slug: 'wunderground',
            url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
            crawl_rate: 720,
          },
          {
            title: 'World Weather Online',
            slug: 'world-weather-online',
            url: 'http://www.worldweatheronline.com/',
            crawl_rate: 360,
          },
        ],
        title: 'London',
        location_type: 'City',
        woeid: 44418,
        latt_long: '51.506321,-0.12714',
        timezone: 'Europe/London',
      },
      showSearch: false,
      woeid: 44418,
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    woeid(newValue, oldValue) {
      this.updateForecast(newValue);
    },
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
    updateWoeid(query) {
      api
        .getWoeid(query)
        .then((response) => {
          const { data } = response;
          const [{ woeid }] = data;
          this.woeid = woeid;
        })

        .catch((err) => console.log(err));
    },
    updateForecast(woeid) {
      api
        .getForecast(woeid)
        .then((response) => {
          this.forecast = response.data;
          // console.log(getTodaysForecast(response.data));
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    today() {
      return getTodaysForecast(this.forecast);
    },
    comingDays() {
      return getUpcomingForecast(this.forecast);
    },
  },
  created() {
    this.updateForecast(this.woeid);
  },
};
</script>
