import React, { useState, useEffect } from "react";

import { topAnimes, topAnimesMonth, topAnimesWeek } from "../utils/Data";

import { RiEyeLine } from "react-icons/ri";

const btnHeaderStyle = "text-zinc-500  xl:text-sm";
const btnActiveHeaderStyle = "text-white  xl:text-sm";

const tabContentStyle = "flex flex-col w-full";

const TopAnime = ({ headerTitle, data }) => {

  return (
    <div className="bg-neutral-900 flex flex-col gap-3 py-3 rounded-lg ">
      <div className="flex flex-row justify-between items-center px-4 ">
        <h1 className="text-xl">{headerTitle}</h1>
      </div>

      <div className={tabContentStyle}>
        {
          data[0] && <div className="relative w-full h-48 flex flex-row gap-4 items-center my-2 overflow-hidden ">
            <div className="absolute w-full h-full object-cover z-0">
              <img src={`https://image.tmdb.org/t/p/original${data[0].backdrop_path}`} alt="anime-cover" className="absolute w-full h-full object-cover z-0" />
              <div className=" w-screen absolute bottom-0 left-0 h-screen shadow-inner shadow-black z-10"></div>
            </div>
            <div className="absolute bottom-2 left-0 flex  gap-2 items-start self-start px-4 items-center ">
              <h1 className=" h-min px-4 py-1 rounded-md text-3xl text-black bg-white items-center">1</h1>
              <div>
                <h1 className="text-xl "> {data[0].title ? data[0].title : data[0].name}</h1>
              </div>
            </div>
          </div>
        }
        <div className="flex flex-col md:flex-row flex-wrap xl:flex-col justify-between px-4">
          {data.map(
            (item, index) =>
              index !== 0 && (
                <div className=" group w-full md:w-1/2 xl:w-full h-16 flex flex-row gap-4 items-center my-2 pr-2">
                  <h1 className=" h-min px-3 py-1 rounded-md  border-zinc-600 border text-2xl text-zinc-600 group-hover:text-white">{index + 1}</h1>
                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="anime-cover" className="w-10 h-full  rounded-md" />
                  <div className="flex flex-col gap-1 items-start self-start overflow-hidden h-full ">
                    <a href="#" className="text-sm text-zinc-400 hover:text-white truncate w-full	 ">
                      {item.title ? item.title : item.name}
                    </a>
                    <h1 className="text-sm text-zinc-600 flex flex-row items-center gap-1">
                      <RiEyeLine /> 900
                    </h1>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TopAnime;
