import React, { useState, useEffect } from "react";

import { recentlyAdded } from "../utils/Data";

const RecentlyAdded = () => {

  return (
    <div className="bg-neutral-900 flex flex-col gap-3 py-3 rounded-lg ">
      <div className="flex flex-row justify-between items-center px-4 ">
        <h1 className="text-xl">Recently Added</h1>

        <button className="bg-neutral-800 px-2 py-1 text-sm rounded-md text-zinc-300 hover:text-white">View all</button>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row flex-wrap xl:flex-col justify-between px-4">
          {recentlyAdded.map((anime) => (
            <div className=" group w-full md:w-1/2 xl:w-full h-16 flex flex-row gap-4 items-center my-2 pr-2" key={anime.rank}>
              <img src={anime.cover} alt="anime-cover" className="w-10 h-full  rounded-md" />
              <div className="flex flex-col gap-1 items-start self-start overflow-hidden h-full ">
                <a href="#" className="text-sm text-zinc-400 hover:text-white truncate w-full	 ">
                  {anime.title}
                </a>
                <h1 className="text-sm text-zinc-600 flex flex-row items-center gap-1">
                  {anime.year} | Ep {anime.Episode}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
