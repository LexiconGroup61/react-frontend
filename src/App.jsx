
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

        <Footer />
    </>
  )
}

export default App
