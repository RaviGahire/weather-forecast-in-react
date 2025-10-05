import React, { useState } from 'react'

const reviews = [
  {
    name: "Amit Sharma",
    text: "Weather 24 is super accurate and easy to use. I love the mood tracker feature!",
    city: "Delhi",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Singh",
    text: "The gallery is so fun! I can share weather moments with friends.",
    city: "Mumbai",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul Verma",
    text: "Personalized updates keep me prepared every day. Highly recommended!",
    city: "Bangalore",
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

export const Review = () => {
  const [current, setCurrent] = useState(0);

  const prevReview = () => setCurrent((current - 1 + reviews.length) % reviews.length);
  const nextReview = () => setCurrent((current + 1) % reviews.length);

  return (
    <section className="max-w-xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">User Reviews</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center relative">
        <img
          src={reviews[current].img}
          alt={reviews[current].name}
          className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-900"
        />
        <p className="text-lg text-gray-700 mb-2">&quot;{reviews[current].text}&quot;</p>
        <span className="font-semibold text-blue-600">{reviews[current].name}</span>
        <span className="text-sm text-gray-500 mb-4">{reviews[current].city}</span>
        {/* Carousel Controls */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={prevReview}
            className="bg-blue-100 hover:bg-blue-300 text-blue-700 rounded-full px-4 py-2 transition"
            aria-label="Previous review"
          >
            &#8592;
          </button>
          <button
            onClick={nextReview}
            className="bg-blue-100 hover:bg-blue-300 text-blue-700 rounded-full px-4 py-2 transition"
            aria-label="Next review"
          >
            &#8594;
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-blue-200'} inline-block`}
            />
          ))}
        </div>
      </div>
      
    </section>
  )
}
