import Texts from "../Texts";
import award from "@/assets/AwardImage.jpg"

const IntroParagrapgh = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <h2 className="text-[20px] max-[600px]:text-[16px] leading-[25px] my-4">
        “Linkedln Local Nigeria Most Impactful Community of the 2025 Award
        Winner”
      </h2>
      <img src={award} alt="linkedIn award" className="w-[50%] max-[600px]:w-[100%]" />
      <Texts className="max-w-[70%] max-[600px]:max-w-[100%]">
        From the powerful moments in our first and second Cohort Graduations to
        the sessions that ignited fresh purpose in many hearts, every event
        represents a chapter in our journey of raising purposeful, empowered
        young Africans. This page is a collection of those milestones—photos and
        memories that reflect dedication, community, and God’s grace at work.
        Whether you’re new or have been with us from the beginning, these past
        events tell a story: we are only getting stronger, and the journey ahead
        is even brighter.
      </Texts>
    </div>
  );
};

export default IntroParagrapgh;
