import React, { useState,useEffect } from 'react';
import { BsSave } from 'react-icons/bs';
import AuthMiddleware from './authMiddleware';
import Layout from './components/layout';

const AddBilling = () => {
    const { user, loading } = AuthMiddleware();
    const [formData, setFormData] = useState({
        userId: user?.uid,
        billingName: '',
        billingCountry: '',
        billingAddress: '',
        billingCity: '',
        billingState: '',
        billingPostalCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async () => {
        console.log(formData);
        try {
            await fetch('http://localhost:4000/billing/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    userId:user?.uid,
                    billingName:formData.billingName,
                    billingCountry:formData.billingCountry,
                    billingAddress:formData.billingAddress,
                    billingCity:formData.billingCity,
                    billingState:formData.billingState,
                    billingPostalCode:formData.billingPostalCode,
                }),
            })
        }
        catch (error) {
            console.error('')
        }
    }
    return (
        <Layout>
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen">
            <form>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mt-4">
                        <label className="block text-subhd text-sm font-semibold mb-2">Billing Name</label>
                        <input
                            value={formData.billingName}
                            onChange={handleChange}
                            name="billingName"
                            className="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mt-4">
                        <label className="block text-subhd text-sm font-semibold mb-2">Billing Country</label>
                        <input
                            value={formData.billingCountry}
                            onChange={handleChange}
                            name="billingCountry"
                            className="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="text"
                        />
                    </div>
                    <div className="w-full px-2 mt-4">
                        <label className="block text-subhd text-sm font-semibold mb-2">Billing Address</label>
                        <input
                            value={formData.billingAddress}
                            onChange={handleChange}
                            name="billingAddress"
                            className="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mt-4">
                        <label className="block text-subhd text-sm font-semibold mb-2">Billing City</label>
                        <input
                            value={formData.billingCity}
                            onChange={handleChange}
                            name="billingCity"
                            className="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mt-4">
                        <label className="block text-subhd text-sm font-semibold mb-2">Billing State</label>
                        <input
                            value={formData.billingState}
                            onChange={handleChange}
                            name="billingState"
                            className="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mt-4">
                        <label className="block text-subhd text-sm font-semibold mb-2">Billing Postal Code</label>
                        <input
                            value={formData.billingPostalCode}
                            onChange={handleChange}
                            name="billingPostalCode"
                            className="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 py-9 items-center flex ">
                        <button type='button' onClick={handleSubmit}
                            className="mt-2 mr-4 flex h-[40px] w-3/4 items-center justify-center gap-5 rounded-md bg-hd hover:bg-act text-white">
                            <span className="ml-2 font-medium">save billing info</span>
                            <BsSave />
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </Layout>
    );
}

export default AddBilling;
