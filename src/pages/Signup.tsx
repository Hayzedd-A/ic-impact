import SmoothScrolling from '@/components/animation/SmoothScrolling';
import ScrollToTop from '@/components/button/ScrollToTop';
import Footer from '@/components/footer/Footer';
import Joinwaitlist from '@/components/signup/JoinWaitlist';
import SignUpForm from '@/components/signup/SignUpForm';
// import SignUpForm from '@/components/signup/SignUpForm';
import SignUpHero from '@/components/signup/SignUpHero';
import { ToastContainer } from 'react-toastify';

const Signup = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <ToastContainer />
      <SignUpHero />
      <Joinwaitlist />
      {/* <SignUpForm/> */}
      <Footer />
    </SmoothScrolling>
  );
};

export default Signup;
