import React from 'react';
import { useSelector } from 'react-redux';
import Logo from "../Asset/images/logo.png";

const Navbar = (props) => {
    const cartProducts = useSelector(state => state.shoppingCart);
    const addedToCartQnt = cartProducts.reduce((init, product) => init + product.quantity, 0)
    return (
        <nav class="bg-[#171C2A] py-4">
            <div class="navBar">
                <a href="index.html">
                    <img src={Logo} alt="LWS" class="max-w-[140px]" />
                </a>

                <div class="flex gap-4">
                    <a href="#home" class="navHome" id="lws-home" onClick={() => props.setIsHome(true)}> Home </a>
                    <a href="#cart" onClick={() => props.setIsHome(false)} class="navCart" id="lws-cart">
                        <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">{addedToCartQnt}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;