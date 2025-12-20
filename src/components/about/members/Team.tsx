import TeamMember from "./TeamMember";
import Abiodun from "@/assets/team-members/abiodun.webp";
import Adeyeye from "@/assets/team-members/Adeyeye.webp";
import Blessing from "@/assets/team-members/blessing.webp";
import Emmanuella from "@/assets/team-members/emmanuella.webp";
import Chidi from "@/assets/team-members/Chidi.webp";
import Makanjuola from "@/assets/team-members/makanjuola.webp";
import Lucas from "@/assets/team-members/Lucas.webp";
// import Joy from '@/assets/Joy.webp';
import FadeIn from "@/components/animation/FadeIn";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div>
      <div
        id="meetTeam"
        ref={refOne}
        className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto flex flex-col gap-y-[4em] max-[1100px]:flex-wrap min-[580px]:items-start max-[580px]:items-center justify-between gap-y-[30px] gap-x-[20px] max-[850px]:my-[50px]"
      >
        <div className="flex gap-[2em] flex-wrap justify-between max-w-[1200px] mx-auto">

          <FadeIn
            className="mx-auto mx-0"
            inView={inView}
            up
            upValue={40}
            opacity={false}
            delay={0.5}
          >
            <TeamMember
              image={Adeyeye}
              imageAlt={`${Adeyeye} Image`}
              memberName="Adeyeye Oluwafemi"
              memberPosition="Lead Circle Trainer"
            />
          </FadeIn>
          <FadeIn
            className="mx-auto mx-0"
            inView={inView}
            up
            upValue={50}
            opacity={false}
            delay={1.1}
          >
            <TeamMember
              image={Chidi}
              imageAlt={`${Chidi} Image`}
              memberName="Chidi Favour Martins"
              memberPosition="Community Content Strategist"
            />
          </FadeIn>
          <FadeIn
            className="mx-auto mx-0"
            inView={inView}
            up
            upValue={50}
            opacity={false}
            delay={1.1}
          >
            <TeamMember
              image={Lucas}
              imageAlt={`${Lucas} Image`}
              memberName="Ojo Lucas"
              memberPosition="Head Skill Trainer"
            />
          </FadeIn>
        </div>
        <div className="flex gap-[1em] max-[1048px]:flex-wrap justify-center max-w-[1200px] mx-auto">
          <FadeIn
            className="mx-0 max-w-[17em]"
            inView={inView}
            up
            upValue={40}
            opacity={false}
            delay={0.8}
          >
            <TeamMember
              image={Blessing}
              imageAlt={`${Blessing} Image`}
              memberName="Emejor Blessing"
              memberPosition="Trainer"
            />
          </FadeIn>
          <FadeIn
            className="mx-0 max-w-[17em]"
            inView={inView}
            up
            upValue={50}
            opacity={false}
            delay={1.1}
          >
            <TeamMember
              image={Emmanuella}
              imageAlt={`${Emmanuella} Image`}
              memberName="Oluebube Emmanuella"
              memberPosition="Trainer"
            />
          </FadeIn>
          <FadeIn
            className="mx-auto mx-0"
            inView={inView}
            up
            upValue={40}
            opacity={false}
            delay={0.2}
          >
            <TeamMember
              image={Abiodun}
              imageAlt={`${Abiodun} Image`}
              memberName="Jerome Abiodun"
              memberPosition="Trainer"
            />
          </FadeIn>
          <FadeIn
            className="mx-0 max-w-[17em]"
            inView={inView}
            up
            upValue={50}
            opacity={false}
            delay={1.1}
          >
            <TeamMember
              image={Makanjuola}
              imageAlt={`${Makanjuola} Image`}
              memberName="Makanjuola Aanuoluwapo"
              memberPosition="Trainer"
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Team;
