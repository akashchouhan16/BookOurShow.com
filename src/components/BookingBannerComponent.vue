<template>
    <div class="booking-banner">
      <div class="movie-details-main">
        <div class="title">
          {{ movie.name ? movie.name : "Liger 2D" }} 
        </div>
        <div class="movie-details">
          <div class="movie-genre">
            {{ movie.genre ? movie.genre : "Drama" }}
          </div>
          <div class="movie-duration">
            {{ movie.duration | durationFilter }}
          </div>
          <div class="movie-rating">
            {{ movie.rating ? movie.rating : "U/A" }}
          </div>
        </div>
      </div>
      <div class="movie-details-secondary">
        <div class="secondary-date">
          Tickets Available Till:
          {{ movie.endDate | filterUIDate}}
        </div>
        <div class="secondary-slot">
          <div class="price-1">Normal Rs.{{movie.normalPrice}}/-</div>
          <div class="price-2">Executive Rs.{{movie.executivePrice}}/-</div>
          <div class="price-3">Premium Rs.{{movie.premiumPrice}}/-</div>
          
        </div>
      </div>
    </div>
</template>

<script src="./scripts/BookingBannerComponent.js"></script>

<style scoped>
.booking-banner {
  height: 20vh;
  width: 100%;
  display: flex;
  background-color: #222434;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.movie-details-main {
  background-color: #151928;
  border-radius: 0.5em;
  height: 80%;
  width: 50%;
  margin: 0.5em 0.3em;
  color: white;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
}
.movie-details-main .title {
  font-size: larger;
}

.movie-details-secondary {
  background-color: #151928;
  border-radius: 0.5em;
  height: 80%;
  width: 50%;
  margin: 0.5em 0.3em;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.secondary-date,
.secondary-slot {
  height: 40%;
  padding: 0.3em 0.6em;
  color: rgb(207, 206, 206);
}

.secondary-date {
  font-size: large;
}

.secondary-slot {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  font-size: small !important;
}

.price-1,
.price-2,
.price-3{
  color: rgb(213, 211, 211);
  font-size: small;
  border-radius: 1em;
  border: 1px solid gray;
  padding: 0.3em 0.7em;
  margin: 0.2em 0.7em;
  font-size: x-small !important;
  font-weight: bold;
}

.movie-details {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}
.movie-rating,
.movie-genre,
.movie-duration {
  color: gray;
  font-size: small;
  border-radius: 1em;
  border: 1px solid gray;
  padding: 0.3em 0.7em;
  margin: 0.2em 0.7em;
}
.movie-details-main {
  font-size: larger;
}
.booking-body {
  border-radius: 0.5em;
  background-color: rgb(235, 235, 235);
  margin: 1.5em 0.5em;
  padding: 0.3em;
  height: 65vh;
  width: 90vw;
  overflow: scroll;
}
.grid-container {
  border-radius: 1em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6em;
  padding: 5vh 5vh;
  scroll-behavior: smooth;
}

/* Media Queries */
@media screen and (max-width: 900px) {
  .booking-banner {
    height: 30vh;
    width: 100%;
    display: flex;
    background-color: #222434;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
  }
  .movie-details-main,
  .movie-details-secondary {
    width: 90vw;
    margin: 0.2em;
    margin-bottom: 0.5em;
  }
}

@media screen and (max-width: 700px) {
  .grid-container {
    border-radius: 1em;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.6em;
    padding: 5vh 3vh;
    scroll-behavior: smooth;
    font-size: x-small;
  }
  .movie-details-main{
    font-size: small;
  }
}
@media screen and (max-width: 450px) {
  .movie-details-secondary .secondary-date {
    font-size: small;
  }
  .secondary-slot {
    font-size: xx-small !important;
  }
}
</style>