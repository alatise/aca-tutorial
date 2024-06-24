// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/react.svg";

function Header() {
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Services" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Virtual Estimates" },
    { id: 5, text: "Testimonial" },
    { id: 6, text: " Get in Touch" },
  ];
  return (
    <>
      <div className="flex justify-between mt-5  items-center px-6 ">
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
    </>
  );
}

export default Header;
