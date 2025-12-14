import React from 'react';

type IProps = {
  children: React.ReactNode;
};

const Structure: React.FC<IProps> = ({ children }) => {
  return (
    <div
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      className={`bg-white min-[600px]:max-w-[500px] max-[600px]:max-w-full h-[450px] min-[600px]:w-[450px] max-[600px]:w-[100%] min-w-[300px] rounded-[10px] `}
    >
      {children}
    </div>
  );
};

export default Structure;
