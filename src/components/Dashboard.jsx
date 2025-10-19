import React, { useEffect, useState, useContext } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Footer } from "./Footer";
import { WindCompass } from "./Compass";
import { User_Location_Data } from "../DataContexts";

console.log("WeatherDashboard rendered");

export const WeatherDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const itemsPerView = 6;
  const locationData = useContext(User_Location_Data);
  const [weatherDesc, setWeatherDesc] = useState("");
  const [per, setPre] = useState(80);

  //  Weather API
  const [weather, setWeather] = useState(null);
  const location = useContext(User_Location_Data);
  const lat = location?.latitude;
  const lon = location?.longitude;

  const getWeatherData = async (lat, lon) => {
    if (!lat || !lon) return;

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,precipitation_probability,apparent_temperature,uv_index&forecast_days=1&daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`
      );
      const weatherData = await response.json();

      setWeather({
        temperature: weatherData.current_weather.temperature,
        windSpeed: weatherData.current_weather.windspeed,
        windDirection: weatherData.current_weather.winddirection,
        weatherCode: weatherData.current_weather.weathercode,
        time: weatherData.current_weather.time,
        minTemp: weatherData.daily.temperature_2m_min[0],
        maxTemp: weatherData.daily.temperature_2m_max[0],
        sunrise: weatherData.daily.sunrise[0],
        sunset: weatherData.daily.sunset[0],
        uvIndexMax: weatherData.daily.uv_index_max[0],
        dailyWeatherCode: weatherData.daily.weather_code[0],
        hourlyTemp: weatherData.hourly.temperature_2m,
        hourlyApparentTemp: weatherData.hourly.apparent_temperature,
        hourlyPrecipitation: weatherData.hourly.precipitation_probability,
        hourlyUvIndex: weatherData.hourly.uv_index,
        hourlyTime: weatherData.hourly.time,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  console.log(weather);

  // console.log('Full locationData in WeatherDashboard:', locationData);
  //    console.log('Full WeatherData in WeatherDashboard', weatherData)

  //Weather Codes
  const WeatherCodes = [
    { code: 0, description: "Clear sky" },
    { code: 1, description: "Mainly clear" },
    { code: 2, description: "Partly cloudy" },
    { code: 3, description: "Overcast" },
    { code: 45, description: "Fog" },
    { code: 48, description: "Depositing rime fog" },
    { code: 51, description: "Light drizzle" },
    { code: 53, description: "Moderate drizzle" },
    { code: 55, description: "Dense drizzle" },
    { code: 56, description: "Light freezing drizzle" },
    { code: 57, description: "Dense freezing drizzle" },
    { code: 61, description: "Slight rain" },
    { code: 63, description: "Moderate rain" },
    { code: 65, description: "Heavy rain" },
    { code: 66, description: "Light freezing rain" },
    { code: 67, description: "Heavy freezing rain" },
    { code: 71, description: "Slight snow fall" },
    { code: 73, description: "Moderate snow fall" },
    { code: 75, description: "Heavy snow fall" },
    { code: 77, description: "Snow grains" },
    { code: 80, description: "Slight rain showers" },
    { code: 81, description: "Moderate rain showers" },
    { code: 82, description: "Violent rain showers" },
    { code: 85, description: "Slight snow showers" },
    { code: 86, description: "Heavy snow showers" },
    { code: 95, description: "Thunderstorm: Slight or moderate" },
    { code: 96, description: "Thunderstorm with slight hail" },
    { code: 99, description: "Thunderstorm with heavy hail" },
  ];

  console.log("weatherdisc", weatherDesc);

  // Directions based on API Data
  const getWindDirectionText = (deg) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round(deg / 22.5) % 16;
    // console.log(index)
    return directions[index];
  };
  const direction = getWindDirectionText(weather?.windDirection);

  const hourlyData = [
    { time: "5 AM", icon: "☁️", temp: "22°" },
    { time: "6 AM", icon: "☁️", temp: "22°" },
    { time: "7 AM", icon: "🌦️", temp: "23°" },
    { time: "8 AM", icon: "🌦️", temp: "24°" },
    { time: "9 AM", icon: "🌧️", temp: "25°" },
    { time: "10 AM", icon: "🌧️", temp: "26°" },
    { time: "11 AM", icon: "🌧️", temp: "27°" },
    { time: "12 PM", icon: "🌧️", temp: "27°" },
    { time: "1 PM", icon: "🌧️", temp: "26°" },
    { time: "2 PM", icon: "🌧️", temp: "25°" },
    { time: "3 PM", icon: "🌧️", temp: "25°" },
    { time: "4 PM", icon: "🌧️", temp: "24°" },
    { time: "4 PM", icon: "🌧️", temp: "24°" },
    { time: "4 PM", icon: "🌧️", temp: "24°" },
    { time: "4 PM", icon: "🌧️", temp: "24°" },
    { time: "4 PM", icon: "🌧️", temp: "24°" },
    { time: "4 PM", icon: "🌧️", temp: "24°" },
  ];

  const weeklyForecast = [
    { day: "Today", icon: "🌦️", low: "21°", high: "29°", range: 70 },
    { day: "Mon", icon: "🌦️", low: "21°", high: "29°", range: 70 },
    { day: "Tue", icon: "🌦️", low: "20°", high: "30°", range: 75 },
    { day: "Wed", icon: "🌦️", low: "21°", high: "31°", range: 80 },
    { day: "Thu", icon: "🌦️", low: "22°", high: "30°", range: 65 },
    { day: "Fri", icon: "☁️", low: "22°", high: "32°", range: 75 },
    { day: "Sat", icon: "☁️", low: "23°", high: "31°", range: 70 },
  ];

  const maxIndex = Math.max(0, hourlyData.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };
  const cities = [
    "Achalpur",
    "Adawad",
    "Agar Panchatan",
    "Aheri",
    "Ahiri",
    "Ahmadnagar",
    "Ahmadpur",
    "Ahmednagar",
  ];

  const scrollCities = (direction) => {
    if (direction === "up" && cityIndex > 0) {
      setCityIndex(cityIndex - 1);
    } else if (direction === "down" && cityIndex < cities.length - 5) {
      setCityIndex(cityIndex + 1);
    }
  };

  useEffect(() => {
    getWeatherData(lat, lon);

    if (weather?.dailyWeatherCode !== undefined) {
      const matchedWeather = WeatherCodes.find(
        (item) => item.code === weather.dailyWeatherCode
      );

      if (matchedWeather) {
        setWeatherDesc(matchedWeather.description);
      } else {
        setWeatherDesc("Unknown weather condition");
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [weather?.dailyWeatherCode]);

  //Loading...
  if (loading) {
    return (
      <div className=" min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-white text-lg">Loading current Weather...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <main
        aria-label="weather-dashboard"
        className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 p-4 md:p-6 "
      >
        <div className="flex justify-between max-w-7xl mx-auto my-2 md:my-4 p-2 md:p-4 rounded-xl bg-gray-900 text-neutral-100 shadow-xl border animate-fadeIn">
          <div>
            <p className="text-md md:text-2xl font-semibold tracking-wide">
              <span className="text-yellow-400">{locationData?.city}</span>:
              current weather conditions
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Stay updated with the latest weather information to plan your day
              effectively.
            </p>
          </div>
        </div>
        {/* Weather Map */}
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700 animate-fadeIn">
          <div className="bg-gray-900 p-4 tracking-wide">
            <h2 className="text-xl font-semibold text-neutral-100">
              Your live weather map
            </h2>
            <p className="text-sm text-gray-400">
              Interactive weather conditions powered by Windy.com
            </p>
          </div>
          <iframe
            src="https://embed.windy.com/embed2.html?lat=19.07&lon=72.87&zoom=5&level=surface&overlay=wind"
            className="w-full h-96"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* =====================================First grid============================  */}
        <div className="text-white py-3 md:p-5 animate-fadeIn ">
          <div className="max-w-7xl mx-auto ">
            {/* Top Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-5 mb-5">
              {/* Current Weather Card */}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-sm font-normal text-gray-400 mb-2">
                  Current Weather Conditions in{" "}
                  {locationData?.localityInfo?.administrative?.[2]?.name ||
                    "District not found"}
                </h3>

                <div className="flex justify-between  items-center mb-20">
                  <div>
                    <h1 className="text-[32px] font-semibold">
                      {locationData?.city}
                    </h1>
                    <p className="text-sm text-gray-400">
                      {locationData?.localityInfo?.administrative?.[1]?.name}{" "}
                      {locationData?.localityInfo?.administrative?.[0]?.isoName}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl opacity-60">☁️</div>
                    <div className="text-sm text-gray-400">{weatherDesc}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[96px] font-light leading-none">
                    {weather?.temperature}°
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 my-1">
                      Low{" "}
                      <span className="text-white ml-2">
                        {Math.round(weather?.minTemp)}°
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 my-1">
                      High{" "}
                      <span className="text-white ml-2">
                        {Math.round(weather?.maxTemp)}°
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/*24hr Hourly Forecast Card */}
              <div className="bg-gray-900 rounded-xl p-6 overflow-hidden">
                <div className="flex items-center justify-between  gap-2 mb-5">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-[18px] h-[18px] opacity-60"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>

                    <h3 className="text-base font-medium text-gray-400">
                      Hourly {locationData?.city} Weather Forecast
                    </h3>
                  </div>
                  <div className=" flex gap-x-3 justify-between">
                    <ChevronLeft
                      onClick={() => handleNext()}
                      className="cursor-pointer"
                    />{" "}
                    <ChevronRight
                      onClick={() => handlePrev()}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex gap-3  overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab">
                  {hourlyData.map((hour, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 min-w-[70px] "
                    >
                      <div className="text-[13px] text-gray-400 font-medium ">
                        {hour.time}
                      </div>
                      <div className="text-[32px] opacity-80">{hour.icon}</div>
                      <div className="text-[15px] font-medium">{hour.temp}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Wind Card  Direction Compass*/}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="flex items-center gap-2 text-sm font-normal text-gray-400 mb-5">
                  <svg
                    className="w-4 h-4 opacity-60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
                      strokeWidth="2"
                    />
                  </svg>
                  Wind
                </h3>
                <div className="text-[32px] font-semibold mb-5">
                  {weather.windSpeed}kt{" "}
                  <span className="text-gray-400">{direction}</span>
                </div>
                <div className="mx-auto flex align-center justify-center">
                  <WindCompass
                    windSpeed={weather?.windSpeed}
                    windDirection={weather?.windDirection}
                  />
                </div>
                <div className="text-center text-[13px] text-gray-400 mt-4">
                  Very gentle wind.
                </div>
              </div>

              {/* Precipitation Card */}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="flex items-center gap-2 text-sm font-normal text-gray-400 mb-5">
                  <svg
                    className="w-4 h-4 opacity-60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
                      strokeWidth="2"
                    />
                  </svg>
                  Precipitation
                </h3>

                <div className="text-[32px] font-semibold mb-5">{per}%</div>

                <div className="w-full h-3 bg-[#1a2332] rounded-full overflow-hidden mb-3">
                  <div
                    style={{ width: `${per}%` }}
                    className="relative h-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_0_3px_#243447]"></div>
                  </div>
                </div>

                <div className="text-center text-[13px] text-gray-400 mt-4">
                  Moderate chance of precipitation.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================Second grid============================  */}
        <div className="text-white py-3 md:p-5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr_280px] gap-4">
            {/* Left Column - Weekly Forecast */}
            <div className="space-y-3">
              {weeklyForecast.map((forecast, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="w-16 text-sm font-medium">{forecast.day}</div>
                  <div className="text-3xl">{forecast.icon}</div>
                  <div className="flex items-center gap-3 flex-1 ml-4">
                    <span className="text-sm w-8">{forecast.low}</span>
                    <div className="flex-1 h-1.5 bg-[#0d1b2a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#5b7fd6] via-[#8b6fd6] to-[#d65b9e] rounded-full"
                        style={{ width: `${forecast.range}%` }}
                      ></div>
                    </div>
                    <span className="text-sm w-8 text-right">
                      {forecast.high}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Column - Weather Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 h-auto">
              {/* Feels Like */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex  md:items-center gap-2 text-gray-400 mb-1 md:mb-3">
                  <span className="temp-svg">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="7aab0e78" clipPath="url(#adf714cf)">
                        <g id="b2f4cbc7">
                          <path
                            id="beb4c430"
                            d="M8.33325 5.20833C8.33325 4.10326 8.77224 3.04345 9.55364 2.26205C10.335 1.48065 11.3949 1.04166 12.4999 1.04166C13.605 1.04166 14.6648 1.48065 15.4462 2.26205C16.2276 3.04345 16.6666 4.10326 16.6666 5.20833V10.6823C17.9405 11.5693 18.8981 12.8398 19.4 14.3088C19.9019 15.7778 19.9218 17.3686 19.457 18.8497C18.9921 20.3309 18.0667 21.625 16.8154 22.5437C15.5641 23.4624 14.0523 23.9579 12.4999 23.9579C10.9476 23.9579 9.43572 23.4624 8.18444 22.5437C6.93315 21.625 6.00773 20.3309 5.54287 18.8497C5.078 17.3686 5.09796 15.7778 5.59984 14.3088C6.10171 12.8398 7.05931 11.5693 8.33325 10.6823V5.20833ZM9.52492 12.3906C8.61468 13.0241 7.93038 13.9315 7.57164 14.9808C7.2129 16.0301 7.19844 17.1665 7.53038 18.2247C7.86231 19.2828 8.52331 20.2073 9.41714 20.8637C10.311 21.5201 11.391 21.874 12.4999 21.874C13.6089 21.874 14.6889 21.5201 15.5827 20.8637C16.4765 20.2073 17.1375 19.2828 17.4695 18.2247C17.8014 17.1665 17.7869 16.0301 17.4282 14.9808C17.0695 13.9315 16.3852 13.0241 15.4749 12.3906L14.5833 11.7687V5.20833C14.5833 4.6558 14.3638 4.12589 13.9731 3.73519C13.5824 3.34449 13.0525 3.125 12.4999 3.125C11.9474 3.125 11.4175 3.34449 11.0268 3.73519C10.6361 4.12589 10.4166 4.6558 10.4166 5.20833V11.7687L9.52492 12.3906ZM11.4583 12.6312V5.20833H13.5416V12.6312C14.5213 12.8872 15.3743 13.491 15.9414 14.3299C16.5085 15.1687 16.7509 16.1853 16.6233 17.1898C16.4957 18.1943 16.0069 19.118 15.2481 19.7885C14.4893 20.459 13.5125 20.8304 12.4999 20.8333C11.4851 20.8343 10.5047 20.4649 9.74291 19.7944C8.9811 19.1239 8.4902 18.1984 8.36234 17.1916C8.23447 16.1848 8.47845 15.166 9.04847 14.3264C9.61849 13.4867 10.4754 12.884 11.4583 12.6312ZM12.4999 18.75C13.0525 18.75 13.5824 18.5305 13.9731 18.1398C14.3638 17.7491 14.5833 17.2192 14.5833 16.6667C14.5833 16.1141 14.3638 15.5842 13.9731 15.1935C13.5824 14.8028 13.0525 14.5833 12.4999 14.5833C11.9474 14.5833 11.4175 14.8028 11.0268 15.1935C10.6361 15.5842 10.4166 16.1141 10.4166 16.6667C10.4166 17.2192 10.6361 17.7491 11.0268 18.1398C11.4175 18.5305 11.9474 18.75 12.4999 18.75Z"
                            fill="white"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="adf714cf">
                          <rect width="25" height="25" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>Feels like</span>
                </div>
                <div className=" text-lg md:text-3xl font-semibold mb-3">
                  27°
                </div>
                <div className="text-sm text-gray-400">
                  Feels warmer than actual temperature.
                </div>
              </div>

              {/* Pressure */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex items-center gap-2 text-gray-400  mb-1 md:mb-3">
                  <span>📊</span>
                  <span>Pressure</span>
                </div>
                <div className=" text-lg md:text-3xl font-semibold mb-3">
                  951 hPa
                </div>
                <div className="text-sm text-gray-400">
                  Expect unstable weather conditions.
                </div>
              </div>

              {/* Humidity */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex items-center gap-2 text-gray-400  mb-1 md:mb-3">
                  <span>💧</span>
                  <span>Humidity</span>
                </div>
                <div className="text-lg md:text-3xl font-semibold mb-3">
                  84%
                </div>
                <div className="text-sm text-gray-400">High humidity.</div>
              </div>

              {/* UV */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                  <span>☀️</span>
                  <span>UV</span>
                </div>
                <div className="tex-lg md:text-3xl font-semibold mb-3">
                  7 - High
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-2 bg-[#0d1b2a] rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-green-400 via-yellow-400  to-red-400 rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#1b2838]"></div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">Take precautions.</div>
              </div>

              {/* Gusts */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                  <span>💨</span>
                  <span>Gusts</span>
                </div>
                <div className="text-lg md:text-3xl font-semibold mb-3">
                  18kt
                </div>
                <div className="text-sm text-gray-400">
                  Max speed of wind gusts today.
                </div>
              </div>

              {/* Cloud Cover */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                  <span>☁️</span>
                  <span>Cloud Cover</span>
                </div>
                <div className="text-lg md:text-3xl font-semibold mb-3">
                  100%
                </div>
                <div className="text-sm text-gray-400">
                  Overcast, expect cloudy conditions.
                </div>
              </div>

              {/* Daylight */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                  <span>🌅</span>
                  <span>Daylight</span>
                </div>
                <div className="text-lg md:text-3xl font-semibold mb-3">
                  11h 53m
                </div>
                <div className="text-sm text-gray-400">
                  Balanced day and night.
                </div>
              </div>

              {/* Rain */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                  <span>🌧️</span>
                  <span>Rain</span>
                </div>
                <div className="text-lg md:text-3xl font-semibold mb-3">
                  0.0mm
                </div>
                <div className="text-sm text-gray-400">
                  No rain, dry conditions expected.
                </div>
              </div>

              {/* Snowfall */}
              <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                  <span>❄️</span>
                  <span>Snowfall</span>
                </div>
                <div className="text-lg md:text-3xl font-semibold mb-3">
                  0.0mm
                </div>
                <div className="text-sm text-gray-400">
                  No snowfall expected.
                </div>
              </div>
            </div>

            {/* Right Column - More Cities */}
            <div className="bg-gray-900 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-gray-400">
                  More Cities
                </h3>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => scrollCities("up")}
                    disabled={cityIndex === 0}
                    className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#0d1b2a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollCities("down")}
                    disabled={cityIndex >= cities.length - 5}
                    className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#0d1b2a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 overflow-hidden">
                <div
                  className="transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateY(-${cityIndex * 52}px)` }}
                >
                  {cities.map((city, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg px-4 py-3 mb-2 hover:bg-[#152230] cursor-pointer transition-colors"
                    >
                      <div className="text-sm font-medium">{city}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
