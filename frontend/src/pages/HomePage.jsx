import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";
import axios from "axios";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/recipes")
      .then((d) => console.log(data));
  }, []);

  return (
    <main className="container py-5">
      <h2 className="mb-2">Ajouter une nouvelle recette:</h2>
      <RecipeForm />
      <RecipeCard />
    </main>
  );
};
export default HomePage;
