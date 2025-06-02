import { BRACKET } from '@/const/const';
import { ReactNode } from 'react';

const ModuleWrapper = ({
  children,
  name,
  bracketType = BRACKET.curly,
}: {
  children: ReactNode;
  name: string;
  bracketType: BRACKET;
}) => {
  switch (bracketType) {
    case BRACKET.curly:
      return (
        <>
          <span className='text-5xl font-primary heading-text-shadow-colored text-sky-200 pb-10 justify-start'>
            {name} &#123;
          </span>

          {children}

          <span className='text-5xl font-primary heading-text-shadow-colored text-sky-200 pt-5 justify-end'>
            &#125;
          </span>
        </>
      );
    case BRACKET.square:
      return (
        <>
          <span className='text-5xl font-primary heading-text-shadow-colored text-sky-200 pb-10 justify-start'>
            {name} [
          </span>

          {children}

          <span className='text-5xl font-primary heading-text-shadow-colored text-sky-200 pt-5 justify-end'>
            ]
          </span>
        </>
      );
  }
};

export default ModuleWrapper;
