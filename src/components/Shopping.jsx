
import {Outlet} from "react-router";
import {useState} from "react";
import {ProductContext} from "@/contexts/ProductContext.jsx";
import HeaderReference from "@/components/HeaderReference.jsx";
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.jsx";
import {Button} from "@/components/ui/button.jsx";
import Footer from "@/components/Footer.jsx";
import HeaderShopping from "@/components/HeaderShopping.jsx";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Shopping = () => {
    gsap.registerPlugin(useGSAP);

    const [switcher, setSwitcher] = useState(1);
    const [shoppingCart, setShoppingCart] = useState(0);
    const [date, setDate] = useState(1);

    const headline = useRef();

    useGSAP(() => {
        gsap.to(headline.current, {
            x: 50
        })
    }, [])


    const addToCart = (id) => {
        setShoppingCart( shoppingCart + id )
    }


    return (
        <>
            <ProductContext value={{date, setDate}}>
                <HeaderShopping
                    logo = "Library"
                    cart = {shoppingCart}
                />
                <Drawer direction="right">
                    <DrawerTrigger>Open</DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                            <DrawerDescription>This action cannot be undone.</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                <div id="site-main" >
                    <h1 ref={headline}>Shopping</h1>
                    <h2>Many things to buy</h2>
                    <Outlet />
                </div>

                <Footer />
            </ProductContext>
        </>
    );
};

export default Shopping;