import { useForm } from "react-hook-form";
import {number, object, string } from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const AddProduct = () => {

    const schema = object({
        name: string().required(),
        description: string().required(),
        price: number().positive().integer(),
        category: string(),
        src: string()
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <div className="bg-slate-200 p-5">
            <form className="flex flex-row" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                <label>Name:</label>
                <input className="border m-1" type="text" {...register("name")} />
                    <p>{errors.name?.message}</p>
                </div>
                <div className="flex flex-col">
                <label>Description:</label>
                <input className="border m-1" type="text" {...register("description", { required: true})} />
                {errors.description && <p>This field is required</p>}
                </div>
                    <div className="flex flex-col">
                        <label>Price:</label>
                <input className="border m-1" type="number" {...register("price", {min: 0})} />
                        {errors.price && <p>Price should be positive</p>}
                        <p>{errors.price?.message}</p>
                    </div>
                        <div className="flex flex-col">
                        <label>Category:</label>
                <select className="border m-1" {...register("category")}>
                    <option value="candy" />
                    <option value="fruit" />
                </select>
                        </div>
                            <div className="flex flex-col">
                            <label>Src:</label>
                <input className="border m-1" type="text" {...register("src")} />
                            </div>
                <input type="submit" value="Register new product"/>
            </form>
            
        </div>
    );
};

export default AddProduct;