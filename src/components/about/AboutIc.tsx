import Texts from '@/components/Texts';
import React from 'react';
import running from '@/assets/attachment.jpeg';
import { useInView } from 'react-intersection-observer';
import FadeIn from '../animation/FadeIn';

const AboutIc: React.FC = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  return (
    <div className="min-[1800px]:min-h-[60vh] max-[1800px]:min-h-[80vh] max-[950px]:min-h-screen flex flex-col items-center justify-center">
      <div
        ref={refOne}
        className="min-[1800px]:max-w-[1200px] min-[1800px]:w-[50%] w-full max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto flex flex-wrap items-center justify-between gap-[30px] max-[950px]:my-[50px]"
      >
        <div className="relative max-w-[400px] max-[950px]:mx-auto">
          <img src={running} className='rounded-[30px]' alt="img" />
          <div className="bg-black/40 hover:bg-transparent absolute top-0 left-0 rounded-[30px] w-full h-full transition-all duration-700 ease-in-out"></div>
        </div>
        <FadeIn up={false} className="max-[950px]:mx-auto" inView={inView}>
          <div className="flex flex-col items-center gap-4 max-w-[400px] max-[950px]:mx-auto">
            <Texts>
              <strong>The InnerCircle of Impact Community (IC-IMPACT)</strong>
              <span className="ml-1">
                was born out of a profound vision to transform lives, raise purpose, and
                promote healing of the mind.
              </span>
            </Texts>
            <Texts className="">
              In today’s world, where young individuals often face obstacles that lead
              them down destructive paths such as illegal enterprises and uncertain
              futures, we felt an undeniable divine calling to stand as a signal of hope
              and empowerment
            </Texts>
            <Texts className="">
              The seed of this transformative community was laid during a life-changing
              spiritual retreat on October 2, 2024, where the word IMPACT was divinely
              revealed as our core mission{' '}
            </Texts>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default AboutIc;
