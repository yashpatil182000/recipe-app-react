import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Recipe from "./Pages/Recipe.jsx";
import Layout from "./Layout.jsx";
import SearchRecipe from "./Pages/SearchRecipe.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/recipes/:id`,
        element: <Recipe />,
      },
      {
        path: `/search-recipe/:id`,
        element: <SearchRecipe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
