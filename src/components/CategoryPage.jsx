import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "use-axios-client";
import Pins from "../container/Pins";
import Pagination from "./Pagination";

const api_key = "f62888504de69414d884fba13ee25852";
const base_url = "https://api.themoviedb.org/3/";
const img_base = "https://image.tmdb.org/t/p/original";
const no_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H81w4SmKH5DZmIbxU7EB0aMSkNQDoPQA1mRQxf2Y0wMF1NSa7vghbwwKASi1q4NPmNw&usqp=CAU";

const CategoryPage = () => {
  const { categoryId, ppp } = useParams();

  const [genre, setGenre] = useState("");
  const [movieGenresList, setMovieGenresList] = useState([]);
  const [moviesList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(15);

  const getMovieListByGenre = `${base_url}discover/movie?api_key=${api_key}&with_genres=${genre}&sort_by=popularity.desc&page=${page}`;
  const getMovieGenres = `${base_url}genre/movie/list?api_key=${api_key}`;

  const dataMovieList = useAxios({
    url: getMovieListByGenre,
  });

  const dataGenresList = useAxios({
    url: getMovieGenres,
  });

  useEffect(() => {
    const genre = dataGenresList.data?.genres.filter((genre) => genre.name === categoryId.replace("-", " ") && genre)[0];
    setGenre(genre?.id);
    setPage(ppp ? (ppp > totalPages ? 1 : ppp) : 1);
  }, [dataGenresList.data]);

  useEffect(() => {
    setMovieList(dataMovieList.data?.results);
  }, [dataMovieList.data]);

  return (
    <div className="flex flex-col gap-4">
      {moviesList && (
        <div>
          <Pins data={moviesList} />
          {console.log(categoryId)}
          <Pagination setPage={setPage} totalPages={totalPages} actualPage={page} base_url={`/category/${categoryId}`} />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
