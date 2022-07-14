## MOVIESBOX:

- First We will make:

```
1) Landing Page:
    A)Navbar:
        A.1) Image(left)
        A.2) Buuton
    B)Body :
        B.1) title
        B.2) Subtitle
        B.3) Description
        B.4) Search Field and Button
```

- We will make a container folder for each page and this folder will contain the components of that page
- For ex: there will be a Landing Page container which will have components like Navbar and body.
- So compoents will be called in their respective containers and these containers will be called in the App.js

- Now install react-router-dom in the terminal

```
const isuserLoggedin = false;
<Route path="/" element={isuserLoggedin? ""  : <LandingPage /> } />

OR

<Route path="/" element={isuserLoggedin === true ? ""  : <LandingPage /> } />


//both are same
```

- Now we will make Navbar Component : Navbar folder inside component folder Then inside Navbar folder-> we will make Navbar.js and Navbar.css

- New route needs new component which makes files heavy. So instead of using new router for signup box, we can use useState function and ternary operator to switch between sign-up and sign-in without using a new route

- useState takes two parameters , 1st param is a varibale, 2nd param is a function which sets value to the variable

```
import React, {useState} from "react";
import "./SignInBody.css";

function SignInBody() {

const [showSignInBox, setshowSignInBox] = useState(true)

  function goToSignInPage() {
   setshowSignInBox(true)
  }

  function goToSignUpPage() {
   setshowSignInBox(false)
  }

  console.log("showSignInBox: ", showSignInBox)

//  Initial value is given true so that first sign in box will appear
  return (
    <>
    {/* If showSignInBox is true, Sign In box wil appear otherwise sign up box will appear */}
    {showSignInBox ? (
      // Sign in
      <div className="signin_body_container">
        <div className="signin_box_container">
          <p className="signin_box_title">Sign In</p>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button>Sign In</button>
          <button>Login as Guest User</button>
          <p className="signin_box_text">
            New to MoviesBox? <span onClick={goToSignUpPage}>Sign up Now</span>
          </p>
        </div>
      </div>
    ) : (
       // sign-up
      <div className="signup_body_container">
        <div className="signup_box_container">
        <p className="signup_box_title">Sign Up</p>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Sign Up</button>
        <button>Login as Guest User</button>
        <p className="signup_box_text">
          Already a member?<span onClick={goToSignInPage}>Sign In Now</span>
        </p>
         </div>
        </div>
    ) }
    </>
  );
}

export default SignInBody;

```

- We can make the above code more optimized by combining the two functions into one and passing parameter
- For ex:-

```
import React, {useState} from "react";
import "./SignInBody.css";

function SignInBody() {

const [showSignInBox, setshowSignInBox] = useState(true)

//   function goToSignInPage() {
//    setshowSignInBox(true)
//   }

//   function goToSignUpPage() {
//    setshowSignInBox(false)
//   }

  function setshowSignInBoxAs(param) {
   setshowSignInBox(param)
  }

  console.log("showSignInBox: ", showSignInBox)

//  Initial value is given true so that first sign in box will appear
  return (
    <>
    {/* If showSignInBox is true, Sign In box wil appear otherwise sign up box will appear */}
    {showSignInBox ? (
      // Sign in
      <div className="signin_body_container">
        <div className="signin_box_container">
          <p className="signin_box_title">Sign In</p>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button>Sign In</button>
          <button>Login as Guest User</button>
          <p className="signin_box_text">
            New to MoviesBox? <span onClick={()=>setshowSignInBoxAs(false)}>Sign up Now</span>
          </p>
        </div>
      </div>
    ) : (
       // sign-up
      <div className="signup_body_container">
        <div className="signup_box_container">
        <p className="signup_box_title">Sign Up</p>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Sign Up</button>
        <button>Login as Guest User</button>
        <p className="signup_box_text">
          Already a member?<span onClick={()=>setshowSignInBoxAs(true)}>Sign In Now</span>
        </p>
         </div>
        </div>
    ) }
    </>
  );
}

export default SignInBody;

```

// const apiKey = "b6c39c10522e3d304a2188632faf52b9";
// apikey always remains the same. It tells that it's your account
//

- Api should be called before the page loads so that when the page loadinmg completed, we will have the data to show.
- But if we call after the page loads, then there would be blank page because html file laoding has been finished and we got the api data afterwards. So then we have to do a refresh to the data to be
- But if we call after the page loads, then there would be blank page because html file laoding has been finished and we got the api data afterwards. So then we have to do a refresh to display the data.

# API CALL BEFORE PAGE LOADING:
1. API CALLED => DATA IS FETCHED AND READY TO DISPLAY
2. PAGE LOADS => THE FETCHED API DATA GETS DISPLAYED

# API CALL AFTER PAGE LOADING:
1. PAGE LOADS => SINCE API IS NOT CALLED. THERE IS NO DATA TO DISPLAY. SO BLANK PAGE WILL BE DISPLAYED
2. API CALLED => DATA IS FETCHED NOW BUT PAGE HAS BEEN ALREADY LOADED. NOW WE NEED TO REFRESH THE PAGE TO DISPLAY THE DATA

- Now It also may possible that even if you call the api first, if due to some server problem, the api takes time to fetch the data , then js will not wait for it. It will skip the api call and move to the next code. In this case also, blank page will display. To prevent we can use the useEffect fun which will not allow js to proceed to next code until the api data call is fully finished

- useEffect takes 2 parameters:
1st param = a function
2nd param: Empty array / variable inside array / No param
```
useEffect(()=> {}, [])

or

useEffect(()=> {}, [name])

or

useEffect(()=> {})
```
- Api is called inside the useEffect using fetch
```
useEffect(()=> {

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1")

}, [])
```
- To convert the response into json
```

   useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1")
    .then(res => res.json())
   }, [])
```
- To store the json converted data into a variable and then console it
```

   useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1")
    .then(res => res.json())
    .then(data => console.log(data))
   }, [])
```
- Now if the api call fails, we can catch the error and console it to see wthether its correct or not
```
   useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
   }, [])
```
- Now to print the results(a array of objects in the api):
```
   useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1")
    .then(res => res.json())
    .then(data => console.log(data.results))
    .catch(error => console.log(error))
   }, [])
```
- To console the first element of the array of objects(i.e of results)
```
   useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1")
    .then(res => res.json())
    .then(data => console.log(data.results[0]))
    .catch(error => console.log(error))
   }, [])
```
- To console the title of the first element of the array of objects(i.e of results)
```
   useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1")
    .then(res => res.json())
    .then(data => console.log(data.results[0].title))
    .catch(error => console.log(error))
   }, [])
```
- this data varibale is not accessible outside its parenthesis. Now to access it globally, we need tp ue the useState function
- Creating the useState variable:
```

const [TopRatedMovies, setTopRatedMovies] = useState([])

//Here TopRatedMovies is the useState varibale which can be globally accessed anywhere in the component
[] = Empty Array = initial value of TopRatedMovies Variable
setTopRatedMovies is the function which assigns new value to the variable TopRatedMovies
```
- Now mapping the variable TopRatedMovies
```
import React, { useEffect, useState } from "react";
import "./HomePageContent.css";

function HomePageContent() {
  // apiKey = "b6c39c10522e3d304a2188632faf52b9";

  const [TopRatedMovies, setTopratedMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setTopratedMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {TopRatedMovies.map((value, key) => (
        <p>{value.title}</p>
      ))}
    </div>
  );
}

export default HomePageContent;

```
- In the above code map will run for every objects of data.results array. Only array can be mapped, not objects. Here we are mapping data.results which is a array of objects
- noe the topratedmovie variable will contain the data.results
- Now mapping the topratedmoovie 


//image path: https://image.tmdb.org/t/p/original


  //backdrop path of 1st movies(copied from console) = "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
  //poster path of 1st movie = "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"

  //so path of backdrop imag = image path + backdrop path = https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg

  //so path of poster imag = image path + poster path = https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg

- In Code:
```
function HomePageContent() {
  // apiKey = "b6c39c10522e3d304a2188632faf52b9";
  //image path: https://image.tmdb.org/t/p/original
  

  const [TopRatedMovies, setTopratedMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setTopratedMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {TopRatedMovies.map((value, key) => (
        <>
        <img src={`https://image.tmdb.org/t/p/original${value.poster_path}`} />
        <p>{value.title}</p>
        </>

      ))}
    </div>
  );
}
```
- Code for displaying Top rated movies:
```
import React, { useEffect, useState } from "react";
import "./HomePageContent.css";

function HomePageContent() {
  // apiKey = "b6c39c10522e3d304a2188632faf52b9";
  //image path: https://image.tmdb.org/t/p/original

  const [TopRatedMovies, setTopratedMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setTopratedMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="homepagecontent_container">
      <div className="row_container">
        <p className="row_container_title">Top Rated Movies</p>
        <div className="movies_row_container">
          {TopRatedMovies.map((value, key) => (
            <div className="movies_rows">
              <img
                src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
              />
              <p>{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageContent;

```
OUTPUT:
<img src="./Images/1.png">

- Now we need 3 to 4 more rows like this. This could be acheived by three ways:
- 1. Repeating the div code inside the return fun for every row but this will not be a optimized code because we have to repeat the same code for every row.
- 2. mapping => mapping is not possible here because for every row, different api is used.
- 3. using Component :- It is the best method.we can add the the html code inside a component and call it for every row or api