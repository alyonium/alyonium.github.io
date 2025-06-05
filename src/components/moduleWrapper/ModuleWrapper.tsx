import { BRACKET } from '@/const/const';
import { ReactNode } from 'react';

const ModuleWrapper = ({
  children,
  name,
  bracketType = BRACKET.curly,
}: {
  children: ReactNode;
  name: string;
  bracketType?: BRACKET;
}) => {
  const brackets = { left: '{', right: '}' };

  if (bracketType === BRACKET.square) {
    brackets.left = '[';
    brackets.right = ']';
  }

  return (
    <div className='flex flex-col backdrop-blur-sm'>
      <span className='xl:text-5xl sm:text-4xl text-3xl font-primary heading-text-shadow-colored text-sky-200 xl:pb-10 pb-8 justify-start'>
        {name} {brackets.left}
      </span>

      <div className='xl:pl-10 sm:pl-8 pl-5 w-full'>{children}</div>

      <span className='xl:text-5xlsm:text-4xl text-3xl font-primary heading-text-shadow-colored text-sky-200 xl:pt-5 pt-4 justify-end'>
        {brackets.right}
      </span>
    </div>
  );
};

export default ModuleWrapper;
