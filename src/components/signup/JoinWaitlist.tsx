import Texts from "../Texts";
import FadeInText from "../animation/FadeInText";
import ButtonItem from "../button/Button";
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";


const Joinwaitlist = () => {
    const [refOne, inViewOne] = useInView({
        threshold: 0.3,
        triggerOnce: false,
      });
      

    return (
        <div className="m-auto mb-16 p-12 rounded-xl border-2 w-fit relative z-1 flex flex-col items-center justify-center">
            <div 
                ref={refOne}
                className="flex"
            >
                <Texts>
                    <FadeInText delay={0.4} inView={inViewOne}>
                    Thanks for your interest in IC-IMPACT COMMUNITY! Unfortunately, registration for our second cohort has ended as of June 2025. The next cohort is coming up in January 2026. 
                    <br/>Join our waitlist to get notified about upcoming opportunities!
                    </FadeInText>
                </Texts>
            </div>
            <div>
                <ButtonItem className="mt-3">
                    <Link to="https://wa.link/7bjpj0"> Join Wait List </Link>
                </ButtonItem>
            </div>
        </div>
    );
};

export default Joinwaitlist;