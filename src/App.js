import './App.css';
import LandingPage from "./Container/LandingPage/LandingPage.js";
import SignInPage from './Container/SignInPage/SignInPage';
import HomePage from './Container/HomePage/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const isuserLoggedin = true;
  // const isuserLoggedin;   //false
  // const isuserLoggedin = "";  //empty string also false
  // const isuserLoggedin = "Hello";  //Non-empty string. Its boolean value>0. So true
  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={isuserLoggedin ? <HomePage /> : <LandingPage /> } />
        <Route path="/sign-in" element={<SignInPage /> } />
  
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
