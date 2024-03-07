import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navLinks } from "../constants/index";

const Menu = () => (
  <div className="text-white font-bold mx-2 text-center">
    <p className="mx-1 my-0">
      <a href="#home">Home</a>
    </p>
    <p className="mx-1 my-0">
      <a href="#about-us">About Us</a>
    </p>
    <p className="mx-1 my-0">
      <a href="#products">Products</a>
    </p>
    <p className="mx-1 my-0">
      <a href="#contact-us">Contact Us</a>
    </p>
  </div>
);

const Nav = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <header className=" padding-x absolute z-10 w-full py-8 font-semibold">
      <nav className=" max-container flex justify-between">
        <a href="/">
          <img src={headerLogo} alt="header" width={130} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden ">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className=" fonts-montserrat cursor-pointer text-lg leading-normal text-slate-gray"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        {/* <div className="hidden max-lg:block ">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="cursor-pointer hover:scale-110"
          />
        </div> */}
      </nav>
      <div className="right-8 top-8 hidden absolute max-lg:flex text-coral-red max-sm:right-4">
        {toggleMenu ? (
          <RiCloseLine
          
            size={33}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            
            size={33}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="flex justify-end items-end flex-col text-end p-4 bg-[rgba(255,100,82,0.9)] absolute top-5 right-0 mt-4 min-w-[140px] rounded-md shadow-lg md:min-w-[170px] md:p-8 z-20">
            <div className="">
              <Menu />
              <div className="hidden max-sm:block"></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
