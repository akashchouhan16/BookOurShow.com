<template>
  <header>
    <nav class="navbar bg-light">
      <div class="container-fluid">
    <img src="../assets/agni.png" height="90px;" class="headerimage">
        <form class="d-flex" role="search">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/login">Add movie</router-link>
            </li>
            <li>
              <router-link to="/about">About us</router-link>
            </li>
            <!-- <li>
              <router-link to="/description">Description</router-link>
            </li> -->
          </ul>
          <!-- <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"/>

          <button class="btn btn-outline-success" type="submit">Search</button> -->
        </form>
      </div>
    </nav>
  </header>
</template>
<script>
</script>
<style >
.headerimage{
    height:60px;
}
header {
  position: sticky;
    z-index: 1;
    top: 0;
  height: 70px !important;

  background-color: rgb(25, 19, 58) !important;
}

.bg-light {
  background-color: rgb(25, 19, 58) !important;
}

button {
  color: white !important;
}

ul {
  width: 107% !important;

  /* float:right!important; */
  text-decoration: none;
  font-size: 1vw ;

  display: inline !important;
}
ul li a {
  text-decoration: none;
  color: rgb(248, 115, 137);
}
li {
  color: white;

  display: inline-block;

  padding: 2px;

  /* float: right!important; */

  text-decoration: none;
}
.d-flex {
  width: 25%;
}
.me-2{
    width: 27% !important;
}
@media screen and (max-width:947px) {
    .d-flex{
    width: 28%;
    }
    ul{
    font-size: 1vw;
    }
}
@media screen and (max-width:701px) {
    .d-flex{
    width: 37%;
    }
    ul{
    font-size: 1.4vw;
    }
}
@media screen and (max-width:600px) {
    .d-flex{
    width: 43%;
    }
    ul{
    font-size: 1.6vw;
    }
}
@media screen and (max-width:510px) {
    .d-flex{
    width: 50%;
    }
    ul{
    font-size: 1.7vw;
    }
}
@media screen and (max-width:414px) {
     .d-flex{
    width: 60%;
    }
    ul{
    font-size: 1.9vw;
    }
}
</style>