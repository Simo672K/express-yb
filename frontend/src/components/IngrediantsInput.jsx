import { BsTrash } from "react-icons/bs";

const IngrediantsInput = ({ register, remove, index }) => {
  return (
    <div className="input-group mt-2">
      <input
        type="text"
        className="form-control"
        placeholder="Ajouter un nouveau ingredient"
        {...register(`ingredients.${index}`, { required: true })}
      />
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => remove(index)}
      >
        <BsTrash />
      </button>
    </div>
  );
};
export default IngrediantsInput;
