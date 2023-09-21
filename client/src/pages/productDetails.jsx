import React, { useEffect, useState } from 'react';

import Reviews from './components/reviews';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useCart } from "../cartContext";
import AuthMiddleware from './authMiddleware';
import Layout from './components/layout';
import { showErrorToast,showSuccessToast } from './components/toast';
const ProductDetails = () => {

    const location = useLocation();
    const kit = location.state ? location.state.kit : null;
    console.log(kit)
    if (!kit) {
        return <div>Kit not found.</div>;
    }
    const [selectedColor, setSelectedColor] = useState('home');
    const [selectedSize, setSelectedSize] = useState('small');
    const [count, setCount] = useState(1);
    const handleColorClick = (color) => {
        setSelectedColor(color);
    };
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    }
    const { addToCart } = useCart();
    const { user, loading } = AuthMiddleware();


    const handleAddToCart = async () => {
        // Create a new object with the desired properties
        const cartItem = {
            id: kit.id,           // Assuming kit has an id property
            title: kit.title,
            kitImage: kit.kitImage[selectedColor], // Replace with the actual property name
            color: selectedColor,
            count: count,
            size: selectedSize,
            price: kit.price,
            userId: user?.uid,
        };

        // Add the cartItem to the cart
        if (user) {
            addToCart(cartItem);
            try {
                await fetch('http://localhost:4000/cart/add-to-cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: cartItem.id,
                        title: cartItem.title,
                        kitImage: cartItem.kitImage,
                        color: cartItem.color,
                        count: cartItem.count,
                        size: cartItem.size,
                        price: cartItem.price,
                        userId: cartItem.userId,
                    }),
                    
                });
                showSuccessToast('item added to cart')
            } catch (error) {
                console.error('Error adding item to cart:', error);
            }
        }
        else showErrorToast('You must login first')
    };


    return (
        <Layout>
            <div className='min-h-screen'>
                <div class="pt-5 md:flex">
                    <div class="md:w-1/2">
                        <div class="container p-4">
                            <div class="flex py-2">

                                <img
                                    src={kit.kitImage[selectedColor]}
                                    class="w-full h-96 rounded-[20px] object-cover" />

                            </div>

                            <div class="flex justify-between mt-5 gap-2">
                                <div class="mt-2 flex  items-center justify-end gap-2">
                                    <button
                                        onClick={() => {
                                            if (count > 1) setCount(count - 1)
                                        }}
                                        class="flex h-[20px] w-[50px] items-center justify-center border border-txt text-center text-[18px] font-medium">-</button>
                                    <p class="text-[16px] font-semibold text-txt">{count}</p>
                                    <button
                                        onClick={() => setCount(count + 1)}
                                        class="flex h-[20px] w-[50px] items-center justify-center border border-txt text-[18px] font-medium">+</button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    class="bg-hd text-white font-semibold py-2 md:span-2 px-2 rounded hover:bg-act flex justify-center gap-2 w-1/2 items-center">
                                    <span><BsCart /></span>
                                    <span class="ml-2 text-md">add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="container p-4">
                            <h1 class="text-[30px] font-bold text-hd">{kit.title}</h1>
                            <h2 class="text-[22px] font-semibold mt-1 text-txt">$ {kit.price}</h2>
                            <div class="flex justify-between w-[150px] mt-5">
                                <h3 class="text-[14px] font-medium text-subhd">description</h3>
                                <h3 class="text-[14px] font-medium text-subhd opacity-70">features</h3>
                            </div>
                            <p class="text-[18px] mt-1 font-medium lg:pr-10 md:pr-5 opacity-70  text-txt">
                                {kit.description}
                            </p>
                            <h2 class="text-[18px] mt-2 font-semibold text-subhd">pitch</h2>

                            <div className="flex gap-5 mt-2">
                                {Object.keys(kit.color).map((color) => (
                                    <div
                                        key={color}
                                        className={`h-7 w-7 rounded-full border-2 border-gray-200 hover:border-hd hover:cursor-pointer mr-2 ${color === selectedColor ? 'bg-gray-400 border-hd' : ''
                                            }`}
                                        style={{ backgroundColor: kit.color[color] }}
                                        onClick={() => handleColorClick(color)}
                                    ></div>
                                ))}
                            </div>
                            <h2 class="text-[18px] mt-2 font-semibold text-subhd">size</h2>
                            <div class="flex justify-between mt-2 pr-14">
                                {Object.keys(kit.size).map((size) => (
                                    <div key={size}
                                        onClick={
                                            () => handleSizeClick(size)
                                        }
                                        className={`h-7 w-20 border-2 items-center flex justify-center border-gray-200 hover:border-hd hover:cursor-pointer mr-2 ${size === selectedSize ? 'bg-gray-400 border-hd' : ''
                                            }`}>
                                        <p class="flex items-center text-sm font-medium text-txt">{kit.size[size]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <Reviews />
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetails;
