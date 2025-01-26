import React, { useEffect, useState } from "react";

function Num1Recipe() {
  const [recipe, setRecipe] = useState([]);
  const fetchNum1Recipes = async () => {
    const checkLocalStorage = localStorage.getItem("NumOne-Recipe");

    if (checkLocalStorage) {
      setRecipe(JSON.parse(checkLocalStorage));
      console.log("local Storage data");
    } else {
      console.log("calling Api Num one...");

      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_RECIPE_APP_API_KEY
        }`
      );
      const data = await api.json();
      console.log("numOne:", data.recipes);
      localStorage.setItem("NumOne-Recipe", JSON.stringify(data.recipes));
      setRecipe(data.recipes);
    }
  };

  console.log("recipeee:", recipe);

  useEffect(() => {
    fetchNum1Recipes();
  }, []);

  return (
    <div className="bg-[#2B2525] flex flex-col justify-center py-15 md:px-20">
      <div className="mb-12 text-center">
        <p className="text-4xl font-semibold">Our Most Loved Recipe!</p>
      </div>
      {recipe &&
        recipe.map((rec) => (
          <div
            key={rec.id}
            className="flex flex-col md:flex-row justify-center items-center w-full gap-4"
          >
            <div className="w-full md:w-[60%] px-4">
              <h2 className="text-3xl mb-5">{rec.title}</h2>
              <p
                className="text-base/7 mb-5"
                dangerouslySetInnerHTML={{ __html: rec.summary }}
              ></p>
              <a
                href=""
                className="border px-4 py-1 rounded-2xl hover:bg-[#110f0f] duration-200"
              >
                View Recipe
              </a>
            </div>
            <div className="w-full md:w-[40%] px-4">
              <img src={rec.image} className="rounded-lg " />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Num1Recipe;
