import Texts from '../Texts';
import workingGuy from '@/assets/workingGuy.webp';
import ContactForm from './ContactForm';

const ContactInfo = () => {
  return (
    <div>
      <div className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto min-[900px]:flex max-[900px]:flex-col min-[900px]:items-end max-[900px]:items-center justify-between gap-[30px] my-[50px]">
        <div className="flex flex-col max-[900px]:mx-auto gap-4 max-w-[350px]">
          <Texts>
            <strong>For more direct or urgent communication</strong>, contact the phone number and/or email address below:
          </Texts>
          <Texts>
            <span>
              email us at:{' '}
              <a href="mailto:support@icimpact.online" rel="noopener noreferrer">
                <strong>support@icimpact.online</strong>{' '}
              </a>{' '}
            </span>
            <br />
            <span>
              call us at:{' '}
              <a href="tel:+2349050876798" rel="noopener noreferrer">
                <strong>+234 905 087 6798</strong>{' '}
              </a>{' '}
            </span>
          </Texts>
          <div className="max-w-[400px]">
            <img src={workingGuy} alt="img" />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactInfo;
