import { useEffect, useState, useContext } from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, SunIcon, CloudIcon, Cloudy, } from "lucide-react";
import { DayLightIcon, GustsIcon, PressureIcon, RainDropIcon, SnowIcon, TempIcon, ClearSky, PartlyCloudy, Fog, Drizzle, Rain, Snow, RainShowers, SnowShowers, Thunderstorm } from "../utils/AnimatedSvg";
import { Footer } from "./Footer";
import { WindCompass } from "../utils/Compass";
import { Weekly } from "../utils/Weekly";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { UserLocationContext } from "../context/UserLocationContext"
import { FetchWeatherData } from "../utils/FetchWeatherData";


export const WeatherDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cityIndex, setCityIndex] = useState(0);
    const [weatherDesc, setWeatherDesc] = useState("");
    const [weatherIcon, setWeatherIcon] = useState("");
    const [weather, setWeather] = useState(null);
    const itemsPerView = 6;

    const { locationData } = useContext(UserLocationContext); if (!locationData) return {} // if location data is not available set empty obj

    console.log(weather)
    // console.log(locationData)



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
    const direction = getWindDirectionText(weather?.current.windDir);


    const timeArray = weather?.hourly?.time || [];
    const formattedTimes = timeArray.map((t) => {
        const date = new Date(t)
        return date.toLocaleTimeString([], {
            hour: "numeric",
            hour12: true
        })
    })


    // 24 hr grid Weather temp, time, icons 
    const temps = Object.values(weather?.hourly?.apparentTemp || {});

    //  codes are numbers
    const hourlyCodes = (weather?.hourly.weatherCodes || []).map(Number);

    //  icon list 
    const weather_icons = Object.entries(iconMap).map(([code, icon]) => ({
        numericCode: Number(code),
        icon,
    }));

    // Match each hourly code with its icon
    const hourlyIcons = hourlyCodes.map(code => {
        const matched = weather_icons.find(
            item => item.numericCode === code
        );

        return matched?.icon || "Icon Not Found";
    });

    const hourlyData = formattedTimes.map((time, index) => (
        {
            time: time,
            icon: hourlyIcons[index],
            temp: `${temps[index]}°`
        }));

    //Only 24 hr data
    const hoursPerDay = 24;
    const currentDayIndex = new Date().getDay();
    const startIndex = currentDayIndex * hoursPerDay;
    const endIndex = startIndex + hoursPerDay;
    const todayData = hourlyData.slice(startIndex, endIndex);
  
    // console.log(todayData); 
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));


    // hourly precipitation data 
    const currentHour = new Date().getHours(); // Get the current hour index
    const precipitation_probability = weather?.hourly?.precipProb || []
    const currentPrecipitation = precipitation_probability[currentHour];
    // console.log(currentPrecipitation)


    // Weekly data 
    const weeklyIcons = weather?.daily?.codes?.map((code, i) => {
        const matched = weather_icons.find((item) => item.numericCode === code)
        return matched ? matched.icon : <Snow width="20" height="20" />
    })

    // console.log('Weeklyicons', weeklyIcons)

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const transformedData = days.map((day, index) => ({
        day,
        maxTemp: weather?.daily?.maxTemps[index] ,
        minTemp: weather?.daily?.minTemps[index] ,
        icons: weeklyIcons,
    }));

    // console.log(transformedData)

    //Weather Details Grid 
    const feelLike = weather?.hourly?.apparentTemp?.[currentHour];
    const humidity = weather?.hourly?.humidity?.[currentHour];
    const pressure = weather?.hourly?.pressure?.[currentHour];
    // const UVindex = weather?.today?.uvMax;
    const gusts = weather?.hourly?.gusts?.[currentHour];
    const clouds = weather?.hourly?.clouds?.[currentHour];
    const rain = weather?.hourly?.rain?.[currentHour];
    const snow = weather?.hourly?.snow?.[currentHour];
    const UVindex = weather?.hourly?.uvIndex?.[currentHour];
    const Uvbar = Math.min(((UVindex || 0) / 12) * 100, 100);

    const sunrise = weather?.today?.sunrise;
    const sunset = weather?.today?.sunset;

    let daylightText = "N/A";
    if (sunrise && sunset) {
        const daylightMs = new Date(sunset) - new Date(sunrise);
        const hours = Math.floor(daylightMs / (1000 * 60 * 60));
        const minutes = Math.round((daylightMs % (1000 * 60 * 60)) / (1000 * 60));
        daylightText = `${hours}h ${minutes}m`;
    }

    // Carousel/List logic
    const maxIndex = Math.max(0, (weather?.hourly?.time?.length || 0) - itemsPerView);


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
        //fetch wether data if user location data is available        
        if (locationData) {
            FetchWeatherData(locationData.latitude, locationData.longitude)
                .then((data) => setWeather(data))
                .catch(error => console.log(error.message))
                .finally(setLoading(false))
        } else {
            console.log("Location data is not available")
        }


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
    }, [locationData]); //weather?.dailyWeatherCode


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
                <SpeedInsights />

                <div className="flex justify-between max-w-7xl mx-auto my-2 md:my-4 p-3 md:p-4 rounded-xl bg-[#0c2545] shadow-xl animate-fadeIn">
                    <div>
                        <p className=" text-lg md:text-2xl font-semibold text-gray-100 tracking-tight leading-snug">

                            Current weather conditions in <span className="text-gray-300 underline">{locationData?.city}</span>

                        </p>
                        <p className="mt-1 text-sm text-gray-400">
                            Stay updated with the latest weather information to plan your day
                            effectively.
                        </p>
                    </div>
                </div>
                {/* Weather Map */}
                <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700 animate-fadeIn">
                    <div className=" bg-[#0c2545] p-4 tracking-wide">
                        <h2 className="text-base md:text-xl font-semibold text-neutral-100">
                            Your live weather map
                        </h2>
                        <p className="text-sm text-gray-400">
                            Interactive weather conditions powered by Windy.com
                        </p>
                    </div>
                    <iframe
                        src="https://embed.windy.com/embed2.html?lat=19.07&lon=72.87&zoom=5&level=surface&overlay=wind"
                        className="w-full h-96"
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
                                <div className="flex justify-between items-center mb-20">
                                    <div className="flex-0">
                                        <h1 className="text-[32px] font-semibold">
                                            {locationData?.city}
                                        </h1>
                                        <p className="text-sm text-gray-400">
                                            {locationData?.localityInfo?.administrative?.[1]?.name}{" "}
                                            {locationData?.localityInfo?.administrative?.[0]?.isoName}
                                        </p>
                                    </div>
                                    <div >
                                        <div className="opacity-80 flex items-center justify-center">{weatherIcon}</div>
                                        <div className="text-sm text-gray-400">{weatherDesc}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-cente">
                                    <div className="text-[96px] font-light leading-none">
                                        {weather?.current?.temp}°
                                    </div>
                                    <div className="text-start  place-content-end ">
                                        <div className="text-sm  text-gray-400 my-1">
                                            Low{" "}
                                            <span className="text-white ml-2">
                                                {Math.round(weather?.daily?.minTemps[0])}°
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-400 my-1">
                                            High{" "}
                                            <span className="text-white ml-2">
                                                {Math.round(weather?.daily?.maxTemps[0])}°
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*24hr Hourly Forecast Card */}
                            <div className="bg-gray-900 rounded-xl p-6 overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between gap-2 mb-5">
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

                                    <div className="flex gap-x-3 justify-between">
                                        <ChevronLeft
                                            onClick={prevSlide}
                                            className="cursor-pointer hover:text-white text-gray-400"
                                        />
                                        <ChevronRight
                                            onClick={nextSlide}
                                            className="cursor-pointer hover:text-white text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Carousel Section */}
                                <div className="relative overflow-hidden">
                                    <div
                                        className="flex md:mt-20 transition-transform duration-500 ease-in-out"
                                        style={{
                                            transform: `translateX(-${currentIndex * 10}%)`,

                                        }}
                                    >
                                        {todayData.map((hour, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col justify-center items-center gap-2 min-w-[70px] "
                                            >
                                                <div className="text-[13px] text-gray-400 font-medium">
                                                    {hour.time}
                                                </div>
                                                <div className="text-[32px] opacity-80">{hour.icon}</div>
                                                <div className="text-[15px] font-medium">{hour.temp}°</div>
                                            </div>
                                        ))}
                                    </div>
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
                                    {weather?.current?.windSpeed}kt {' '}
                                    <span className="text-gray-400">{direction}</span>
                                </div>

                                <div className="flex">
                                    <div className=" w-1/2">
                                        <p className="mt-3 text-sm font-normal text-gray-400">Wind {weather?.current?.windSpeed} kph</p>
                                        <div className="bg-gray-500 h-px" > </div>
                                        <p className="mt-3 text-sm font-normal text-gray-400">Guests {weather?.hourly.gusts[currentHour]} Kph</p>
                                        <div className="bg-gray-500 h-px" > </div>
                                        <p className="mt-3 text-sm font-normal text-gray-400">Direction {weather?.current.windDir} {direction}</p>
                                        <div className="bg-gray-500 h-px" > </div>
                                    </div>

                                    <div className="mx-auto w-1/2  flex align-center justify-center">
                                        <WindCompass
                                            windDirection={weather?.current?.windDir}
                                            windSpeed={weather?.current?.windSpeed}

                                        />
                                    </div>

                                </div>
                                <div className="text-center text-[13px] text-gray-400 mt-4">
                                    Very gentle wind.
                                </div>
                            </div>

                            {/* Precipitation Card */}
                            <div className="bg-gray-900 rounded-xl p-6 ">
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

                                <div className="text-[32px] font-semibold mb-5">{currentPrecipitation}%</div>

                                <div className="w-full h-3  bg-[#1a2332] rounded-full overflow-hidden mb-3">
                                    <div
                                        style={{ width: `${currentPrecipitation}%` }}
                                        className="relative h-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full"
                                    >
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_0_3px_#243447]"></div>
                                    </div>
                                </div>

                                <div className="text-center text-[13px] text-gray-400 mt-6">
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
                        <div className="space-y-3 ">
                            <Weekly dailyData={transformedData} />
                        </div>

                        {/* Middle Column - Weather Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 ">
                            {/* Feels Like */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex  md:items-center gap-2 text-gray-400 mb-1 md:mb-3">
                                    <span>
                                        <TempIcon />
                                    </span>
                                    <span>Feels like</span>
                                </div>
                                <div className=" text-lg md:text-3xl font-semibold mb-3">
                                    {feelLike}
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
                                    {Math.round(pressure)} hPa
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
                                    {humidity} %
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
                                    {UVindex === 0 && "It's Night" || UVindex}
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex-1 h-2 bg-[#48596b9f] rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-green-400 via-yellow-400  to-red-400 rounded-full relative"
                                            style={{ width: `${Uvbar}%` }}

                                        >
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
                                    {gusts}kt
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
                                    {clouds}%
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
                                    {daylightText}
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
                                    {rain} mm
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
                                    {snow} mm
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
