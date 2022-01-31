import React from "react";

import Pin from "../components/Pin";

import { animes } from "../utils/Data";

const Pins = ({ headerTitle }) => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="text-2xl"> {headerTitle} </h1>

      <div className="flex flex-row w-full flex-wrap justify-center">
        {animes.map((anime) => (
          <Pin anime={anime} key={anime.title}/>
        ))}
      </div>
    </div>
  );
};

export default Pins;
