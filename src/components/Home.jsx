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
    }, 4000);
  }, []);


  if (loading) {
    return (
      <div className=" min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-white text-lg">Currently under development</p>
          <p className="text-white text-lg">Loading...</p>

        </div>
      </div>
    );
  }

  return (
    <>
      <section
        aria-label='hero section'
        className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen"
      >
        {/* Left: Text Content */}
        <div className="flex-1 w-full text-center lg:text-left mb-8 lg:mb-0 max-w-2xl lg:max-w-none">
          <div className=" max-w-[250px]  sm:max-w-[400px] md:max-w-[650px] mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-4 sm:mb-6">
            <TextRollCustomVariants />
          </div>

          <p className="text-base md:max-w-[650px] mx-auto sm:text-lg md:text-xl lg:text-2xl text-blue-900 mb-3 sm:mb-4 px-2 sm:px-0">
            Together We Forecast: Building Dreams, One Day at a Time! Get instant, accurate weather updates for your city. Stay prepared, wherever you are!
          </p>

          <p className='md:max-w-[650px] mx-auto text-sm sm:text-base text-neutral-600 my-3 sm:my-4'>
            1 million People like you have purchased this product!
          </p>

          {/* Hero buttons */}
          <div className="flex md:max-w-[650px] mx-auto  flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
            <button className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base">
              Try It Now
            </button>
            <button className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base">
              Free Till Today
            </button>
          </div>
        </div>

        {/* Right: Phone Images */}
        <div className="flex-1 flex justify-center items-center w-full py-6 sm:py-8 lg:py-0">
          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">

            {/* Left iPhone with floating animation */}
            <div className="relative z-10 w-[42vw] max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[260px] animate-[float_3s_ease-in-out_infinite]">
              <div className="relative left-8">
                <img
                  src="/public/images/iphone-1.png"
                  alt="iphone showing weather app"
                  className="w-full h-auto"
                />
                <div className="absolute top-[1%] left-[8%] right-[5%] bottom-[4%] ">
                  <img
                    className="w-full h-full object-cover rounded-sm sm:rounded md:rounded-lg overflow-visible"
                    src="/src/assets/hero-img-1.png"
                    alt="weather forecast interface"
                  />
                </div>
              </div>
            </div>

            {/* Right iPhone with offset floating animation */}
            <div className="relative z-0 w-[42vw] max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[260px] animate-[float_3s_ease-in-out_infinite_0.5s]">
              <div className="relative right-8">
                <img
                  src="/public/images/iphone-2.png"
                  alt="iphone showing weather details"
                  className="w-full h-auto drop-shadow-2xl"
                />
                <div className="absolute top-[1%] left-[5%] right-[8%] bottom-[4%]">
                  <img
                    className="w-full h-full object-cover rounded-sm sm:rounded md:rounded-lg overflow-visible"
                    src="/public/images/hero-img-2.png"
                    alt="weather data display"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        
        @media (min-width: 640px) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-16px);
            }
          }
        }
        
        @media (min-width: 1024px) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        }
      `}</style>
      </section>
      <Features />
      <div aria-label='customer review' className="max-w-7xl mx-auto mb-20  ">
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
          <button className="bg-blue-500 text-white px-8 cursor-pointer py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition text-lg">
            Download Now
          </button>
        </div>
        <AccordionIcons />
      </section>
      <Footer />
    </>
  )
}
