import React, { useState, useEffect } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const animes = [
  {
    index: 1,
    title: "World Trigger 3rd Season",
    cover: "https://img.bunnycdnn.ru/_r/1366x768/100/55/f8/55f892af95650c74810e9a5c640ba1b9/55f892af95650c74810e9a5c640ba1b9.jpg",
  },
  {
    index: 2,
    title: "Demon Slayer: Entertainment District Arc",
    cover: "https://img.bunnycdnn.ru/_r/1366x768/100/c7/8e/c78ee3e41d27d6aba47e52ada8c5c711/c78ee3e41d27d6aba47e52ada8c5c711.jpg",
  },
  {
    index: 3,
    title: "The Daily Life of the Immortal King 2nd Season",
    cover: "https://img.bunnycdnn.ru/_r/1366x768/100/77/9b/779b17401e27633587cb1685b388039a/779b17401e27633587cb1685b388039a.jpg",
  },
  ,
  {
    index: 4,
    title: "Tokyo Revengers",
    cover: "https://img.bunnycdnn.ru/_r/1366x768/100/21/be/21be4c91ab1a6be0efaf8e628eb010ac/21be4c91ab1a6be0efaf8e628eb010ac.jpg",
  },
  {
    index: 5,
    title: "Dr. Stone: Stone Wars",
    cover: "https://img.bunnycdnn.ru/_r/1366x768/100/bf/a1/bfa13dce55dcab9325c98c3c049a7572/bfa13dce55dcab9325c98c3c049a7572.jpg",
  },
  {
    index: 6,
    title: "Detective Conan Movie 24: The Scarlet Bullet",
    cover: "https://img.bunnycdnn.ru/_r/1366x768/100/57/bb/57bbb89cf50bc7b0278cc65f375fec23/57bbb89cf50bc7b0278cc65f375fec23.jpg",
  },
];

const changeAnime = (next, actual) => {
  if (next) {
    if (actual < animes.length - 1) actual = actual + 1;
    else actual = 1;
  } else {
    if (actual > 1) {
        actual = actual - 1;
    } else actual =  animes.length - 1;
  }

  console.log("actual now = " + actual);
  return actual;
};

const Slider = () => {
  const [active, setActive] = useState(1);


  return (
    <div className="group relative w-full h-[12rem] md:h-[22rem] rounded-lg overflow-hidden">
      {animes.map((anime) => (
        <div className={active === anime.index ? "opacity-100" : "opacity-0"} key={anime.title}>
          <img className={active === anime.index ? "transition duration-1000 ease-out absolute top-0 left-0 w-full h-full object-cover" : "opacity-50"} src={anime.cover} alt="anime cover" />

          <div className="absolute bottom-0 flex flex-row  md:justify-between items-center bg-violet-900 w-full md:p-4">
            <h1 className={active === anime.index ? "transition duration-700 ease-in-out md:font-bold md:text-xl p-3 whitespace-nowrap" : "opacity-50"}>{anime.title}</h1>
            <a className="hidden md:flex text-black bg-white rounded-full px-4 py-2 text-xl" href="#">
              Watch now
            </a>
          </div>

          <div className="absolute top-0 bottom-20 flex flex-row justify-between items-center w-full">
            <button
              onClick={() => {
                setActive(changeAnime(false, active));
              }}
              className="bg-white/60 px-1 py-3 rounded-r-lg text-6xl text-violet-900 hover:bg-white/75 transition duration-300 ease-in-out -translate-x-12 group-hover:-translate-x-0"
            >
              {"<"}
            </button>
            <button 
              onClick={() => {
                setActive(changeAnime(true, active));
              }} className="bg-white/60 px-1 py-3 rounded-l-lg text-6xl text-violet-900 hover:bg-white/75 transition duration-300 ease-in-out translate-x-12 group-hover:translate-x-0">
              {">"}
            </button>
          </div>
        </div>
      ))}
      ;
      <div className="absolute flex flex-row justify-end top-0 w-full gap-2 p-4">
        {animes.map((anime) => (
          <button
            key={anime.index}
            className={active === anime.index ? "shadow-black/75 shadow-md  rounded-full bg-violet-900 w-3 h-3 cursor-auto" : "shadow-black/75 shadow-md rounded-full bg-white w-3 h-3 cursor-auto"}
            onClick={() => setActive(anime.index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
