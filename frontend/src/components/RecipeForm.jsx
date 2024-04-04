import { useForm } from "react-hook-form";

const RecipeForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
