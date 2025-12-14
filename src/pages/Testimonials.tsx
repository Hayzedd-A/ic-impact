import React from "react";
import Footer from "@/components/footer/Footer";
import SmoothScrolling from "@/components/animation/SmoothScrolling";
import ScrollToTop from "@/components/button/ScrollToTop";
import IntroVideo from "@/components/homepage/IntroVideo";
import TestimonialHero from "@/components/testimonials/TestimonialHero";

const Testimonials: React.FC = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div className="mx-auto overflow-x-hidden">
        <TestimonialHero />

        {/* <IntroVideo /> */}
        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default Testimonials;
