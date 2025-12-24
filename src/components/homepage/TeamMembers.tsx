import Texts from "../Texts";
import ButtonItem from "../button/Button";
import teamMembers from "@/assets/team-members.png";
import { useInView } from "react-intersection-observer";
import { HashLink as Link } from "react-router-hash-link";
import FadeIn from "../animation/FadeIn";

const TeamMembers = () => {
  const [refOne, inViewOne] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="max-[850px]:min-h-[70vh] max-[430px]:min-h-[100vh] pb-[90px] bg-greyish flex flex-col items-center max-[850px]:items-start justify-center max-[850px]:justify-start ">
      <div className="min-[1800px]:max-w-[1200px] w-full max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mt-[50px] mx-auto h-[80%]">
        <div className="flex flex-col">
          <h2 className="flex flex-col items-start gap-[3px] scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[30px] max-[850px]:mt-[40px] max-[850px]:mb-3">
            {" "}
            <span>Community</span>
            <span>Team Members</span>{" "}
          </h2>
          <div
            ref={refOne}
            className="flex max-[850px]:flex-col items-center max-[850px]:items-start justify-between gap-[30px] max-[850px]:gap-[100px] font-sourceSans"
          >
            <div className="flex flex-col gap-[20px]">
              <section className="flex flex-col gap-[20px] max-w-[500px] max-[980px]:max-w-[400px] max-[850px]:max-w-full">
                <Texts>
                  <strong>The IC-IMPACT Community team</strong>{" "}
                  <span>
                    is a fervent and loyal group, committed to guiding and
                  </span>{" "}
                  <strong> empowering every member. </strong>
                </Texts>
                <Texts>
                  With strong leadership and a focus on faith, purpose, and
                  growth, our team provides the mentorship, resources, and
                  support needed for success.{" "}
                </Texts>
                <Texts>
                  Each member plays a key role in fostering transformation and
                  helping you become a leader of impact.{" "}
                </Texts>
              </section>
              <ButtonItem className="w-[150px] max-[850px]:mx-auto">
                <Link to="/about#meetTeam">Meet The Team</Link>{" "}
              </ButtonItem>
            </div>
            <FadeIn delay={0.2} up={true} inView={inViewOne}>
              <div className="relative max-[850px]:mx-auto flex justify-end">
                <img className="w-[80%]" src={teamMembers} alt="team-members" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
