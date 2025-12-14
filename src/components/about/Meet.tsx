import Texts from '@/components/Texts';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa6';
import { MdOutlineWhatsapp } from 'react-icons/md';
import Jeph from '@/assets/shepherd.webp';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import FadeIn from '../animation/FadeIn';

const Meet = () => {
  const [refOne, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [refTwo, inViewTwo] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="min-[1800px]:min-h-[60vh] max-[1800px]:min-h-[80vh] flex flex-col items-center justify-center ">
      <div className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] min-[1800px]:w-[55%] my-[40px] mx-auto ">
        <h2 className="flex flex-col items-start font-rozanovaBold scroll-m-20 text-[35px] max-[900px]:text-[30px] max-[480px]:text-[24px] tracking-tight mb-4 mt-[40px]">
          <span>Meet the Community</span>
          <span>Team Members</span>
        </h2>
        <div className="flex max-[850px]:flex-col items-center justify-between gap-[30px]">
          <div className="max-w-[400px] min-w-[400px]" >
            <img className='rounded-[10px]' src={Jeph} alt="Shepard" />
          </div>
          <div className="max-w-[500px] max-[850px]:max-w-full">
            <div ref={refOne} className="flex flex-col items-start">
              <h3 className="scroll-m-20 text-[24px] tracking-tight first:mt-0">
                Adewale Tomiwa Jephthah
              </h3>
              <span className=" font-sourceSansBold">
                <strong> Community Shepherd </strong>
              </span>
            </div>
            <section ref={refTwo} className="flex flex-col gap-4 items-start mt-4">
              <FadeIn className='flex flex-col gap-2' up={true} inView={inViewTwo}>
                <Texts>
                  I’m Jephthah, a child of God, a minister of the Gospel, and a successful
                  Data Engineer with a deep passion for impacting young lives.{' '}
                </Texts>
                <Texts>
                  By God’s grace, I serve not as one who knows it all, but as someone
                  continuously guided and helped by God.
                </Texts>
                <Texts>
                  My purpose is to assist others in discovering and establishing their
                  God-given purpose, and I am wholeheartedly committed to serving the
                  IC-IMPACT community with humility and grace.
                </Texts>
              </FadeIn>
            </section>
            <ul className="flex items-start gap-4 mt-[10px]">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  // y: inView ? 0 : 20,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                className="p-2 bg-[#E4E4E4] text-black rounded-md"
              >
                <a
                  href="https://wa.link/bagbud"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<MdOutlineWhatsapp />}{' '}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  // y: inView ? 0 : 20,
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
                className="p-2 bg-[#E4E4E4] text-black rounded-md"
              >
                <a
                  href="https://www.facebook.com/peculiar.jeph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaFacebook />}{' '}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  // y: inView ? 0 : 20,
                  transition: {
                    delay: 0.7,
                    duration: 0.5,
                  },
                }}
                className="p-2 bg-[#E4E4E4] text-black rounded-md"
              >
                <a
                  href="https://www.instagram.com/peculiar.jeph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaInstagram />}{' '}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  transition: {
                    delay: 0.9,
                    duration: 0.5,
                  },
                }}
                className="p-2 bg-[#E4E4E4] text-black rounded-md"
              >
                <a
                  href="https://www.tiktok.com/@tomiwa_jeph?_t=8sROCozm33l&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaTiktok />}{' '}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  transition: {
                    delay: 1.1,
                    duration: 0.5,
                  },
                }}
                className="p-2 bg-[#E4E4E4] text-black rounded-md"
              >
                <a
                  href="https://www.linkedin.com/in/peeteedesigns?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaLinkedin />}
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
