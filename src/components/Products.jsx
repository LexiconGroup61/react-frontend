import { products as prod } from "../data/products.js"
import Card from "./Card.jsx";
import {useState} from "react";
import AddProduct from "./AddProduct.jsx";
const Products = ({addToCart}) => {

    const [products, setProducts] = useState(prod);

    const deleteProduct = (name) => {
        const reducedProducts = products.filter(
            (product) => product.name !== name
        );
        setProducts(reducedProducts);
    }
    return (

    <>
        <div id="site-products">
            <h1>Products</h1>
            <AddProduct products={products} setProducts={setProducts} />
            <div className="grid grid-cols-5">
                {products.map(product => <Card deleteProduct={deleteProduct} product={product} addToCart={addToCart}/>)}
            </div>
        </div>
    </>
    );
};

export default Products;