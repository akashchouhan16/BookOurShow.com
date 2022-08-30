<template>
  <div class="home-container">
    <div class="home-banner">Welcome To BookOurShow</div>
    <div class="movie-container">
      <div class="grid-container">
        <MovieCardComponent
          v-for="(movie, index) in 30"
          :key="index"
        ></MovieCardComponent>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/HomeComponent.js"></script>

<style scoped>
.home-container {
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
  border-radius: 0.5em;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
.home-banner {
  background-color: white;
  border-radius: 0.5em;
  height: 100vh;
  margin: 1em;
  margin-top: 2em !important;
  padding: 1em;
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