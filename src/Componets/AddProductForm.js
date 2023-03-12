import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/AddProduct/action';

const AddProductForm = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [url, setUrl] = useState("");
    const [price, setPrice] = useState(Number);
    const [quantity, setQuantity] = useState(Number);

    const dispatch = useDispatch();

    const addProductHandler = (e) => {
        e.preventDefault();

        dispatch(addProduct({
            name,
            category,
            imgUrl: url,
            price,
            quantity,
        }))
        // From reset
        setName("");
        setCategory("");
        setUrl("");
        setPrice("");
        setQuantity("");
    };

    return (
        <div class="formContainer">
            <h4 class="formTitle">Add New Product</h4>
            <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                {/* <!-- product name --> */}
                <div class="space-y-2">
                    <label for="lws-inputName">Product Name</label>
                    <input class="addProductInput" id="lws-inputName" type="text" required
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                {/* <!-- product category --> */}
                <div class="space-y-2">
                    <label for="lws-inputCategory">Category</label>
                    <input class="addProductInput" id="lws-inputCategory" type="text" required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} />
                </div>
                {/* <!-- product image url --> */}
                <div class="space-y-2">
                    <label for="lws-inputImage">Image Url</label>
                    <input class="addProductInput" id="lws-inputImage" type="text" required
                        value={url}
                        onChange={(e) => setUrl(e.target.value)} />
                </div>
                {/* <!-- price & quantity container --> */}
                <div class="grid grid-cols-2 gap-8 pb-4">
                    {/* <!-- price --> */}
                    <div class="space-y-2">
                        <label for="ws-inputPrice">Price</label>
                        <input class="addProductInput" type="number" id="lws-inputPrice" required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    {/* <!-- quantity --> */}
                    <div class="space-y-2">
                        <label for="lws-inputQuantity">Quantity</label>
                        <input class="addProductInput" type="number" id="lws-inputQuantity" required
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                </div>
                {/* <!-- submit button --> */}
                <button type="submit" id="lws-inputSubmit" class="submit" onClick={addProductHandler}>Add Product</button>
            </form>
        </div>
    );
};

export default AddProductForm;