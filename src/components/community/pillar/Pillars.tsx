import FadeIn from "@/components/animation/FadeIn";
import Structure from "./Structure";
import Texts from "@/components/Texts";
import { useInView } from "react-intersection-observer";

const Pillars = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div
      id="inner"
      className="min-h-[90vh] bg-greyish flex flex-col items-center justify-center gap-[60px]"
    >
      <h2 className="scroll-m-20 font-rozanovaBold text-center font-bold tracking-tight text-black text-[40px] max-[950px]:text-[32px] max-[600px]:text-[28px] mt-[30px] max-[950px]:mt-[50px] pt-3 leading-[40px] max-[950px]:leading-[20px]">
        The Pillars of IC-IMPACT{" "}
      </h2>
      <div
        ref={ref}
        className="flex max-[950px]:flex-col items-start max-[950px]:items-center justify-between min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto max-[950px]:my-[0px] gap-[20px] max-[950px]:gap-[40px]"
      >
        <FadeIn inView={inView} delay={0.2}>
          <Structure>
            <div
              className={`w-[90%] mx-auto flex flex-col items-center justify-start gap-4 pt-[30px] pb-[40px]`}
            >
              <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black bg-white text-[30px] pt-3 leading-[40px]">
                InnerCircle of Impact Community{" "}
              </h3>
              <Texts className={``}>
                At IC-IMPACT, we are deeply committed to supporting individuals
                who are ready to grow, scale, and be empowered. The Inner Circle
                of Impact is a closed mentorship community of just 20 people,
                trained for one month to strengthen their walk with God, gain
                clarity in purpose, and advance financially.It is important to
                note that the Inner Circle is not free it requires a commitment
                fee.
              </Texts>

              <Texts>
                This mentorship program begins immediately after the three month
                discipleship phase in the Circle of Impact.We encourage all
                members to strive for a place among these top achievers.{" "}
              </Texts>
            </div>
          </Structure>
        </FadeIn>
        <FadeIn inView={inView} delay={0.5}>
          <Structure>
            <div
              className={`w-[90%] mx-auto flex flex-col justify-start gap-4 pt-[30px] pb-[40px]`}
            >
              <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black bg-white text-start text-[30px] pt-3 leading-[40px]">
                Circle of Impact Community{" "}
              </h3>
              <Texts className={``}>
                At the Circle of Impact Community, we are dedicated to
                empowering individuals who are determined to grow and make a
                difference. The Circle of Impact is a structured 3-month
                discipleship program designed to build spiritual growth, guide
                purpose discovery, and strengthen financial empowerment.
              </Texts>

              <Texts>
                Our community now serves over 1,000 members, giving them access
                to weekly trainings, valuable resources, and meaningful
                opportunities for success. We remain committed to creating a
                safe and transformative space where growth is not just
                encouraged but made possible.{" "}
              </Texts>
            </div>
          </Structure>
        </FadeIn>
      </div>
      <Texts
        variant="custom"
        className="max-[950px]:w-[80%] max-[600px]:w-[90%] mb-[50px] text-center text-[18px] font-sourceSansBold w-[50%] mt-[20px] max-[600px]:mt-0 mx-auto"
      >
        An environment where everyone is empowered to reach their full potential
        and contribute meaningfully to society.{" "}
      </Texts>
    </div>
  );
};

export default Pillars;
