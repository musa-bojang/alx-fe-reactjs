import AddRecipeForm from "./AddRecipeForm";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {

    const { recipes } = useRecipeStore();
  return (  
    
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid black", marginBottom: "20px" }}>
        <h1>List of Recipes</h1>
        {recipes.map(recipe => (
            <Link to={`/recipes/${recipe.id}`}> 
            <ul>
                <li key={recipe.id}>{recipe.title} <span>{recipe.description}</span></li>
            </ul>
            
            </Link>
          
        ))}
      </div>
      
  );
}
export default RecipeList;