import React, {useState} from 'react';
import {Outlet} from "react-router";
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

const Reference = () => {
    const [switcher, setSwitcher] = useState(1);
    const [shoppingCart, setShoppingCart] = useState(0);
    const [date, setDate] = useState(1);


    const addToCart = (id) => {
        setShoppingCart( shoppingCart + id )
    }


    return (
        <>
            <ProductContext value={{date, setDate}}>
                <HeaderReference
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
                <div id="site-main">
                    <Outlet />
                </div>

                <Footer />
            </ProductContext>
        </>
    );
};

export default Reference;