import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import FavouriteFoods from "../FavouriteFoods/FavouriteFoods";
import Categories from "../Categories/Categories";
const Home = () => {
  return (
    <div>
      <Hero />
      <FavouriteFoods />
      <Categories />
    </div>
  );
};

export default Home;
