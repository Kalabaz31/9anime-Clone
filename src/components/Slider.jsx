import React, { useState, useEffect } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const Slider = ({ data }) => {
  const [active, setActive] = useState(1);

  const changeitem = (next, actual) => {
    if (next) {
      if (actual < data.length - 1) actual = actual + 1;
      else actual = 0;
    } else {
      if (actual > 0) {
        actual = actual - 1;
      } else actual = data.length - 1;
    }
    return actual;
  };

  return (
    <div className="group relative w-full h-[12rem] md:h-[22rem] rounded-lg overflow-hidden">
      {data.map((item, index) => (
        <div className={active === index ? "opacity-100" : "opacity-0"} key={index}>
          <img
            className={active === index ? "transition duration-1000 ease-out absolute top-0 left-0 w-full h-full object-cover" : "opacity-50"}
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt="item cover"
          />

          <div className="absolute bottom-0 flex flex-row  md:justify-between items-center bg-violet-900 w-full md:p-4">
            <div className="w-2/3 p-3">
              <h1 className={active === index ? "transition duration-700 ease-in-out font-bold md:text-xl  whitespace-nowrap" : "opacity-50"}>{item.title}</h1>

              <p className={active === index ? " hidden md:flex transition duration-700 ease-in-out text-sm text-zinc-300" : "opacity-50"}>{
                item.overview.length > 50 ? `${item.overview.slice(0, 150)}...` : item.overview              }</p>
            </div>
            <a className="hidden md:flex text-black bg-white rounded-full px-4 py-2 text-xl" href="#">
              Watch now
            </a>
          </div>

          <div className="absolute top-0 bottom-20 flex flex-row justify-between items-center w-full">
            <button
              onClick={() => {
                setActive(changeitem(false, active));
              }}
              className="bg-white/60 px-1 py-3 rounded-r-lg text-6xl text-violet-900 hover:bg-white/75 transition duration-300 ease-in-out -translate-x-12 group-hover:-translate-x-0"
            >
              {"<"}
            </button>
            <button
              onClick={() => {
                setActive(changeitem(true, active));
              }}
              className="bg-white/60 px-1 py-3 rounded-l-lg text-6xl text-violet-900 hover:bg-white/75 transition duration-300 ease-in-out translate-x-12 group-hover:translate-x-0"
            >
              {">"}
            </button>
          </div>
        </div>
      ))}
      ;
      <div className="absolute flex flex-row justify-end top-0 w-full gap-2 p-4">
        {data.map((item, index) => (
          <button
            key={index}
            className={active === index ? "shadow-black/75 shadow-md  rounded-full bg-violet-900 w-3 h-3 cursor-auto" : "shadow-black/75 shadow-md rounded-full bg-white w-3 h-3 cursor-auto"}
            onClick={() => setActive(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
