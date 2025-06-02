import ModuleWrapper from '@/components/moduleWrapper/ModuleWrapper';
import Image from 'next/image';
import lazurLaptop from '/public/lazur-laptop.webp';
import nadiaLaptop from '/public/nadia-laptop.webp';
import lazurPhone from '/public/lazur-phone.webp';
import nadiaPhone from '/public/nadia-phone.webp';

import { BRACKET } from '@/const/const';
import Link from 'next/link';

const Projects = () => {
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
    <div className='flex flex-col h-full w-full'>
      <div className='flex flex-col'>
        <ModuleWrapper name='projects = ' bracketType={BRACKET.square}>
          <div className='pl-10 flex flex-col gap-y-32'>
            {data.map((item, index) => {
              return (
                <div className='flex justify-between' key={index}>
                  <div className='flex flex-col gap-y-32 justify-center'>
                    <div className='flex flex-col gap-y-4'>
                      <span className='w-full flex text-2xl font-primary text-blue-200'>
                        {item.name}, {item.year}
                      </span>
                      <span className='w-full flex text-lg font-primary text-blue-200'>
                        {item.description}
                      </span>
                      <span className='w-full flex text-lg font-primary text-blue-200'>
                        Stack: {item.stack}
                      </span>
                      <span className='w-full hover:underline flex text-lg font-primary text-blue-200'>
                        <Link href={item.deployLink}>View website 👆🏻</Link>
                      </span>
                      <span className='w-full hover:underline flex text-lg font-primary text-blue-200'>
                        <Link href={item.figmaLink}>View Figma 👆🏻</Link>
                      </span>
                    </div>
                  </div>
                  <div className='flex relative items-center'>
                    <div className='w-[400px]'>
                      <Image
                        src={item.laptopImage}
                        alt={'desktop screenshot of website I created'}
                      />
                    </div>
                    <div className='absolute -right-5 w-[100px]'>
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
      </div>
    </div>
  );
};

export default Projects;
