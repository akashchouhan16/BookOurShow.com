<template>
  <div class="upcoming-movies-container">
    <div class="upcoming-movies-banner">Upcoming Recommended Movies</div>
    <div class="upcoming-movies-list">
        List of Movies
    </div>
  </div>
</template>

<script src="./scripts/UpcomingMoviesComponent.js"></script>

<style scoped>
.upcoming-movies-container {
  height: 150vh;
  width: 100vw;
  background-color: #333545;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
.upcoming-movies-banner {
  background-color: #1f253a;
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
.upcoming-movies-list {
  border-radius: 0.5em;
  background-color: white;
  margin: 0.5em;
  padding: 1em;
  height: 200vh;
  overflow: scroll;
}
</style>