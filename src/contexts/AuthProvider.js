import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    // create new user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // to observe the currentUser 
    const [user, setUser] = useState(null);
    useEffect(() => {
        const ussubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('We are observing the current user');
            setUser(currentUser);

        })
        return () => ussubscribe();
    }, [])

    // SignIn with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        createUser,
        signIn,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;