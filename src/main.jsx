import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Spread from "./components/Spread.jsx";
import BookSearch from "./components/BookSearch.jsx";
import Products from "./components/Products.jsx";
import AddProduct from "./components/AddProduct.jsx";
import Shopping from "@/components/Shopping.jsx";
import Reference from "@/components/Reference.jsx";
import Kanban from "@/components/Kanban.jsx";
import Table from "@/components/Table.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/kanban",
        Component: Kanban,
    },
    {
        path: "/table",
        Component: Table
    },
    {
        path: "/reference",
        Component: Reference,
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

        ]
    },
    {
        path: "/shopping",
        Component: Shopping,
        children: [
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
