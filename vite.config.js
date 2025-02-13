import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const withMT = require("@material-tailwind/react/utils/withMT");

export default defineConfig({
  plugins: [react(), withMT(tailwindcss())],
});
