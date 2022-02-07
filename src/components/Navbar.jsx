import React, { useState, useEffect } from "react";
import { RiMenuFill, RiUser3Fill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

import { categories, types } from "../utils/Data";
import AuthForm from "./AuthForm";

const menuStyle = "md:hidden flex flex-col bg-violet-900 rounded-lg md:py-2 md:overflow-visible left-0 right-0 absolute w-auto m-3 mt-8 md:w-fit";
const mdMenuStyle =
  "md:before:absolute md:before:-top-6 md:before:p-4 md:before:px-8 hidden md:group-hover:flex md:hover:flex flex-col bg-violet-900 rounded-lg md:py-2 md:overflow-visible overflow-hidden left-0 right-0 absolute w-auto mx-3 mt-4 md:w-fit";

const menuElementStyle = "peer cursor-pointer flex w-full p-3 px-5 md:px-10 text-sm hover:bg-black/10 border-b-2 border-black/10 md:border-0";
const subMenuStyle =
  "py-2 flex flex-row flex-wrap bg-neutral-900 md:absolute md:top-0 md:left-32 md:-z-20 md:h-full md:w-[500px] md:rounded-lg md:pl-5 md:flex md:flex-row md:flex-wrap bg-neutral-900 md:origin-left md:scale-x-0  md:peer-hover:scale-x-100 md:peer-hover:transition-all md:peer-hover:duration-150 md:peer-hover:ease-in-out";
const mdGenresSubMenuStyle =
  "hover:scale-x-100 hidden md:py-2 md:absolute md:top-0 md:left-32 md:-z-20 md:h-full md:w-[300px] md:rounded-lg md:pl-5 md:flex md:flex-row md:flex-wrap bg-neutral-900 md:origin-left md:scale-x-0 md:peer-hover:scale-x-100 md:peer-hover:transition-all md:peer-hover:duration-150 md:peer-hover:ease-in-out`";
const subGenresMenuElementStyle = "flex h-fit text-xs px-5 py-1 w-1/2 hover:bg-white/5 text-zinc-500";
const Navbar = ({ genres }) => {
  const [isToggleMenu, setToggleMenu] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [showTypes, setShowTypes] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [mobileSearchClicked, setMobileSearchClicked] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleToggle = (param, setParam) => {
    if (windowDimensions.width < 768) {
      setParam(!param);
    }
  };

  useEffect(() => {
    if (windowDimensions.width >= 768) {
      setToggleMenu(false);
      setShowSearch(true);
    } else {
      if (!mobileSearchClicked) {
        setShowSearch(false);
      }
    }
  }, [windowDimensions.width]);

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row px-2  items-center gap-2 w-full relative z-20">
      {/* Mobile menu toggle bar */}

      <div className=" flex flex-row justify-between items-center  gap-4 w-full">
        <div className="flex flex-row  items-center gap-4">
          <div className="group">
            <button className="flex" onClick={() => handleToggle(isToggleMenu, setToggleMenu)}>
              <RiMenuFill fontSize={40} />
            </button>

            <div className={isToggleMenu ? menuStyle : mdMenuStyle}>
              <div>
                <a href="/" className={menuElementStyle}>
                  HOME
                </a>
              </div>
              <div>
                <a className={menuElementStyle} onClick={() => handleToggle(showGenres, setShowGenres)}>
                  GENRES
                </a>
                <div className={showGenres ? subMenuStyle : mdGenresSubMenuStyle}>
                  {genres.map((category) => (
                    <a href="/a" key={category.id} className={subGenresMenuElementStyle}>
                      {category.name}
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

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="https://9anime.vc/images/logo.png" alt="logo" className="w-48" />
          </a>

          {/* Search Bar */}
          <div className="flex md:relative">
            <input
              type="text"
              placeholder="Enter movie name here"
              className={
                showSearch
                  ? "absolute top-16 w-full left-0 bg-violet-900 md:relative md:top-0 md:hover:bg-zinc-700 md:focus:bg-zinc-700 md:bg-zinc-800 h-12 p-3 pr-12 pl-5 rounded-full text-sm outline-none"
                  : "hidden"
              }
            />
            <IoMdSearch className={showSearch ? "absolute h-12 w-12 px-2 top-16 md:top-0 right-0 text-zinc-400 cursor-pointer md:hover:text-violet-900 " : "hidden"} />
          </div>
        </div>

        <IoMdSearch
          onClick={() => {
            handleToggle(showSearch, setShowSearch);
            handleToggle(mobileSearchClicked, setMobileSearchClicked);
          }}
          className="flex md:hidden h-12 w-12 px-2 right-20 text-zinc-400 cursor-pointer hover:text-violet-900 "
        />
      </div>

      {/* Sign in button */}
      <button type="button" onClick={() => setShowForm(true)} className="p-2 min-w-max md:px-8 flex items-center justify-center bg-violet-900 rounded-full cursor-pointer ">
        <span className="hidden md:flex w-full h-full"> Sign In </span>
        <RiUser3Fill fontSize={24} className="flex md:hidden w-full h-full" />
      </button>
      <AuthForm setShowForm={() => setShowForm()} showForm={showForm} />
    </div>
  );
};

export default Navbar;
