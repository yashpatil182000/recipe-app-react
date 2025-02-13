import { useState } from "react";
import React from "react";
import TastyTreasuresLogo from "../assets/TastyTreasuresLogo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const fetchSearchedRecipe = async () => {
    if (!searchInput.trim()) {
      setRecipes([]); // Hide search results if input is empty
      return;
    }

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/autocomplete?number=5&query=${searchInput}&apiKey=${
          import.meta.env.VITE_RECIPE_APP_API_KEY
        }`
      );
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value.trim() === "") {
      setRecipes([]);
    }
  };

  const handleRecipeClick = (id) => {
    setSearchInput("");
    setRecipes([]);
    navigate(`/search-recipe/${id}`);
  };

  return (
    <div className="bg-[#2B2525] py-5 flex flex-col md:flex-row justify-around items-center px-2 gap-5">
      <div>
        <img src={TastyTreasuresLogo} alt="TastyTreasures Logo" />
      </div>
      <div className="w-full max-w-sm min-w-[200px] relative">
        <div className="relative">
          <input
            className="w-full bg-transparent text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Search recipe..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <button
            className="absolute top-1 right-1 flex items-center rounded bg-[#181515] py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={fetchSearchedRecipe}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            Search
          </button>
        </div>

        {/* Search Results */}
        {recipes.length > 0 && searchInput.trim() !== "" && (
          <div className="absolute bg-[#181515] rounded-md mt-2 w-full shadow-lg p-2 z-1">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="py-1 px-2 hover:bg-[#2B2525] rounded cursor-pointer"
                onClick={() => handleRecipeClick(recipe.id)} // Navigates and hides search
              >
                <p>{recipe.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
