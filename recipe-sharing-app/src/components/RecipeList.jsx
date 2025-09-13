import AddRecipeForm from "./AddRecipeForm";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";    

function RecipeList() {

    const { recipes, filteredRecipes } = useRecipeStore();

    const listToDisplay = filteredRecipes.length > 0 ? filteredRecipes : recipes;
  return (  
    
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid black", marginBottom: "20px" }}>
        <SearchBar />
        <h1>List of Recipes</h1>
        {listToDisplay.map(recipe => (
            <Link to={`/recipes/${recipe.id}`}> 
            <ul>
                <li key={recipe.id}>{recipe.title} <span>{recipe.description}</span></li>
            </ul>
            
            </Link>
          
        ))}
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
      </div>
      
  );
}
export default RecipeList;