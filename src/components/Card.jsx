import { FaCartArrowDown } from "react-icons/fa6";
import { FaDeleteLeft } from "react-icons/fa6";

const Card = ({product, addToCart, deleteProduct}) => {
    return (
        <div className="m-2 border-4 border-amber-600 rounded-4xl overflow-hidden">
            <img src={`/img/${product.src}`} alt={`${product.name}`} className="src"/>
            <div className="p-2">
                <h2>{product.name}</h2>
                <p className="leading-4 text-sm">{product.description}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <div className="w-100">
                <button onClick={() => {
                    console.log(`Add ${product.src.split('.')[0]} to cart`);
                    addToCart(parseInt(product.src.split('.')[0]));
                }} className="w-100 text-emerald-600 text-2xl font-bold flex flex-row text-right"
                >Add to cart <FaCartArrowDown className=" m-1"/></button>
                </div>
                <div>
                <button
                    className="text-red-500 text-xl"
                    onClick={() => {deleteProduct(product.name)}}
                ><FaDeleteLeft /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;