<template>
  <nav class="nav-bar" id="nav-bar">
    <div class="brand">
      <router-link to="/">
        <p>Book<span class="highlighted-text">Our</span>Show</p>
      </router-link>
    </div>

    <div class="nav-menu">
      <router-link class="navigation-link" to="/">Home</router-link>
      <router-link class="navigation-link" to="/about">About</router-link>
      <router-link class="navigation-link" to="/">Lists</router-link>
    </div>

    <div class="login-div">
      <div class="logged-in-user" v-if="true">Logged in as Admin </div>
      <button @click="logIn()" class="login-btn">Login</button>
    </div>
  </nav>
</template>


<script src="./scripts/HeaderComponent"></script>

<style scoped>
.highlighted-text{
  color: #f84464 !important;
}
.nav-bar {
  overflow: hidden;
  background-color: #1f253a;
  position: sticky;
  top: 0;
  z-index: 9999;
  height: 10vh;
  padding: 0.4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nav-bar .brand {
  font-size: large;
  font-weight: bold;
}

.nav-menu {
    padding: 0.3em;
    border-radius: 0.3em;
    /* background-color: #0096da; */
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 40vw;
    align-items: center;
}

.nav-menu .navigation-link{
  text-decoration: none;
  color: white;
  margin: 0 1em;
  width: 2em;
  transition: all .2s;
}
.navigation-link:hover{
  text-decoration: underline;
}
.login-div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
}
.logged-in-user{
  color: gray;
  transition: all .2s;
}
.logged-in-user:hover{
  color:#f9f9f9;
  cursor: pointer;
}
.login-btn {
  margin: 0.1em 0.8em;
  padding: 0.2em 0.7em;
  background-color: #f84464 !important;
  border: none;
  border-radius: 0.2em;
  color: white;
  transition: all 0.3s;
}

.login-btn:hover {
  cursor: pointer;
  background-color: #D52344 !important;
}
.login-div {
  display: flex;
}
.nav-bar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 1vh 1vw 0 1vw;
  text-decoration: none;
  font-size: 17px;
  transition: all 0.2s;
}
.nav-bar a:hover {
  color: #ffffff;
  cursor: pointer;
}
.nav-menu-button {
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-content: center;
  color: white;
  width: 2em;
}
.nav-menu-button ion-icon {
  margin-left: 33%;
  align-content: center;
}
/* Media Queries */
@media screen and (min-width: 950px) {
  .nav-menu-button {
    display: none;
  }
  .login-btn {
    margin: auto 0.8em;
    padding: 0.4em 1em;
    background-color: #f84464 !important;
    border: none;
    border-radius: 0.5em;
    color: white;
    transition: all 0.3s;
  }
}
@media screen and (max-width: 950px) {
  .nav-menu,
  .navigation-link {
    font-size: small !important;
  }
  .login-div {
    font-size: x-small;
  }
  .login-btn {
    margin: 0.1em 0.5em;
    padding: 0.2em 0.5em;
    background-color: #f84464 !important;
    border: none;
    border-radius: 0.2em;
    color: white;
    transition: all 0.3s;
  }
}

@media screen and (max-width: 500px) {
  .nav-menu,
  .navigation {
    display: none;
  }
  .nav-menu-button {
    display: none !important;
  }
}
@media screen and (max-width: 900px) {
  .nav-menu-button {
    display: block;
  }
}
@media screen and (max-width: 450px) {
  .nav-menu,
  .navigation,
  .login-btn {
    display: none;
  }
}
</style>