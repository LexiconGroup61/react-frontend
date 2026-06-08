import {useState} from "react";
import {products} from "../data/products.js";

export function useProductState () {
    const [product, setProduct] = useState(products);

    return product;
}