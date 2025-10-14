
import React, { useEffect, useState, useContext } from "react";
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Footer } from "./Footer";
import { WindCompass } from "./Compass";
import DataTransfer from "../DataTransfer";



// console.log(DataTransfer)


export const WeatherDashboard = () => {

    const [loading, setLoading] = useState(true);
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cityIndex, setCityIndex] = useState(0);
    const itemsPerView = 6;
    const context = useContext(DataTransfer);

   

console.log('from Dashboard',context)

    
   



  


    // Directions based on API Data
    const getWindDirectionText = (deg) => {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(deg / 22.5) % 16;
        console.log(index)
        return directions[index];
    };

    // Dummy data of 
    const hourlyData = [
        { time: '5 AM', icon: '☁️', temp: '22°' },
        { time: '6 AM', icon: '☁️', temp: '22°' },
        { time: '7 AM', icon: '🌦️', temp: '23°' },
        { time: '8 AM', icon: '🌦️', temp: '24°' },
        { time: '9 AM', icon: '🌧️', temp: '25°' },
        { time: '10 AM', icon: '🌧️', temp: '26°' },
        { time: '11 AM', icon: '🌧️', temp: '27°' },
        { time: '12 PM', icon: '🌧️', temp: '27°' },
        { time: '1 PM', icon: '🌧️', temp: '26°' },
        { time: '2 PM', icon: '🌧️', temp: '25°' },
        { time: '3 PM', icon: '🌧️', temp: '25°' },
        { time: '4 PM', icon: '🌧️', temp: '24°' },
        { time: '4 PM', icon: '🌧️', temp: '24°' },
        { time: '4 PM', icon: '🌧️', temp: '24°' },
        { time: '4 PM', icon: '🌧️', temp: '24°' },
        { time: '4 PM', icon: '🌧️', temp: '24°' },
        { time: '4 PM', icon: '🌧️', temp: '24°' },
    ];
    const weeklyForecast = [
        { day: 'Today', icon: '🌦️', low: '21°', high: '29°', range: 70 },
        { day: 'Mon', icon: '🌦️', low: '21°', high: '29°', range: 70 },
        { day: 'Tue', icon: '🌦️', low: '20°', high: '30°', range: 75 },
        { day: 'Wed', icon: '🌦️', low: '21°', high: '31°', range: 80 },
        { day: 'Thu', icon: '🌦️', low: '22°', high: '30°', range: 65 },
        { day: 'Fri', icon: '☁️', low: '22°', high: '32°', range: 75 },
        { day: 'Sat', icon: '☁️', low: '23°', high: '31°', range: 70 },

    ];

    const maxIndex = Math.max(0, hourlyData.length - itemsPerView);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };
    const cities = [
        'Achalpur',
        'Adawad',
        'Agar Panchatan',
        'Aheri',
        'Ahiri',
        'Ahmadnagar',
        'Ahmadpur',
        'Ahmednagar'
    ];

    const scrollCities = (direction) => {
        if (direction === 'up' && cityIndex > 0) {
            setCityIndex(cityIndex - 1);
        } else if (direction === 'down' && cityIndex < cities.length - 5) {
            setCityIndex(cityIndex + 1);
        }
    };

  useEffect(() => {

        setTimeout(() => {

        setLoading(false)
          
        }, 2000);
        
    }, []);

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
            <main aria-label="weather-dashboard" className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 p-4 md:p-6 ">
                <div className="flex justify-between max-w-7xl mx-auto my-2 md:my-4 p-2 md:p-4 rounded-xl bg-gray-900 text-neutral-100 shadow-xl border animate-fadeIn">
                    <div>
                        <p className="text-md md:text-2xl font-semibold tracking-wide">
                            Pune: current weather conditions
                        </p>
                        <p className="mt-1 text-sm text-gray-400">
                            Stay updated with the latest weather information to plan your day effectively.
                        </p>
                    </div>
                </div>
                {/* Weather Map */}
                <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700 animate-fadeIn">
                    <div className="bg-gray-900 p-4 tracking-wide">
                        <h2 className="text-xl font-semibold text-neutral-100">Your live weather map</h2>
                        <p className="text-sm text-gray-400">Interactive weather conditions powered by Windy.com</p>
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
                                    Current Weather Conditions in Pune
                                </h3>

                                <div className="flex justify-between  items-center mb-20">
                                    <div>
                                        <h1 className="text-[32px] font-semibold">Pune</h1>
                                        <p className="text-sm text-gray-400">Maharashtra, India</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-6xl opacity-60">☁️</div>
                                        <div className="text-sm text-gray-400">Overcast</div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="text-[96px] font-light leading-none">24°</div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-400 my-1">
                                            Low <span className="text-white ml-2">21°</span>
                                        </div>
                                        <div className="text-sm text-gray-400 my-1">
                                            High <span className="text-white ml-2">29°</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*24hr Hourly Forecast Card */}
                            <div className="bg-gray-900 rounded-xl p-6 overflow-hidden">
                                <div className="flex items-center gap-2 mb-5">
                                    <svg className="w-[18px] h-[18px] opacity-60" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                    <h3 className="text-base font-medium text-gray-400">
                                        Hourly Pune Weather Forecast
                                    </h3>
                                </div>

                                <div className="flex gap-3 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab">
                                    {hourlyData.map((hour, index) => (
                                        <div key={index} className="flex flex-col items-center gap-2 min-w-[70px] ">
                                            <div className="text-[13px] text-gray-400 font-medium ">{hour.time}</div>
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
                                    <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" strokeWidth="2" />
                                    </svg>
                                    Wind
                                </h3>
                                <div className="text-[32px] font-semibold mb-5">4kt <span className="text-gray-400">W</span></div>
                                <div className="mx-auto flex align-center justify-center">
                                    <WindCompass windSpeed={1.8} windDirection={22} />
                                </div>
                                <div className="text-center text-[13px] text-gray-400 mt-4">
                                    Very gentle wind.
                                </div>
                            </div>

                            {/* Precipitation Card */}
                            <div className="bg-gray-900 rounded-xl p-6">
                                <h3 className="flex items-center gap-2 text-sm font-normal text-gray-400 mb-5">
                                    <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeWidth="2" />
                                    </svg>
                                    Precipitation
                                </h3>

                                <div className="text-[32px] font-semibold mb-5">45%</div>

                                <div className="w-full h-3 bg-[#1a2332] rounded-full overflow-hidden mb-3">
                                    <div className="relative h-full w-[14%] bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full">
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
                                <div key={index} className="bg-gray-900 rounded-xl p-4 flex items-center justify-between">
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
                                        <span className="text-sm w-8 text-right">{forecast.high}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Middle Column - Weather Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 h-auto">
                            {/* Feels Like */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex  md:items-center gap-2 text-gray-400 mb-1 md:mb-3">
                                    <span>🌡️</span>
                                    <span>Feels like</span>
                                </div>
                                <div className=" text-lg md:text-3xl font-semibold mb-3">27°</div>
                                <div className="text-sm text-gray-400">Feels warmer than actual temperature.</div>
                            </div>

                            {/* Pressure */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex items-center gap-2 text-gray-400  mb-1 md:mb-3">
                                    <span>📊</span>
                                    <span>Pressure</span>
                                </div>
                                <div className=" text-lg md:text-3xl font-semibold mb-3">951 hPa</div>
                                <div className="text-sm text-gray-400">Expect unstable weather conditions.</div>
                            </div>

                            {/* Humidity */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex items-center gap-2 text-gray-400  mb-1 md:mb-3">
                                    <span>💧</span>
                                    <span>Humidity</span>
                                </div>
                                <div className="text-lg md:text-3xl font-semibold mb-3">84%</div>
                                <div className="text-sm text-gray-400">High humidity.</div>
                            </div>

                            {/* UV */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                                    <span>☀️</span>
                                    <span>UV</span>
                                </div>
                                <div className="tex-lg md:text-3xl font-semibold mb-3">7 - High</div>
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
                                <div className="text-lg md:text-3xl font-semibold mb-3">18kt</div>
                                <div className="text-sm text-gray-400">Max speed of wind gusts today.</div>
                            </div>

                            {/* Cloud Cover */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                                    <span>☁️</span>
                                    <span>Cloud Cover</span>
                                </div>
                                <div className="text-lg md:text-3xl font-semibold mb-3">100%</div>
                                <div className="text-sm text-gray-400">Overcast, expect cloudy conditions.</div>
                            </div>

                            {/* Daylight */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                                    <span>🌅</span>
                                    <span>Daylight</span>
                                </div>
                                <div className="text-lg md:text-3xl font-semibold mb-3">11h 53m</div>
                                <div className="text-sm text-gray-400">Balanced day and night.</div>
                            </div>

                            {/* Rain */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                                    <span>🌧️</span>
                                    <span>Rain</span>
                                </div>
                                <div className="text-lg md:text-3xl font-semibold mb-3">0.0mm</div>
                                <div className="text-sm text-gray-400">No rain, dry conditions expected.</div>
                            </div>

                            {/* Snowfall */}
                            <div className="bg-gray-900 rounded-xl p-3 md:p-5">
                                <div className="flex items-center gap-2 text-gray-400 mb-1 md:mb-3">
                                    <span>❄️</span>
                                    <span>Snowfall</span>
                                </div>
                                <div className="text-lg md:text-3xl font-semibold mb-3">0.0mm</div>
                                <div className="text-sm text-gray-400">No snowfall expected.</div>
                            </div>
                        </div>

                        {/* Right Column - More Cities */}
                        <div className="bg-gray-900 rounded-xl p-5">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-base font-medium text-gray-400">More Cities</h3>
                                <div className="flex flex-col gap-1">
                                    <button
                                        onClick={() => scrollCities('up')}
                                        disabled={cityIndex === 0}
                                        className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#0d1b2a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronUp className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => scrollCities('down')}
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





