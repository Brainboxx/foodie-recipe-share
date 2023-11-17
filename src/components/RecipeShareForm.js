import React, { useState, useContext } from 'react';
import api from '../api';
import AuthContext from '../context/AuthContext';

const RecipeShareForm = () => {
    const { authTokens } = useContext(AuthContext);
    const { getUser } = useContext(AuthContext);
    
    const user = getUser();

    let [title, setTitle] = useState('');
    let[ingredients, setIngredients] = useState('');
    let[instructions, setInstructions] = useState('');
    let[image, setImage] = useState(null);

    let handleSubmit = async (e) => {
      e.preventDefault();

      let recipeData = {
        title,
        ingredients,
        instructions,
        image,
        chef: user.username,
      };
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${authTokens.access}`, // Include the token in the request headers
            'Content-Type': 'multipart/form-data', 
          }
        };
        await api.post('/recipes/create/', recipeData, config);
        alert('Recipe shared successfully')
      } catch (error) {
        alert('Error sharing recipe:'+ error.message);
      }
    };
  return (
    <div className='recipe-form'>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Ingredients:</label>
        <input type="text" name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
        <label>Instructions:</label>
        <input type="text" name="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)}/>
        <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
        <button type='submit'>Share Recipe</button>
      </form>
    </div>
  )
}

export default RecipeShareForm
