import RecipeForm from "./RecipeForm";
import clsx from "clsx";

const NewRecipeModal = ({ open, setOpen, uiUpdate }) => {
  return (
    <div
      className={clsx("modal fade", open && "show")}
      style={{
        display: clsx(open && "block"),
        background: clsx(open && "rgba(50, 50, 50, .3)"),
      }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-header border-0">
            <h5 className="modal-title">Nouvelle Recette</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setOpen(false)}
            ></button>
          </div>
          <div className="modal-body">
            <RecipeForm setOpen={setOpen} uiUpdater={uiUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewRecipeModal;
