import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Spread from "./components/Spread.jsx";
import BookSearch from "./components/BookSearch.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Products from "./components/Products.jsx";
import AddProduct from "./components/AddProduct.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "spread",
                Component: Spread,
                children: [
                    {
                        path: "booksearch",
                        Component: BookSearch
                    }
                ]
            },
            {
                path: "booksearch",
                Component: BookSearch
            },
            {
                path: "products",
                Component: Products
            },
            {
                path: "addproduct",
                Component: AddProduct
            }

        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
