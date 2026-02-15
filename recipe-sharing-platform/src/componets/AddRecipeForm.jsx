import { useState } from "react";

function AddRecipeForm() {
  // State for form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientsArray = ingredients.split(",");
      if (ingredientsArray.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients separated by commas";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newRecipe = {
        title,
        ingredients,
        steps,
      };

      console.log("Recipe Submitted:", newRecipe);

      // Reset form after submission
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md md:max-w-2xl bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Recipe Title */}
          <div>
            <label className="block font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium mb-1">
              Ingredients (comma separated)
            </label>
            <textarea
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block font-medium mb-1">
              Preparation Steps
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">
                {errors.steps}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
