import ModuleWrapper from '@/components/moduleWrapper/ModuleWrapper';
import Image from 'next/image';
import personalPhoto from '/public/personalPhoto.webp';
import { data } from '@/modules/about/data';

const About = () => {
  return (
    <ModuleWrapper name='(aboutMe) =>'>
      <div className='flex flex-col-reverse lg:flex-row gap-y-5 lg:gap-x-6 items-center justify-between w-full'>
        <div className='flex flex-col justify-center backdrop-blur-sm'>
          {data.map((item, index) => (
            <span
              key={index}
              className='text-lg md:text-xl 2xl:text-2xl font-primary text-blue-200 pb-2 md:pb-3 2xl:pb-5'
            >
              {item}
            </span>
          ))}
        </div>
        <div className='w-[200px] sm:w-[280px] md:w-[300px] lg:w-[300px] 2xl:w-[400px] h-full border-sky-200 border-2'>
          <Image src={personalPhoto} alt='personal photo' className='z-20' />
        </div>
      </div>
    </ModuleWrapper>
  );
};

export default About;
