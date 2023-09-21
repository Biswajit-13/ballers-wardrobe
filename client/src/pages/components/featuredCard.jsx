import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({kit}) => {

    return (
        <div  className="border rounded-lg mb-5 p-4 shadow-md flex flex-col md:flex-row gap-5 bg-white items-center">
        <img
            src={kit.kitImage['home']}
            alt={`Slide ${kit.id}`}
            className="w-72 h-auto rounded-md"
        />
        <div className='flex flex-col justify-center'>
            <h1 className="text-xl font-semibold mt-4 text-hd">{kit.title}</h1>
            <p className="text-lg font-semibold text-txt mt-2">$ {kit.price}</p>
            <p className="text-txt opacity-70 mt-2">{kit.description}</p>
            <Link
            to={`product/${encodeURIComponent(kit.title)}`}
            state={{ kit }}
            className="text-white mt-2 hover:bg-act bg-hd items-center justify-center font-medium rounded-md flex h-10 hover:underline"
          >
            View Deals
          </Link>
          
        </div>
    </div>
    );
}

export default FeaturedCard;
