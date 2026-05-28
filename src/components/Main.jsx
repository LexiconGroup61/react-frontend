
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Products from "./Products.jsx";

const Main = ({switcher, addToCart}) => {
    return (
        <div id="site-main">
            { switcher === 1 ? <About/> : switcher === 2 ? <Contact/> : <Products addToCart={addToCart} /> }
        </div>
    );
};

export default Main;