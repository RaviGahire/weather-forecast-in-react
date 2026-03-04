import axios from "axios";
import { useState } from "react";

export const FetchWeatherData = async (lat, lon) => {

    if (!lat || !lon) return null;

    try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,precipitation_probability,apparent_temperature,uv_index,weather_code,relative_humidity_2m,pressure_msl,cloud_cover,precipitation,rain,snowfall,wind_gusts_10m&forecast_days=1&daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto&forecast_days=7`);
        const data = response.data

        // console.log(data)

        return {
            current: {
                temp: data.current_weather.temperature,
                windSpeed: data.current_weather.windspeed,
                windDir: data.current_weather.winddirection,
                code: data.current_weather.weathercode,
                time: data.current_weather.time,
            },
            today: {
                minTemp: data.daily.temperature_2m_min[0],
                maxTemp: data.daily.temperature_2m_max[0],
                sunrise: data.daily.sunrise[0],
                sunset: data.daily.sunset[0],
                uvMax: data.daily.uv_index_max[0],
            },
            hourly: {
                time: data.hourly.time,
                temp: data.hourly.temperature_2m,
                apparentTemp: data.hourly.apparent_temperature,
                precipProb: data.hourly.precipitation_probability,
                humidity: data.hourly.relative_humidity_2m,
                pressure: data.hourly.pressure_msl,
                gusts: data.hourly.wind_gusts_10m,
                clouds: data.hourly.cloud_cover,
                rain: data.hourly.rain,
                snow: data.hourly.snowfall,
                uvIndex: data.hourly.uv_index,
                weatherCodes:data.hourly.weather_code
            },
            daily: {
                maxTemps: data.daily.temperature_2m_max,
                minTemps: data.daily.temperature_2m_min,
                codes: data.daily.weather_code,
                times: data.daily.time
            }
        };

    } catch (error) {
        console.error("Weather API Error:", error.message);
        throw error;
    }


}
