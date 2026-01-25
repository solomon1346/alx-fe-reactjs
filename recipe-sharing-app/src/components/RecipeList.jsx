import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

 
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>All Recipes</h2>
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipesToDisplay.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;