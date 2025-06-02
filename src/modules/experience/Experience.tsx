import ModuleWrapper from '@/components/moduleWrapper/ModuleWrapper';

const Experience = () => {
  const data = [
    {
      company: 'FORS',
      title: 'Frontend Developer',
      format: 'remote',
      date: 'Oct 2020 – May 2025',
      projects: [
        {
          name: 'Veterinary Pharma Monitoring',
          stack: 'React',
          description:
            'Developed a new module for an existing system. Created new pages and reusable components, working with complex nested forms and validation logic. Worked in a frontend team of 2 developers. Collaborated with backend lead, QA, PM, and analysts.',
        },
        {
          name: 'Social Services Platform',
          stack: 'React, MaterialUI, Redux',
          description:
            'Developed a system for managing personal data. Each section of data integrated with separate backend microservices. Focused on state management and validation.',
        },
        {
          name: 'Data Archiving Web App',
          stack: 'Vue3, Ant Design, Vuex',
          description:
            'Migrated a desktop application to a web application. Designed and implemented complex, interactive data tables, including functionality for pasting structured data from Excel directly into the web interface. Collaborated with a frontend team of 4 and QA, backend devs, PM, analytics.',
        },
        {
          name: 'Road Accident Analytics System',
          stack: 'Vue2, Vuetify, Highcharts',
          description:
            'Developed advanced data visualizations (charts, graphs, maps) using datasets of traffic accidents in Russia. Worked closely with a backend developer.',
        },
      ],
    },
    {
      company: 'FORS',
      title: 'Junior Frontend Developer',
      format: 'remote',
      date: 'Sep 2019 – Oct 2020',
      projects: [
        {
          name: null,
          stack: null,
          description:
            'Maintained and extended features for a Nuxt.js (Vue) application.',
        },
        {
          name: null,
          stack: null,
          description:
            'Integrated static HTML/CSS layouts into a Java (Wicket) backend.',
        },
        {
          name: null,
          stack: null,
          description:
            'Supported legacy projects using HTML/CSS/JavaScript (jQuery).',
        },
      ],
    },
  ];

  return (
    <div className='flex flex-col h-full w-full'>
      <div className='flex flex-col'>
        <ModuleWrapper name='.experience'>
          <div className='pl-10 flex flex-col gap-y-8'>
            {data.map((item, index) => {
              return (
                <div key={index} className='flex flex-col'>
                  <div className='w-full flex justify-between'>
                    <span className='text-xl font-primary text-blue-200 pb-5'>
                      {item.company},{' '}
                      <span className='italic'>{item.format}</span>
                    </span>
                    <span className='text-xl font-primary text-blue-200 pb-5'>
                      {item.date}
                    </span>
                  </div>

                  {item.projects.map((project) => {
                    return (
                      <>
                        <span className='w-full'>
                          {project.name && (
                            <span className='text-lg font-primary text-blue-200 pb-5'>
                              {project.name} ({project.stack})
                            </span>
                          )}
                        </span>
                        <span className='text-md font-primary text-blue-200 pb-5'>
                          {project.description}
                        </span>
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </ModuleWrapper>
      </div>
    </div>
  );
};

export default Experience;
