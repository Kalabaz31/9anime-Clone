import React from "react";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Pins from "./Pins";
import QuickFilter from "../components/QuickFilter";
import Footer from "../components/Footer";
import TopAnime from "../components/TopAnime";

const Home = () => {
  return (
    <div className="p-4 text-white overflow-hidden min-h-screen xl:w-3/4 m-auto">
      <Navbar />

      <div className="flex flex-col lg:flex-row lg:gap-4 lg:my-5">
        <div className="lg:w-3/4">
          <Slider />

          <Pins headerTitle="Recently Updated" />
        </div>

        <div className="lg:w-[22rem] gap-6 flex flex-col ">
          <QuickFilter />

          <TopAnime/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
