import React from "react";

import Pin from "../components/Pin";

import { animes } from "../utils/Data";

const Pins = ({ headerTitle, data }) => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="text-2xl"> {headerTitle} </h1>

      <div className="flex flex-row w-full flex-wrap justify-center">
        {data.map((item) => (
          <Pin item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default Pins;
