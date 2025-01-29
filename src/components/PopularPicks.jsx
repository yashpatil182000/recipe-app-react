import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

function PopularPicks() {
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
    const checkLocalStorage = localStorage.getItem("Popular-recipes");

    if (checkLocalStorage) {
      setRecipeList(JSON.parse(checkLocalStorage));
      console.log("Popular picks :: local Storage data");
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
          import.meta.env.VITE_RECIPE_APP_API_KEY
        }`
      );
      const data = await api.json();
      localStorage.setItem("Popular-recipes", JSON.stringify(data.recipes));
      console.log("Popular picks :: API call");

      setRecipeList(data.recipes);
    }
  };

  // console.log("recipeLissssst:", recipeList);

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center py-10 md:px-20">
        <div className="md:w-[25%] w-fit mb-5 md:mb-0 ">
          <p className="text-4xl text-red-800">Popular Picks</p>
        </div>
        <div className="w-[70%]">
          <Slider {...settings}>
            {recipeList.map((recipe, id) => {
              return (
                <Link to={`/recipes/${recipe.id}`} key={id}>
                  <RecipeCard
                    key={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                    vegetarian={recipe.vegetarian}
                    className={"bg-[#2E2727]"}
                  />
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default PopularPicks;
