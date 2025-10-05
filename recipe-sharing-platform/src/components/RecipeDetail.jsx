import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams(); // capture the recipe id from URL
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to load recipe");
        const data = await response.json();
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      } catch (err) {
        setError(err.message);
      }
    };

    loadRecipe();
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!recipe) return <p className="text-center text-blue-500">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
