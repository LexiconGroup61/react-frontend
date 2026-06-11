import { create } from "zustand";
import { products  } from "../data/products.js"
import {createJSONStorage, persist} from "zustand/middleware";

export const useProductStore = create()(
    persist(
        (set) => ({
            products: products,
            changed: "",
            addProduct: (newProduct) => set((state) => [...state.products, newProduct]),
            restoreProducts: () => set((state) => state.products = products),
            deleteProduct: (name) => set((state) => [ ...state.products.filter(
                (product) => product.name !== name)])

        })

        ,
        { name: "product-store" })
)
