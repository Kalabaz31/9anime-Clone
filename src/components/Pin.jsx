import React from "react";

import { RiPlayCircleLine } from "react-icons/ri";


const Pin = ({item}) => {
  return (
    <div className="group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5  p-2  overflow-y-hidden mb-1	">
      <div className="relative w-full flex overflow-hidden rounded-lg aspect-[3/4] ">
        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="anime-cover" className="object-cover w-full" />

        <button className="flex justify-center items-center w-full bg-black/75 absolute top-0 h-full opacity-0 group-hover:opacity-100 transition ease-in-out duration-150">
          <RiPlayCircleLine fontSize={72} className="scale-0 group-hover:scale-100 transition ease-in-out duration-300" />
        </button>
        <p className="absolute top-0 text-black bg-white rounded-br-lg text-sm p-1 text-xs font-bold w-8 text-center shadow-md shadow-black">{ item.vote_average}</p>
        <p className="absolute bottom-0 right-0 text-white bg-yellow-700 rounded-tl-lg text-sm p-1 text-xs shadow-md shadow-black">{item.original_language}</p>
      </div>

      <h1 className="text-center text-zinc-300 text-sm lg:text-base leading-5 p-1 h-[3.2rem] overflow-hidden">{
        item.original_name ? item.original_name : item.original_title
      }</h1>
    </div>
  );
};

export default Pin;
