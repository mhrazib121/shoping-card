import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementStock, incrementStock } from '../Redux/AddProduct/action';
import { decrement, deleted, increment } from '../Redux/Shopping/action';

const ShoppingCartItem = ({ cartProduct }) => {
    const stockProducts = useSelector((state) => state.products);
    const dispatch = useDispatch();


    const remainingStockHandler = useCallback((id) => {
        return stockProducts.filter((p) => p.id === id)
    }, [stockProducts])

    const incrementHandler = (product) => {
        const remainingStock = remainingStockHandler(product.id);
        if (remainingStock[0].quantity > 0) {
            dispatch(increment(product.id))
            dispatch(decrementStock(product.id));
        }
    };
    const decrementHandler = (product) => {
        if (product.quantity > 0) {
            dispatch(decrement(product.id))
            dispatch(incrementStock(product.id, 1));
        }
    };

    const deleteHandler = (product) => {
        dispatch(incrementStock(product.id, product.quantity));
        dispatch(deleted(cartProduct.id));

    };

    return (
        <div class="cartCard">
            <div class="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img class="lws-cartImage" src={cartProduct.imgUrl} alt="product" />
                {/* <!-- cart item info --> */}
                <div class="space-y-2">
                    <h4 class="lws-cartName">{cartProduct.name}</h4>
                    <p class="lws-cartCategory">{cartProduct.category}</p>
                    <p>BDT <span class="lws-cartPrice">{cartProduct.price}</span></p>
                </div>
            </div>
            <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div class="flex items-center space-x-4">
                    <button class="lws-incrementQuantity" onClick={() => incrementHandler(cartProduct)} >
                        <i class="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span class="lws-cartQuantity">{cartProduct.quantity}</span>
                    <button class="lws-decrementQuantity"
                        onClick={() => decrementHandler(cartProduct)}
                    >
                        <i class="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>
                {/* <!-- price --> */}
                <p class="text-lg font-bold">BDT <span class="lws-calculatedPrice">{cartProduct.quantity * cartProduct.price}</span></p>
            </div>
            {/* <!-- delete button --> */}
            <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button
                    onClick={() => deleteHandler(cartProduct)}
                    class="lws-removeFromCart">
                    <i class="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartItem;