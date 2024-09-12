import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="w-full flex fixed justify-between item-center md:px-20 px-7 py-4 ">
      <img
        src={logo}
        alt="logo"
        className=" md:h-[32px] h-[30px] cursor-pointer"
      />

      {/* List in desktops     */}
      <ul className="text-white list-none md:flex  hidden ">
        {navLinks.map((nav) => (
          <li key={nav.name} className="xl:ml-20 ml-10 text-[16px] font-bold">
            <a href={nav.link}>{nav.name}</a>
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
          <ul className="text-white list-none  flex flex-col md:hidden ">
            {navLinks.map((nav) => (
              <li key={nav.name} className="text-[16px] my-2 mx-3 font-bold">
                <a href={nav.link}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
