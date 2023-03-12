import React from 'react';
import { useSelector } from 'react-redux';
import AddProductForm from '../Componets/AddProductForm';
import ProductCard from '../Componets/ProductCard';

const Home = () => {
    const products = useSelector((state) => state.products);

    return (
        <main class="py-16">
            <div class="productWrapper">
                {products.length < 1 ?
                    <p>No product found</p> :
                    <div class="productContainer" id="lws-productContainer">
                        {products.map(product => <ProductCard key={product.id} product={product} />)}
                    </div>
                }
                <div>
                    <AddProductForm />
                </div>
            </div>
        </main>
    );
};

export default Home;