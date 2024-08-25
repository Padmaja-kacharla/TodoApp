import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import categories from "./Category";
const schema = z.object({
  Name: z.string().min(3).max(20),
  Price: z.number().min(3).max(100000),
  category: z.enum(categories),
});
type formativeData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: formativeData) => void;
}

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<formativeData>({ resolver: zodResolver(schema) });

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
          })}
        >
          <div className="mb-3">
            <label htmlFor="name" className="label-form">
              Name
            </label>
            <input
              {...register("Name")}
              id="name"
              type="name"
              className="form-control"
            />
            {errors.Name && (
              <p className="text-danger">{errors.Name.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="label-form">
              Price
            </label>
            <input
              {...register("Price", { valueAsNumber: true })}
              id="number"
              type="number"
              className="form-control"
            />
            {errors.Price && (
              <p className="text-danger">{errors.Price.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="label-form">
              categories
            </label>
            <select {...register("category")} className="form-select">
              <option value="">AllCategories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
