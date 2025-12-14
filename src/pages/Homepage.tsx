import React from "react";
import Hero from "@/components/homepage/hero/Hero";
import OurFoundation from "@/components/homepage/OurFoundation";
import Discover from "@/components/homepage/Discover";
import Community from "@/components/homepage/community/Community";
import TeamMembers from "@/components/homepage/TeamMembers";
import Approach from "@/components/homepage/Approach";
import Footer from "@/components/footer/Footer";
import SmoothScrolling from "@/components/animation/SmoothScrolling";
import ScrollToTop from "@/components/button/ScrollToTop";
import IntroVideo from "@/components/homepage/IntroVideo";

const Homepage: React.FC = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div className="mx-auto overflow-x-hidden">
        <Hero />
        <IntroVideo />
        <OurFoundation />
        <Discover />
        <Community />
        <TeamMembers />
        <Approach />
        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default Homepage;
