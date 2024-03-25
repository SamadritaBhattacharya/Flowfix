//import { Stocks } from "./components/Stocks";
import Hero from "./components/Hero";
import About from "./components/About_us";
//import Home from "./components/Home";
import {  BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";



const App = () => {

    return (
        <>
     
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Hero />} />

          <Route exact path="/about" element={<About />} /> 
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
                   
          {/* <Route exact path="/stocks" element={<Stocks />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route exact path="/stocks" element= {<Stocks />} /> */}
        </Routes>
        </BrowserRouter>
      
        </>
    );
};

export default App;