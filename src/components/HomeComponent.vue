<template>
  <div class="home-container">
    <div class="home-banner">
      <h2>Book<span class="highlighted">Our</span>Show.com</h2>
    </div>
    <div class="movie-container">
      <div class="grid-container">
        <MovieCardComponent
          v-for="(movie, index) in movies"
          :key="index" :movie="movie"
        ></MovieCardComponent>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/HomeComponent.js"></script>

<style scoped>
.highlighted{
  color: #F84464 !important;
}
.home-container {
  height: 150vh;
  width: 100vw;
  /* background-color: whitesmoke; */
  background-color: #222434;
  /* border-radius: 0.5em; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
.home-banner {
  
  background-color: #151928;
  color: white;
  border-radius: 0.5em;
  height: 50vh;
  margin: 1em;
  margin-top: 2em !important;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-banner img {
  max-width: 50vw;
}

.movie-container {
  border-radius: 0.5em;
  background-color: white;
  margin: 0.5em;
  padding: 1em;
  height: 200vh;
  overflow: scroll;
}

.grid-container {
  border-radius: 3%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1em;
  padding: 5vh 5vh;
  scroll-behavior: smooth;
}

/* Media Queries */
@media screen and (max-width: 950px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 700px) {
  .grid-container {
    grid-template-columns: 2fr;
  }
}
</style>