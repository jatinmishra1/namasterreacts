import React,{lazy,Suspense} from 'react'
//chunking
//dynamic bundling
//code splitting
//on demand loading
//lazy loading
//dynamic  import

const instamart =lazy(()=>{
import ("path of the file")
import ("./componenst/instamart") ///like this
}) // this is known as lazy loading 
//by doinng this bundel for instamart will be created seperately so that on loading  the home page instamasrt page component does on load
//so that loading will fast,and it will be load on on demand that is when we will go to instamart page
//so basically till now we rae having on one js file as we are seing in our network tab which is containig all the code .i.e all 
//the code in one js file....which makes out app sloe ,,,,so we have created different bundel for a=our different component
//this is knowns as chunking or dynamic bundling...code splittng .....on demand loading......lazy loading.....dynamic import....

// but there is a problem of suspending   .... 
// i . e upon on demand loading ---->on render ---->suspend loading
// so will goinh to use Suspense
// so load component inside Suspense
// like 


// <Suspense>
//     <Instamart/>
//     </Suspense>

// as we know instamart is taking time to load so untill we have to show like shimmer ui so for that react is given something like
// fallback  passing like props inside Suspense

// <Suspense   fallback={<Shimmer/>}>
//     <Instamart/>
//     </Suspense>
