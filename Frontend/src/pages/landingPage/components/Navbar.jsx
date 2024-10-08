import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <nav className="container w-full text-white flex justify-between item-center py-4">
        <img
          src={logo}
          alt="logo"
          className=" md:h-[32px] h-[30px] cursor-pointer"
        />

        {/* List in desktops     */}
        <ul className=" list-none md:flex items-center  hidden ">
          {navLinks.map((nav) => (
            <li key={nav.name} className="xl:ml-20 ml-10 text-[16px] font-bold">
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>

        {/* List in small screens */}
        <div className="md:hidden flex flex-col justify-end item-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => settoggle((prev) => !prev)}
          />

          <div
            className={` ${
              toggle ? "flex" : "hidden"
            } bg-gradient-to-br from-stone-900 to-cyan-950 p-6 absolute top-20 right-0 mx-4 rounded-xl `}
          >
            <ul className="list-none  flex flex-col md:hidden ">
              {navLinks.map((nav) => (
                <li key={nav.name} className="text-[16px] my-2 mx-3 font-bold">
                  <Link href={nav.link}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link className=" md:flex hidden  items-center bg-emerald-500 px-2 rounded-lg hover:bg-emerald-600 transition duration-300">
          Get Started
        </Link>
      </nav>
      <hr className="border-gray-300 md:border-gray-600" />
    </>
  );
}

export default Navbar;
