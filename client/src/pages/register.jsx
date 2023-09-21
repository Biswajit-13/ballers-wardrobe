import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    getAuth,
    createUserWithEmailAndPassword, sendEmailVerification
} from "firebase/auth";
import AuthMiddleware from './authMiddleware';



function Register() {

    const navigate = useNavigate();

    const { user, loading } = AuthMiddleware();
    useEffect(() => {
        if (user) navigate("/")
    }, [user])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        pincode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;
        try {
            const auth = getAuth();
            // Create a new user with email and password
            await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(auth.currentUser);
            // Registration successful, you can redirect the user to a different page or perform other actions.
            console.log('Registration successful, verification mail sent');
            navigate("/verify")
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };



    return (
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen md:w-1/2">
            <h1 className="text-2xl font-semibold text-hd text-center mb-4">Registration</h1>
            <form onSubmit={handleSubmit}>
                <div class="mt-4">
                    <label
                        class="block text-subhd text-sm font-bold mb-2">Email Address</label>
                    <input
                        value={formData.email}
                        onChange={handleChange}
                        name='email'
                        class="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="email" />
                </div>
                <div className="mt-4">
                    <label htmlFor="password"
                        class="block text-subhd text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        class="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="confirmPassword"
                        class="block text-subhd text-sm font-bold mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        class="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="address"
                        class="block text-subhd text-sm font-bold mb-2"
                    >
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        class="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="pincode"
                        class="block text-subhd text-sm font-bold mb-2"
                    >
                        Pincode
                    </label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        class="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    />
                </div>
                <div class="mt-8">
                    <button
                        type="submit"
                        class="bg-hd text-white font-bold py-2 px-4 w-full rounded hover:bg-act">Register</button>
                </div>
            </form>
            <p className="mt-4 text-medium text-hd opacity-60">
                Already have an account?{' '}
                <Link to="/login" className="text-subhd font-medium">
                    Login here
                </Link>
            </p>
        </div>
    );
}

export default Register;
