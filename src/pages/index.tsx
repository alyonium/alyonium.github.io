import { Geist, Geist_Mono } from "next/font/google";
import Cover from "@/modules/cover/Cover";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import About from "@/modules/about/About";
import Experience from "@/modules/experience/Experience";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <PageWrapper>
        <div className="overflow-auto h-screen">
          <Cover/>
          <About/>
          <Experience/>
        </div>
      </PageWrapper>

    </div>
  );
}
