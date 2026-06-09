import {atom} from "jotai";
import { products } from "../data/products.js";
import {atomWithStorage} from "jotai/utils";

export const productAtom = atomWithStorage("product-atom", products);