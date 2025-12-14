import React from 'react';
import dune from '@/assets/dune.webp';
import Texts from '@/components/Texts';
import actionImg from '@/assets/actionImg.webp';
import ButtonItem from '@/components/button/Button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC<{ hideButton?: boolean }> = ({ hideButton = false }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${dune})`,
      }}
      className="flex flex-col items-center justify-center min-[1800px]:h-[40vh] max-[1800px]:h-[60vh] w-full"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-[150px]">
          <img src={actionImg} alt="img" />
        </div>
        <h1 className="scroll-m-20 font-sourceSansBold tracking-tight text-[30px] leading-[55px]">
          Join the Movement
        </h1>
        <Texts>Ready to make an impact?</Texts>
        {!hideButton && <ButtonItem className="mt-4">
          <Link to="/signup">Sign Up</Link>
        </ButtonItem>}
      </div>
    </div>
  );
};

export default CallToAction;
