<template>
  <div class="confirm-booking-container">
    <div class="thankyou-message">Thank You!</div>
    <div class="booking-details-container">
      <div class="invoice-header">Ticket Invoice</div>
      <div class="display-userId">
        <div class="userid-tag">UserId: </div>
        <div class="userid-id"> {{userId | filterUserId }}</div>
      </div>
      <div class="display-movie">
        <div class="movie-tag">Movie: </div>
        <div class="movie-movie">{{movie.name}}</div>
      </div>
      <div class="display-name">
        <div class="name-tag">Name: </div>
        <div class="name-username">{{username}}</div>
      </div>
      <div class="display-ticket-meta">
        <div class="display-date">
            <div class="date-tag">Show Date: </div>
            <div class="date-date">{{date}}</div>
        </div>
        <div class="display-slot">
            <div class="slot-tag">Slot: </div>
            <div class="slot-slot">{{slot}}</div>
        </div>
        <div class="display-status">Confimed!</div>
        <div class="display-seats">
            <div class="seats-tag">
                Seats:
            </div>
            <div class="seats-seats">
                <p v-for="(seat, index) in seats" :key="index">
                    {{seat.seatNumber}}
                </p>
            </div>
        </div>
      </div>
      <!-- Outside meta -->
      <!-- <div class="display-price">
        <div class="price-tag">Subtotal: </div>
        <div class="price-price">Rs 890 /-</div>
      </div> -->
      <div class="save-btn">
        <button class="save-ticket-invoice-btn" @click="saveTicket()">Save Ticket Invoice</button>
      </div>
      
    </div>
  </div>
</template>


<script src="./scripts/ConfirmBooking.js"></script>

<style scoped>
.save-ticket-invoice-btn{
    border: none;
    border-radius: 1em;
    padding: 1em;
    background-color: #F84464;
    color: white;
    transition: all .3s;
}
.save-ticket-invoice-btn:hover{
    cursor: pointer;
    background-color: #D52344;
}
.confirm-booking-container {
  height: 150vh;
  width: 100vw;
  background-color: #222434;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
}

.booking-details-container {
    background-color: #151928;
    color: white;
    border-radius: 0.5em;
    height: auto;
    width: 50%;
    margin: 1em;
    margin-top: 2em !important;
    padding: 1.5em;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
}

.thankyou-message {
  font-size: large;
  padding: 1em;
  margin-top: 2em;
  border-radius: 1em;
  background-color: #151928;
  color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.invoice-header{
    display: flex;
    width: 100%;
    margin-bottom: 1em;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.display-userId, .display-name, .display-date, .display-movie, .display-slot, .display-seats, .display-price, .display-status, .display-ticket-meta{
    background-color: #222434;
    margin: .5em;
    padding: 1em;
    border-radius: 1em;
    width: 100%;
    font-size: small;
}

.display-status{
    color: rgb(12, 243, 104);
    font-weight: bold;
    font-size: medium;
    text-align: center;
}
.display-seats {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
}
.display-userId,  .display-name, .display-movie{
    display: flex;
    justify-content: space-between;
    align-items: space-between;
}
.display-ticket-meta{
    display: flex;

}

.display-price{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
}

.save-btn{
    margin-top: 2em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
}
@media screen  and (max-width:900px){
    .display-ticket-meta{
        display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    }
}
</style>