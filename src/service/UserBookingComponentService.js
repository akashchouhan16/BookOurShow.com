import axios from 'axios';
export const getUserBookingDetails = ({ success, error,userid}) => {
    axios.get(`http://10.30.1.144:8082/history/get/${userid}`)
        .then((response) => {
            success && success(response)
        })
        .catch((err) => {
            error && error(err);
        })
};

