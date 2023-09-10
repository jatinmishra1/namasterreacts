// import {createContext} from "react"
// //create context is the function and it takes some data that nedd all across your application

// const userContext=createContext({
    user:{
        //     name:"jatin",
       //     email:"jatin@gmail.com"
    }

// })
// export default userContext


                                                      //now to this thi data in other file 
                                                      //we have to use useConext

                                                      //like if we are now in 
                                                      //body.js


// import {useContext} from 'recat'
// import userContext from ""
// const user=useContext(userContext);      
// //now you can use this where you want                

// but inside class component we do not have useContext so we have to use
//like component
//   <userContext.consumer>
// no this will takes jsx
//like
//   {({value})=>{
//          <h1>{value.name}"    "{user.email}</h1>
//         }
//
//   }
//</userContext.consumer> 



// You can modify you useContext by using Provider
//i.e userContext.Provider


{/* <userContext.Provider  value={{
    user:user// this is the user which we modify using the new user
}
}>
<Header/> //i have wrapped all these by provider because this is the data which i will be needed every where so thats why i provided 
// for every where
<Outlet/>
<Footer/>
</userContext.Provider> */}
