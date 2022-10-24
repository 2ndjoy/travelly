import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (name, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, name, email, password)


    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const faceBookProvider = new FacebookAuthProvider();
    const faceBookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, faceBookProvider)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);

    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const forgotPass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('inside auth state change', currentUser);
            if (currentUser == null || currentUser.emailVerified) {

                setUser(currentUser);
            }
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }


    }, [])

    const authInfo = { user, loading, setLoading, createUser, signIn, logOut, verifyEmail, forgotPass, updateUserProfile, googleSignin, faceBookSignIn };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;