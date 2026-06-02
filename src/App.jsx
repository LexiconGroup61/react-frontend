
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import Main from "./components/Main.jsx";
import {Outlet} from "react-router";

function App() {
    const [switcher, setSwitcher] = useState(1);
    const [shoppingCart, setShoppingCart] = useState(0);

    const addToCart = (id) => {
        setShoppingCart( shoppingCart + id )
    }

  return (
    <>
        <Header
            logo = "Library"
            cart = {shoppingCart}
        />
        <div id="site-main">
            <Outlet />
        </div>
        <div className="relative">
        <p className="xl:text-slate-500 text-orange-600 sm:font-bold text-3xl">Test text</p>
        <p className="text-slate-500 font-bold text-xl underline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab cupiditate dolorum error eveniet libero magni numquam, qui quia temporibus! Aliquam amet, veritatis?</p>
        </div>
            <Footer />
    </>
  )
}

export default App
