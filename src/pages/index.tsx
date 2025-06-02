import { Geist, Geist_Mono } from 'next/font/google';
import Cover from '@/modules/cover/Cover';
import PageWrapper from '@/components/pageWrapper/PageWrapper';
import About from '@/modules/about/About';
import Experience from '@/modules/experience/Experience';
import Projects from '@/modules/projects/Projects';
import Footer from '@/modules/footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
    >
      <PageWrapper>
        <Cover />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </PageWrapper>
    </div>
  );
}
