import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './../components/accordion';
import { ChevronUp } from 'lucide-react';

export function AccordionIcons() {
  return (
    <Accordion
      className='flex max-w-7xl flex-col divide-y divide-zinc-200 dark:divide-zinc-400 mx-auto my-20 px-4'
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <AccordionItem value='getting-started' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-blue-500'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-semibold text-blue-800 mb-2'>What is Weather-24?</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-blue-900' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Weather-24 is a cutting-edge weather forecasting application that provides real-time weather updates and forecasts for locations worldwide.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='animation-properties' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-semibold text-blue-800 mb-2'>How accurate are the weather forecasts?</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-blue-900' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
           Our forecasts are generated using advanced meteorological models and data from multiple sources, ensuring high accuracy and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='advanced-usage' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-semibold text-blue-800 mb-2'>Is Weather-24 free to use?</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-blue-900' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Yes, Weather-24 offers a free version with essential features. We also have premium plans that provide additional functionalities and ad-free experience.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='community-and-support' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-semibold text-blue-800 mb-2'>Can I get weather updates for multiple locations?</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-blue-900' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
           Absolutely! You can add and monitor weather conditions for multiple locations around the world.
          </p>
        </AccordionContent>
      </AccordionItem>  
    </Accordion>
  );
}
