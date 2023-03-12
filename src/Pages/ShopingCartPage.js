import React from 'react';
import { useSelector } from 'react-redux';
import BillDetails from '../Componets/BillDetails';
import ShoppingCartItem from '../Componets/ShoppingCartItem';

const ShoppingCartPage = () => {
    const cartProducts = useSelector((state) => state.shoppingCart)
    return (
        <div class="py-16">

            <div class="container 2xl:px-8 px-2 mx-auto">
                <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div class="cartListContainer">
                    <div class="space-y-6">
                        {/* <!-- Cart Item --> */}
                        {cartProducts?.map((cartProduct) =>
                            <ShoppingCartItem key={cartProduct.id} cartProduct={cartProduct} />
                        )}
                        {/* <!-- Cart Items Ends --> */}

                    </div>

                    {/* <!-- Bill Details --> */}
                    <BillDetails />
                </div>
            </div>

        </div>
    );
};

export default ShoppingCartPage;