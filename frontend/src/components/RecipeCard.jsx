import { Link } from "react-router-dom";

const RecipeCard = ({ title, ingrediants, href }) => {
  return (
    <div className="card col-lg-4 col-md-2 col-12">
      <Link to={`/recipe/${href}`} className="text-decoration-none">
        <div className="card-body">
          <h2 className="card-title text-dark">{title}</h2>
          <div className="card-text">
            <p className="text-muted">Le contenue de la recette:</p>
            <ul className="list-group">
              {ingrediants.map((ing, i) => (
                <li key={i} className="list-group-item">
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default RecipeCard;
