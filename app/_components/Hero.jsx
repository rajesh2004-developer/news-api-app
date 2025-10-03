import { Button } from '@/components/ui/button';
import { SidebarContext } from '@/Context/SidebarContext';
import { ArrowBigDown } from 'lucide-react';
import Image from 'next/image';
import React, { useContext } from 'react';

const Hero = () => {
  const {isOpen } = useContext(SidebarContext);
  return (
    <div
      className={`text-center ${
        isOpen ? 'w-full' : 'w-screen'
      } flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8 bg-[url('/Map.svg')] bg-no-repeat bg-cover bg-center transition-all duration-300 ease-in `}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={30}
        height={30}
        className="h-12 w-24 sm:h-15 sm:w-30 mb-2"
      />
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mt-4 max-w-4xl">
        Stay Informed, Stay Ahead Stay ahead with quick, reliable updates
        tailored for busy professionals. Get the latest news at a glance,
        anytime, anywhere.
      </p>
      <Button
        className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl cursor-pointer p-3 flex items-center gap-2"
        onClick={() => {
          document.getElementById('news')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }}
      >
        Scroll Down <ArrowBigDown className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    </div>
  );
};

export default Hero;
