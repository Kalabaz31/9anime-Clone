import React, { useState, useEffect } from "react";

import { Link, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Pins from "./Pins";
import QuickFilter from "../components/QuickFilter";
import Footer from "../components/Footer";
import TopMovie from "../components/TopAnime";
import RecentlyAdded from "../components/RecentlyAdded";

import axios from "../utils/axios";

import { popularMoviesUrl, topRatedMoviesUrl, movieGenresUrl } from "../utils/requests";
import MovieDetails from "./MovieDetails";
import CategoryPage from "../components/CategoryPage";

const Home = () => {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);

  const [movieGenresList, setMovieGenresList] = useState([]);

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
      let response = await axios.get(movieGenresUrl);
      return response.data.genres;
    }

    fetch().then((results) => {
      setMovieGenresList(results);
    });
  }, [movieGenresUrl]);

  return (
    <div>
      <div className="p-4 text-white overflow-hidden min-h-screen xl:w-[80rem] m-auto gap-3 flex-col flex">
        <Navbar genres={movieGenresList} />

        <div className="flex flex-col xl:flex-row xl:gap-4 xl:my-5">
          <div className="xl:w-3/4 ">
            <Routes>
              <Route path="/movie/:movieId" element={<MovieDetails />} />
              <Route path="/category/:categoryId/page=:ppp" element={<CategoryPage />} />
              <Route path="/category/:categoryId/" element={<CategoryPage />} />

              <Route path="/*" element={((<Slider data={popularMoviesList.slice(0, 10)} />), (<Pins headerTitle="Popular Movies" data={popularMoviesList} />))} />
            </Routes>
          </div>

          <div className="xl:w-[22rem] gap-6 flex flex-col ">
            {/* <QuickFilter /> */}

            <TopMovie headerTitle="Top Rated Movies" data={topRatedMoviesList.slice(0, 10)} />

            {/* <RecentlyAdded /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
