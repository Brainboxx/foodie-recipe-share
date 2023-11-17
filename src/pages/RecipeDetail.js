import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'

const RecipeDetail = () => {
    let { recipeId } = useParams();
    let [recipe, setRecipe] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);
    useEffect(() => {
      const fetchRecipe = async () => {
        try { 
          const response = await api.get(`recipes/${recipeId}`);
          setRecipe(response.data);
        } catch (error) {
          console.error('Error fetching Recipe:', error);
          setError('Error fetching recipe. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchRecipe();
    }, [recipeId]);
    return (
        <div className='recipe-detail'>
        {loading && <p>Loading recipe...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && recipe && (
          <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Posted by: {recipe.chef}</p>
          </div>
        )}
      </div>
      );
    };

export default RecipeDetail
