import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import config from "../conf/config";
import { BsCheck, BsPlus, BsTrash, BsX } from "react-icons/bs";
import { useState } from "react";
import IngrediantsInput from "./IngrediantsInput";

const RecipeForm = ({ uiUpdater, setOpen }) => {
  const {
    register,
    control,
    formState: { errors, isDirty },
    reset,
    handleSubmit,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (data) => {
    if (!isDirty) {
      setOpen(false);
    }
    axios
      .post(config.baseUrl, data)
      .then((p) => {
        uiUpdater((prev) => [...prev, p.data]);
        reset();
      })
      .catch((e) => console.error(e));
  };

  return (
    <form className="form d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label htmlFor="title" className="form-label">
          Titre
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          {...register("title", { required: true })}
          placeholder="Titre de la recette"
        />
      </div>
      <div className="mb-2">
        <div className="d-flex align-items-center">
          <label htmlFor="title" className="form-label">
            Ingrédients
          </label>
          <button
            className="btn ms-auto"
            type="button"
            onClick={() => append()}
          >
            <BsPlus size={22} />
          </button>
        </div>

        {/* new ingrediant field */}
        {fields.map((item, index) => {
          return (
            <IngrediantsInput
              key={index}
              index={index}
              register={register}
              remove={remove}
            />
          );
        })}
      </div>
      <div className="d-flex">
        <button
          className="btn btn-danger mt-3 ms-auto"
          type="reset"
          onClick={() => {
            reset();
            setOpen(false);
          }}
        >
          <BsX size={22} /> Anuller
        </button>
        <button className="btn btn-success mt-3 ms-2">
          <BsCheck size={22} /> Ajouter
        </button>
      </div>
    </form>
  );
};
export default RecipeForm;
