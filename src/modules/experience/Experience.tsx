import ModuleWrapper from '@/components/moduleWrapper/ModuleWrapper';
import Image from 'next/image';
import { data } from '@/modules/experience/data';

const Experience = () => {
  return (
    <ModuleWrapper name='.experience'>
      <div className='flex flex-col xl:gap-y-8 gap-y-6'>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col gap-y-7 backdrop-blur-sm'
            >
              <div className='w-full flex justify-between sm:flex-row flex-col'>
                <span className='flex items-center gap-2 lg:text-xl text-lg font-primary text-blue-200'>
                  <span>
                    <Image
                      className='rounded-xs w-5'
                      src={item.logo}
                      alt={`logo of the company "${item.company}"`}
                    />
                  </span>
                  {item.company}, <span className='italic'>{item.format}</span>
                </span>
                <span className='lg:text-xl sm:text-lg text-md font-primary text-blue-200'>
                  {item.date}
                </span>
              </div>

              {item.projects.map((project) => {
                return (
                  <div key={project.id} className='flex flex-col'>
                    {project.name && (
                      <span className='lg:text-xl text-md font-primary text-blue-200 pb-3'>
                        {project.name} ({project.stack})
                      </span>
                    )}
                    <span className='lg:text-lg text-sm font-primary text-blue-200'>
                      {project.description}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </ModuleWrapper>
  );
};

export default Experience;
