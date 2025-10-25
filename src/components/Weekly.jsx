
export const Weekly = ({ dailyData }) => {

console.log('daily data from weekly',dailyData?.icon)

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


    return (
        <>
            {/* {days.map((day, index) => (
                <div key={day} className="bg-gray-900 rounded-xl p-4 flex items-center justify-between">
                    <div className="w-16 text-sm font-medium"> {day}</div>
                    <div className="text-3xl">{dailyData?.icon}</div>
                    <div className="flex items-center gap-3 flex-1 ml-4">
                        <span className="text-sm w-8"> {dailyData?.minTemp}</span>
                        <div className="flex-1 h-1.5 bg-[#0d1b2a] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#5b7fd6] via-[#8b6fd6] to-[#d65b9e] rounded-full"
                              
                            ></div>
                        </div>
                        <span className="text-sm w-8 text-right">
                    
                        </span>
                    </div>
                </div>
            ))
            } */}





        </>
    );
};
