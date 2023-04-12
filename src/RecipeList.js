import React from "react";
import Recipe from "./Recipe"

function RecipeList({recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
const deleteRecipe = (indexToDelete) => 
  setRecipes((currentRecipe) => 
            currentRecipe.filter((oneRecipe, index) => index !== indexToDelete))


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <td>
              <th>Name</th>
            </td>
            <td>
              <th>Cuisine</th>
            </td>
            <td>
              <th>
                Photo
              </th>
            </td>
            <td>
              <th>Ingredients</th>
            </td>
            <td>
              <th>Preparation</th>
            </td>
            <td>
              <th>Actions</th>
            </td>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, i) => (
          <Recipe deleteRecipe={() => deleteRecipe(i)} key={i} recipe={recipe}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
