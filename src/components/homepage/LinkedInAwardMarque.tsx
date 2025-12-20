import Marquee from "../ui/Marque";

const LinkedInAwardMarque = () => {
    return (
        <Marquee 
            speed={100} 
            direction="left" 
            pauseOnHover={false} 
            gradient={false}
            className=" py-4"
            gap={48}
          >
            {['Linkedln Local Nigeria 2025 The Most Impactful Community Award Winner'].map((text, index) => (
              <span key={index} className="text-xl text-gray-500 font-bold whitespace-nowrap">
                {text} •
              </span>
            ))}
          </Marquee>
    );
};

export default LinkedInAwardMarque;
