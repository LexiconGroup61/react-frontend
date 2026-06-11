import HeaderReference from "./HeaderReference.jsx";
import {useContext} from "react";
import {ProductContext} from "@/contexts/ProductContext.jsx";

const ShoppingCart = ({cart}) => {

    const {date} = useContext(ProductContext)
    return (
        <>
            <div>
                <h2>Cart <span>{cart}</span></h2>
                <h3>{date}</h3>
            </div>
        </>

    );
};

export default ShoppingCart;