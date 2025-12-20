import React from 'react';
import ButtonItem from '@/components/button/Button';
import Texts from '@/components/Texts';
import heroImg from '@/assets/heroImg.png';
import map from '@/assets/map.webp';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="min-[970px]:h-[100vh] max-[970px]:min-h-screen min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto flex flex-col items-end justify-end ">
      <div className="relative h-[70%] ml-auto">
        <div className="flex max-[970px]:flex-col-reverse max-[970px]:items-start gap-4">
          <div className="flex flex-col items-start gap-[25px] max-[970px]:pt-[30px] max-[970px]:pb-[70px] max-[970px]:items-center">
            <h1 className="scroll-m-20 font-rozanovaBold font-semibold max-w-[900px] min-[1800px]:text-[45px] min-[1200px]:leading-[60px] min-[1200px]:text-[40px] max-[1200px]:text-[30px] max-[1200px]:leading-[50px] max-[670px]:text-[24px] max-[670px]:leading-[35px] tracking-tight max-[970px]:text-center ">
              Empowering Young Minds for Spiritual Growth and Purposeful Impact
            </h1>
            <Texts className="max-[970px]:text-center">
              We are dedicated to nuturing spirital growth and inspiring purposeful impact
              in the lives of young believers{' '}
            </Texts>
            <ButtonItem variant="primary" className="max-[970px]:mx-auto">
              <Link to="/signup">Join the Circle Now!</Link>{' '}
            </ButtonItem>
            <div>
              <Texts variant="secondary" className="max-[970px]:text-center">
                Faith Built. Purpose Aligned. Financially Equiped.
              </Texts>
            </div>
          </div>
          <div className="">
            <div className="min-[970px]:min-w-[500px] max-[670px]:min-w-[200px] max-[970px]:w-[600px] max-[670px]:w-[500px] max-[570px]:w-[350px] max-[420px]:w-[300px] max-[970px]:mt-[120px] max-[670px]:mt-[110px] max-[970px]:min-w-[300px]">
              <img src={heroImg} alt="img" />
            </div>
          </div>
        </div>
        <div className="absolute min-w-[500px] w-full min-[970px]:top-[-200px] min-[970px]:right-[-400px] max-[970px]:top-[0px] max-[970px]:right-[100px] max-[670px]:right-[-150px] z-[-1]">
          <img className="w-[70%]" src={map} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
