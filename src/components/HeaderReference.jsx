import ShoppingCart from "./ShoppingCart.jsx";
import { NavLink} from "react-router";


function HeaderReference ({logo, cart}) {

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
                </ul>
            </nav>
        </div>
    )
}

export default HeaderReference;