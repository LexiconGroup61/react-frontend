
import './App.css'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import {useState} from "react";

function App() {
    const [switcher, setSwitcher] = useState(1);

  return (
    <>
        <Header switch={setSwitcher} />
        { switcher === 1 ? <About/> : <Contact/> }
        <Footer />
    </>
  )
}

export default App
