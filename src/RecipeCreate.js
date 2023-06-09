import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [oneRecipe, setOneRecipe] = useState({...initialState})
  
  const handleChange = (event) => {
    setOneRecipe({
      ...oneRecipe,
      [event.target.name]: event.target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, oneRecipe]);
    setOneRecipe({...initialState});
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={oneRecipe.name}
                onChange={handleChange}/>
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine</label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"                
                value={oneRecipe.cuisine}
                onChange={handleChange}/>
            </td>
            <td>
              <label htmlFor="photo">Photo</label>
              <input
                id="photo"
                name="photo"
                type="url"                
                value={oneRecipe.photo}
                onChange={handleChange}/>
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"                
                value={oneRecipe.ingredients}
                onChange={handleChange}/>
            </td>
            <td>
              <label htmlFor="preparation">Preparation</label>
              <textarea
                id="preparation"
                name="preparation"
                type="text"                
                value={oneRecipe.preparation}
                onChange={handleChange}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
