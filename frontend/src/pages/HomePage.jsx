import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import config from "../conf/config";
import NewRecipeModal from "../components/NewRecipeModal";
import { BsPlus } from "react-icons/bs";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(config.baseUrl)
      .then((d) => setRecipes(d.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <main className="container py-5">
      <div className="d-flex align-items-center">
        <h1>Vos Recette:</h1>
        <button
          className="btn btn-primary ms-auto"
          onClick={() => setOpen((prev) => true)}
        >
          <BsPlus size={24} /> Ajouter Une Nouvelle Recette
        </button>
      </div>
      <NewRecipeModal open={open} setOpen={setOpen} uiUpdate={setRecipes} />
      <div className="row gap-4 mt-5">
        {recipes.length > 0 &&
          recipes.map((rec) => (
            <RecipeCard
              key={rec._id}
              href={rec._id}
              title={rec.title}
              ingrediants={rec.ingredients}
            />
          ))}
      </div>
    </main>
  );
};
export default HomePage;
