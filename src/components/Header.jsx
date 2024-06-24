// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../assets/react.svg";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Services" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Virtual Estimates" },
    { id: 5, text: "Testimonial" },
    { id: 6, text: " Get in Touch" },
  ];
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="md:flex justify-between mt-5  items-center px-6  hidden">
        <img src={logo} alt="logo" />
        <div className="flex gap-5 cursor-pointer   ">
          <ul className="flex gap-7 ">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={` hover:border-b border-slate-50 pb-2 before:`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex  md:hidden justify-between px-3 mt-4 ">
        <img src={logo} alt="logo" />
        <div onClick={handleNav}>
          {nav ? <MdClose size={30} /> : <IoMdMenu size={30} />}
        </div>
        <ul
          className={
            nav
              ? "absolute z-20 md:hidden left-0 top-0 bg-black ease-in-out duration-500"
              : "ease-in-out duration-500 fixed top-0 left-[-100%]"
          }
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className={` hover:border-b border-slate-50 pb-2 before:`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
