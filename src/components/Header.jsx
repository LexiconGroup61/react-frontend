import ShoppingCart from "./ShoppingCart.jsx";
import {Link, NavLink} from "react-router";


function Header ({logo, cart}) {

    return (
        <div id="site-header" className="flex">
            <p>{logo}</p>
            <nav>

                <ul>
                    <li>
                        <NavLink to="/spread">Spread</NavLink>
                    </li>
                    <li>
                        <NavLink to="/booksearch">Book search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
            <ShoppingCart cart={cart}/>
        </div>
    )
}

export default Header;