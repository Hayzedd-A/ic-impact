import Texts from '@/components/Texts';
import groupSelfie from '@/assets/about-1.jpeg';
import ButtonItem from '@/components/button/Button';
import { useInView } from 'react-intersection-observer';
import FadeIn from '../animation/FadeIn';
import { Link } from 'react-router-dom';

const FindYourPurpose = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="min-[1800px]:min-h-[60vh] max-[1800px]:min-h-[80vh] flex flex-col items-center justify-center">
      <div
        ref={refOne}
        className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] min-[1800px]:w-[50%] w-full  mx-auto flex flex-wrap flex-row-reverse items-center justify-between gap-[30px] max-[950px]:my-[50px]"
      >
        <div className="relative max-w-[400px] max-[950px]:mx-auto">
          <img className="rounded-[30px]" src={groupSelfie} alt="img" />
          <div className="bg-black/10 hover:bg-transparent absolute top-0 left-0 rounded-[30px] w-full h-full transition-all duration-700 ease-in-out"></div>
        </div>
        <FadeIn className="max-[950px]:mx-auto" inView={inView}>
          <div className="flex flex-col items-start gap-4 max-w-[400px] max-[950px]:mx-auto">
            <Texts>
              <span className="">
                With prayerful consideration and the leading of the Holy Spirit, this
                vision matured and blossomed into reality, leading to the official birth
                of IC-IMPACT on November 30, 2024.
              </span>
            </Texts>
            <Texts className="">
              IC-IMPACT was officially established, embodying the commitment to inspire
              and equip young people with the tools needed for spiritual growth, personal
              success, and positive societal transformation.
            </Texts>
            <Texts className="">
              Today, IC-IMPACT serves as a haven for those seeking a deeper connection
              with purpose and the skills to create meaningful change in their lives and
              communities.
            </Texts>
            <ButtonItem className="mt-4 max-[950px]:mx-auto">
              <Link to="/signup">Discover Your Purpose Today!</Link>{' '}
            </ButtonItem>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default FindYourPurpose;
