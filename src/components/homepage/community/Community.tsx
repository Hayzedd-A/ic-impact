import React from 'react';
import Structure from './Structure';
import Star from '@/assets/communityStar.webp';
import stick from '@/assets/stick.webp';
import { useInView } from 'react-intersection-observer';
import BlurText from '@/components/animation/BlurText';
import FadeIn from '@/components/animation/FadeIn';

const Community: React.FC = () => {
  const [refOne, inViewOne] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [refTwo, inViewTwo] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className=" min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto max-[600px]:pb-[10px] mb-[50px]">
      <div className="mt-[60px]" ref={refOne}>
        <h2 className="text-[35px] max-[600px]:text-[24px] font-rozanovaThin font-extrabold">
          <BlurText inview={inViewOne}>IC-IMPACT Community </BlurText>
        </h2>
        <p className="font-sourceSansItalic text-[18px]">...as far as you can see </p>
      </div>
      <div
        ref={refTwo}
        className="flex max-[1100px]:flex-col items-start max-[1100px]:items-center max-[1100px]:my-[60px] justify-between gap-[20px] max-[1100px]:gap-[30px] min-[1100px]:mt-[30px] max-[1100px]:mt-[20px]"
      >
        <FadeIn delay={0.2} up={true} inView={inViewTwo}>
          <Structure
            heading="Inner-Circle Of IMPACT Community"
            image={Star}
            text="At IC-IMPACT, we are deeply committed to supporting individuals who are ready to grow, scale, and be empowered. The Inner Circle of Impact is a closed mentorship community of just 20 people, trained for one month to strengthen their walk with God, gain clarity in purpose, and advance financially.It is important to note that the Inner Circle is not free it requires a commitment fee.This mentorship program begins immediately after the three month discipleship phase in the Circle of Impact.We encourage all members to strive for a place among these top achievers."
            bgColor="orangish"
            style="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[200px]"
          />
        </FadeIn>
        <FadeIn delay={0.5} up={true} inView={inViewTwo}>
          <Structure
            heading="Circle Of IMPACT Community"
            image={stick}
            text="At the Circle of Impact Community, we are dedicated to empowering individuals who are determined to grow and make a difference. The Circle of Impact is a structured 3-month discipleship program designed to build spiritual growth, guide purpose discovery, and strengthen financial empowerment.Our community now serves over 1,000 members, giving them access to weekly trainings, valuable resources, and meaningful opportunities for success. We remain committed to creating a safe and transformative space where growth is not just encouraged but made possible"
            bgColor="redish"
            style="absolute z-[1] top-1/2 left-[0px] transform  -translate-y-1/2 max-w-[150px]"
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default Community;
