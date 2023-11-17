import React, { useState, useContext } from 'react';
import api from '../api';
import AuthContext from '../context/AuthContext';

const RecipeUpdateForm = ({ recipe, imageURL }) => {
  const { authTokens } = useContext(AuthContext);
  const { getUser } = useContext(AuthContext);

  const user = getUser();

  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const newImage = event.target.files[0];
    setImage(newImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedRecipeData = {
      title,
      ingredients,
      instructions,
      image,
      chef: user.username
    };

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${authTokens.access}`, // Include the token in the request headers
          'Content-Type': 'multipart/form-data', 
        }
      };
      await api.put(`/recipes/${recipe.id}/update/`, updatedRecipeData, config);
      alert('Recipe updated successfully!');
    } catch (error) {
      alert('Error updating recipe:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='recipe-update-form'>
      <label>Title:</label>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Ingredients:</label>
      <input type="text" name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <label>Instructions:</label>
      <textarea name="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        <div className="image-input-container">
        {imageURL && (
          // Conditional rendering to display pre-filled image
          <div className="prefilled-image-container">
            <img src={imageURL} alt="Recipe Image" />
          </div>
        )}

        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default RecipeUpdateForm;