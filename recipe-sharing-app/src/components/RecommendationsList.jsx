import useRecipeStore from "./recipeStore";

function RecommendationsList() {
   
    const { recommendations, generateRecommendations } = useRecipeStore();
    return (
        <div>
          <h2>Recommended Recipes</h2>
          <button onClick={generateRecommendations}>Generate</button>
          {recommendations.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      );
}