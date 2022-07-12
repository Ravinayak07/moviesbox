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