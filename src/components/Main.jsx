
import About from "./About.jsx";
import Products from "./Products.jsx";
import BookSearch from "./BookSearch.jsx";

const Main = ({switcher, addToCart}) => {
    return (
        <div id="site-main">
            { switcher === 1 ? <About/> : switcher === 2 ? <BookSearch/> : <Products addToCart={addToCart} /> }
        </div>
    );
};

export default Main;