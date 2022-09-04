import axios from 'axios';

const USER_BOOKING_HISTORY_API = 'http://10.30.1.144:8082/history/get/';
const TICKET_BOOKING_API = 'http://10.30.1.35:8000/updateSeat'
export const getUserBookingDetails = ({ success, error,userid}) => {
    axios.get(USER_BOOKING_HISTORY_API + userid)
        .then((response) => {
            success && success(response)
        })
        .catch((err) => {
            error && error(err);
        })
};


export const bookTicketforUser = ({success, error, ticketObject}) =>{
    axios.post(TICKET_BOOKING_API, ticketObject)
        .then(({data})=>{
            success && success(data);
         })
        .catch(err =>{
            error && error(err);
        })
}

