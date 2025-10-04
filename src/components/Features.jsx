import React from 'react'
import { PersonalizedIcon, GalleryIcon, MoodTrackerIcon } from './AnimatedSvg'
export const Features = () => {
    return (
        <section className="max-w-7xl mx-auto py-12 px-4">
            {/* Top Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Feature 1 */}
                <div className="bg-blue-100 rounded-2xl shadow-lg px-4 py-4 flex flex-col items-start text-center hover:shadow-blue-200 transition duration-300">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3 flex items-center gap-x-2"><PersonalizedIcon />Personalized</h3>
                    <p className="text-gray-700 text-base text-start ">A personalized weather report that shows the best time and place for couples to enjoy outdoor activities based on their preferences and location.</p>
                </div>
                {/* Feature 2 */}
                <div className="bg-blue-100 rounded-2xl shadow-lg px-4 py-4 flex flex-col items-start text-center hover:shadow-blue-200 transition duration-300">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3 flex items-center gap-x-2"><GalleryIcon />Gallery</h3>
                    <p className="text-gray-700 text-base text-start ">A cloud gallery that allows users to upload and share their photos and videos of the sky and the weather with other users and get feedback and tips.</p>
                </div>
                {/* Feature 3 */}
                <div className="bg-blue-100 rounded-2xl shadow-lg px-4 py-4 flex flex-col items-start text-center hover:shadow-blue-200 transition duration-300">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3 flex items-center gap-x-2"><MoodTrackerIcon />Mood Tracker</h3>
                    <p className="text-gray-700 text-base text-start">A mood tracker that analyzes the user’s mood based on the weather and suggests activities, music, or quotes to cheer them up or calm them down.</p>
                </div>
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
