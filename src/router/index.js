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
import AdminBookingHistoryComponent from '@/components/AdminBookingHistoryComponent.vue';


//Functions
const userBookingCheck = (to, from, next)=>{
  const role = localStorage.getItem('role');

    if(role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'user')){
      next ({path: '/login'});
    }else if(role.toLocaleLowerCase() === 'admin'){
      console.warn('Booking history is not available for Admin.')
      next({path: '/bookingsnotfound'});
    }else{
      next();
    } 
}


const routes = [
  { path: "/", component: HomeComponent },
  { path: "/addmovie", component: AddMovieComponent }, //existing component needs a major fix to incorporate slots and validations
  { path: '/userbookings',
   component: UserBookings,
   beforeEnter: userBookingCheck
  }, 
  { path: '/bookingsnotfound', component: AdminBookingHistoryComponent},
  { path: '/upcomingmovies', component: UpcomingMoviesComponent},
  { path: "/description", component: DescriptionComponent },
  { path: "/booking/", component: BookingComponent,  },
  { path: "/bookedDetails", component: BookedDetailsComponent }, //
  { path: "/login", component: LoginComponent }, //admin or user loggin (SSO) while updating movies or while user books a ticket.
  { path: "/delete", component: DeleteComponent }, //instead, we can have an update movie component
  { path: "/register", component: RegisterComponent }, // register new user if user doesn't have credentials
  { path: '/notfound', component: NotFoundComponent},
  {path: '/*', redirect: '/notfound'}
];





const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
