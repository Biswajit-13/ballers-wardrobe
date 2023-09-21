import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { BsArrowRight, BsCurrencyRupee, BsInfoCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { showErrorToast, showSuccessToast } from './toast';

const ItemCard = ({ kit }) => {
    const [selectedColor, setSelectedColor] = useState('home'); // Default to 'home'
    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const [user, setUser] = useAuthState(auth);

const handleaddtoWishList = async()=>{
    const item = {
        id:kit.id,
        title:kit.title,
        price:kit.price,
        rating:kit.rating,
        description:kit.description,
        color:kit.color,
        kitImage: kit.kitImage,
        size:kit.size,
        userId:user?.uid,
    }
    console.log(item);
    try {
        await fetch('http://localhost:4000/wishlist/add-to-wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
               item, userId:user?.uid, id:kit.id
            }),
        })
        showSuccessToast("added to wish list")
    }
    catch (error) {
       showErrorToast('something went wrong')
    }
}

    return (

        <div className="bg-white rounded-lg shadow-md p-4 m-4 hover:shadow-lg transition-transform transform ease-in-out hover:scale-105">
            <div className="relative">
                <img
                    src={kit.kitImage[selectedColor]}
                    alt={kit.title}
                    className="object-cover w-full h-48 rounded-t-lg"
                />
                <div className="absolute top-2 right-2">
                    <AiOutlineHeart 
                    onClick={handleaddtoWishList}
                    className="text-subhd hover:text-red-500 cursor-pointer" />
                </div>
            </div>
            <div className="mt-2">
                <p className="text-hd font-semibold">{kit.title}</p>
                <p className="text-txt font-semibold mt-1 flex items-center"><BsCurrencyRupee /> {kit.price}</p>
            </div>
            <div className="mt-3">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        {Object.keys(kit.color).map((color) => (
                            <div
                                key={color}
                                className={`h-6 w-6 rounded-full border-2 border-gray-200 hover:border-gray-400 hover:cursor-pointer mr-2 ${color === selectedColor ? 'bg-gray-400 border-gray-400' : ''
                                    }`}
                                style={{ backgroundColor: kit.color[color] }}
                                onClick={() => handleColorClick(color)}
                            ></div>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <AiOutlineStar className="text-subhd" />
                        <p className="text-subhd ml-1 text-sm">{kit.rating}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <Link
                        to={`product/${encodeURIComponent(kit.title)}`}
                        state={{ kit }}
                        className="text-hd font-semibold mt-2 flex hover:underline hover:text-act"
                    >

                        <span className="text-xs">View Deals</span>
                        <BsArrowRight className="text-sm ml-1" />

                    </Link>
                    <div className="flex items-center text-subhd text-xs">
                        <BsInfoCircle className="mr-1" />
                        <p>Available</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ItemCard;
