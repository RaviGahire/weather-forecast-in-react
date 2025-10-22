import React, { useEffect, useState, useContext } from "react";
import {
    ChevronUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    SunIcon,
    CloudIcon,
    Cloudy,
    Slice,
} from "lucide-react";
import { Footer } from "./Footer";
import { WindCompass } from "./Compass";
import { User_Location_Data } from "../DataContexts";
import { DayLightIcon, GustsIcon, PressureIcon, RainDropIcon, SnowIcon, TempIcon, ClearSky, PartlyCloudy, Fog, Drizzle, Rain, Snow, RainShowers, SnowShowers, Thunderstorm } from "./AnimatedSvg";

console.log("WeatherDashboard rendered");

export const WeatherDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cityIndex, setCityIndex] = useState(0);
    const itemsPerView = 6;
    const locationData = useContext(User_Location_Data);
    const [weatherDesc, setWeatherDesc] = useState("");
    const [weatherIcon, setWeatherIcon] = useState("")
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
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,precipitation_probability,apparent_temperature,uv_index,weather_code&forecast_days=1&daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`);
            const weatherData = await response.json();

            console.log(weatherData)

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
                hourlyCode: weatherData.hourly.weather_code

            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };



    // console.log('Full locationData in WeatherDashboard:', locationData);
    // console.log('Full WeatherData in WeatherDashboard', weatherData)

    //Weather Codes and icons 
    const WeatherCodes = [
        { code: 0, description: "Clear sky", icon: <ClearSky width="60" height="50" /> },
        { code: 1, description: "Mainly clear", icon: <ClearSky /> },
        { code: 2, description: "Partly cloudy", icon: <PartlyCloudy width="60" height="50" /> },
        { code: 3, description: "Cloudy", icon: <Cloudy width="60" height="50" /> },
        { code: 45, description: "Fog", icon: <Fog width="60" height="50" /> },
        { code: 48, description: "Rime fog", icon: <Fog /> },
        { code: 51, description: "Light drizzle", icon: <Drizzle width="60" height="50" /> },
        { code: 53, description: "Moderate drizzle", icon: <Drizzle /> },
        { code: 55, description: "Dense drizzle", icon: <Drizzle /> },
        { code: 56, description: "Light freezing drizzle", icon: <Drizzle /> },
        { code: 57, description: "Dense freezing drizzle", icon: <Drizzle /> },
        { code: 61, description: "Slight rain", icon: <Rain width="60" height="50" /> },
        { code: 63, description: "Moderate rain", icon: <Rain /> },
        { code: 65, description: "Heavy rain", icon: <Rain /> },
        { code: 66, description: "Light freezing rain", icon: <Rain /> },
        { code: 67, description: "Heavy freezing rain", icon: <Rain /> },
        { code: 71, description: "Slight snow fall", icon: <Snow width="60" height="50" /> },
        { code: 73, description: "Moderate snow fall", icon: <Snow /> },
        { code: 75, description: "Heavy snow fall", icon: <Snow /> },
        { code: 77, description: "Snow grains", icon: <Snow /> },
        { code: 80, description: "Slight Showers", icon: <RainShowers width="60" height="50" /> },
        { code: 81, description: "Moderate Showers", icon: <RainShowers /> },
        { code: 82, description: "Violent Showers", icon: <RainShowers /> },
        { code: 85, description: "Slight Snow", icon: <SnowShowers width="60" height="50" /> },
        { code: 86, description: "Heavy Snow", icon: <SnowShowers /> },
        { code: 95, description: "Thunderstorm: Slight", icon: <Thunderstorm width="60" height="50" /> },
        { code: 96, description: "Thunderstorm: slight hail", icon: <Thunderstorm /> },
        { code: 99, description: "Thunderstorm: heavy hail", icon: <Thunderstorm /> },
    ];

    //Weather Codes and icons for 24hr 
    const iconMap = {
        0: <ClearSky width="20" height="20" />,
        1: <ClearSky width="20" height="20" />,
        2: <PartlyCloudy width="20" height="20" />,
        3: <Cloudy width="20" height="20" />,
        45: <Fog width="20" height="20" />,
        48: <Fog width="20" height="20" />,
        51: <Drizzle width="20" height="20" />,
        53: <Drizzle width="20" height="20" />,
        55: <Drizzle width="20" height="20" />,
        56: <Drizzle width="20" height="20" />,
        57: <Drizzle width="20" height="20" />,
        61: <Rain width="20" height="20" />,
        63: <Rain width="20" height="20" />,
        65: <Rain width="20" height="20" />,
        66: <Rain width="20" height="20" />,
        67: <Rain width="20" height="20" />,
        71: <Snow width="20" height="20" />,
        73: <Snow width="20" height="20" />,
        75: <Snow width="20" height="20" />,
        77: <Snow width="20" height="20" />,
        80: <RainShowers width="20" height="20" />,
        81: <RainShowers width="20" height="20" />,
        82: <RainShowers width="20" height="20" />,
        85: <SnowShowers width="20" height="20" />,
        86: <SnowShowers width="20" height="20" />,
        95: <Thunderstorm width="20" height="20" />,
        96: <Thunderstorm width="20" height="20" />,
        99: <Thunderstorm width="20" height="20" />
    };







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




    // 24 Hours
    const tm = Object.values(weather?.hourlyTime || {});
    const formattedTimes = tm.map((t) => {
        // Extract the time portion (format like "2024-01-01T14:30:00")
        const timeString = t.slice(11, 16); // Gets "14:30"
        const date = new Date(`1970-01-01T${timeString}:00`); // Create valid date
        return date.toLocaleTimeString([], {
            hour: "2-digit",
            hour12: true

        });
    });



    // 24 hr Weather temp, time, icons 
    const temps = Object.values(weather?.hourlyApparentTemp || {});

    //  codes are numbers
    const hourlyCodes = (weather?.hourlyCode || []).map(Number);

    //  icon list 
    const weather_icons = Object.entries(iconMap).map(([code, icon]) => ({
        numericCode: Number(code),
        icon,
    }));

    // Match each hourly code with its icon
    const hourlyIcons = hourlyCodes.map((code) => {
        const matched = weather_icons.find((item) => item.numericCode === code);
        return matched ? matched.icon : <Cloudy width="20" height="20" />; 
    });

    console.log("Hourly icons:", hourlyIcons);










    const hourlyData = formattedTimes.map((time, index) => ({
        time: time,
        icon: hourlyIcons[index],
        temp: `${temps[index]}°`
    }));



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
            // console.log(matchedWeather.icon)

            if (matchedWeather) {
                setWeatherDesc(matchedWeather.description);
                setWeatherIcon(matchedWeather.icon)
            } else {
                setWeatherDesc("Unknown weather condition");
                setWeatherIcon(null)
            }
        }

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [weather?.dailyWeatherCode]);










    //Loader...
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
                                        <div className="opacity-60">{weatherIcon}</div>
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
                                    <span>
                                        <TempIcon />
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
                                    <span><PressureIcon /></span>
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
                                    <span><RainDropIcon /></span>
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
                                    <span><SunIcon /></span>
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
                                    <span><GustsIcon /></span>
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
                                    <span><CloudIcon /></span>
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
                                    <span><DayLightIcon /></span>
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
                                    <span><RainDropIcon /></span>
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
                                    <span><SnowIcon /></span>
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
