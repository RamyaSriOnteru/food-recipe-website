import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ReciepeDetails.css";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [ingredientsWithMeasures, setIngredientsWithMeasures] = useState([]);
  const [error, setError] = useState(null);
  const URL_DETAILS = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(`${URL_DETAILS}${id}`);
        const data = await res.json();

        if (!data.meals || data.meals.length === 0) {
          setError("Recipe not found.");
          return;
        }

        const meal = data.meals[0];
        setRecipe(meal);

        // Combine ingredients and measures into a single array
        const ingredients = Object.keys(meal)
          .filter((key) => key.includes("strIngredient") && meal[key])
          .map((key) => meal[key]);

        const measures = Object.keys(meal)
          .filter((key) => key.includes("strMeasure") && meal[key])
          .map((key) => meal[key]);

        const combined = ingredients.map((ingredient, index) => ({
          ingredient,
          measure: measures[index] || "",
        }));

        setIngredientsWithMeasures(combined);
      } catch (err) {
        console.error("Failed to fetch recipe details:", err);
        setError("Failed to load recipe details. Please try again later.");
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!recipe) {
    return <div className="loading">Loading recipe details...</div>;
  }

  return (
    <div className="container5">
      <div className="wrapper5">
        <h2>Recipe Details</h2>
        <div className="recipe5">
          <img src={recipe?.strMealThumb} alt={recipe?.strMeal} />
          <div className="metadata">
            <strong>Title:</strong> {recipe?.strMeal}
          </div>
          <h3>Ingredients and Measures</h3>
          <div className="ingredients5">
            {ingredientsWithMeasures.map(({ ingredient, measure }, index) => (
              <div key={index} className="ingredient5">
                <span>{ingredient}</span> - <span>{measure}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
