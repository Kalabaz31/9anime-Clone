const api_key = "f62888504de69414d884fba13ee25852";

export const popularTvShowsUrl = `tv/popular?api_key=${api_key}`;
export const topRatedTvShowsUrl = `tv/top_rated?api_key=${api_key}`;

export const popularMoviesUrl = `movie/popular?api_key=${api_key}`;
export const topRatedMoviesUrl = `movie/top_rated?api_key=${api_key}`;


export const movieGenresUrl = `genre/movie/list?api_key=${api_key}`;
export const tvShowGenresUrl = `genre/tv/list?api_key=${api_key}`;


export const getMovieByGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&with_genres=18&page=2`