<template>
  <div class="movie-card">
    <!-- <img :src="require(`@/assets/movie1.avif`)" alt="Image" /> -->
    <img :src="movie.imageUrl" alt="Image" />
    <div class="movie-card-info">
      <p class="movie-card-info">
        {{ movie.name ? movie.name : "Thiruchitrambalam" }} <br /><span
          class="movie-rating"
          > {{movie.rating}} </span
        ><span class="movie-id">
          {{ movie.duration | durationFilter }} |
          {{ movie.genre | filterGenre }}
        </span>
      </p>
    </div>

    <button class="view-movie-description-btn" @click="openMovieDescription()">
      View Movie
    </button>
    <!-- <div class="no-data" v-if="movie.length">
      No Data :( ⭐
    </div> -->
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
.movie-rating:hover {
  color: black;
}
.movie-id {
  font-weight: bold;
  color: #f84464;
}
.movie-id:hover {
  text-decoration: underline;
  cursor: pointer;
}

.movie-card-info{
  margin-top: 1em;
}
.movie-card img {
  width: 60%;
  border-radius: 0.1em;
  border: 1px solid #bababa;
  margin-bottom: 0.4em;
}
.view-movie-description-btn {
  color: white;
  border: none;
  margin-top: 1em;
  border-radius: 0.5em;
  padding: 0.5em;
  background-color: #f84464 !important;
}
.view-movie-description-btn:hover {
  cursor: pointer;
  background-color: #d52344 !important;
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
  justify-content: center;
  align-items: center;
}
.movie-card:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 20px rgb(107, 106, 106);
  cursor: pointer;
}

.movie-card-info {
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
    width: 18vw !important;
  }
  .movie-card {
    /* height: max-content; */
    height: 40vh;
  }
  .movie-card button {
    margin-top: 1em;
    font-size: small;
    width: 30vw;
    height: 5vh !important;
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
    width: 22vw;
    height: 4vh !important;
    margin-top: 1em;
  }
}

/* For FOLD Devices */
@media screen and (max-width: 350px) {
  .movie-card {
    font-size: x-small;
  }
  .movie-card button {
    font-size: x-small !important;
    width: 30vw;
  }
}
</style>