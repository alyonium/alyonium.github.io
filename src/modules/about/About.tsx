import ModuleWrapper from '@/components/moduleWrapper/ModuleWrapper';
import { getYears } from '@/utils/getYears';
import { BIRTHDAY, START_WORK } from '@/const/const';
import Image from 'next/image';
import personalPhoto from '/public/personalPhoto.webp';

const About = () => {
  return (
    <div className='flex flex-col w-full'>
      <ModuleWrapper name='#about'>
        <div className='pl-10 flex flex-row gap-x-8 align-center justify-between w-full'>
          <div className='flex flex-col justify-center'>
            <span className='text-2xl font-primary text-blue-200 pb-5'>
              😊 Alena Stovpets
            </span>
            <span className='text-2xl font-primary text-blue-200 pb-5'>
              🎂 {getYears(BIRTHDAY)} years old
            </span>
            <span className='text-2xl font-primary text-blue-200 pb-5'>
              💙️ Frontend
            </span>
            <span className='text-2xl font-primary text-blue-200 pb-5'>
              👩‍🏫 B.Sc. in Software Engineering
            </span>
            <span className='text-2xl font-primary text-blue-200 pb-5'>
              👩‍💻 {getYears(START_WORK)} years of experience
            </span>
          </div>
          <div className='w-[400px] border-sky-200 border-2'>
            <Image
              src={personalPhoto}
              alt={'personal photo'}
              className='z-20'
            />
          </div>
        </div>
      </ModuleWrapper>
    </div>
  );
};

export default About;
