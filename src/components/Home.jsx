import React from 'react'
import { Features } from './Features'
import { CarouselSpacing } from './Review'

export const Home = () => {
  return (
    <>
      <section aria-label='hero section' className="flex flex-col-reverse md:flex-row items-center px-3 py-12 md:py-20 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-[95vh] ">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 mx-1 my-4 md:mx-20">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
            Weather-24 Your Live Forecaster
          </h1>
          <p className="text-md md:text-2xl text-blue-900 mb-4">
            Together We Forecast: Building Dreams, One Day at a Time! Get instant, accurate weather updates for your city. Stay prepared, wherever you are!
          </p>
          <p className='text-neutral-600 my-2'>1million People like you have purchased this product!</p>
          {/* hero btns */}
          <div className=" flex justify-center flex-col md:flex-row md:justify-start space-y-4 md:space-y-0">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">
              Try It Now
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">
              FREE TILL 15JUN2023
            </button>
          </div>
        </div>
        {/* Right: Image/Illustration */}
        <div className="flex-1 flex justify-center ">
          {/* Hero iamge one */}

          <div className="flex justify-center items-center">
            {/* iphone image with absolute image */}
            <div className="relative z-10 left-5">
              <div>
                <img src="/src/assets/iphone-1.png" alt="iphone-image" />
              </div>
              <div className="absolute top-1 right-2 md:left-4 "><img className='w-fit' src="/src/assets/hero-img-1.png" alt="image" /></div>
            </div>
            <div className="relative z-0 right-5">
              <div>
                <img src="/src/assets/iphone-2.png" alt="iphone-image" />
              </div>
              <div className="absolute top-1 left-2 md:right-4"><img className='w-fit' src="/src/assets/hero-img-2.png" alt="image" /></div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <div className="max-w-7xl mx-auto my-20">
        <CarouselSpacing />
      </div>
    </>
  )
}
