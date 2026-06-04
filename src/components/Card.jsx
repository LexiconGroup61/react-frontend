

const Card = ({product, addToCart, deleteProduct}) => {
    return (
        <div>
            <img src={`/img/${product.src}`} alt={`${product.name}`} className="src"/>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <button onClick={() => {
                console.log(`Add ${product.src.split('.')[0]} to cart`);
                addToCart(parseInt(product.src.split('.')[0]));
            }} className="bg-emerald-600 text-white">Add to cart</button>
            <button
                className="bg-red-500 text-white"
                onClick={() => {deleteProduct(product.name)}}
            >Delete</button>
        </div>
    );
};

export default Card;