import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import { useAxios } from "use-axios-client";
import ReactPlayer from "react-player";

import Pins from "./Pins";

const api_key = "f62888504de69414d884fba13ee25852";
const base_url = "https://api.themoviedb.org/3/";
const img_base = "https://image.tmdb.org/t/p/original";
const no_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H81w4SmKH5DZmIbxU7EB0aMSkNQDoPQA1mRQxf2Y0wMF1NSa7vghbwwKASi1q4NPmNw&usqp=CAU";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieRecommendations, setMovieRecommendations] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);

  const getMovieById = `${base_url}movie/${movieId}?api_key=${api_key}`;
  const getMovieCast = `${base_url}movie/${movieId}/credits?api_key=${api_key}`;
  const getMovieRecommendations = `${base_url}movie/${movieId}/recommendations?api_key=${api_key}`;
  const getMovieVideos = `${base_url}movie/${movieId}/videos?api_key=${api_key}`;

  const dataMovie = useAxios({
    url: getMovieById,
  });
  const dataCast = useAxios({
    url: getMovieCast,
  });
  const dataRecommendations = useAxios({
    url: getMovieRecommendations,
  });
  const dataVideos = useAxios({
    url: getMovieVideos,
  });

  useEffect(() => {
    setMovieDetails(dataMovie.data);
    setMovieCast(dataCast.data);
    setMovieRecommendations(dataRecommendations.data);
    console.log(dataVideos.data?.results);
    setMovieVideos(dataVideos.data?.results);
  }, [dataCast.data, dataMovie.data, dataRecommendations.data, dataVideos.data]);

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + "h " : "";
    var mDisplay = m > 0 ? m + "m " : "";
    var sDisplay = s > 0 ? s + "s " : "";
    return hDisplay + mDisplay + sDisplay;
  }

  return (
    <div className="flex flex-col gap-4">
      {movieVideos && (
        <div className="flex justify-center aspect-video ">
          <ReactPlayer width="100%" height="100%" url={`https://www.youtube.com/watch?v=${movieVideos[0]?.key}`} />
        </div>
      )}
      {movieDetails && (
        <div className=" relative flex flex-row bg-neutral-800 overflow-hidden rounded-md p-4 gap-4">
          <img src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt="" className="absolute left-0 top-0 opacity-5 z-0 flex  w-full object-cover" />
          <img src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt="" className="w-48 aspect-[3/4] rounded-sm z-10" />

          <div className="flex flex-col z-10">
            <h1 className="text-lg font-bold">{movieDetails.title}</h1>

            <div className="flex flex-row gap-3  text-sm text-neutral-400">
              <span> {movieDetails.release_date} </span> |
              <div className="flex flex-row gap-1  text-sm">
                {" "}
                {movieDetails.genres.map((genre) => (
                  <div key={genre.id}> {genre.name}, </div>
                ))}{" "}
              </div>{" "}
              |<span> {secondsToHms(movieDetails.runtime * 60)} </span>
            </div>

            <p className="text-sm text-neutral-500"> {movieDetails.tagline} </p>

            <p className="text-sm text-neutral-500 mt-3 flex flex-col">
              <span className="text-base text-white font-bold ">Overview</span> {movieDetails.overview}{" "}
            </p>

            <div className="flex flex-row "></div>
          </div>
        </div>
      )}

      {movieCast && (
        <div className="flex flex-row overflow-hidden rounded-md p-4 gap-4 overflow-x-scroll snap-x scroll-px-4">
          {movieCast.cast.map((c) => (
            <div className="flex flex-col bg-violet-900/50 min-w-[8rem] min-h-[15rem] aspect-[2/3] rounded-md overflow-hidden shadow-md shadow-black/75 snap-start	" key={c.cast_id}>
              <a href="" className="relative w-full overflow-hidden  h-[10rem]">
                <img src={c.profile_path ? `${img_base}${c.profile_path}` : no_image} alt="" className="h-full object-fit w-full" />
              </a>
              <h1 className="text-neutral-200 text-center font-bold px-2 pt-2 text-sm">
                <a href="" >
                  {c.name}
                </a>
              </h1>
              <p className="text-neutral-400 text-xs text-center truncate px-2">{c.character}</p>
            </div>
          ))}
        </div>
      )}

      {movieRecommendations && <Pins headerTitle="Recommended" data={movieRecommendations.results} />}
    </div>
  );
};

export default MovieDetails;
