import React from "react";
import headset from "@/assets/contactHeroImg.png";
import Texts from "../Texts";
import { Button } from "../ui/button";
import ButtonItem from "../button/Button";

const TestimonialHero: React.FC = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${headset})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[60vh] text-white relative flex flex-col items-center justify-center"
      >
        <div className="absolute z-[1] bg-black/80 w-full h-full"></div>
        <div
          className={`relative z-[2] flex flex-col justify-center items-center`}
        >
          <h1
            className={`mt-[40px] scroll-m-20 font-rozanovaBold tracking-tight text-[35px]`}
          >
            Testimonials
          </h1>
          <Texts className={`max-w-[520px] text-center mt-1 mx-4`}>
            Here, you’ll find lives transformed, purpose awakened, and destinies
            redirected by the hand of God through IC-IMPACT Community.
          </Texts>
          <ButtonItem className="!bg-orangish px-[50px] font-bold mt-10 rounded-[8px] text-white">
            JOIN IN
          </ButtonItem>
        </div>
      </div>
      {/* <PagesHero
        bgImage={headset}
        header="Contact Us"
        subHeader="Get in Touch"
        subText="We're here to help. Reach out to us with your questions or feedback."
        mainConStyle="h-[60vh] max-[600px]:h-[60vh] max-[480px]:h-[60vh] w-[80%] mx-auto"
        subConStyle="max-w-[520px] text-center mt-1"
        headerStyle="text-[35px]"
      /> */}
    </div>
  );
};

export default TestimonialHero;
