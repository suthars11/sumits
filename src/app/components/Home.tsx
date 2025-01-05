"use client";

import Hero from "./Home/Hero/Hero";
import Apparment from "./Home/Apparment/Apparment";
import Properties from "./Home/Properties/Properties";
import CityProperty from "./Home/CityProperty/CityProperty";
// import BuildingFeature from './Home/BuildingFeature/BuildingFeature'
import Review from "./Home/Review/Review";
// import Blog from './Home/Blog/Blog'

import Handpicked from "./Handpicked/Handpicked";
import Highlight from "./Highlight/Highlight";
// import About from "./Aboutus/About"
import Search from "./Search";
import Listcard from "./Sell/Listcard";
// import About from "../Pages/Aboutus/About";
// import about from "../Pages/Aboutus/about";
const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <Handpicked />
      <Properties />
      <Highlight />
      <CityProperty />
      <Apparment />
      {/* <BuildingFeature/> */}
      <Review />
      <Listcard />
      
      {/* <Blog/> */}
      {/* <about/> */}
      {/* <About/> */}
      
    </>
  );
};

export default Home;
