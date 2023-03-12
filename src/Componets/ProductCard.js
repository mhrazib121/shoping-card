import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddedToCart } from '../Redux/Shopping/action';
import { decrementStock } from '../Redux/AddProduct/action'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        if (product.quantity > 0) {
            dispatch(AddedToCart(product));
            dispatch(decrementStock(product.id));
        }
    }

    return (
        <div class="lws-productCard">
            <img class="lws-productImage" src={product.imgUrl} alt="product" />
            <div class="p-4 space-y-2">
                <h4 class="lws-productName">{product.name}</h4>
                <p class="lws-productCategory">{product.category}</p>
                <div class="flex items-center justify-between pb-2">
                    <p class="productPrice">BDT <span class="lws-price">{product.price}</span></p>
                    <p class="productQuantity">QTY <span class="lws-quantity">{product.quantity}</span></p>
                </div>
                <button
                    onClick={() => addToCartHandler(product)}
                    disabled={product.quantity === 0}
                    class="lws-btnAddToCart">Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;