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
import VimeoPlayer from "@/components/homepage/IntroVideo";
import LinkedInAwardMarque from "@/components/homepage/LinkedInAwardMarque";

const Homepage: React.FC = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div className="mx-auto overflow-x-hidden">
        <Hero />
        <LinkedInAwardMarque />
        <VimeoPlayer videoUrl="https://player.vimeo.com/video/1141925851" autoplay={true} muted={false} loop={true} className="h-[40em]" />
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

