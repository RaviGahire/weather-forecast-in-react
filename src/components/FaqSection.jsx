import { data } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './motion-primitives/accordion';
import { ChevronUp } from 'lucide-react';
const faqs = [
  {
    id: "getting-started",
    question: "What is Weather-24?",
    answer:
      "Weather-24 is a cutting-edge weather forecasting application that provides real-time weather updates and forecasts for locations worldwide.",
  },
  {
    id: "accuracy",
    question: "How accurate are the weather forecasts?",
    answer:
      "Our forecasts are generated using advanced meteorological models and data from multiple sources, ensuring high accuracy and reliability.",
  },
  {
    id: "pricing",
    question: "Is Weather-24 free to use?",
    answer:
      "Yes, Weather-24 offers a free version with essential features. We also have premium plans that provide additional functionalities and an ad-free experience.",
  },
  {
    id: "multi-location",
    question: "Can I get weather updates for multiple locations?",
    answer:
      "Absolutely! You can add and monitor weather conditions for multiple locations around the world.",
  },
];

export function AccordionIcons() {
  return (
    <Accordion
      className='flex max-w-7xl flex-col divide-y divide-zinc-200 dark:divide-zinc-400 mx-auto my-20 px-4'
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
 {
  faqs.map((item)=>(
    <AccordionItem key={item.id} value={item.id} className='py-2'>
        <AccordionTrigger className='w-full text-left text-[#0F3460] '>
          <div className='flex items-center justify-between'>
            <div className='text-md md:text-xl font-semibold text-[#0F3460]  cursor-pointer mb-2'>{item.question}</div>
            <ChevronUp className='h-4 w-4  transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-blue-900' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-sm md:text-xl text-[#071e39a9] '>
             {item.answer}
          </p>
        </AccordionContent>
      </AccordionItem>
  ))
 }
       
    </Accordion>
  );
}
