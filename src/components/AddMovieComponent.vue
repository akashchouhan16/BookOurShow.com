 <template>
  <div class="admin">
    <div class="adminform">
      <form>
        <div class="content">
          <div class="left">
            <label>Movie Name </label>
          </div>

          <div class="right">
            <input type="text" v-model="movieinfo.name" maxlength="100" />
          </div>
        </div>

        <div class="content">
          <div class="left">
            <label>Trailer Video </label>
          </div>

          <div class="right">
            <input type="text" v-model="movieinfo.videoUrl" />
          </div>
        </div>

        <div class="content">
          <div class="left">
            <label>Movie Image </label>
          </div>

          <div class="right">
            <input type="text" v-model="movieinfo.imageUrl" />
          </div>
        </div>

        <div class="content">
          <div class="left"><label>Description </label><br /></div>

          <div class="right">
            <textarea
              v-model="movieinfo.description"
              style="
                width: 33vw;
                height: 90px;
                border-radius: 10px;
                border: 2px solid black;
              "
              rows="4"
              cols="30"
            >
            </textarea>
          </div>
        </div>

        <div class="content">
          <div class="left">
            <label>Total Tickets </label>
          </div>

          <div class="right">
            <input type="number" v-model="movieinfo.total_no_tickets" /><br />
          </div>

          <div class="content">
            <div>
              <label>Price per ticket </label>
            </div>

            <div class="right">
              <input type="number" v-model="movieinfo.ticketPrice" /><br />
            </div>
          </div>

          <div class="content">
            <div class="left">
              <br />

              <label>Time slot </label>
            </div>

            <div class="right">
              <select
                v-model="movieinfo.timeSlot"
                style="margin: 5px; width: 25%"
              >
                <option value="null">None</option>

                <option value="9:00am - 12:00pm">Slot1</option>

                <option value="1:00pm- 4:00pm">Slot2</option>

                <option value="5:00pm- 8:00pm">Slot3</option>

                <option value="9:00pm - 12:00am">Slot4</option>
              </select>
            </div>
          </div>
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

        <button type="button" @click="movieinfo1()">ADD</button><br /><br />

        <button type="button" @click="reset()">RESET</button>
         <button type="button" @click="deletemovie()">DELETE</button>

      </form>
    </div>
  </div>
</template>



<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      success: false,

      error: true,

      flag: 1,

      errorflag: false,

      ticketflag: false,

      loader: false,

      movieinfo: {
        name: "",

        imageUrl: "",

        description: "",

        total_no_tickets: 0,

        ticketPrice: 0,

        timeSlot: null,
        videoUrl:null
      },
      
    };
  },

  computed: {
    ...mapGetters({
      addmovie: "getmovieinfo",
    }),
  },

  methods: {
    movieinfo1() {
      console.log(this.movieinfo);

      if (
        this.movieinfo.name == "" ||
        this.movieinfo.imageUrl == "" ||
        this.movieinfo.videoUrl == "" ||
        this.movieinfo.description == "" ||
        this.movieinfo.total_no_tickets == 0 ||
        this.movieinfo.ticketPrice == 0 ||
        this.movieinfo.timeSlot == null
      ) {
        this.error = false;
      }

      if (this.error == true) {
        this.success = true;

        this.$store.dispatch("UPDATE_MOVIE", this.movieinfo);
      } else {

        this.errorflag = true;
      }
    },
 deletemovie()
    {
        this.$router.push({ path: '/delete' });
    },
    reset() {
      this.success = false;

      this.error = true;

      this.errorflag = false;

      for (let field in this.movieinfo) {
        this.movieinfo[field] = null;
      }
    },
  },

  created() {
    this.$store.dispatch("ADD_MOVIE");
  },
};
</script>



<style scoped>
button {
  border-radius: 16px;

   width: fit-content!important;

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

  /* display: flex; */

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
}
</style>