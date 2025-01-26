import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      console.log("local Storage data");
    } else {
      console.log("calling Api...");

      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
          import.meta.env.VITE_RECIPE_APP_API_KEY
        }`
      );
      const data = await api.json();
      console.log(data);
      localStorage.setItem("Popular-recipes", JSON.stringify(data.recipes));
      setRecipeList(data.recipes);
    }
  };

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
            {recipeList.map((recipe) => {
              return (
                <div
                  key={recipe.id}
                  className="p-2 rounded-lg bg-[#2E2727] h-75 cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={recipe.image}
                      className="rounded-lg hover:scale-[1.08] duration-200"
                      alt=""
                    />
                  </div>
                  <p className="text-lg m-3">{recipe.title}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default PopularPicks;
