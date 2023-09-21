import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import AuthMiddleware from './authMiddleware';
import Layout from './components/layout';
import { getAuth, signOut } from "firebase/auth";

const Dashboard = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut(auth)
            navigate("/");
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <Layout>
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link to="/orders" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h2 className="text-hd font-semibold mb-2">Orders</h2>
                            <p className="text-subhd text-sm">View and manage orders</p>
                        </Link>
                        <Link to="/billing" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h2 className="text-hd font-semibold mb-2">Billing</h2>
                            <p className="text-subhd text-sm">Manage billing information</p>
                        </Link>
                        <Link to="/wishlist" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h2 className="text-hd font-semibold mb-2">Wishlist</h2>
                        <p className="text-subhd text-sm">Manage the products you like</p>
                    </Link>
                        <button 
                        onClick={handleLogout}
                        className='bg-hd w-full h-10 text-white font-medium'>Logout</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
