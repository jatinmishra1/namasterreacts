import React from "react"

// const Profile=()=>{
//     return (
//         <>
//         <h1>hello </h1>               functional component
//         </>
//     )
// }
// export default Profile


class Profile extends React.Component{
   //1- //you can not create class base components without render method
    //this render method returns some jsx

   //2- // in class based components we get props using this.props 
   //3-first constructor is called then render methd is called in Class based comp
   constructor(props){
    super(props)//read about this super and props
    //as we know as soon as object formed of  class contructor runs,so
    //it is baest place for our state variables initialization

    this.state={
        count:0,
        count2:0
    }
   }
   // these constructors,render,componentDisMount are the lifeCycle Method
   componentDidMount(prevProps,prevState){
    //this will be called after render 
    // so we can do our api call here
    //what we can do by paasing only empty array or array with somethingin the useEffect
    //can be done here by using if ele
    if(
        this.state.count!==prevState.count||
        this.state.count2!==prevState.count2
    ){
        //code what you want //
        //very tedious way to do it
    }
   }
   componentDidUpdate(){
    //render after every updates,aft6er first render done by coponentDidMount
   }
   componentWillUnmount(){
    //when you unmount component or element form the dom...like you are going from page to other 
    //it will be called then
    //like prfile to home
   }
   
   render(){
        return (
            <>
            <h1>
                hello
            </h1>
           
            <div>
            {this.props.name}
            {this.props.xyx}
            </div>

            <h1>
            {this.state.count}
            <button onClick={()=>{
                //we do not mutate state directlt
                //like this.satate=10// it is wrong way of doing
                this.setState({
                    count:1,
                    count2:0,
                })
            }} ></button>
            <About/>
            </h1>
            </>
        )
    }
}
export default Profile



// remember the order in which thet are called
//1-constructor
//2-render
//3-componentDidMount   -- it is the best place for API call because as we know in functional components we call API inside useEffect because
//because useEffect works after page got rendered i.e firstly it render the page with local variables then it goes for useEffect
//for api call inside it after page got rendered
// so as we can see in class component ComponentDidMount is something like the same as of useEffect as it is called after render is called
//so we can do our API call easily

// from above scenario we can see that 
//parent constructor--->parent render--->child constructor--->cild render--->child componentDdiMount---->parent componentDidMount
//here parent is profile  and child is about

//so basically there are two phases when reconcillationi sdone 
//1-render phase
//2-commit phase
//in render phase constructor and render is done
// but after that React updates DOM and refs
//and then after componentDidMount,ComponentDidUpadte,CompnentWillUnMount will be called


///                 see the flow
//  parent constructor
//  parent render
//      first child constructor
//      first child render
//      second child constructor
//      second child render
//     dom updates starts from here after that 
//      firs child componentDidMount
//      secodn child coponentDidMount
//  parent componentDidMount


//question-----why we can can make function inside useEffect async where we can use async on the function componentDidMount

//componentDidMount will be called after first render
//where as coponentDidUpdate will be called after every render ,when first render is happend,i.e whenever any update happend

//never compare to life cycle method to functional components


// unmounting in useEffect is done using return

// useEffect(()=>{

//     return ()=>{
//         console.log("unmount here happend")
//     }
// },[])


// Array(10)
// .fill("")
// .map((e,index)=>{
// console.log(index)
// })