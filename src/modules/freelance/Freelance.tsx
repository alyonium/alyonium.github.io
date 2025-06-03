import ModuleWrapper from '@/components/moduleWrapper/ModuleWrapper';
import Image from 'next/image';
import lazurLaptop from '/public/lazur-laptop.webp';
import nadiaLaptop from '/public/nadia-laptop.webp';
import lazurPhone from '/public/lazur-phone.webp';
import nadiaPhone from '/public/nadia-phone.webp';

import { BRACKET } from '@/const/const';
import Link from 'next/link';

const Freelance = () => {
  const data = [
    {
      name: 'LazurAI',
      year: '2025',
      description: 'Multi-AI chatbot platform',
      stack:
        'Next.js (SSR, landing), Vite (app), Zustand, Zod, React Hook Form, React Markdown, TanStack Query, Mantine, i18n',
      deployLink: 'https://lazur.ai/en',
      figmaLink:
        'https://www.figma.com/design/X6ZOUS8cvQNmYMSUyMI06b/LazurAI?node-id=0-1&t=zqbZFvllGweC7lza-1',
      laptopImage: lazurLaptop,
      phoneImage: lazurPhone,
    },
    {
      name: 'Nadia Piquer Martin',
      year: '2024',
      description: 'Personal website for a gynecologist',
      stack: 'Next.js (SSG), CSS modules, Google Maps, Strapi, i18n',
      deployLink: 'https://nadiapiquermartin.com/es',
      figmaLink:
        'https://www.figma.com/design/NCJffVkSGXgi2XegwOcr6f/nadiapiquermartin?node-id=0-1&t=Je61v38xWL8jckog-1',
      laptopImage: nadiaLaptop,
      phoneImage: nadiaPhone,
    },
  ];

  return (
    <ModuleWrapper name='freelance = ' bracketType={BRACKET.square}>
      <div className='flex flex-col xl:gap-y-24 lg:gap-y-20 gap-y-10 items-center w-full'>
        {data.map((item, index) => {
          return (
            <div
              className='flex 2xl:flex-row flex-col-reverse  xl:gap-x-8 lg:gap-x-6 gap-y-5 items-center justify-between w-full'
              key={index}
            >
              <div className='2xl:w-1/2 flex flex-col gap-y-4 justify-center w-full'>
                <span className='w-full flex justify-between items-center 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-primary text-blue-200'>
                  <span>{item.name}, </span> <span>{item.year}</span>
                </span>
                <span className='w-full flex 2xl:text-lg xl:text-lg lg:text-lg sm:text-md text-md font-primary text-blue-200'>
                  {item.description}
                </span>
                <span className='w-full flex 2xl:text-lg xl:text-lg lg:text-lg sm:text-md text-md font-primary text-blue-200'>
                  Stack: {item.stack}
                </span>
                <span className='w-full flex 2xl:text-lg xl:text-lg lg:text-lg sm:text-md text-md font-primary text-blue-200 border-2 justify-center hover:bg-blue-200 hover:text-slate-950 '>
                  <Link href={item.deployLink}>View website 👆🏻</Link>
                </span>
                <span className='w-full flex 2xl:text-lg xl:text-lg lg:text-lg sm:text-md text-md font-primary text-blue-200 border-2 justify-center hover:bg-blue-200 hover:text-slate-950 '>
                  <Link href={item.figmaLink}>View Figma 👆🏻</Link>
                </span>
              </div>

              <div className='flex relative items-center'>
                <div className='2xl:w-[400px] xl:w-[400px] lg:w-[350px] md:w-[350px] sm:w-[300px] w-[280px] h-full'>
                  <Image
                    src={item.laptopImage}
                    alt={'desktop screenshot of website I created'}
                  />
                </div>
                <div className='absolute 2xl:top-6 xl:top-6 lg:top-6 md:top-6 sm:top-6 top-5 2xl:-right-5 xl:-right-5 lg:-right:5 sm:-right-2 -right-2 2xl:w-[100px] xl:w-[100px] lg:w-[80px] md:w-[80px] sm:w-[70px] w-[70px] h-full'>
                  <Image
                    src={item.phoneImage}
                    alt={'phone screenshot of website I created'}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ModuleWrapper>
  );
};

export default Freelance;
