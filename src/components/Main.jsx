
import Products from "./Products.jsx";
import BookSearch from "./BookSearch.jsx";
import Spread from "./Spread.jsx";

const Main = ({switcher, addToCart}) => {
    return (
        <div id="site-main">
            { switcher === 1 ? <Spread/> : switcher === 2 ? <BookSearch/> : <Products addToCart={addToCart} /> }
        </div>
    );
};

export default Main;