<template>
  <div class="booking-container">
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
          {{ movie.endDate ? movie.endDate : "03-09-2022" }}
        </div>
        <div class="secondary-slot">
          Slots:
          <div class="slot-1">9:00 - 12:00</div>
          <div class="slot-2">13:00 - 16:00</div>
          <div class="slot-3">17:00 - 20:00</div>
          <div class="slot-4">21:00 - 00:00</div>
        </div>
      </div>
    </div>
    <div class="seating-body">
      <div class="error-message" v-if="errorFlag">Please Select Seats!</div>
      <div class="seat-booking-title" v-else>Confirm Your Seats!</div>
      <div class="movie-hall-screen">Screen</div>
      <div class="movie-hall">
        <div class="movie-hall-legend">
          Seat 1-30: Normal, Seat 31-70: Executive, Seat 71-100: Premium
        </div>

        <div class="seats-row" v-for="(seat, indexi) in 10" :key="indexi">
          <div class="seats-col" v-for="(seat, indexj) in 10" :key="indexj">
            <span class="seat-number">{{ indexi * 10 + indexj + 1 }}</span>
            <div class="seat" @click="setSeats((indexi*10) + indexj+1)" :value="indexi + 1 * indexj + 1" v-if="checkSeatStatus(((indexi*10) + indexj+1))"></div>
            <div class="booked-seat" v-else></div> 
          </div>
        </div>
      </div>
      <button class="book-ticket-btn" @click="bookTicket()">Book</button>
    </div>
  </div>
</template>


<script src="./scripts/SeatBookingComponent.js"></script>

<style scoped>
.seat{
  width: 15%;
  padding: .4em;
  /* background-color: rgb(28, 27, 27); */
  border: .5px solid black;
  border-radius: .1em;
}
.booked-seat{
  width: 15%;
  padding: .4em;
  background-color: #d52344;
  border: .5px solid black;
  border-radius: .1em;
}
.error-message {
  background-color: #d52344;
  padding: 0.5em;
  border-radius: 1em;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seat-number {
  color: gray;
  font-size: xx-small;
  padding: 0.1em;
}
.book-ticket-btn {
  margin: 0.8em 1em;
  padding: 0.5em 1em;
  background-color: #f84464 !important;
  border: none;
  border-radius: 0.2em;
  color: white;
  transition: all 0.3s;
}
.book-ticket-btn:hover {
  cursor: pointer;
  background-color: #d52344 !important;
}
.booking-container {
  margin: 0;
  padding: 0em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.booking-banner {
  height: 20vh;
  width: 100%;
  margin-bottom: 4vh;
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

.slot-1,
.slot-2,
.slot-3,
.slot-4 {
  color: rgb(213, 211, 211);
  font-size: small;
  border-radius: 1em;
  border: 1px solid gray;
  padding: 0.3em 0.7em;
  margin: 0.2em 0.7em;
  font-size: x-small !important;
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
.seating-body {
  border-radius: 0.5em;
  background-color: rgb(235, 235, 235);
  margin: 1em 0.5em;
  padding: 1em 0.3em 2em .3em;
  /* height: 85vh; */
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
.seat-booking-title {
  font-size: large;
  font-weight: bold;
}
.movie-hall-screen {
  background-color: rgb(194, 231, 244);
  border: 1px solid rgb(134, 179, 194);
  border-radius: 0.3em;
  width: 40vw;
  height: 1.5vh;
  margin: 2em auto;
  font-size: xx-small;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seats-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2em 0.3em;
}
.seats-col {
    margin: 0.1em;
    display: flex;
    padding: 0.2em;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.movie-hall {
  padding: 1em;
  width: fit-content;
  height: fit-content;
  background-color: white;
  border-radius: 1em;
}
.movie-hall-legend {
  font-size: xx-small;
  color: black;
  font-weight: bold;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 1em;
  background-color: whitesmoke;

  display: flex;
  justify-content: center;
  align-items: center;
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

@media screen and (max-width: 450px) {
  .movie-details-secondary .secondary-date {
    font-size: small;
  }
  .secondary-slot {
    font-size: xx-small !important;
  }
  .seating-body {
    border-radius: 0.5em;
    background-color: rgb(235, 235, 235);
    margin: 1.5em 0.5em;
    padding: 0.5em 0.5em;
    height: 95vh;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    flex-wrap: nowrap;
    align-content: center;
    font-size: small;
    justify-content: flex-start;
  }
}
</style>