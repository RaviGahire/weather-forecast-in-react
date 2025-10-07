import React from 'react'
import { motion } from 'motion/react'
import { PersonalizedIcon, GalleryIcon, MoodTrackerIcon, PersonalizedCard, GalleryCard,MoodTrackerCard} from './AnimatedSvg'
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
               <MoodTrackerCard/>
            </div>

            {/* Big Feature Section */}
            <div className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-2xl shadow-xl flex flex-col md:flex-row items-center p-8 md:p-12">

                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                        alt="Weather app preview"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-lg"
                    />
                </div>
                {/* Left: Text */}
                <div className="flex-1 md:pr-10 mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Plan Your Outdoor Activities with Ease</h2>
                    <p className="text-lg text-blue-900 mb-4">
                        Get notified before rain stops. Plan your outdoor activities
                    </p>
                    <p className="text-base text-gray-700">
                        Our platform combines accuracy, community, and well-being, making weather updates more meaningful and interactive than ever before.
                    </p>
                </div>
            </div>
        </section>
    )
}
