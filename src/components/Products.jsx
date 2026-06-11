
import Card from "./Card.jsx";
import AddProduct from "./AddProduct.jsx";
import {useProductStore} from "../stores/useProductStore.js";


const Products = ({addToCart}) => {

    const products = useProductStore((state) => state.products);
    const addProduct = useProductStore(state => state.addProduct);
    const deleteProduct = useProductStore((state) => state.deleteProduct)

    return (
        <>
            <div id="site-products">
                <h1>Products</h1>
                <AddProduct products={products} setProducts={addProduct} />
                <div className="grid grid-cols-5">
                    {products?.map(product => <Card deleteProduct={deleteProduct} product={product} addToCart={addToCart}/>)}
                </div>
            </div>
        </>
    );
};

export default Products;