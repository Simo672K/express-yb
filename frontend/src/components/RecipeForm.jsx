import axios from "axios";
import { useForm } from "react-hook-form";
import config from "../conf/config";

const RecipeForm = ({ uiUpdater }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(config.baseUrl, data)
      .then((p) => {
        console.log();
        uiUpdater((prev) => [...prev, p.data]);
        reset();
      })
      .catch((e) => console.error(e));
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ marginBottom: 50 }}
    >
      <textarea
        className="form-control"
        type="text"
        {...register("newRecipe", { required: true })}
        placeholder="recette"
      />
      <button className="btn btn-primary mt-2 ms-auto">Add recipe</button>
    </form>
  );
};
export default RecipeForm;
