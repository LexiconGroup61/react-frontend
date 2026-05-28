
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import Main from "./components/Main.jsx";

function App() {
    const [switcher, setSwitcher] = useState(1);
    const [shoppingCart, setShoppingCart] = useState(0);

    const addToCart = (id) => {
        setShoppingCart( shoppingCart + id )
    }

  return (
    <>
        <Header
            switching = {setSwitcher}
            logo = "Library"
            search = {() => {}}
            cart = {shoppingCart}
        />
        <Main switcher={switcher} addToCart={addToCart}/>
        <div className="relative">
        <p className="xl:text-slate-500 text-orange-600 sm:font-bold text-3xl">Test text</p>
        <p className="text-slate-500 font-bold text-xl underline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab cupiditate dolorum error eveniet libero magni numquam, qui quia temporibus! Aliquam amet, veritatis?</p>
        </div>
            <Footer />
    </>
  )
}

export default App
