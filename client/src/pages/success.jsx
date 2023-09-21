import React from 'react';
import { Link } from "react-router-dom"
const Success = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <h1 className='items-center flex justify-center text-hd'>Payment Successfull! Thank you xoxo
            </h1>
            <button>
                <Link to="/orders">
                    track your orders here
                </Link>
            </button>

        </div>
    );
}

export default Success;
