import logo from '@/assets/logo.webp';
import Texts from '../Texts';
import { Mail, Phone } from 'lucide-react';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa6';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  const community = [
    {
      id: 1,
      title: 'Vision',
      path: '/about#vision',
    },
    {
      id: 2,
      title: 'Mission',
      path: '/about#vision',
    },
    {
      id: 3,
      title: 'Circle of Impact',
      path: '/community#circle',
    },
    {
      id: 4,
      title: 'Inner-Circle of Impact',
      path: '/community#inner',
    },
  ];

  const pages = [
    {
      id: 1,
      page: 'Home',
      path: '/',
    },
    {
      id: 2,
      page: 'About',
      path: '/about',
    },
    {
      id: 3,
      page: 'Community',
      path: '/community',
    },
    {
      id: 4,
      page: 'Contact',
      path: '/contact',
    },
    {
      id: 5,
      page: 'Blog',
      path: '/blog',
    },
  ];
  return (
    <div className="bg-[#1C1C1C] flex flex-col items-center justify-center min-h-[60vh] py-[40px] text-white">
      <div className="flex flex-col gap-[30px] min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] h-[80%] mx-auto">
        <div className="flex flex-wrap items-start justify-between gap-[30px]">
          <div className="flex flex-col items-start gap-4">
            <div className="w-[100px]">
              <Link to="/">
                <img className='max-[1800px]:max-w-[200px] bg-white' src={logo} alt="img" />
              </Link>
            </div>
            <Texts className="max-w-[300px]">
              {' '}
              Learn about our mission to inspire, empower, and equip young individuals for
              spiritual growth, personal success, and societal transformation
            </Texts>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="scroll-m-20 font-sourceSans font-bold tracking-tight text-[20px]">
              Community{' '}
            </h2>
            <ul>
              {community.map((res) => (
                <li key={res.id}>
                  <Link to={res.path}>{res.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="scroll-m-20 font-sourceSans font-bold tracking-tight text-[20px]">
              Contact{' '}
            </h2>
            <ul className="flex flex-col gap-2">
              <li className=" flex items-center gap-[7px]">
                <span className="pt-1">{<Mail size={16} />} </span>
                <a href="mailto:support@icimpact.online" rel="noopener noreferrer">
                  support@icimpact.online{' '}
                </a>
              </li>
              <li className=" flex items-center gap-[7px]">
                <span className="pt-1">{<Phone size={16} />} </span>
                <a href="tel:+2349050876798" rel="noopener noreferrer">
                  +234 905 087 6798{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="scroll-m-20 font-sourceSans font-bold tracking-tight text-[20px]">
              Pages
            </h2>
            <ul className="flex flex-col items-start ga">
              {pages.map((page) => (
                <li key={page.id}>
                  <Link to={page.path}>{page.page}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="scroll-m-20 font-sourceSans font-bold tracking-tight text-[20px]">
              Socials
            </h2>
            <ul className="flex items-start gap-4">
              <li className="p-2 bg-[#E4E4E4] cursor-pointer text-black rounded-md">
                <a
                  href="https://bit.ly/icimpactcommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<MdOutlineWhatsapp />}{' '}
                </a>
              </li>
              <li className="p-2 bg-[#E4E4E4] cursor-pointer text-black rounded-md">
                <a
                  href="https://www.facebook.com/ic.impactcommunity?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaFacebook />}{' '}
                </a>
              </li>
              <li className="p-2 bg-[#E4E4E4] cursor-pointer text-black rounded-md">
                <a
                  href="https://www.instagram.com/ic_impactcommunity/profilecard/?igsh=MXE5N3NoNWJqZTgzNg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaInstagram />}{' '}
                </a>
              </li>
              <li className="p-2 bg-[#E4E4E4] cursor-pointer text-black rounded-md">
                <a
                  href="https://www.tiktok.com/@tomiwa_jeph?_t=8sROCozm33l&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  {<FaTiktok />}{' '}
                </a>
              </li>
              <li className="p-2 bg-[#E4E4E4] cursor-pointer text-black rounded-md">
                <a
                  href="https://www.linkedin.com/company/ic-impact-community/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  {<FaLinkedin />}{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white h-[1px] w-[100%] "></div>
        <div className="text-center">
          <Texts>© {new Date().getFullYear()} IC-IMPACT. All Rights Reserved </Texts>
        </div>
      </div>
    </div>
  );
};

export default Footer;
