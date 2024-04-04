import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";
import axios from "axios";
import config from "../conf/config";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(config.baseUrl)
      .then((d) => setRecipes(d.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <main className="container py-5">
      <h2 className="mb-2">Ajouter une nouvelle recette:</h2>
      <RecipeForm uiUpdater={setRecipes} />
      {recipes.map((rec) => (
        <RecipeCard key={rec._id} content={rec.content} />
      ))}
    </main>
  );
};
export default HomePage;
