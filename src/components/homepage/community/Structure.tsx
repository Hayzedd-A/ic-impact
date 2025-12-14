import Texts from '@/components/Texts';
import clsx from 'clsx';
import { MoveRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

type IProps = {
  heading?: string;
  text?: string;
  image?: string;
  link?: string;
  bgColor?: 'orangish' | 'redish' | 'custom';
  style?: string;
};

const Structure: React.FC<IProps> = ({ heading, text, image, bgColor, style }) => {
  return (
    <div className="max-[500px]:w-full">
      <div
        style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
        className="flex max-[600px]:flex-col gap-[20px] items-center h-[600px] min-h-[300px] min-[600px]:max-h-[600px] max-[600px]:min-h-[100%] max-[600px]:h-full "
      >
        <div
          className={clsx(
            `min-h-full max-[500px]:min-h-[250px] max-[500px]:w-full relative z-10 flex flex-col items-center justify-center mx-auto`,
            bgColor === 'orangish' && 'bg-orangish',
            bgColor === 'redish' && 'bg-redish'
          )}
        >
          <div className={`w-[200px] h-full relative z-[1]`}>
            <img className={style} src={image} alt="img" />
          </div>
        </div>
        <div className="px-2 max-[500px]:px-4 max-[500px]:pb-4">
          <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[20px] leading-[25px] max-w-[250px] max-[500px]:max-w-full">
            {heading}
          </h3>
          <Texts className="max-w-[250px] max-[500px]:max-w-full mt-4">{text}</Texts>
          <Texts className=" mt-[30px] cursor-pointer text-cyanish">
            <Link className="flex items-center gap-3 mx-auto " to="/community">
              <span>Find Out More</span>
              <span>{<MoveRight />}</span>{' '}
            </Link>
          </Texts>
        </div>
      </div>
    </div>
  );
};

export default Structure;
