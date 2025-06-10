type ProjectType = {
  id: string;
  name: string | null;
  stack: string | null;
  description: string;
};

type ExperienceType = {
  id: string;
  company: string;
  title: string;
  format: string;
  date: string;
  projects: ProjectType[];
};

export const data: ExperienceType[] = [
  {
    id: '2417dc9b-e2c9-47b3-aa9d-de2dbe6973d8',
    company: 'FORS',
    title: 'Frontend Developer',
    format: 'remote',
    date: 'Oct 2020 – May 2025',
    projects: [
      {
        id: '6a2b559e-6409-4a76-9a35-e23bfe4befbc',
        name: 'Veterinary Pharma Monitoring',
        stack: 'React, Formik',
        description:
          'Developed a new module for an existing system. Created new pages and reusable components, working with complex nested forms and validation logic. Worked in a frontend team of 2 developers. Collaborated with backend lead, QA, PM, and analysts.',
      },
      {
        id: '6a4fedb2-8f10-40c6-8b23-56cd303a4d23',
        name: 'Social Services Platform',
        stack: 'React, MaterialUI, Redux',
        description:
          'Developed a system for managing personal data. Each section of data integrated with separate backend microservices. Focused on state management and validation.',
      },
      {
        id: 'a5e012cb-0f5e-43a5-89c4-afa78b5d4f66',
        name: 'Data Archiving Web App',
        stack: 'Vue3, Ant Design, Vuex',
        description:
          'Migrated a desktop application to a web application. Designed and implemented complex, interactive data tables, including functionality for pasting structured data from Excel directly into the web interface. Collaborated with a frontend team of 4 and QA, backend devs, PM, analytics.',
      },
      {
        id: '4b154866-281d-42d6-bf91-b85b313c928a',
        name: 'Road Accident Analytics System',
        stack: 'Vue2, Vuetify, Highcharts',
        description:
          'Developed advanced data visualizations (charts, graphs, maps) using datasets of traffic accidents in Russia. Worked closely with a backend developer.',
      },
    ],
  },
  {
    id: '5f1935d1-73de-4c50-8e7b-8afd0ed2bfa0',
    company: 'FORS',
    title: 'Junior Frontend Developer',
    format: 'remote',
    date: 'Sep 2019 – Oct 2020',
    projects: [
      {
        id: '4d21d8b8-e425-4cfb-8769-d64c342c923c',
        name: null,
        stack: null,
        description:
          'Maintained and extended features for a Nuxt.js (Vue) application.',
      },
      {
        id: '31c552d8-4341-4651-b2ca-c5ac731c1a23',
        name: null,
        stack: null,
        description:
          'Integrated static HTML/CSS layouts into a Java (Wicket) backend.',
      },
      {
        id: 'ab4ab994-c25e-4257-b158-a2e34e718d06',
        name: null,
        stack: null,
        description:
          'Supported legacy projects using HTML/CSS/JavaScript (jQuery).',
      },
    ],
  },
];
