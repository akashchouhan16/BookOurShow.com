import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import HomeComponent from "../components/HomeComponent.vue";
import AddMovieComponent from "../components/AddMovieComponent.vue";
import AboutComponent from "../components/AboutComponent";
import DescriptionComponent from "../components/DescriptionComponent.vue";
import BookingComponent from "../components/BookingComponent";
import BookedDetailsComponent from "../components/BookedDetailsComponent";
import LoginComponent from "../components/LoginComponent";
import DeleteComponent from "../components/DeleteComponent";
import UserLoginComponent from "../components/UserLoginComponent";
import RegisterComponent from "../components/RegisterComponent";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/addmovie", component: AddMovieComponent },
  { path: "/about", component: AboutComponent },
  { path: "/description", component: DescriptionComponent },
  { path: "/booking/", component: BookingComponent },
  { path: "/bookedDetails", component: BookedDetailsComponent },
  { path: "/login", component: LoginComponent },
  { path: "/delete", component: DeleteComponent },
  { path: "/userlogin", component: UserLoginComponent },
  { path: "/register", component: RegisterComponent },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
