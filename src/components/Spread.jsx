import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import shoppingCart from "./ShoppingCart.jsx";
import {Outlet} from "react-router";

const Spread = () => {

    const testSpread = () => {
        const areas = ["Kitchen", "Hall", "Cellar"];
        const areasCopy = [...areas];  // areas[0],areas[1],areas[2]
        areas[0] = "Patio";
        console.log(areasCopy[0]);
    }

    const testSpread2 = () => {
        const areas = {first: "Kitchen", second: "Hall", third: "Cellar"};
        const areasCopy = {...areas};
        areas.first = "Patio";
        console.log(areasCopy.first);
    }

    const testSpread3 = () => {
        const areas = "Kitchen";
        const areasCopy = {...areas};
        console.log(areasCopy);
    }

    const testSpread4 = (a, b, c) => {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    const testSpread5 = () => {
        const areas = {first: "Kitchen", second: "Hall", third: "Cellar"};
        const areasCopy1 = {...areas, third: "Bedroom"};
        const areasCopy2 = {...areas};
        areasCopy2.third = "Bedroom";

        console.log(areasCopy1);
    }

    const data = [12, 34, 81];



    return (
        <>
            <div>
                <button onClick={testSpread5}>Spread test</button>
                <Outlet />
            </div>
        </>
    );
};

export default Spread;