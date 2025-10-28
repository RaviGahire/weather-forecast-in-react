
export const Weekly = ({ dailyData }) => {

    // console.log('daily data',dailyData)
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


    return (
        <>
            {days.map((items, index) => {

                const globalMin = Math.min(...Object.values(dailyData).map(d => d.minTemp));
                const globalMax = Math.max(...Object.values(dailyData).map(d => d.maxTemp));
                const range = globalMax - globalMin;


                const leftOffset = ((dailyData[index].minTemp - globalMin) / range) * 100;
                const barWidth = ((dailyData[index].maxTemp - dailyData[index].minTemp) / range) * 100;
                // console.log(leftOffset)

                return (
                    <div key={index} className="bg-gray-900 rounded-xl p-4 md:p-6 flex   items-center justify-between">
                        <div className="w-16 text-sm font-medium"> {items}</div>
                        <div className="text-5xl ">{dailyData[index].icons[index]}</div>
                        <div className="flex items-center gap-3 flex-1 ml-4">
                            <span className="text-sm w-8"> {Math.round(dailyData[index].minTemp)}°</span>
                            <div className="flex-1 h-1.5 bg-[#0d1b2a] rounded-full overflow-hidden">
                                <div
                                    className="h-full relative bg-gradient-to-r from-[#5b7fd6] via-[#8b6fd6] to-[#d65b9e] rounded-full"
                                    style={{
                                        left: `${leftOffset}%`,
                                        width: `${barWidth}%`
                                    }}
                                ></div>
                            </div>
                            <span className="text-sm w-8 text-right">
                                {Math.round(dailyData[index].maxTemp)}°
                            </span>
                        </div>
                    </div>
                )
            })

            }




        </>
    );
};
