import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../conf/config";

const DetailsPage = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + id)
      .then((r) => setRecipe(r.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <main className="container pt-5">
      <h1>
        Details de la recette{" "}
        <code className="badge" style={{ background: "#acacac" }}>
          #{id}
        </code>
        :
      </h1>
      <h3 className="mt-3">Nom : {recipe && recipe.title}</h3>
      <p>Les ingrediants de cette recette :</p>
      <ul>
        {recipe && recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <Link to={"/"}>Retourner a la page principale.</Link>
    </main>
  );
};
export default DetailsPage;
