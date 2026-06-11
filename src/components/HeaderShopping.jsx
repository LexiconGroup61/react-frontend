import ShoppingCart from "./ShoppingCart.jsx";
import { NavLink} from "react-router";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import {useProductStore} from "@/stores/useProductStore.js";


function HeaderShopping ({logo, cart}) {

    const restore = useProductStore(state => state.restoreProducts);
    return (
        <div id="site-header" className="flex">
            <NavigationMenu>
              <NavigationMenuList>
                  <p>{logo}</p>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent><ul>
                      <li>
                          <NavLink to="/shopping/spread">Spread</NavLink>
                      </li>
                      <li>
                          <NavLink to="/shopping/products">Products</NavLink>
                      </li>
                  </ul></NavigationMenuContent>
                </NavigationMenuItem>
                  <button onClick={restore}>Restore products</button>
                  <ShoppingCart cart={cart}/>
              </NavigationMenuList>
            </NavigationMenu>


        </div>
    )
}

export default HeaderShopping;