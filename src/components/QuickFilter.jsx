import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { categories, seasons, years } from "../utils/Data";

const checkboxStyle =
  "peer appearance-none w-4 h-4 bg-neutral-700 rounded-md flex justify-center items-center text-2xl checked:bg-transparent  checked:after:content-['']  checked:after:rotate-45 checked:after:border-r-3 checked:after:border-b-3 checked:after:w-2 checked:after:h-3 checked:after:-translate-y-0.5 ";

const QuickFilter = () => {
  const [categoriesSelected, setCategriesSelected] = useState([]);
  const [seasonSelected, setSeasonSelected] = useState([]);
  const [yearSelected, setYearSelected] = useState([]);

  let categoryRef = useRef();
  let seasonRef = useRef();
  let yearRef = useRef();

  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isSeasonOpen, setIsSeasonOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

  const setToggle = (state, setState) => {
    setState(!state);
  };

  const isItemSelected = (item, list) => {
    return list.includes(item);
  };

  const selectItem = (item, list, setList) => {
    if (!isItemSelected(item, list)) setList([...list, item]);
    else {
      setList(
        list.filter((itemInList) => {
          if (itemInList !== item) return itemInList;
        })
      );
    }
  };

  useEffect(() => {
    let handler = (event) => {
      if (isGenreOpen) if (!categoryRef.current.contains(event.target)) setIsGenreOpen(false);
      if (isSeasonOpen) if (!seasonRef.current.contains(event.target)) setIsSeasonOpen(false);
      if (isYearOpen) if (!yearRef.current.contains(event.target)) setIsYearOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className=" bg-neutral-900 flex flex-col gap-3 py-3 px-4 rounded-lg ">
      <h1 className="text-xl">Quick Filter</h1>

      <div className="flex flex-col">
        {/* First Row */}
        <div className="flex flex-row flex-wrap">
          {/* Category DropDown */}

          <div className="w-1/2 lg:w-1/2 md:w-1/4 rounded-sm p-1" ref={categoryRef}>
            <button
              className="bg-neutral-800 text-neutral-500 text-sm w-full flex justify-center items-center p-1 gap-1 hover:bg-neutral-700 z-10"
              onClick={(e) => {
                setToggle(isGenreOpen, setIsGenreOpen);
              }}
            >
              Genre{" "}
              <span className="text-white flex">
                {categoriesSelected.length === 0 ? "All" : categoriesSelected.length === 1 ? categoriesSelected[0] : categoriesSelected.length + " Selected"} <RiArrowDownSLine fontSize={20} />
              </span>{" "}
            </button>
            <div className={isGenreOpen ? " absolute flex flex-row flex-wrap w-3/5 bg-neutral-800 my-2 p-2 rounded-md" : "hidden"}>
              {categories.map((category) => (
                <div className="flex flex-row items-center gap-2 w-1/4 p-1 " key={category}>
                  <input
                    key={Math.random()}
                    type="checkbox"
                    name={category}
                    className={checkboxStyle}
                    checked={isItemSelected(category, categoriesSelected)}
                    onChange={() => selectItem(category, categoriesSelected, setCategriesSelected)}
                  />
                  <label htmlFor={category} className="text-neutral-500 text-xs peer-checked:text-white" onClick={() => selectItem(category, categoriesSelected, setCategriesSelected)}>
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Country DropDown */}

          <div className="w-1/2 lg:w-1/2 md:w-1/4 p-1 rounded-sm">
            <button className="bg-neutral-800 text-neutral-500 text-sm w-full flex justify-center items-center p-1 gap-1 hover:bg-neutral-700 z-10">
              Country{" "}
              <span className="text-white flex">
                All <RiArrowDownSLine fontSize={20} />
              </span>{" "}
            </button>
          </div>

          {/* Season DropDown */}

          <div className="w-1/2 lg:w-1/2 md:w-1/4 p-1 rounded-sm" ref={seasonRef}>
            <button
              className="bg-neutral-800 text-neutral-500 text-sm w-full flex justify-center items-center p-1 gap-1 hover:bg-neutral-700 z-10"
              onClick={(e) => {
                setToggle(isSeasonOpen, setIsSeasonOpen);
              }}
            >
              Season{" "}
              <span className="text-white flex">
                {seasonSelected.length === 0 ? "All" : seasonSelected.length === 1 ? seasonSelected[0] : seasonSelected.length + " Selected"} <RiArrowDownSLine fontSize={20} />
              </span>{" "}
            </button>
            <div className={isSeasonOpen ? " absolute flex flex-col flex-wrap bg-neutral-800 my-2 p-2 rounded-md " : "hidden"}>
              {seasons.map((season) => (
                <div className="flex flex-row items-center gap-2 p-1 " key={season}>
                  <input
                    key={Math.random()}
                    type="checkbox"
                    name={season}
                    className={checkboxStyle}
                    checked={isItemSelected(season, seasonSelected)}
                    onChange={() => selectItem(season, seasonSelected, setSeasonSelected)}
                  />
                  <label htmlFor={season} className="text-neutral-500 text-xs peer-checked:text-white" onClick={() => selectItem(season, seasonSelected, setSeasonSelected)}>
                    {season}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Year DropDown */}

          <div className="w-1/2 lg:w-1/2 md:w-1/4 rounded-sm p-1" ref={yearRef}>
            <button
              className="bg-neutral-800 text-neutral-500 text-sm w-full flex justify-center items-center p-1 gap-1 hover:bg-neutral-700 z-10"
              onClick={(e) => {
                setToggle(isYearOpen, setIsYearOpen);
              }}
            >
              Year
              <span className="text-white flex">
                {yearSelected.length === 0 ? "All" : yearSelected.length === 1 ? yearSelected[0] : yearSelected.length + " Selected"} <RiArrowDownSLine fontSize={20} />
              </span>
            </button>
            <div className={isYearOpen ? " absolute flex flex-row flex-wrap w-1/4 bg-neutral-800 my-2 p-2 rounded-md" : "hidden"}>
              {years.map((year) => (
                <div className="flex flex-row items-center gap-2 w-1/3 p-1 " key={year}>
                  <input
                    key={Math.random()}
                    type="checkbox"
                    name={year}
                    className={checkboxStyle}
                    checked={isItemSelected(year, yearSelected)}
                    onChange={() => selectItem(year, yearSelected, setYearSelected)}
                  />
                  <label htmlFor={year} className="text-neutral-500 text-xs peer-checked:text-white" onClick={() => selectItem(year, yearSelected, setYearSelected)}>
                    {year}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row"></div>
      </div>

      <input type="text" className="w-full bg-transparent rounded-md border border-white/10 outline-none p-2 text-sm text-neutral-100 placeholder-neutral-500" placeholder="Search..." />

      <button className=" bg-violet-900 p-1 rounded-sm"> Filter </button>
    </div>
  );
};

export default QuickFilter;
