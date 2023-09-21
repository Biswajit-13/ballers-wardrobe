import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function VerificationMiddleware() {
    const [isVerified, setIsVerified] = useState(false);
      const navigate = useNavigate();
    useEffect(() => {
        const auth = getAuth();
   
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) {
                // User is logged in and email is verified, redirect to home page.
                setIsVerified(true);
                navigate('/');
            }
        });

        return () => {
            // Unsubscribe from the onAuthStateChanged observer when the component unmounts.
            unsubscribe();
        };
    }, [navigate]);

    return (
        <div className="max-w-screen-xl mx-auto p-4 text-center">
            <h1 className="text-2xl font-semibold text-hd mb-4">
                Verify Your Email
            </h1>
            {isVerified ? (
                <p className="text-subhd">
                    Your email has been verified. You can now access the home page.
                </p>
            ) : (
                <p className="text-subhd">
                    Check your email for a verification link. Click the link to verify your email address.
                </p>
            )}
            <button
                className="bg-hd text-white font-bold py-2 px-4 mt-4 rounded hover:bg-act"
                onClick={() => {
                    // You can add additional logic here if needed.
                    history.push('/');
                }}
                disabled={isVerified}
            >
                {isVerified ? 'Go to Home' : 'Continue to Home'}
            </button>
        </div>
    );
}

export default VerificationMiddleware;
