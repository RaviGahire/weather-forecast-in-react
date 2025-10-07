import React from 'react'
import { motion } from 'motion/react'
import { PersonalizedCard, GalleryCard, MoodTrackerCard, NotificationIcon } from './AnimatedSvg'
export const Features = () => {
    return (
        <section className="max-w-7xl mx-auto py-4 md:py-12 px-4">
            {/* Top Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
                {/* Feature 1 */}
                <PersonalizedCard />
                {/* Feature 2 */}
                <GalleryCard />
                {/* Feature 3 */}
                <MoodTrackerCard />
            </div>

            {/* Big Feature Section */}
            <div className="flex flex-col-reverse md:flex-row items-center p-8 md:p-12 bg-gradient-to-r from-blue-100 to-blue-300 shadow-xl rounded-2xl">

                {/* Right: Image */}
                <div className="flex-1 flex md:justify-center ">
                    <div className="relative overflow-hidden">
                        <img
                            src="/src/assets/iphone-3.png"
                            alt="iphone showing weather app"
                            className="w-full h-auto"
                        />
                        <div className="absolute top-[8%] left-[4%] right-[4%] bottom-[4%] ">
                            <img
                                className="w-full h-full object-cover rounded-sm sm:rounded md:rounded-lg overflow-visible"
                                src="/src/assets/iPhone-img-3.png"
                                alt="weather forecast interface"
                            />
                        </div>
                    </div>
                </div>
                {/* Left: Text */}
                <NotificationIcon />
            </div>
        </section>
    )
}
