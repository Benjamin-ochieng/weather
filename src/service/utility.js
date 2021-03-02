/* eslint-disable camelcase */
import dateFormat from 'dateformat';

// eslint-disable-next-line import/prefer-default-export
export const getTodaysForecast = (forecast) => {
  //   const forecast = JSON.parse(data);
  const { consolidated_weather, title } = forecast;
  const [today] = consolidated_weather;
  const {
    id,
    weather_state_name,
    the_temp,
    applicable_date,
    wind_speed,
    wind_direction_compass,
    humidity,
    visibility,
    air_pressure,
  } = today;
  const location = title;
  const date = dateFormat(applicable_date, 'ddd, d mmm');
  const name = weather_state_name;
  const icon = weather_state_name.split(' ').join('');
  const temp = Math.round(the_temp);
  const speed = Math.round(wind_speed);
  const compass = wind_direction_compass;
  const clarity = Math.round(visibility);
  const millibars = Math.round(air_pressure);

  return {
    id,
    icon,
    name,
    temp,
    date,
    location,
    highlights: { speed, compass, humidity, clarity, millibars },
  };
};

export const getUpcomingForecast = (forecast) => {
  const { consolidated_weather } = forecast;
  return consolidated_weather
    .filter((c, i) => i > 0)
    .map((day) => {
      const { id, weather_state_name, min_temp, max_temp, applicable_date } = day;
      const date = dateFormat(applicable_date, 'ddd, d mmm');
      const name = weather_state_name;
      const icon = weather_state_name.split(' ').join('');
      const min = Math.round(min_temp);
      const max = Math.round(max_temp);
      return { id, icon, name, min, max, date };
    });
};
