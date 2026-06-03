import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <div className="bg-slate-200 p-5">
            <form className="flex flex-row" onSubmit={handleSubmit(onSubmit)}>
                <input className="border m-1" type="text" {...register("name")} />
                <input className="border m-1" type="text" {...register("description")} />
                <input className="border m-1" type="number" {...register("price")} />
                <select className="border m-1" {...register("category")}>
                    <option value="candy" />
                    <option value="fruit" />
                </select>
                <input className="border m-1" type="text" {...register("src")} />
                <input type="submit" value="Register new product"/>
            </form>
            
        </div>
    );
};

export default AddProduct;