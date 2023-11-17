import React, { useState, useEffect } from 'react';
import api from '../api';
import RecipeUpdateForm from '../components/RecipeUpdateForm';
import { useParams } from 'react-router-dom';

const RecipeUpdatePage = () => {
    const recipeId = useParams()
    const id = recipeId.recipeId
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [imageURL, setImageURL] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchRecipeDetails = async () => {
        try {
          setLoading(true);
  
          const response = await api.get(`/recipes/${id}/`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.status === 200) {
            setRecipeDetails(response.data);
            const imageURL = response.data.image;
            setImageURL(imageURL);
            setLoading(false);
          } else {
            setError('Error fetching recipe details. Please try again later.');
            setLoading(false);
          }
        } catch (error) {
          console.error('An error occurred while fetching recipe details:' + error);
        }
      };
  
      fetchRecipeDetails();
    }, [id]);
  
    return (
      <div>
        <h4>Update Recipe</h4>
  
        {loading && <p>Loading recipe...</p>}
  
        {error && <p className="error-message">{error}</p>}
  
        {!loading && !error && <RecipeUpdateForm recipe={recipeDetails} imageURL={ imageURL } />}
      </div>
    );
  };
export default RecipeUpdatePage;

