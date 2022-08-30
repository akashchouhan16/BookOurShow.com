import axios from 'axios';


// export const addMovie = ({ success, error,value }) => {
//     const userlistapi = ''
   
//     axios

//         .get(userlistapi)

//         .then((response) => {
//             success && success(response)
//             // console.log(response.data)
//             // console.log(response.data.data.products)

//         }).catch((e) => {

//             error && error(e)

//         })
// }
// export const MainComponent = ({ success, error,value }) => {
//     const userlistapi = ''
   
//     axios

//         .get(userlistapi)

//         .then((response) => {
//             success && success(response)
//             // console.log(response.data)
//             // console.log(response.data.data.products)

//         }).catch((e) => {

//             error && error(e)

//         })
// }
export const  deletemovie=({success,error,movieid})=>

{

axios.delete(`http://10.30.1.2:8000/admin/delete/movie/${movieid}`).

then((response)=>{

    console.log(response)

    success && success(response)}).

catch((e) => {

    error && error(e)

})

}
export const seat = ({success, error}) => {
    const userlistapi1 = 'http://10.30.1.159:8089/seatBooking/seatBookedDetails'
    
    axios

        .get(userlistapi1)

        .then((response) => {
            // console.log(response)
            success && success(response.data)
            
            // console.log(response.data.data.products)

        }).catch((e) => {

            error && error(e)

        })
}
export const Booking = ({ success, error,value,value1}) => {
    //console.log('form',value)
        const userlistapi = 'http://10.30.1.159:8089/ticketBooking/insertCustomer'
        axios.post(userlistapi,value,value1)
            .then((response) => {
              
                success && success(response)
                // console.log(response)
               
    
            }).catch((e) => {
    
                error && error(e)
    
    
            })
    }
export const FinalList= ({ success, error,value}) => {

    //var value=this.$route.query.mobilenumber
    // const userlistapi = 'http://10.30.1.159:8089/ticketBooking/getAllDetails'
    const userlistapi = `http://10.30.1.159:8089/ticketBooking/getCustomer/number/${value}`
    axios

        .get(userlistapi)

        .then((response) => {
            success && success(response)
            // console.log(response.data)
            // console.log(response.data.data.products)

        }).catch((e) => {

            error && error(e)

        })
}

export const sendSeat = ({ success, error,seat}) => {
    //console.log('form',value)
        const userlistapi = 'http://10.30.1.159:8089/seatBooking/seatBookedDetail'
        axios.post(userlistapi,seat)
            .then((response) => {
              console.log('sendseat',response)
                success && success(response)
                // console.log(response)
               
    
            }).catch((e) => {
    
                error && error(e)
    
    
            })
    }