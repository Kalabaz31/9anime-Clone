import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Pins from "./Pins";
import QuickFilter from "../components/QuickFilter";
import Footer from "../components/Footer";
import TopAnime from "../components/TopAnime";
import RecentlyAdded from "../components/RecentlyAdded";

import axios from "../utils/axios";

import { popularMoviesUrl, popularTvShowsUrl, topRatedMoviesUrl, topRatedTvShowsUrl } from "../utils/requests";

const Home = () => {
  const [popularTvShowsList, setPopularTvShowsList] = useState([]);
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
  const [topRatedTvShowsList, setTopRatedTvShowsList] = useState([]);

  useEffect(() => {
    async function fetch() {
      let response = await axios.get(popularTvShowsUrl);
      return response.data.results;
    }

    fetch().then((results) => {
      setPopularTvShowsList(results);
    });
  }, [popularTvShowsUrl]);

  useEffect(() => {
    async function fetch() {
      let response = await axios.get(popularMoviesUrl);
      return response.data.results;
    }

    fetch().then((results) => {
      setPopularMoviesList(results);
    });
  }, [popularMoviesUrl]);

  useEffect(() => {
    async function fetch() {
      let response = await axios.get(topRatedMoviesUrl);
      return response.data.results;
    }

    fetch().then((results) => {
      setTopRatedMoviesList(results);
    });
  }, [topRatedMoviesUrl]);

  useEffect(() => {
    async function fetch() {
      let response = await axios.get(topRatedTvShowsUrl);
      return response.data.results;
    }

    fetch().then((results) => {
      setTopRatedTvShowsList(results);
    });
  }, [topRatedTvShowsUrl]);

  return (
    <div>
      <div className="p-4 text-white overflow-hidden min-h-screen xl:w-[80rem] m-auto gap-3 flex-col flex">
        <Navbar />

        <div className="flex flex-col xl:flex-row xl:gap-4 xl:my-5">
          <div className="xl:w-3/4 ">
            <Slider data={popularMoviesList.slice(0, 10)} />

            <Pins headerTitle="Popular Movies" data={popularMoviesList} />
            <Pins headerTitle="Popular Tv Shows" data={popularTvShowsList} />
          </div>

          <div className="xl:w-[22rem] gap-6 flex flex-col ">
            <QuickFilter />

            <TopAnime headerTitle="Top Rated Movies" data={topRatedMoviesList.slice(0, 10)} />
            <TopAnime headerTitle="Top Rated TvShows" data={topRatedTvShowsList.slice(0, 10)} />

            <RecentlyAdded />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
