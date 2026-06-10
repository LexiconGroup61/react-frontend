import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

export const useProductStore = create()(
    persist(
        (set) => ({
            products: [],
            changed: "",
            addProduct: (newProduct) => set((state) => [...state.products, newProduct])})
        ,
        { name: "product-store" })
)

const tempFunction = () => {
    return () => "function";
}

const result = tempFunction() // result = () => "function";
const resultVers = tempFunction()() // resultVers = "function";