import axios from 'axios'
const GET_MOVIE_BY_ID_API = "http://10.30.1.35:8083/movie/";
// const GET_MOVIE_DETAILS_BY_ID_API ="http://10.30.1.35:8083/update/"
 export const updateMoviedetailsByMovieId = ({ success, error, data }) => {
 console.log("serbvice",data.movieId)
  axios
    .put('http://10.30.1.35:8083/update/',data)
    .then((response) => {
     console.log(data.movieId)
     console.log(response)
      success && success(response);
      
    })
    .catch((err) => {
      console.log(err)
      error && error(err);
    });
};

export const getMovieById = ({ success, error, movieId }) => {
  axios
    .get(GET_MOVIE_BY_ID_API + movieId)
    .then((response) => {
      success && success(response);
    })
    .catch((err) => {
      error && error(err);
    });
};