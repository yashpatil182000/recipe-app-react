import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "./RecipeCard";

function VegeterianPick() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [recipeList, setRecipeList] = useState([]);
  const fetchRecipes = async () => {
    const checkLocalStorage = localStorage.getItem("Veg-recipes");

    if (checkLocalStorage) {
      setRecipeList(JSON.parse(checkLocalStorage));
      console.log("local Storage data");
    } else {
      console.log("calling Api...");
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
          import.meta.env.VITE_RECIPE_APP_API_KEY
        }&tags=vegetarian`
      );
      const data = await api.json();
      console.log(data);
      localStorage.setItem("Veg-recipes", JSON.stringify(data.recipes));
      setRecipeList(data.recipes);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="bg-[#2B2525] flex flex-col md:flex-row justify-center items-center py-10 md:px-20">
        <div className="md:w-[25%] w-fit mb-5 md:mb-0 ">
          <p className="text-4xl text-red-800">Vegetarian Picks</p>
        </div>
        <div className="w-[70%]">
          <Slider {...settings}>
            {recipeList.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  vegetarian={recipe.vegetarian}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default VegeterianPick;
