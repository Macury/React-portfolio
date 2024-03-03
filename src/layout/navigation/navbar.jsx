import { useState } from "react";
import Button from "../../Shared/buttons/button";
import Wrapper from "../../Shared/wrapper";
import { Twirl as Hamburger } from "hamburger-react";
import MobileNav from "./mobilenav";
import logo from "../../assets/svgs/logo.svg";
const link = [
  {
    name: "Home",
    ref: "#home",
  },
  {
    name: "About",
    ref: "#about",
  },
  {
    name: "Process",
    ref: "#process",
  },
  {
    name: "Portfolio",
    ref: "#portfolio",
  },
  {
    name: "Blog",
    ref: "#blog",
  },
  {
    name: "Services",
    ref: "#services",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="font-work-sans py-6 shadow-sm fixed w-full bg-white z-20">
      <Wrapper>
        <div className="flex justify-between relative items-center">
          <img className="w-[150px] h-auto" src={logo} alt="logo" />
          <div className="gap-x-5 items-center hidden md:flex">
            {link.map((item, index) => (
              <a className="font-medium" key={index} href={item.ref}>
                {item.name}
              </a>
            ))}
            <Button buttonText="Contact" />
          </div>
          {isOpen && <MobileNav links={link} />}
          <div className="md:hidden">
            <Hamburger size={30} toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}

console.log(link);
