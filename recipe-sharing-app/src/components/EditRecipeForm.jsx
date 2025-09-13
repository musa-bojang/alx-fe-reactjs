import { Link, useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useState, useEffect, use } from "react";

function EditRecipeForm() {
    const { id } = useParams(); // from URL /recipes/:id
    const recipeId = Number(id); // convert string to number
   const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
  
      const recipe = useRecipeStore(state =>
          state.recipes.find(recipe => recipe.id === recipeId)
        );
        const updateRecipe = useRecipeStore((state) => state.updateRecipe);
        const handleSubmit = (event) => {
            event.preventDefault();
            updateRecipe(recipeId, { title, description }); // c
            
        };
        useEffect(() => {
            if (recipe) {
              setTitle(recipe.title);
              setDescription(recipe.description);
            }
            }, [recipe]);
  return (
    <form onSubmit={handleSubmit}>

    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
    <textarea  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
    <button type="submit"> Update recipe</button>
    <Link to="/"><button>Back to recipes</button></Link>
    
</form>
  )
}           
export default EditRecipeForm;