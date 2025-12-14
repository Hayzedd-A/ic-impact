import React from 'react';
import Footer from '@/components/footer/Footer';
import SafeHaven from '@/components/community/SafeHaven';
import FirstStep from '@/components/community/FirstStep';
import CommunityHero from '@/components/community/CommunityHero';
import SmoothScrolling from '@/components/animation/SmoothScrolling';
import ScrollToTop from '@/components/button/ScrollToTop';
import Pillars from '@/components/community/pillar/Pillars';
import Benefit from '@/components/community/Benefit';
import Circle from '@/components/community/Circle';
import Citizen from '@/components/contact/Citizen';
import Requirements from '@/components/community/requirements/Requirements';
import CallToAction from '@/components/about/CallToAction';

const Community: React.FC = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div className="mx-auto overflow-x-hidden">
        <CommunityHero />
        <SafeHaven />
        <FirstStep />
        <Pillars />
        <Benefit />
        <Circle />
        <Citizen />
        <Requirements />
        <CallToAction hideButton={true}/>
        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default Community;
