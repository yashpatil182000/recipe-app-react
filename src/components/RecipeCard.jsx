import React from "react";
import ErrorImg from "../assets/unavailable-img.jpg";
import NonvegIcon from "../assets/non-veg.png";
import VegIcon from "../assets/veg.png";

function RecipeCard({ image, title, vegetarian, className }) {
  return (
    <div className={`p-2 rounded-lg h-75 cursor-pointer relative ${className}`}>
      <div className="overflow-hidden rounded-lg ">
        <img
          src={image ? image : ErrorImg}
          className="rounded-lg hover:scale-[1.08] duration-200 "
          alt=""
        />
      </div>
      <div
        className={`absolute top-2 right-0 text-xs rounded-s-xl px-2 py-1 flex items-center ${
          vegetarian ? "bg-green-800" : " bg-red-800"
        } shadow-sm shadow-black `}
      >
        <span>
          <img
            src={vegetarian ? VegIcon : NonvegIcon}
            width={"20px"}
            className="me-1"
            alt=""
          />
        </span>
        {vegetarian ? "Veg" : "Non Veg"}
      </div>
      <p className="text-lg m-3">{title}</p>
    </div>
  );
}

export default RecipeCard;
