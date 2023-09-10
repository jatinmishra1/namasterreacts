// we have one store ,but we devide our store into different slices
//when we push plus button  ...it will not direvtky modify the store... firslty it will dispatch the action and  that will 
// call the function that will then modify the slice of our redux store
// this function is known as Reducer

// how to read from the store 
// selector comes into picture which help us to read data form store
// selector implies selecting portion from my store slice

// selector is hook and hook is the function at the end of the day
//baicaly we are using useSelector

//when we use selector   it is like subscribing to the store

//redux tool kit   npm i @reduxjs/toolkit  ---core library for redux
//                 npm i react-redux     ---this is for bridge b/w redux and react

// import {consfigureStore } from "@redux/toolkit"
// import cartSlice from "./cartSlice"

// const store=configureStore({
//     reducer:{
//         cart:cartSlice
//     }
// })

// export default store


//now got  to app.js and wrap root component by
//                          <Provider store={store}></Provider>
// provider is coming form react-redux library as it is the one who is acting like bridhe in between



//Reabout   middlleware,thunk,RTK Query