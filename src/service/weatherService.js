import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application.json',
  },
});

export default {
  getWoeid(query) {
    return apiClient.get(`/api/location/search/?query=${query}`);
  },
  getForecast(woeid) {
    return apiClient.get(`/api/location/${woeid}/`);
  },
};
