import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const URL_CATEGORIES =
    "https://www.themealdb.com/api/json/v1/1/categories.php";
  const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(URL_CATEGORIES);
        const data = await res.json();
        setCategories(data.categories.slice(0, 9));
        setActiveCategory(data.categories[0].strCategory);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(`${URL_RECIPES}${activeCategory}`);
        const data = await res.json();
        setRecipes(data.meals.slice(0, 11));
      } catch (error) {
        console.error(error);
      }
    };
    activeCategory && fetchRecipes();
  }, [activeCategory]);

  return (
    <div className="container4">
      <div className="wrapper4">
        <div className="titles4">
          <h5>Pick a category</h5>
          <h2>Choose what suits you</h2>
        </div>
        <div className="categories4">
          {categories?.map((category) => (
            <div
              onClick={() => setActiveCategory(category.strCategory)}
              className={`category4 ${
                activeCategory === category.strCategory ? "active" : ""
              }`}
              key={category.idCategory}
            >
              {category.strCategory}
            </div>
          ))}
        </div>
        <div className="recipes4">
          {recipes?.map((recipe) => (
            <div key={recipe.idMeal} className="recipe4">
              <Link to={`/recipe/${recipe.idMeal}`} className="imgContainer4">
                <img src={recipe.strMealThumb} />
              </Link>
              <h3>{recipe.strMeal}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
