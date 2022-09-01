<template>
    <div class="movie-card">
    <!-- <img :src="require(`@/assets/movie1.avif`)" alt="Image" /> -->
    <img :src="movie.imageUrl" alt="Image">
    <p class="movie-card-info">
        {{movie.name? movie.name : "Thiruchitrambalam"}} <br /><span class="movie-rating">4.5/5⭐</span
      ><span class="movie-id"> {{ movie.duration | durationFilter }} | {{movie.genre | filterGenre }} </span>
    </p>

    <button class="view-movie-description-btn" @click="openMovieDescription()">
       View Movie
    </button>
  </div>
</template>

<script src="./scripts/MovieCardComponent.js"></script>



<style scoped>

.movie-rating {
  font-size: small;
  font-weight: bold;
  color: gray;
  margin: 0.5em;
}
.movie-rating:hover{
    color: black;
}
.movie-id{
  font-weight: bold;
  color: #F84464;
}
.movie-id:hover {
  text-decoration: underline;
  cursor: pointer;
}

.movie-card img {
  max-width: 60%;
  border-radius: .1em;
  border: 1px solid #bababa;
  margin-bottom: 0.4em;
}
.view-movie-description-btn {
  color: white;
  border: none;
  border-radius: .5em;
  padding: .5em;
  background-color: #F84464 !important;
}
.view-movie-description-btn:hover{
  cursor: pointer;
  background-color: #D52344 !important;
}

@media screen and (min-width: 950px) {
  img {
    max-width: 100%;
  }
}

.movie-card {
  background-color: rgb(255, 255, 255);
  border-radius: 2%;
  border: 0.02em solid rgba(0, 0, 0, 0.091);
  padding: 0.5em;
  font-size: 2em;
  text-align: center;
  transition: width 0.1s, height 0.2s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
}
.movie-card:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 20px rgb(107, 106, 106);
  cursor: pointer;
}

.movie-card-info{
  font-size: small;
}
@media screen and (max-width: 950px) {
  img {
    width: 100%;
  }

}
@media screen and (min-width: 700px) {
  div.container {
    padding: 0.5em;
  }
}
@media screen and (max-width: 700px) {

  img {
    width: 18vw;
  }
  .movie-card {
    height: max-content;
  }
  .movie-card button {
    font-size: small;
    width: 35vw;
    height: 6vh !important;
  }
  .sidebar {
    font-size: 5px !important;
  }
}
@media screen and (max-width: 450px) {
  .movie-card img {
    width: 100%;
  }
  .movie-card button {
    font-size: small;
    width: 40vw;
    height: 5vh !important;
  }
}
</style>