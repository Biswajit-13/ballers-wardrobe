import React, { useEffect, useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import AuthMiddleware from './authMiddleware';
import loginIcon from "../../public/loginIcon.png"

const Login = () => {
    const navigate = useNavigate();
    const { user, loading } = AuthMiddleware();
    useEffect(() => {
        if (user) navigate("/")
    }, [user])

    if (user) navigate("/")
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLoginWithEmailAndPassword = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        const auth = getAuth();

        try {
            // Sign in with email and password
            await signInWithEmailAndPassword(auth, email, password);

            // Login successful, you can redirect the user to a different page or perform other actions.
            console.log('Login successful');
            navigate('/'); // Redirect to the home page after login
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleLoginWithGoogle = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        try {
            // Sign in with Google
            await signInWithPopup(auth, provider);

            // Login with Google successful, you can redirect the user to a different page or perform other actions.
            console.log('Login with Google successful');
            history.push('/'); // Redirect to the home page after login
        } catch (error) {
            console.error('Error logging in with Google:', error);
        }
    };
    return (
        <div class="py-16 min-h-screen">
            <div class="flex bg-bgrounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div class="hidden lg:block lg:w-1/2 bg-cover">
                    <img  src={loginIcon} />
                </div>
                <div class="w-full p-8 lg:w-1/2">
                    <h2 class="text-2xl font-semibold text-hd text-center">Brand</h2>
                    <p class="text-xl text-subhd text-center">Welcome back!</p>
                    <a href="#" class="flex items-center justify-center mt-4 rounded-lg shadow-md hover:bg-gray-100">
                        <div class="px-4 py-3 items-center flex justify-center">
                            <BsGoogle className='ml-10' />
                        </div>
                        <h1 class="px-4 py-3 w-5/6 text-center text-hd font-bold">Sign in with Google</h1>
                    </a>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" class="text-xs text-center text-txt opacity-50 uppercase">or login with email</a>
                        <span class="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div class="mt-4">
                        <label className="block text-subhd text-sm font-bold mb-2">Email Address</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="email"
                        />
                    </div>
                    <div class="mt-4">
                        <div class="flex justify-between">
                            <label class="block text-subhd text-sm font-bold mb-2">Password</label>
                            <a href="#" class="text-xs text-txt opacity-50">Forget Password?</a>
                        </div>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="bg-gray-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="password"
                        />
                    </div>
                    <div class="mt-8">
                        <button
                            onClick={handleLoginWithEmailAndPassword}
                            class="bg-hd text-white font-bold py-2 px-4 w-full rounded hover:bg-act">Login</button>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 md:w-1/4"></span>
                        <a href="/register" class="text-xs text-txt opacity-50 uppercase">or sign up</a>
                        <span class="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
