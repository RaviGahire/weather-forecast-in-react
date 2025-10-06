import React, { useState, useEffect } from 'react'
import { Features } from './Features'
import { CarouselSpacing } from './Review'
import { AccordionIcons } from './FaqSection'
import { Footer } from './Footer'
import { TextRollCustomVariants } from './TextAnimation'

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  if (loading) {
    return (
      <div className=" min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-white text-lg">Loading Weather...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section aria-label='hero section' className="flex flex-col-reverse md:flex-row items-center px-3 py-12 md:py-20 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-[95vh] ">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 mx-1 my-4 md:mx-20">
          <div className="text-3xl sm:text-4xl  w-80 mx-auto md:mx-0 md:text-6xl md:w-[650px] font-bold text-blue-700 mb-4 ">
            <TextRollCustomVariants />
          </div>

          <p className="text-md md:text-2xl text-blue-900 mb-4">
            Together We Forecast: Building Dreams, One Day at a Time! Get instant, accurate weather updates for your city. Stay prepared, wherever you are!
          </p>
          <p className='text-neutral-600 my-2'>1million People like you have purchased this product!</p>
          {/* hero btns */}
          <div className=" flex justify-center flex-col md:flex-row md:justify-start space-y-4 md:space-y-0">
            <button className="bg-blue-600 cursor-pointer text-white px-6 py-3 md:mr-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">
              Try It Now
            </button>
            <button className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">
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
      <section aria-label='faq section' className="px-3 py-12 md:py-20 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-2xl flex flex-col items-center text-center mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Experience the weather like never before
          </h2>
          <h2 className="text-lg md:text-2xl text-blue-600 mb-6">
            The Only Weather App You Need to Stay Connected with Nature and Each Other
          </h2>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition text-lg">
            Download Now
          </button>
        </div>
        <AccordionIcons />


      </section>

      <Footer />

    </>
  )
}
