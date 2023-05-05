import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
// import firebase from 'firebase'
require('firebase/auth')

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    // create new user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // to observe the currentUser 
    const [user, setUser] = useState(null);
    useEffect(() => {
        setLoading(true);
        const ussubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('We are observing the current user');
            setUser(currentUser);

        })
        return () => ussubscribe();
    }, [])

    // SignIn with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign out 
    const logOut = () => {
        return signOut(auth);
    }

    // Display User Profile 
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;