
export const Weekly = ({ dailyData }) => {


    console.log('From weekly data', dailyData)

    const weeklyForecast = [
        { day: "Today", icon: "🌦️", low: "21°", high: "29°", range: 70 },
        { day: "Mon", icon: "🌦️", low: "21°", high: "29°", range: 70 },
        { day: "Tue", icon: "🌦️", low: "20°", high: "30°", range: 75 },
        { day: "Wed", icon: "🌦️", low: "21°", high: "31°", range: 80 },
        { day: "Thu", icon: "🌦️", low: "22°", high: "30°", range: 65 },
        { day: "Fri", icon: "☁️", low: "22°", high: "32°", range: 75 },
        { day: "Sat", icon: "☁️", low: "23°", high: "31°", range: 70 },
    ];


    return (
        <>
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
        </>
    );
};
