import React, { useState, useEffect } from "react";
import "./Hero.css";
import meal from "../../assets/meal1.jpg";
const Hero = () => {
  const URL1 =
    "https:www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  const URL2 = "https:www.themealdb.com/api/json/v1/1/search.php?s=burger";
  const [chickenRecipe, setChickenRecipe] = useState("");
  const [burgerRecipe, setBurgerRecipe] = useState("");
  useEffect(() => {
    const fetchChickenRecipe = async () => {
      try {
        const res = await fetch(URL1);
        const data = await res.json();
        setChickenRecipe(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChickenRecipe();
  }, []);

  useEffect(() => {
    const fetchChickenRecipe = async () => {
      try {
        const res = await fetch(URL2);
        const data = await res.json();
        setBurgerRecipe(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChickenRecipe();
  }, []);
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Left">
          <h2>
            Craving Some <br />
            delicious meals
          </h2>
          <h5>Feeling the cooking vibe</h5>
          <p className="FirstDesc">
            You have come to the right place for some tasty recipes
          </p>
          <p className="SecondDesc">Just see what we have for you</p>

          <div className="Buttons">
            <button>Get started</button>
            <button>Explore Recipes</button>
          </div>
        </div>
        <div className="Right">
          <img src={meal} alt="" />
          <div className="chickenMeal">
            <div className="imageContainer">
              <img src={chickenRecipe?.strMealThumb} alt="" />
            </div>
            <h5>{chickenRecipe?.strMeal}</h5>
          </div>
          <div className="burgerMeal">
            <div className="imgContainer">
              <img src={burgerRecipe?.strMealThumb} alt="" />
            </div>
            <h5>{burgerRecipe?.strMeal} </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
