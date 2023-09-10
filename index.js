// function x(){
//     const a=10;
//     console.log(a);
// }
// x();

// read  about CDN
//A CDN (Content Delivery Network) is
// a group of servers spread out over many locations. These servers store duplicate 
//copies of data so that servers can fulfill data requests based on which servers are
// closest to the respective end-users. CDNs make for fast service less affected by high traffic.
//CDNs are used widely for delivering stylesheets and JavaScript files (static assets) of libraries like Bootstrap, 
//jQuery etc. Using CDN for those library files is preferable for a number of reasons:
//Serving libraries' static assets over CDN lowers the request burden on an organization's own servers.
//Most CDNs have servers all over the globe, so CDN servers may be geographicallyCDNs are already configured with proper cache settings. 
//Using a CDN saves further configuration for static assets on your own servers. nearer to your users than your own servers. Geographical distance affects latency proportionally.
//CDNs are already configured with proper cache settings. Using a CDN saves further configuration for static assets on your own servers.

//*****************************************************************


//1-what are bundlers ex-webpack,parcel,vit
//A bundler in React is a tool that allows developers to package their code into a single file or bundle. 
//This bundle can then be used to run the application in the browser. Bundlers are used to reduce the size of the code and improve the performance of the application.
// Common bundlers used with React are Webpack and Parcel.

//What do bundlers do?
//They allow developers to bundle their code, including libraries and frameworks, into a single file. This makes it easier to deploy and run the application, as well as making the code more efficient and maintainable.
//In other words, a bundler is a tool that helps you manage the dependencies and assets of your React application, and package them into a single file (or a few files) that can be served to the browser.
//*****Pros
//Here are some of the pros of using a bundler in a React application:
//1-Optimization: Bundlers allow you to optimize your application by minifying, compressing and tree shaking your code, 
//which can make it faster to load and run.
//2-Asset management: Bundlers can handle different types of assets, such as images, fonts, and styles.
// It also allow to transpile code like javascript, scss or sass.
//3-Code splitting: Bundlers enable you to split your code into multiple chunks that can be loaded on demand,
// which can make your application more efficient by only loading the code that is necessary for the current user.
//4-Modularity: Bundlers allow you to use a modular approach to your code, 
//by using import/export statements to organize your code in a way that makes it easy to reuse and manage.
//5-Cross-browser compatibility: Some bundlers can provide cross-browser compatibility through a set of loaders,
// which make sure that the code works well across different browsers.

// *****Cons
// Here are some cons of using a bundler in a React application:
//1-Complexity: The configuration and setup of a bundler can be complex and may require a lot of time to understand, especially for developers new to React.
//2-Performance cost: The extra step of bundling can add some extra overhead to the build process and increase the time it takes to develop, test, and deploy your application. 
//This can be especially noticeable when working on large projects or when using features that require more complex processing like code splitting or transpiling.
//3-You will need to maintain and update the bundler and its associated configuration. This can be a hassle if the tool or the way it's used changes rapidly or there is not good documentation or community support.
//4-Learning Curve: Depending on the complexity of the bundler, you may have to spend some extra time to get familiar with its features and how to set it up properly.
//5-Debugging: Debugging can be more difficult when using a bundler because the code that runs in the browser is transformed and minified, making it harder to understand.

//Conclusion
//In summary, using a bundler can make it easier to organize and optimize your React application, but it can also add some extra complexity and overhead. It may take some extra time to set up and maintain, but it can provide many benefits in terms of performance and modularity. It's best to weigh the pros and cons carefully, depending on your project's needs and constraints, and choose the tool that works best for you.


// *************************************************************************************
//*********************************************************************************************** */

//2-what is crossorigin used in CDN
//CORS (Cross Origin Resource Sharing) is an HTTP feature that enables a web application running under one domain to access resources in another domain. In order to reduce the possibility of cross-site scripting attacks,
// all modern web browsers implement a security restriction known as same-origin policy.
//3-read about npm

//**************************************************************************************************** */

//4-package-lock.json   it lock the version of packgaes,so never put this on your git ignore,
//                      it also maintain the hash
//     
//************************************************************************************** */

//5 difference b/w dev-dependies and dependies     
//Dependencies are the packages that are required for your application to run properly, devDependencies are the packages that are required for development and testing purposes only, 
//and peerDependencies are the packages that your package expects to be installed in the user's environment.13            
//****************************************************************************************** */

//6 what are different types of script ex-type="module
//1-In short, NPM scripts are terminal commands that perform a set of actions. 
//2-In a project, scripts are stored in a section of the package.json file, which means they are shared amongst everyone using the codebase, 
//ensuring that everyone is using the same command with similar flags. 
//3-Their purpose is to provide an effortless way to execute repetitive tasks, like: 
//       Running a linter tool on your code 
//       Executing the tests 
//       Starting your project locally 
//       Building your project 
//        Minify or Uglify JS or CSS (Cascading Style Sheets) 
//******************************************************************************************************* */

//7 diffing algorithm
//The diffing algorithm's task is to identify the differences between the old and new Virtual DOM. It's here where the brilliance of the diffing algorithm truly shines. Instead of re-rendering the entire webpage,
// only the elements that have changed are updated in the real DOM.
// What the DOM essentially does is translate the HTML of your webpage into a tree-like structure, allowing JavaScript to access and manipulate the elements and content of your webpage effectively.
//Within this sphere of web development, the React diff algorithm has a crucial role to play. The diffing algorithm in React allows for the efficient updates and rendering of these DOM elements.
// As changes occur within the application’s state or properties, React uses its diff algorithm to compare the new Virtual DOM with the old one. This comparison helps in identifying the specific elements that need to be changed in the real DOM, minimizing the operations and computational power required.

// The Virtual DOM is a lightweight copy of the actual DOM.
//This concept is a cornerstone of React, and it’s what makes React so fast and efficient at updating and rendering web pages
// Instead of making changes directly to the real DOM (which can be slow and expensive in terms of performance), changes are first made to the Virtual DOM.
//After these changes, the React diff algorithm steps in->
// It’s this diff algorithm in React that compares the updated Virtual DOM with the previous version. By identifying the minimum number of operations needed to transform the old Virtual DOM into the new one, React ensures optimal performance. 
//Once the specific changes are identified, 
//React updates only those parts of the real DOM, instead of re-rendering the entire page.
//In conclusion, the React diffing algorithm and the Virtual DOM are central to React’s performance advantages. 
//The diff algorithm works twice – first, to compare the updated Virtual DOM with the previous snapshot, and second, to apply only the necessary changes to the real DOM. This sequence of operations leads to quicker, more efficient rendering of your web pages,
// solidifying React’s place as a go-to framework for web developers worldwide
//************************************************************* */


// transitive dependecies
//dependencies which depend on other dependencies and they depend on other dependencies and so on......
//****************************************************************** */


// how jsx solving attacks i.e sanitising ,security by jsx
//One of the main advantages of React is that it uses JSX, a syntax extension that allows you to write HTML-like code in JavaScript. JSX is not only convenient, but also safe,
// because it automatically escapes any user input or dynamic values before rendering them to the DOM. This means that any potentially harmful scripts or HTML tags are converted into plain text and cannot execute. Therefore, 
//you should always use JSX syntax when rendering components and avoid using the dangerouslySetInnerHTML prop, which bypasses the escaping mechanism and exposes you to XSS risks.


//Validate and sanitize user input
//Even though JSX protects you from most XSS scenarios,
// you still need to be careful with user input, especially when it comes from external sources or third-party APIs. 
//You should always validate and sanitize user input before using it in your app, to ensure that it meets your expectations and does not contain any malicious code. 
//Validation means checking that the input conforms to a certain format, type, length, or range, and rejecting or correcting any invalid input. Sanitization means removing or replacing any unwanted or harmful characters, tags, or attributes from the input. 
//You can use built-in methods like String.prototype.replace or RegExp, or use libraries like DOMPurify or sanitize-html to help you with validation and sanitization.

//Use Content Security Policy (CSP)
//Another way to prevent XSS attacks in React apps is to use Content Security Policy (CSP),
// a web standard that allows you to specify which sources of content are allowed or blocked in your web pages. CSP can help you prevent attackers from loading malicious scripts, styles, images, or other resources from unauthorized domains or inline sources.
// You can set up CSP by adding a meta tag or an HTTP header to your web pages, and defining a policy that lists the allowed sources for each type of content. For example, you can use the script-src directive to restrict the sources of scripts, and use the nonce or hash attributes to allow only specific inline scripts.
// You can use tools like CSP Evaluator or CSP Scanner to test and improve your CSP.

//Use Subresource Integrity (SRI)
//Subresource Integrity (SRI) is another web standard that can help you prevent XSS attacks in React apps, especially when you use external libraries or frameworks from CDNs or other sources. 
//SRI allows you to verify that the resources you load are exactly what you expect, and not modified or corrupted by attackers. You can use SRI by adding a hash attribute to your script or link tags, and providing a cryptographic hash of the expected content. 
//The browser will then compare the hash of the loaded resource with the hash attribute, and only execute or apply the resource if they match. You can use tools like SRI Hash Generator or SRI Checker to generate and verify hashes.

//*************************************************************************************************************** */
//component composition --using component inside the component,i.e passing components in the components


//*************************************************************************************** */
// what is jsx
//jsx can only have one parent
// so we use <React.Fragment></React.Fragment>  and it is like the empty tag  ......there is shorter form of it....<></>



//        CSS
// 1-display flex
//2-justigy-content
//3-margin
//nav-item>ul
//nav-item>ul>li
// flex-wrap:wrap

//can we use react-fragment inside the react-fragment


//like if we have our array 
//var arr=[1,2,3,4,5] and we want to render inside the funtional component ,but with commas
//like if we do like this only {arr} it will be represented by 12345
// so if we want like 1,2,3,4,5 we have to do like arr.join(",")----it will give output like 1,2,3,4,5



//config driven UI
//optional chaining
 // read  about virtual DOM--it is a representation of the dom with us is know as virtual dom
 //why do we need virtual dom---Due to reconciallation            
 //read about reaconciallation------ reconcillation is  a process which ha sdiff algo  which founds the difference between the trees
 //b/w one tree and other tree so it will re-render only which is found by diff algorithma and different
 //why do you use key??
 //Ans-suppose we have 4 divs,and there is one more div got introduced,now ther are five divs,and react will not able to differentiate 
 //b/w old divs and new one div so it will re-render all the divs which is not requierd and not good feature
 // so we have to make to react smart by gving him unique key property so that it can see the difference and render only the new one
 //here tree is virtual representation of the dom
 //diff agorithm???
 //reconcillation------the algo React uses to differentiate one tree with another to detremine ehich parts need to be changed
 //warning comes into react in console of provide key belongs to it
 //what is react fibre?? ---- react 16  -----   new reconcillation egine
 //read react-fiber github repo
// why do we index as a key in the React ,but if we do not have any unique key then we can go for index key
//read from  documentation why do we not use index as key
// config driven UI /// v

// is we  have different tags like img,div,ul,li then we do not as such key as they can be uniquely identified by thier tag ,so we 
// do not require key here ,but when we have same tags then we need key to uniquely identify them.


//                    LEC 6
//config.js file is used for hardcore data



// Hooks are normal javascript functions only,there are diff types of hooks
//useState 
//useState is used to create the  local state variable 
//like [count,setCount]=useState("deafult value");
//here count is local variable whereas setcount is the function used to chage that local variable value as directly we can not change the v
// value of local variable in react ,as we do simpy using html

//  Example

//[count,setCount]=useState(0);
//    <input
//     type="number"
//      placeholder="input value"
//      value={count}
//      onChange((e)=>{
//      setCount(e.target.value)
//      })
//    />


// what is data binding ??
 

//      FILTER FUNCTION
//   function filterdata=(searchtext,reslis)=>{
//     const data=reslis.filter((res)=>{
//          res.data.name.includes(searchtext)
//    })
//    return data;
//   }

//react is much fast due to virtual dom,because dom manipulation is very time expensive to occur


// what are monolithics structure   ????
//what are microservices   ????


// how do make api call in javascript----------fetch()---it is inbiuit given inside browserr
//read about fetch() function of javascript



//              useEffect

// useEffect(()=>{
//   
// },[dependency array])

// async function getresdata(){
//     const data=fecth("https://");
//     const json_data=data.json();
//     console.log(json_data);
// }
// useEffect(()=>{
//     getresdata();
// },[])


// what is CORS ERROR ///  REad about this


//conditional Rendering
//shimmer ui 
// shimmer ui loading while you are not getting your actual data 

 // you can run only javascipt expresiion in  jsx not javascript statemenst,but we can convert to statements then we write them also
 //very easily
 // implimented by jsx curly braces
 //like let a=10----statement
//  ((let a1=10)) becomes statement


//there are two types of routing 
//1-serverside routing--- it is like that we we go to any page it re-render whole and got whole data again from server which takes time
//2 -client side routing  --- this is what we do in our react app,to apply this we use link tag istea of anchor tag because anchor tage
//use to re-render whole page due to its functionality,but behind link tag is also using anchor tag ,but in its own wayi.e react -outer dom
//is doing by keeping eye on it

