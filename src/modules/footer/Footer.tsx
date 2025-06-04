import { getYear } from '@/utils/getCurrentYear';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex justify-between items-center pb-10'>
      <span className='font-primary text-blue-200'>
        alyonium © {getYear()}
      </span>
      <div className='flex gap-x-2'>
        <Link href='https://t.me/alyonium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#bfdbff'
            strokeWidth='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
          </svg>
        </Link>

        <Link href='mailto:alyonium.work@gmail.com'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#bfdbff'
            strokeWidth='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
            <path d='M3 7l9 6l9 -6' />
          </svg>
        </Link>

        <Link href='https://github.com/alyonium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#bfdbff'
            strokeWidth='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
          </svg>
        </Link>

        <Link href='https://www.linkedin.com/in/alenastovpets/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#bfdbff'
            strokeWidth='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M8 11v5' />
            <path d='M8 8v.01' />
            <path d='M12 16v-5' />
            <path d='M16 16v-3a2 2 0 1 0 -4 0' />
            <path d='M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z' />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
