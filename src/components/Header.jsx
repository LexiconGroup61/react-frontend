import ShoppingCart from "./ShoppingCart.jsx";


function Header ({logo, switching, search, cart}) {

    return (
        <div id="site-header" className="flex">
            <p>{logo}</p>
            <nav>

                <ul>
                    <li onClick={() => switching(1)}>About</li>
                    <li onClick={() => switching(2)}>Book search</li>
                    <li onClick={() => switching(3)}>Products</li>
                </ul>
                <input onClick={(choice) => search(choice)}/>
            </nav>
            <ShoppingCart cart={cart}/>
        </div>
    )
}

export default Header;