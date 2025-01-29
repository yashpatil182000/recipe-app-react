import React from "react";
import { motion } from "framer-motion";

function JokeSection() {
  const foodJokes = [
    {
      question: "Why did the tomato turn red?",
      answer: "Because it saw the salad dressing! 🥗🍅",
    },
    {
      question: "What’s a pepper’s favorite sport?",
      answer: "Jalapeño business! 🌶️",
    },
    {
      question: "Why shouldn’t you tell secrets in a bakery?",
      answer: "Because the muffins are always eavesdropping! 🧁👂",
    },
    {
      question: "What do you call cheese that isn’t yours?",
      answer: "Nacho cheese! 🧀",
    },
    {
      question: "Why did the chicken join the band?",
      answer: "Because it had the drumsticks! 🍗🥁",
    },
    {
      question: "What’s an egg’s least favorite day?",
      answer: "Fry-day! 🍳",
    },
    {
      question: "Why did the lemon stop rolling?",
      answer: "It ran out of juice! 🍋",
    },
    {
      question: "How do you make a tissue dance?",
      answer: "Put a little guac in it! 🥑🕺",
    },
    {
      question: "Why did the mushroom get invited to all the parties?",
      answer: "Because he’s a fungi! 🍄",
    },
    {
      question: "Why did the scarecrow win an award?",
      answer: "Because he was outstanding in his field... of corn! 🌽🏅",
    },
  ];

  return (
    <>
      <div className="bg-[url(./assets/Capture.png)] bg-fixed">
        <div className="py-15 px-4 md:px-20 bg-black/85 ">
          <div className="mb-12 text-center">
            <p className="text-4xl font-semibold">🍳 Cooking Up Comedy 🥄😂</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {foodJokes.map((joke, id) => {
              return (
                <motion.div
                  key={id}
                  className="bg-[#181515]/85 border rounded-xl w-fit p-4 m-1 hover:scale-[1.3]  hover:shadow-black shadow-lg duration-200"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: id * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <p>Question : {joke.question}</p>
                  <p>Answer : {joke.answer}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default JokeSection;
