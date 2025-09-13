import useRecipeStore from "./recipeStore"
import { useParams, useNavigate } from "react-router-dom";

function DeleteRecipe() {
    const { id } = useParams(); // from /recipes/:id
    const recipeId = Number(id);
  
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate("/recipes"); // redirect after deleting
      };

    
  return (
    <div>
       <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteRecipe;