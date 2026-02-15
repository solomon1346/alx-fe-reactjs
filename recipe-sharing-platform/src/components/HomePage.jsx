import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Recipe Sharing Platform 🍲
      </h1>

      {/* Add Recipe Button */}
      <div className="flex justify-center mb-8">
        <Link
          to="/add"
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
        >
          + Add New Recipe
        </Link>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              {/* Title */}
              <h2 className="text-xl font-semibold mb-2">
                {recipe.title}
              </h2>

              {/* Summary */}
              <p className="text-gray-600 text-sm">
                {recipe.summary}
              </p>

              {/* View Button */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
