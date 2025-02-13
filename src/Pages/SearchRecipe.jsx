import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

function SearchRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
          import.meta.env.VITE_RECIPE_APP_API_KEY
        }`
      );
      const data = await response.json();
      console.log("Fetched Recipe:", data);
      setRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  useEffect(() => {
    console.log(id);

    fetchRecipe();
  }, [id]);

  return (
    <>
      {recipe ? (
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="pt-15"
          >
            <p className="text-4xl text-center">{recipe.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-5 md:px-20 px-5 py-15"
          >
            <div className="md:w-[50%]">
              <img
                src={recipe.image}
                className="rounded-2xl"
                alt={recipe.title}
              />
            </div>
            <div className="md:w-[50%]">
              <p className="text-2xl mb-2">Summary:</p>
              <p
                className="text-base/7 mb-5"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              ></p>
            </div>
          </motion.div>

          <div className="bg-[#2B2525] py-15">
            <p className="text-2xl mb-5 text-center">Ingredients:</p>
            <div className="flex flex-wrap gap-5 justify-center px-3">
              {recipe.extendedIngredients?.length > 0 ? (
                recipe.extendedIngredients.map((ingredient, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#181515] px-5 py-1 rounded-lg"
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  >
                    <p>{ingredient.original}</p>
                  </motion.div>
                ))
              ) : (
                <p className="text-2xl mb-5 text-center">
                  No ingredients available.
                </p>
              )}
            </div>
          </div>

          <div className="md:px-20 px-5 py-15">
            <p className="text-2xl mb-5 text-center">Instruction Steps:</p>

            {recipe.analyzedInstructions?.length > 0 ? (
              recipe.analyzedInstructions.map(
                (instruction, instructionIndex) => (
                  <div key={instructionIndex} className="my-4">
                    <ul>
                      {instruction.steps?.length > 0 ? (
                        instruction.steps.map((step, stepIndex) => (
                          <motion.li
                            key={stepIndex}
                            className="mb-2 flex"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              ease: "easeOut",
                              delay: stepIndex * 0.01,
                            }}
                          >
                            <div className="w-[25%] lg:w-[8%]">
                              Step: {step.number}
                            </div>
                            <div className="w-[70%] md:w-[90%]">
                              {step.step}
                            </div>
                          </motion.li>
                        ))
                      ) : (
                        <li>No steps available.</li>
                      )}
                    </ul>
                  </div>
                )
              )
            ) : (
              <p className="text-center">No instructions available.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="py-15">
          <p className="text-4xl text-center">Recipe not found!</p>
        </div>
      )}

      {/* Back to Home Button */}
      <div className="flex justify-center py-15">
        <Link to="/">
          <button className="border px-4 py-1 rounded-2xl hover:bg-black hover:shadow-md m-2 shadow-cyan-800 transition duration-200">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default SearchRecipe;
