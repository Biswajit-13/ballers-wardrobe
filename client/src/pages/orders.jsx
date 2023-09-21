import React, { useEffect, useState } from 'react';
import Layout from './components/layout';
import AuthMiddleware from './authMiddleware';

const Orders = () => {
    const { user, loading } = AuthMiddleware();
    const [orderDetails, setOrderDetails] = useState([]);
    const fetchOrderData = async () => {
        try {
            const userId = user?.uid;
            const response = await fetch(`http://localhost:4000/order/get-order?userId=${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {

                const data = await response.json();
                console.log(data.orderItems)
                setOrderDetails(data.orderItems)
            } else {

            }
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };
    useEffect(() => {
        if (user) {
            fetchOrderData();
        }

    }, [user]);

    return (
        <Layout>
            <div className='min-h-screen'>
            {orderDetails.length === 0 && <h1 className='text-subhd'>no orders yet</h1>}
                {orderDetails?.map((order) => (
                    <div key={order.id} className="bg-white shadow-lg rounded-lg p-4 m-4">
                        <div className="flex">
                            <img src={order.kitImage} alt={order.name} className="w-22 h-24 rounded-md mr-4 object-cover" />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="text-sm font-semibold text-hd">{order.name}</div>
                                    <div className="text-xs text-txt flex items-center"><p className='text-subhd mr-1'>Color:</p>{order.color}</div>
                                    <div className="text-xs text-txt flex items-center"><p className='text-subhd mr-1'>Size:</p>{order.size}</div>
                                </div>
                                <div className="text-xs text-txt flex items-center"><p className='text-subhd mr-1'>Quantity:</p>{order.quantity}</div>
                                <div className="text-xs text-txt flex items-center"><p className='text-subhd mr-1 font-semibold'>Price:</p>{order.cost}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>

    );
}

export default Orders;
