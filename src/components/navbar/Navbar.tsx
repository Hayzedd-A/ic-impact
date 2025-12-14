import React, { useEffect, useState } from "react";
import ButtonItem from "../button/Button";
import Logo from "@/assets/logo.webp";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
const Navbar: React.FC = () => {
  const navItem = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Community",
      path: "/community",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "IC-impact",
      children: [
        {
          id: 1,
          name: "Testimonials",
          path: "/testimonials",
        },
        {
          id: 2,
          name: "Past Events",
          path: "/past-events",
        },
        {
          id: 3,
          name: "Blogs",
          path: "/blog",
        },
      ],
    },
  ];

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<number | null>(
    null
  );

  const router = useLocation();

  useEffect(() => {
    setIsOpened(false);
  }, [router.pathname]);

  return (
    <nav>
      <div className="bg-white fixed top-0 inset-x-0 z-[99] w-full">
        <div className="min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto bg-white">
          <div className="flex items-center justify-between gap-4 py-3">
            <div>
              <Link to="/">
                <img
                  className="max-[1800px]:max-w-[150px] min-[1800px]:max-w-[200px]"
                  src={Logo}
                  alt="img"
                />
              </Link>
            </div>
            <ul className="flex items-center justify-between gap-[30px] font-rozanovaBold max-[900px]:hidden">
              {navItem.map((item) =>
                item?.children ? (
                  <li
                    className="relative cursor-pointer group inline-block"
                    key={item.id}
                  >
                    <button className="flex items-center gap-1">
                      {item?.name}
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown wrapper with padding to bridge the gap */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <ul className="bg-white shadow-lg rounded-md overflow-hidden min-w-[200px]">
                        {item.children.map((child) => (
                          <li key={child.id} className="hover:bg-gray-100">
                            <Link
                              className={`block px-4 py-3 ${
                                router?.pathname === child.path
                                  ? "text-orangish font-bold"
                                  : ""
                              }`}
                              to={child?.path}
                            >
                              {child?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li
                    className="relative cursor-pointer group inline-block"
                    key={item.id}
                  >
                    <Link
                      className={`${
                        router?.pathname === item.path
                          ? "border-b-2 border-orangish"
                          : ""
                      }`}
                      to={item?.path}
                    >
                      {item?.name}
                    </Link>
                    <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-orangish scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
                  </li>
                )
              )}
            </ul>
            <Link to="/signup">
              <ButtonItem
                variant="primary"
                className="px-[20px] py-1 flex max-[900px]:hidden"
              >
                Join the Circle Now
              </ButtonItem>
            </Link>
            {isOpened ? (
              <button
                onClick={() => setIsOpened(false)}
                className="outline-none border-none hidden max-[900px]:flex"
              >
                <span className="text-[24px]">{<MdClose />}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsOpened(true)}
                className="outline-none border-none hidden max-[900px]:flex"
              >
                <span className="">{<Menu />}</span>
              </button>
            )}
          </div>

          <AnimatePresence>
            {isOpened && (
              <motion.div
                className={clsx(
                  "bg-white py-4",
                  isOpened && "fixed right-0 top-[60px] w-full",
                  !isOpened && "fixed right-[-100vw] top-[90px]"
                )}
                initial={{
                  opacity: 0,
                  width: "0",
                }}
                animate={{
                  opacity: 1,
                  width: "100%",
                }}
                exit={{
                  width: 0,
                  opacity: 0,
                }}
              >
                <ul className="flex flex-col w-full items-center justify-between gap-[15px] font-rozanovaBold min-[900px]:hidden">
                  {navItem.map((item) =>
                    item?.children ? (
                      <li
                        className="relative cursor-pointer w-full"
                        key={item.id}
                      >
                        <button
                          className="flex items-center justify-center gap-1 w-full"
                          onClick={() =>
                            setMobileOpenDropdown(
                              mobileOpenDropdown === item.id ? null : item.id
                            )
                          }
                        >
                          {item?.name}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileOpenDropdown === item.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Mobile Dropdown */}
                        {mobileOpenDropdown === item.id && (
                          <ul className="flex flex-col items-center gap-2 mt-2 bg-gray-50 py-2 rounded-md">
                            {item.children.map((child) => (
                              <li key={child.id} className="w-full text-center">
                                <Link
                                  className={`block py-2 ${
                                    router?.pathname === child.path
                                      ? "text-orangish font-bold"
                                      : ""
                                  }`}
                                  to={child?.path}
                                  onClick={() => {
                                    setMobileOpenDropdown(null);
                                    // Also close mobile menu if needed
                                    // setIsOpened(false);
                                  }}
                                >
                                  {child?.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li
                        className="relative cursor-pointer group inline-block"
                        key={item.id}
                      >
                        <Link to={item?.path}>{item?.name}</Link>
                        <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-orangish scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
                      </li>
                    )
                  )}
                </ul>
                <Link to="/signup">
                  <ButtonItem
                    variant="primary"
                    className="px-[20px] py-1 flex items-center justify-center mx-auto mt-4 min-[900px]:hidden"
                  >
                    Sign up
                  </ButtonItem>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
