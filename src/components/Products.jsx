import { products as prod } from "../data/products.js"
import Card from "./Card.jsx";
import {useReducer, useState} from "react";
import AddProduct from "./AddProduct.jsx";
import {useProductStore} from "../stores/useProductStore.js";
import {useAtom} from "jotai";
import {productAtom} from "../atoms/productAtom.js";
// import {useProductState} from "../hooks/useProductState.js";

const initialState =
    {
        price: 25,
        name: "Folding chair"
    };


const reducer = (state, action) => {
    switch (action.type) {
        case "increase_price":
            return {...state, price: state.price + 1}
        case "decrease_price":
            return {...state, price: state.price - 1}
        default:
            return state;
    }
}


const Products = ({addToCart}) => {

    const [products, setProducts] = useState(prod);

    const [ stateValue1, actionToChangeState] = useState();
    const [stateValue2, dispatch] = useReducer(reducer, initialState);

    const products2 = useProductStore(state => state.products);
    const addProduct = useProductStore(state => state.addProduct);
    addProduct({ id: 1});
    const [productsAtom, setProductsAtom] = useAtom(productAtom);
    // const productList = useProductState();

    const deleteProduct = (name) => {
        const reducedProducts = productsAtom.filter(
            (product) => product.name !== name
        );
        setProductsAtom(reducedProducts);
    }
    return (

    <>
        <div id="site-products">
            <h1>Products</h1>
            <h2>{stateValue2.price}</h2>
            <button className="bg-green-700 text-white text-2xl" onClick={() => dispatch({ type: "increase_price"})}>Increase</button>
            <button className="bg-yellow-700 text-white text-2xl" onClick={() => dispatch({ type: "decrease_price"})}>Decrease</button>
            <button onClick={() => console.log(products)}>Console log</button>
            <AddProduct products={products} setProducts={setProducts} />
            <div className="grid grid-cols-5">
                {productsAtom?.map(product => <Card deleteProduct={deleteProduct} product={product} addToCart={addToCart}/>)}
            </div>
        </div>
    </>
    );
};

export default Products;