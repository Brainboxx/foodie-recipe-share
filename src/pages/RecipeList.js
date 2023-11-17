import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";


const RecipeList = () => {
    let [recipes, setRecipes] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        let fetchRecipes = async () => {
            try {
                const response = await api.get('/recipes/');
                setRecipes(response.data);
                setLoading(false);
            } catch(error) {
                console.error('Error fetching recipe' + error);
                setError('Error fetching recipes. Please try again later.');
                setLoading(false);
            }
        };
        fetchRecipes();
    }, []);

    const filteredRecipes = recipes.filter((recipe) => {
      const recipeTitle = recipe.title.toLowerCase();
      const recipeIngredients = recipe.ingredients.toLowerCase();
      const recipeInstructions = recipe.instructions.toLowerCase();
      const searchQuery = searchTerm.toLowerCase();
      return (
        recipeTitle.includes(searchQuery) ||
        recipeIngredients.includes(searchQuery) ||
        recipeInstructions.includes(searchQuery)
      );
    });
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

  return (
<div className="recipe-list">
      <h2>Recipe List</h2>
      <input
            type="text"
            placeholder="Search recipes"
            className="search-input"
            onChange={handleSearchChange}
            value={searchTerm}
            />
      {loading && <p>Loading recipes...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <ul className="recipe-items">
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <Link to={`/recipes/${recipe.id}`} className="recipe-link">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-image"
                  onError={(e) => {
                      console.error('Error loading image:', e);
                    }}
                />
                <div className="recipe-details">
                  <h3>{recipe.title}</h3>
                  <p>Ingredients: {recipe.ingredients}</p>
                  <p>Instructions: {recipe.instructions}</p>
                  
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RecipeList
