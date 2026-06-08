import { useForm } from "react-hook-form";
import {number, object, string } from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRef} from "react";

const AddProduct = ({products, setProducts}) => {

    const productId = useRef(21);
    const componentRef = useRef();

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

    const handleFocus = () => {
        componentRef.current.focus();
    }

    const onSubmit = (data) => {
        const newProducts = [
            ...products,
            {...data, id: productId.current}
        ];
        productId.current = productId.current + 1;

        setProducts(newProducts);
    }
    
    return (
        <div className="bg-slate-200 p-5">
            {/* eslint-disable-next-line react-hooks/refs */}
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
                    <input ref={componentRef} className="border m-1" type="text" {...register("src")} />
                </div>
                <button onClick={handleFocus}>Focus image source</button>
                <input type="submit" value="Register new product"/>
            </form>
            
        </div>
    );
};

export default AddProduct;