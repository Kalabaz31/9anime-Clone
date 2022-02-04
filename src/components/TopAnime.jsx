import React, { useState, useEffect } from "react";

import { topAnimes, topAnimesMonth, topAnimesWeek } from "../utils/Data";

import { RiEyeLine } from "react-icons/ri";

const btnHeaderStyle = "text-zinc-500  xl:text-sm";
const btnActiveHeaderStyle = "text-white  xl:text-sm";

const tabContentStyle = "flex flex-col w-full";

const TopAnime = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-neutral-900 flex flex-col gap-3 py-3 rounded-lg ">
      <div className="flex flex-row justify-between items-center px-4 ">
        <h1 className="text-xl">Top Anime</h1>

        <div className="flex flex-row gap-2">
          <button type="button" className={active === 0 ? btnActiveHeaderStyle : btnHeaderStyle} onClick={() => setActive(0)}>
            Today
          </button>
          <button type="button" className={active === 1 ? btnActiveHeaderStyle : btnHeaderStyle} onClick={() => setActive(1)}>
            Week
          </button>
          <button type="button" className={active === 2 ? btnActiveHeaderStyle : btnHeaderStyle} onClick={() => setActive(2)}>
            Month
          </button>
        </div>
      </div>

      <div className={active === 0 ? tabContentStyle : "hidden"}>
        {
          <div className="relative w-full h-48 flex flex-row gap-4 items-center my-2 overflow-hidden ">
            <div className="absolute w-full h-full object-cover z-0">
              <img src={topAnimes[0].cover} alt="anime-cover" className="absolute w-full h-full object-cover z-0" />
              <div className=" w-screen absolute bottom-0 left-0 h-screen shadow-inner shadow-black z-10"></div>
            </div>
            <div className="absolute bottom-2 left-0 flex  gap-2 items-start self-start px-4  ">
              <h1 className=" h-min px-4 py-1 rounded-md text-3xl text-black bg-white">{topAnimes[0].rank}</h1>
              <div>
                <h1 className="text-sm ">{topAnimes[0].title}</h1>
                <h1 className="text-sm text-zinc-300 flex flex-row items-center gap-1">
                  <RiEyeLine /> 900
                </h1>
              </div>
            </div>
          </div>
        }
        <div className="flex flex-col md:flex-row flex-wrap xl:flex-col justify-between px-4">
          {topAnimes.map(
            (anime) =>
              anime.rank !== 1 && (
                <div className=" group w-full md:w-1/2 xl:w-full h-16 flex flex-row gap-4 items-center my-2 pr-2">
                  <h1 className=" h-min px-3 py-1 rounded-md  border-zinc-600 border text-2xl text-zinc-600 group-hover:text-white">{anime.rank}</h1>
                  <img src={anime.cover} alt="anime-cover" className="w-10 h-full  rounded-md" />
                  <div className="flex flex-col gap-1 items-start self-start overflow-hidden h-full ">
                    <a href="#" className="text-sm text-zinc-400 hover:text-white truncate w-full	 ">
                      {anime.title}
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

      <div className={active === 1 ? tabContentStyle : "hidden"}>
        {
          <div className="relative w-full h-48 flex flex-row gap-4 items-center my-2 overflow-hidden ">
            <div className="absolute w-full h-full object-cover z-0">
              <img src={topAnimesWeek[0].cover} alt="anime-cover" className="absolute w-full h-full object-cover z-0" />
              <div className=" w-screen absolute bottom-0 left-0 h-screen shadow-inner shadow-black z-10"></div>
            </div>
            <div className="absolute bottom-2 left-0 flex  gap-2 items-start self-start px-4  ">
              <h1 className=" h-min px-4 py-1 rounded-md text-3xl text-black bg-white">{topAnimesWeek[0].rank}</h1>
              <div>
                <h1 className="text-sm ">{topAnimesWeek[0].title}</h1>
                <h1 className="text-sm text-zinc-300 flex flex-row items-center gap-1">
                  <RiEyeLine /> 900
                </h1>
              </div>
            </div>
          </div>
        }
        <div className="flex flex-col md:flex-row flex-wrap xl:flex-col justify-between px-4">
          {topAnimesWeek.map(
            (anime) =>
              anime.rank !== 1 && (
                <div className=" group w-full md:w-1/2 xl:w-full h-16 flex flex-row gap-4 items-center my-2 pr-2">
                  <h1 className=" h-min px-3 py-1 rounded-md  border-zinc-600 border text-2xl text-zinc-600 group-hover:text-white">{anime.rank}</h1>
                  <img src={anime.cover} alt="anime-cover" className="w-10 h-full  rounded-md" />
                  <div className="flex flex-col gap-1 items-start self-start overflow-hidden h-full ">
                    <a href="#" className="text-sm text-zinc-400 hover:text-white truncate w-full	 ">
                      {anime.title}
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

      <div className={active === 2 ? tabContentStyle : "hidden"}>
        {
          <div className="relative w-full h-48 flex flex-row gap-4 items-center my-2 overflow-hidden ">
            <div className="absolute w-full h-full object-cover z-0">
              <img src={topAnimesMonth[0].cover} alt="anime-cover" className="absolute w-full h-full object-cover z-0" />
              <div className=" w-screen absolute bottom-0 left-0 h-screen shadow-inner shadow-black z-10"></div>
            </div>
            <div className="absolute bottom-2 left-0 flex  gap-2 items-start self-start px-4  ">
              <h1 className=" h-min px-4 py-1 rounded-md text-3xl text-black bg-white">{topAnimesMonth[0].rank}</h1>
              <div>
                <h1 className="text-sm ">{topAnimesMonth[0].title}</h1>
                <h1 className="text-sm text-zinc-300 flex flex-row items-center gap-1">
                  <RiEyeLine /> 900
                </h1>
              </div>
            </div>
          </div>
        }
        <div className="flex flex-col md:flex-row flex-wrap xl:flex-col justify-between px-4">
          {topAnimesMonth.map(
            (anime) =>
              anime.rank !== 1 && (
                <div className=" group w-full md:w-1/2 xl:w-full h-16 flex flex-row gap-4 items-center my-2 pr-2">
                  <h1 className=" h-min px-3 py-1 rounded-md  border-zinc-600 border text-2xl text-zinc-600 group-hover:text-white">{anime.rank}</h1>
                  <img src={anime.cover} alt="anime-cover" className="w-10 h-full  rounded-md" />
                  <div className="flex flex-col gap-1 items-start self-start overflow-hidden h-full ">
                    <a href="#" className="text-sm text-zinc-400 hover:text-white truncate w-full	 ">
                      {anime.title}
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
