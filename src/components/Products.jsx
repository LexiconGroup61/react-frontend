import { products} from "../data/products.js"
import Card from "./Card.jsx";
const Products = ({addToCart}) => {
    return (

    <>
        <div id="site-products">
            <h1>Products</h1>
            <div className="grid grid-cols-5">
                {products.map(product => <Card product={product} addToCart={addToCart}/>)}
            </div>
        </div>
    </>
    );
};

export default Products;