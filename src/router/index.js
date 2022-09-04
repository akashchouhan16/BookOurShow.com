import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HomeComponent from "../components/HomeComponent.vue";
import AddMovieComponent from "../components/AddMovieComponent.vue";
import UserBookings from "@/components/UserBookingsComponent.vue";
import UpcomingMoviesComponent from "@/components/UpcomingMoviesComponent.vue";
import DescriptionComponent from "../components/DescriptionComponent.vue";
import BookingComponent from "../components/BookingComponent";
import BookedDetailsComponent from "../components/BookedDetailsComponent";
import LoginComponent from "../components/LoginComponent";
import DeleteComponent from "../components/DeleteComponent";
import RegisterComponent from "../components/RegisterComponent";
import NotFoundComponent from "@/components/NotFoundComponent";
import AdminBookingHistoryComponent from "@/components/AdminBookingHistoryComponent.vue";
import SeatBookingComponent from "@/components/SeatBookingComponent.vue";
import UpdateMovieComponent from "../components/UpdateMovieComponent.vue";
import ConfirmBookingComponent from "@/components/ConfirmBookingComponent.vue";

//Functions
const userBookingCheck = (to, from, next) => {
  const role = localStorage.getItem("role");

  if (
    role === undefined ||
    role === null ||
    (role.toLocaleLowerCase() !== "admin" &&
      role.toLocaleLowerCase() !== "user")
  ) {
    next({ path: "/login" });
  } else if (role.toLocaleLowerCase() === "admin") {
    console.warn("Booking history is not available for Admin.");
    next({ path: "/bookingsnotfound" });
  } else {
    next();
  }
};
const adminBookingCheck = (to, from, next) => {
  const role = localStorage.getItem("role");
  if (
    role === undefined ||
    role === null ||
    (role.toLocaleLowerCase() !== "admin" &&
      role.toLocaleLowerCase() !== "user")
  ) {
    next({ path: "/login" });
  } else if (role.toLocaleLowerCase() === "admin") {
    next();
  } else {
    next({ path: "/userbookings" });
  }
};

const beforeBookTickets = (to, from, next) => {
  const role = localStorage.getItem("role");
  if (
    role === null ||
    role === undefined ||
    role.toLocaleLowerCase() === "admin"
  ) {
    next({ path: "/login" });
  } else if (role === "user") {
    next();
  }
};
const beforeUpdateMovie = (to, from, next) => {
  const role = localStorage.getItem("role");
  if (
    role === null ||
    role === undefined ||
    role.toLocaleLowerCase() === 'user') {
    next({ path: "/*" });
  }
  else if (role == "admin") {
    next();
  }
}

const checkForBookingSteps = (to, form, next)=>{
  const role = localStorage.getItem('role');
  const userId = localStorage.getItem('userId');
  const date  = localStorage.getItem('date');
  const slot = localStorage.getItem('slot');
  const username = localStorage.getItem('name');

  if(role === undefined || role === null || role !== 'user'){
    next({path: '/login'})
  }else if((userId === undefined || userId === null || userId === '') ||
           (date === undefined || date === null || date === '') ||
           (slot === undefined || slot === null || slot === '') || 
           (username === undefined || username === null || username === '')){
            next({path: '/login'})
  }else
    next();
}

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/addmovie", component: AddMovieComponent, beforeEnter: beforeUpdateMovie }, //existing component needs a major fix to incorporate slots and validations
  { path: "/updatemovie", component: UpdateMovieComponent, beforeEnter: beforeUpdateMovie }, //existing component needs a major fix to incorporate slots and validations
  {
    path: "/userbookings",
    component: UserBookings,
    beforeEnter: userBookingCheck,
  },
  {
    path: "/bookingsnotfound",
    component: AdminBookingHistoryComponent,
    beforeEnter: adminBookingCheck,
  },
  { path: "/upcomingmovies", component: UpcomingMoviesComponent },
  { path: "/description", component: DescriptionComponent },
  {
    path: "/booking",
    component: BookingComponent,
    beforeEnter: beforeBookTickets
  },
  {
    path: '/booking/seats',
    component: SeatBookingComponent,
    beforeEnter: beforeBookTickets
  },
  {
    path: '/booking/confirmation',
    component: ConfirmBookingComponent,
    beforeEnter: checkForBookingSteps
  },
  { path: "/bookedDetails", component: BookedDetailsComponent }, //
  { path: "/login", component: LoginComponent }, //admin or user loggin (SSO) while updating movies or while user books a ticket.
  { path: "/delete", component: DeleteComponent }, //instead, we can have an update movie component
  { path: "/register", component: RegisterComponent }, // register new user if user doesn't have credentials
  { path: "/notfound", component: NotFoundComponent },
  { path: "/*", redirect: "/notfound" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
