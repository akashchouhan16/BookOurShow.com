import axios from 'axios'
const GET_MOVIE_DETAILS_BY_ID_API ="http://10.30.1.35:8083/update/"
 export const updateMoviedetailsByMovieId = ({ success, error, data }) => {
 console.log("serbvice",data)
  axios
    .put(GET_MOVIE_DETAILS_BY_ID_API,data)
    .then((response) => {
     console.log(data)
     console.log(response)
      success && success(response);
      
    })
    .catch((err) => {
      console.log(err)
      error && error(err);
    });
};