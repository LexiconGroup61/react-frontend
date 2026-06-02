import Header from "./Header.jsx";

const ShoppingCart = ({cart}) => {
    return (
        <>
            <div>
                <h2>Cart <span>{cart}</span></h2>
            </div>
        </>

    );
};

export default ShoppingCart;