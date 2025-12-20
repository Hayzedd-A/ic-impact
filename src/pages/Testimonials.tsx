import React from "react";
import Footer from "@/components/footer/Footer";
import SmoothScrolling from "@/components/animation/SmoothScrolling";
import ScrollToTop from "@/components/button/ScrollToTop";
import TestimonialHero from "@/components/testimonials/TestimonialHero";
import TestimonialContainer from "@/components/testimonials/TestimonialContainer";

const Testimonials: React.FC = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div className="mx-auto overflow-x-hidden">
        <TestimonialHero />
        <TestimonialContainer  />
        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default Testimonials;
