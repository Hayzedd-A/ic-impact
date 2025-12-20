import SmoothScrolling from "@/components/animation/SmoothScrolling";
import ScrollToTop from "@/components/button/ScrollToTop";
import Footer from "@/components/footer/Footer";
import Events from "@/components/pastEvents/Events";
import IntroParagrapgh from "@/components/pastEvents/IntroParagrapgh";
import TestimonialHero from "@/components/testimonials/TestimonialHero";

const PastEvents = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <TestimonialHero
        title="Past Events"
        subText="IC-IMPACT Community has been blessed with incredible seasons of learning, growth, and celebration."
      />
      <div className="mx-auto overflow-x-hidden flex flex-col justify-center">
        <IntroParagrapgh />
        <Events />
      </div>
      <Footer />
    </SmoothScrolling>
  );
};

export default PastEvents;
