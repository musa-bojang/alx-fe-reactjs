import useRecipeStore from "./recipeStore";

function RecipeList() {

    const { recipes } = useRecipeStore();
  return (  
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid black", marginBottom: "20px" }}>
        <h1>List of Recipes</h1>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
  );
}
export default RecipeList;