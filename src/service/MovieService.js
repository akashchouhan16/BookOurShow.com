import axios from "axios";

const GET_ALL_MOVIE_API = "http://10.30.1.35:8083/movies";
const GET_MOVIE_BY_ID_API = "http://10.30.1.35:8083/movie/";

export const getAllMovies = ({ success, error }) => {
  axios
    .get(GET_ALL_MOVIE_API)
    .then(({data}) => {
      success && success(data);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const getMovieByMovieId = ({ success, error, movieId }) => {
  axios
    .get(GET_MOVIE_BY_ID_API + movieId)
    .then((response) => {
      success && success(response);
    })
    .catch((err) => {
      error && error(err);
    });
};


