import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to load recipe");

        const data = await response.json();
        const found = data.find((r) => r.id === parseInt(id));
        if (!found) throw new Error("Recipe not found");

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
      <Link
        to="/"
        className="text-green-600 hover:underline block mb-4 text-sm"
      >
        ← Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4 mb-2 text-gray-800">
        {recipe.title}
      </h1>

      <p className="text-gray-600 mb-6">{recipe.summary}</p>

      {/* Ingredients Section */}
      {recipe.ingredients && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Ingredients
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions Section */}
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Instructions</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
