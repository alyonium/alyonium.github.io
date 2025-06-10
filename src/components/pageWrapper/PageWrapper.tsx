import { ReactNode, RefObject, useRef } from 'react';
import { useEmojiCanvas } from '@/hooks/useEmojiCanvas';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const canvasRef: RefObject<HTMLCanvasElement | null> =
    useRef<HTMLCanvasElement>(null);

  useEmojiCanvas(canvasRef);

  return (
    <div className='relative h-screen w-screen bg-slate-950 overflow-hidden'>
      <canvas ref={canvasRef} className='absolute top-0 left-0 z-0' />

      <div className='relative z-10 overflow-auto h-screen w-full'>
        <div className='flex flex-col xl:gap-y-32 sm:gap-y-24 gap-y-20 2xl:ml-96 2xl:mr-96 xl:ml-64 xl:mr-64 lg:ml-48 lg:mr-48 sm:ml-20 sm:mr-20 ml-8 mr-8'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
