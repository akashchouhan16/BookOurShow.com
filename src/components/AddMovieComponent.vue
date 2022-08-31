 <template>
  <div class="add-movie">
    <form class="movie-form">
      <h2>Add Movie</h2>
      <br />
      <div class="movie-tag-div">
        <label for="movieName" class="addmovie-tag">Movie Name </label>
        <br />
        <input
          type="text"
          class="add-movie-input"
          v-model="movieinfo.name"
          maxlength="100"
          placeholder="Movie Name"
        />
      </div>
      <div class="movie-tag-div">
        <label for="genre" class="addmovie-tag">Genre</label><br />
        <input type="number" class="add-movie-input" placeholder="Genre" />
      </div>
      <div class="movie-tag-div">
        <label for="movie-description" class="addmovie-tag">Description </label
        ><br />
        <textarea
          class="add-movie-input description"
          placeholder="Movie Description"
          v-model="movieinfo.description"
          rows="4"
          cols="30"
        >
        </textarea>
      </div>
      <div class="flex-row">
        <div class="movie-tag-flex">
          <label for="duration" class="addmovie-tag">Duration</label>
          <input type="number" class="add-movie-input" placeholder="Duration" />
        </div>
        <div class="movie-tag-flex">
          <label for="rating" class="addmovie-tag">Rating</label>
          <input type="text" class="add-movie-input" placeholder="Rating" />
        </div>
      </div>
      <div class="flex-row">
        <div class="movie-tag-flex">
          <label for="start-date" class="addmovie-tag">Start Date</label>
          <input
            type="date"
            class="add-movie-input" v-model="movieinfo.startdate"
            placeholder="Start Date"
          />
        </div>
        <div class="movie-tag-flex">
          <label for="end-date" class="addmovie-tag">End Date</label>
          <input type="date" class="add-movie-input" placeholder="End Date" v-model="movieinfo.enddate"/>
        </div>
      </div>

      <div class="movie-tag-div">
        <label for="movie-price" class="addmovie-tag">Price per ticket </label
        ><br /><br />
        <div class="flex-row-tag">
          <label for="movie-price" class="addmovie-tag">Normal</label>
          <label for="movie-price" class="addmovie-tag">Executive</label>
          <label for="movie-price" class="addmovie-tag">Premium</label>
        </div>
        <div class="flex-row">
          <input
            type="number"
            class="add-movie-input"
            placeholder="Normal"
            v-model="movieinfo.ticketPrice"
          /><br />
          <input
            type="number"
            class="add-movie-input"
            placeholder="Executive"
            v-model="movieinfo.ticketPrice"
          /><br />
          <input
            type="number"
            class="add-movie-input"
            placeholder="Premium"
            v-model="movieinfo.ticketPrice"
          /><br />
        </div>
      </div>

      <div class="movie-tag-div">
        <label for="movie-video" class="addmovie-tag">Trailer Video </label
        ><br />
        <input
          type="text"
          placeholder="MovieUrl"
          class="add-movie-input"
          v-model="movieinfo.videoUrl"
        />
      </div>

      <div class="movie-tag-div">
        <label for="movie-image" class="addmovie-tag">Movie Image </label><br />
        <input
          type="text"
          class="add-movie-input"
          v-model="movieinfo.imageUrl"
          placeholder="Movie Image"
        />
      </div>

      <!-- <div class="movie-tag-div">
          <label for="  class="addmovie-tag">Total Tickets </label>
          <input type="number" v-model="movieinfo.total_no_tickets" /><br />
        </div> -->

      <div class="movie-tag-div">
        <label for="movie-slots" class="addmovie-tag">Time slot </label><br />
        <select class="add-movie-input" v-model="movieinfo.timeSlot">
          <option value="null">None</option>
          <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
          <option value="1:00 PM - 4:00 PM">1:00 PM - 4:00 PM</option>
          <option value="5:00 PM - 8:00 PM">5:00 PM - 8:00 PM</option>
          <option value="9:00 PM - 12:00 AM">9:00 PM - 12:00 AM</option>
        </select>
      </div>

      <br />

      <div
        class="alert alert-danger"
        role="alert"
        v-if="errorflag"
        style="z-index: 1"
      >
        Check! all the fields are filled
      </div>

      <div class="alert alert-success" role="alert" v-if="success">
        Successfully added
      </div>

      <button type="button" class="movie-button-input" @click="movieinfo1()">
        ADD
      </button>

      <button type="button" class="movie-button-input" @click="reset()">
        RESET
      </button>
    </form>
  </div>
</template>





<style scoped>
.add-movie {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.movie-form {
  padding-top: 1em;
  background-color: whitesmoke;
  border-radius: 1em;
  position: absolute;
  top: 550px;
  left: 50%;
  transform: translate(-50%, -50%);
  /* display: block;
  margin: auto; */
  width: 35%;
  text-align: center;
  transition: all 0.3s;
}
.movie-form:hover {
  box-shadow: 2px 2px 15px gray;
  cursor: pointer;
}
.movie-tag-div {
  margin: 5px;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.flex-row-tag{
  display:flex;
  flex-flow:row;
  justify-content: space-evenly;
}
.movie-tag-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  width: 40%;
}
.movie-input {
  width: 30%;
  border: none;
  border-radius: 1em;
  height: 30px;
  /* margin-left: 13%; */
  padding: 5px;
}
.add-movie-input {
  width: 80%;
  border: none;
  border-radius: 1em;
  height: 30px;
  margin: 10px;
  padding: 5px;
}
.description {
  height: 100px;
  padding: 4px;
}
.movie-button-input {
  border: none;
  background-color: #f84464 !important;
  border-radius: 1em;
  width: 20%;
  text-align: center;
  height: 30px;
  color: white;
  margin: 10px;
}
input[type="text"]:focus {
  outline: 5px solid #f84464 !important;
  /* border: 5px solid #f84464,!important; */
}
.movie-button-input:hover {
  background-color: #fd0230 !important;
}
@media screen and (max-width: 900px) {
  .movie-form {
    width: 70%;
  }
  .movie-button-input {
    margin: 0.5em;
    width: 15%;
    border-radius: 0.5em;
  }
}
@media screen and (max-width: 400px) {
  .movie-form {
    width: 80%;
  }
  .movie-button-input {
    margin: 0.5em;
    width: 15%;
  }
}
/* button {
  border-radius: 16px;
  width: fit-content !important;
  margin-bottom: 10px;
  background-color: rgb(25, 19, 58) !important;
  color: white;
}
.admin {
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 5%;
  margin-top: 5% !important;
  text-align: center !important;
}
.adminform {
  background-color: rgb(219, 219, 231);
  border-radius: 14px;
  justify-content: center;
  width: 100% !important;
}
textarea:hover {
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgb(135, 135, 164);
  margin-left: 4px;
}
form {
  padding: 50px;
  color: black;
  box-sizing: border-box;
  font-size: 19px;
}
input:hover {
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgb(135, 135, 164);
  width: 33vw;
}
input,
input[type="select"] {
  border-radius: 10px;
  margin: 5px;
  width: 33vw;
}
.admin:hover {
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgb(135, 135, 164);
} */
</style>


<script src="./scripts/AddMovieComponent.js">
</script>