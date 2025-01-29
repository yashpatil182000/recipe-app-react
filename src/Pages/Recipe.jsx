import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Recipe() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [popularRecipeList, setPopularRecipeList] = useState([]);
  const [vegRecipeList, setVegRecipeList] = useState([]);
  const [nonvegRecipeList, setNonvegRecipeList] = useState([]);
  const [numOneRecipeList, setnumOneRecipeList] = useState([]);

  useEffect(() => {
    const popularRecipe = localStorage.getItem("Popular-recipes");
    const vegRecipe = localStorage.getItem("Veg-recipes");
    const nonvegRecipe = localStorage.getItem("Nonveg-recipes");
    const numOneRecipe = localStorage.getItem("NumOne-Recipe");

    setPopularRecipeList(JSON.parse(popularRecipe));
    setVegRecipeList(JSON.parse(vegRecipe));
    setNonvegRecipeList(JSON.parse(nonvegRecipe));
    setnumOneRecipeList(JSON.parse(numOneRecipe));
  }, []);

  useEffect(() => {
    let foundRecipe =
      popularRecipeList.find((recipe) => recipe.id == id) ||
      vegRecipeList.find((recipe) => recipe.id == id) ||
      nonvegRecipeList.find((recipe) => recipe.id == id) ||
      numOneRecipeList.find((recipe) => recipe.id == id);

    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      console.log("Recipe not found in any list");
      setRecipe(null);
    }

    console.log(recipe);
  }, [
    popularRecipeList,
    vegRecipeList,
    nonvegRecipeList,
    numOneRecipeList,
    id,
  ]);
  return (
    <>
      {recipe ? (
        <div className=" ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ amount: 0.2 }}
            className="pt-15"
          >
            <p className="text-4xl text-center ">{recipe.title}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ amount: 0.2 }}
            className="flex-col flex md:flex-row justify-center items-center gap-5 md:px-20 px-5 py-15"
          >
            <div className="md:w-[50%]">
              <img src={recipe.image} className="rounded-2xl " alt="" />
            </div>
            <div className="md:w-[50%]">
              <p className="text-2xl mb-2">Summary: </p>
              <p
                className="text-base/7 mb-5"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              ></p>{" "}
            </div>
          </motion.div>
          <div className="bg-[#2B2525] py-15">
            <p className="text-2xl mb-5 text-center">Ingredients: </p>
            <div className="flex flex-wrap gap-5 justify-center">
              {recipe.extendedIngredients ? (
                recipe.extendedIngredients.map((ingredient, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="bg-[#181515] px-5 py-1 rounded-lg"
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                      viewport={{ once: false, amount: 0.1 }}
                    >
                      <p>{ingredient.original}</p>
                    </motion.div>
                  );
                })
              ) : (
                <p className="text-2xl mb-5 text-center">
                  Currently Ingredients are not available
                </p>
              )}
            </div>
          </div>
          <div className="md:px-20 px-5 py-15">
            <p className="text-2xl mb-5 text-center">Instruction Steps: </p>

            {recipe.analyzedInstructions ? (
              recipe.analyzedInstructions.map(
                (instruction, instructionIndex) => (
                  <div key={instructionIndex} className="my-4">
                    <ul>
                      {instruction.steps ? (
                        instruction.steps.map((step, stepIndex) => (
                          <motion.li
                            key={stepIndex}
                            className="mb-2  flex"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              ease: "easeOut",
                              delay: stepIndex * 0.01,
                            }}
                            viewport={{ once: false, amount: 0.1 }}
                          >
                            <div className=" w-[25%] lg:w-[8%]">
                              Step : {step.number}
                            </div>
                            <div className="w-[70%] md:w-[90%]">
                              {step.step}
                            </div>
                          </motion.li>
                        ))
                      ) : (
                        <li>No steps available for this instruction group.</li>
                      )}
                    </ul>
                  </div>
                )
              )
            ) : (
              <p>No instructions available for this recipe.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="py-15">
          <p className="text-4xl text-center ">Recipe not found!</p>
        </div>
      )}

      <div className="flex justify-center py-15">
        <Link to={"/"}>
          <a className="border px-4 py-1 rounded-2xl hover:bg-[#000000] hover:shadow-md m-2 shadow-cyan-800 duration-200">
            Back to home
          </a>
        </Link>
      </div>
    </>
  );
}

export default Recipe;
