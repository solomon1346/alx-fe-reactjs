import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split(",").map(item => item.trim());

    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");

    // For now we just log it (since no backend)
    console.log({
      title,
      ingredients: ingredientsList,
      steps,
    });

    alert("Recipe added successfully!");

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add New Recipe 🍽️
        </h1>

        {error && (
          <div className="mb-4 text-red-600 bg-red-100 p-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium mb-2">
              Ingredients (comma separated)
            </label>
            <textarea
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g. Rice, Tomatoes, Salt"
            ></textarea>
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block font-medium mb-2">
              Preparation Steps
            </label>
            <textarea
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Describe how to prepare the dish"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
