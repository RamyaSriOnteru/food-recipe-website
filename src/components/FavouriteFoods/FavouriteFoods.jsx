import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./FavouriteFoods.css";

const FavouriteFoods = () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=rice";
  const [recipes, setRecipes] = useState([]);
  const [showRecipe, setShowRecipe] = useState(0);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data.meals);
        setRecipes(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);

  const handleArrow = (direction) => {
    if (direction === "left") {
      if (showRecipe === 0) {
        setShowRecipe(recipes.length - 1);
      } else {
        setShowRecipe((prev) => prev - 1);
      }
    }

    if (direction === "right") {
      if (showRecipe === recipes.length - 1) {
        setShowRecipe(0);
      } else {
        setShowRecipe((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="container2">
      <div className="wrapper2">
        <div className="titles">
          <h5>Recipes people like the most</h5>
          <h2>Our clients' favourite recipes</h2>
          <div className="recipes">
            <AiOutlineArrowLeft
              onClick={() => handleArrow("left")}
              className="leftArrow"
            />
            {recipes?.map((recipe) => (
              <div
                style={{ transform: `translateX(-${showRecipe * 750}px)` }}
                className="recipe"
                key={recipe.idMeal}
              >
                <img src={recipe?.strMealThumb} />
                <h3>{recipe?.strMeal}</h3>
              </div>
            ))}
            <AiOutlineArrowRight
              onClick={() => handleArrow("right")}
              className="rightArrow"
            />
          </div>
          <div className="dots">
            {recipes?.map((recipe, index) => (
              <div
                onClick={() => setShowRecipe(index)}
                className={`dot ${showRecipe === index ? "activeDot" : ""}`}
                key={recipe.idMeal}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteFoods;
