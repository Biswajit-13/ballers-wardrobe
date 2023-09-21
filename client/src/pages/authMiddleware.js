import { useEffect, useState } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthMiddleware = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                setUser(authUser);

                if (authUser.emailVerified) {
                  
                    setUser(authUser);
                } else {

                    setUser(null);
                }
            } else {
                // User is not logged in
                setUser(null);
                console.log('User is not logged in');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    return { user, loading };
};

export default AuthMiddleware;
