import EditRecipeForm from "./EditRecipeForm";
import useRecipeStore from "./recipeStore";
import { useParams } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
    const { id } = useParams(); // from URL /recipes/:id
  const recipeId = Number(id); // convert string to number

    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
      );
  if (!recipe) {
    return <div>No recipe selected</div>;
  }     
    return (
  <>
   <div style={{ border: "1px solid black", padding: "20px", marginTop: "20px" }}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <h1>edit section</h1>
            <EditRecipeForm />
            <DeleteRecipeButton />
        </div>
       
  
  </>
       
        
    );
}   
export default RecipeDetails;