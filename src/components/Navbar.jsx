import React, { useState, useEffect } from "react";
import { RiMenuFill } from "react-icons/ri";

import { categories, types } from "../utils/Data";

const menuStyle = "md:hidden flex flex-col bg-violet-900 rounded-lg md:py-2 md:overflow-visible overflow-hidden left-0 right-0 absolute w-auto m-3 mt-8 md:w-fit";
const mdMenuStyle = "hidden md:flex flex-col bg-violet-900 rounded-lg md:py-2 md:overflow-visible overflow-hidden left-0 right-0 absolute w-auto m-3 mt-8 md:w-fit";

const menuElementStyle = "curosr-pointer flex w-full p-3 px-5 md:px-10 text-sm hover:bg-black/10 border-b-2 border-black/10 md:border-0";
const subMenuStyle =
  "py-2 flex flex-row flex-wrap bg-neutral-900 md:absolute md:top-0 md:left-32 md:-z-10 md:h-full md:w-[500px] md:rounded-lg md:pl-5 md:flex md:flex-row md:flex-wrap bg-neutral-900 md:origin-left md:scale-x-0  md:group-hover:scale-x-100 md:group-hover:transition-all md:group-hover:duration-150 md:group-hover:ease-in-out";
const mdGenresSubMenuStyle =
  "hidden md:py-2 md:absolute md:top-0 md:left-32 md:-z-10 md:h-full md:w-[500px] md:rounded-lg md:pl-5 md:flex md:flex-row md:flex-wrap bg-neutral-900 md:origin-left md:scale-x-0  md:group-hover:scale-x-100 md:group-hover:transition-all md:group-hover:duration-150 md:group-hover:ease-in-out`";
const mdTypesSubMenuStyle =
  "hidden md:py-2 md:absolute md:top-0 md:left-32 md:-z-10 md:h-full md:w-32 md:rounded-lg md:pl-5 md:flex md:flex-col bg-neutral-900 md:origin-left md:scale-x-0  md:group-hover:scale-x-100 md:group-hover:transition-all md:group-hover:duration-150 md:group-hover:ease-in-out`";
const subGenresMenuElementStyle = "flex h-fit text-xs px-5 py-1 w-1/4 hover:bg-white/5 text-zinc-500";
const subTypesMenuElementStyle = "flex h-fit text-xs px-5 py-1 w-full hover:bg-white/5 text-zinc-500";
const Navbar = () => {
  const [isToggleMenu, setToggleMenu] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [showTypes, setShowTypes] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleToggle = (param, setParam) => {
    console.log(windowDimensions)
    if(windowDimensions.width < 786){
      console.log(param);
      setParam(!param);
    }

  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-row px-2  items-center gap-4">
      {/* Mobile menu toggle bar */}

      <div className="">
        <button className="flex" onClick={() => handleToggle(isToggleMenu, setToggleMenu)}>
          <RiMenuFill fontSize={40} />
        </button>

        <div className={isToggleMenu ? menuStyle : mdMenuStyle}>
          <div>
            <a href="/" className={menuElementStyle}>
              HOME
            </a>
          </div>
          <div className="group">
            <a className={menuElementStyle} onClick={() => handleToggle(showGenres, setShowGenres)}>
              GENRES
            </a>
            <div className={showGenres ? subMenuStyle : mdGenresSubMenuStyle}>
              {categories.map((category) => (
                <a href="/a" key={category} className={subGenresMenuElementStyle}>
                  {category}
                </a>
              ))}
            </div>
          </div>
          <div className="group">
            <a className={menuElementStyle} onClick={() => handleToggle(showTypes, setShowTypes)}>
              TYPES
            </a>
            <div className={showTypes ? subMenuStyle : mdTypesSubMenuStyle}>
              {types.map((type) => (
                <a href="/a" key={type} className={subTypesMenuElementStyle}>
                  {type}
                </a>
              ))}
            </div>
          </div>
          <div>
            <a href="/" className={menuElementStyle}>
              UPDATED
            </a>
          </div>
          <div>
            <a href="/" className={menuElementStyle}>
              ADDED
            </a>
          </div>
          <div>
            <a href="/" className={menuElementStyle}>
              ONGOING
            </a>
          </div>
          <div>
            <a href="/" className={menuElementStyle}>
              UPCOMING
            </a>
          </div>
        </div>
      </div>

      <a className="flex items-center">
        <img src="https://9anime.vc/images/logo.png" alt="logo" className="w-48" />
      </a>
    </div>
  );
};

export default Navbar;
