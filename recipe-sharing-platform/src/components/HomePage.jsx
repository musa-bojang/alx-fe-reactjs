import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        🍲 Recipe Sharing Platform
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Discover and share amazing recipes from around the world!
      </p>

      {loading && <p className="text-center text-blue-500">Loading recipes...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {/* ✅ Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (

          <Link to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
           >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{recipe.summary}</p>
              <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                View Recipe
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
