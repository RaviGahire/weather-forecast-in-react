import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from './motion-primitives/carousel';

export function CarouselSpacing() {
  const customerReview = [
    {
      name: "Noah Williams",
      business: "Fisherman",
      comment: "Accurate wind and tide updates help me plan my trips safely every day.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sophia Patel",
      business: "Travel Guide",
      comment: "The hourly forecasts are a lifesaver for planning outdoor tours for tourists.",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ethan Johnson",
      business: "Farmer",
      comment: "I rely on the rainfall predictions to schedule irrigation and crop protection.",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      name: "Ava Thompson",
      business: "Event Organizer",
      comment: "This app helps me choose the best weather days for outdoor weddings and concerts.",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Liam Chen",
      business: "Drone Photographer",
      comment: "Wind speed alerts are super helpful when planning aerial shoots.",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/73.jpg"
    },
    {
      name: "Olivia Martinez",
      business: "Delivery Driver",
      comment: "Knowing about heavy rain or fog ahead of time helps me adjust my routes.",
      rating: 4.6,
      image: "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
      name: "James Brown",
      business: "Construction Manager",
      comment: "The app prevents costly delays by warning us about bad weather early.",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/men/80.jpg"
    },
    {
      name: "Mia Anderson",
      business: "Airline Crew Member",
      comment: "It’s great for quick updates about storms or visibility before flights.",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/women/85.jpg"
    },
    {
      name: "Lucas Nguyen",
      business: "Outdoor Café Owner",
      comment: "I use it to prepare my outdoor seating when clear weather is expected.",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/92.jpg"
    },
    {
      name: "Ella Davis",
      business: "Travel Vlogger",
      comment: "Helps me plan shooting days in scenic spots without worrying about rain.",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/women/95.jpg"
    }
  ];


  return (
    <div className='relative w-full px-4'>
      <Carousel>
        <CarouselContent className='-ml-4'>
          {
            customerReview.map((review) => {
           return(
               <CarouselItem className='basis-1/1 md:basis-1/2 lg:basis-1/3 pl-4'>
                <div className='flex items-center justify-center rounded-xl overflow-hidden '>
                  {/* review card */}
                  <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-l-4 border-teal-500 p-6 w-screen h-full ">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={review.image} alt="user" className="w-12 h-12 rounded-full" />
                      <div>
                        <h3 className="font-semibold text-slate-800">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.business}</p>
                      </div>
                    </div>
                    <p className="text-blue-900 mb-3">{review.comment}</p>
                    <div className="flex gap-1 text-gray-500">
                      <span>Rating : 5-/{review.rating}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
           )
            })
          }
        </CarouselContent>
        <CarouselNavigation
          className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
          classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-teal-500 dark:*:stroke-zinc-800 cursor-pointer'
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
