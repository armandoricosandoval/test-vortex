import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  routes: {
    "/": "./src/App.jsx",
    "/about": "./src/About.tsx",
    "/login": "./src/pages/Login.jsx", // Add other routes as needed
    "/sing-up": "./src/pages/Singup.jsx",
    "/profile-students": "./src/pages/ProfileStudents.jsx",
    "/writers": "./src/pages/Writers.jsx",
  },
});
