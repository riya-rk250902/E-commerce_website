import React from "react";
import Announce from './components/announce';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "../components/Login";
function Home() {
  return <div>
     <Announce/>
     <Navbar/>
     <Slider/>
     <Categories/>
     <Products/>
     <Newsletter/>
     <Footer/>
     <Login/>
   </div>;
  
}

export default Home;