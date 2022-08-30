<template>
  <div>
    <h3 style="color: black">Recommended movies !!</h3>

    <div class="main">
      <div
        class="card"
        style="width: 18rem"
        v-for="(data, index) in movielist"
        :key="index"
      >
        <img :src="data.imageUrl" />

        <div style="height: 50px; margin-top: 3px; font-size: 24px">
          <span>{{ data.name }}</span>
        </div>

        <button @click="viewdetails(data.movieId, data.name)">view</button>

        <!-- <input type="button" value="view" @click = "viewdetails(hi)" /> -->
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      movielist: "getmovie",
    }),
  },

  methods: {
    viewdetails(id, name) {
      // this.$router.push({ path: '/description' });

      console.log("movielist", id);

      //  this.$router.push({path: '/description',query:{desc: 'movieid'}});
      this.$router.push({
        path: "/description",
        query: { movieid: id, moviename: name },
      });
      //   this.$router.push({path:'/description',query:{movieid:this.ticketList.mobilenumber}})
    },
  },

  created() {
    this.$store.dispatch("GET_MOVIE");
  },
};
</script>

<style scoped>
.main {
  max-width: 100%;

  display: flex;

  flex-direction: row;

  flex-wrap: wrap;

  margin-top: 20px;

  /* justify-content: center; */
}

.img {
  max-width: 50%;
}

.card {
  top: 0;

  left: 0;

  margin-top: 5px;

  margin-left: 5%;

  margin-right: 5%;

  margin: 5px;

  border-radius: 8px;

  /* padding: 10px; */

  font-size: 10px;

  width: calc(100% / 4);

  background-color: white;

  justify-content: space-between;
}

button {
  margin-bottom: 4px;

  margin-left: 4px;

  font-size: 15px;

  height: 30px;

  width: 20%;

  border-radius: 10px;

  background-color: rgb(25, 19, 58);

  color: white;
}
</style>