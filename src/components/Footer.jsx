import React from "react";

import iconLogin from "../assets/images/footer-icon.png";

const alphabets = ["All", "#", "0-9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const Footer = () => {
  return (
    <div className="bg-neutral-900 w-full flex flex-row justify-center pt-4 mt-2">
      <div className="text-neutral-400 p-4 xl:w-[80rem] m-auto">
        <div className="hidden lg:flex flex-col w-4/5 text-sm p-2 gap-3">
          <h1 className="flex flex-row gap-4">
            <span className="font-bold"> A-Z LIST </span> | <span> Searching anime order by alphabet name A to Z. </span>{" "}
          </h1>

          <div className="flex flex-row flex-wrap gap-2 ">
            {alphabets.map((alphabet) => (
              <a href="#" className="w-8 h-8 flex items-center justify-center	text-sm bg-neutral-800 rounded-sm text-zinc-300 hover:bg-violet-900" key={alphabet}>
                {alphabet}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex flex-row  flex-wrap ">
          <div className="flex flex-col w-full lg:w-2/4 gap-4 items-center lg:items-start ">
            <a className="flex items-center">
              <img src="https://9anime.vc/images/logo.png" alt="logo" className="w-36" />
            </a>

            <p className="text-sm text-neutral-500">Copyright © 9anime. All Rights Reserved</p>

            <p className="text-xs text-neutral-600">Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
          </div>

          <div className="flex flex-col w-1/2 lg:w-1/4 gap-2 px-4">
            <h1 className="text-white">Help</h1>
            <a className="text-sm text-neutral-600">Contact</a>
            <a className="text-sm text-neutral-600">FAQ</a>
          </div>

          <div className="flex flex-col w-1/2  lg:w-1/4 gap-2   px-4">
            <h1 className="text-white">Links</h1>
            <a className="text-sm text-neutral-600">A-Z List</a>
            <a className="text-sm text-neutral-600">Upcoming</a>
            <a className="text-sm text-neutral-600">Most Popular</a>
          </div>

          <img src={iconLogin} alt="" className="hidden xl:flex absolute right-0 bottom-0 w-56  " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
