import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

/* 
1.only allow authenticated to visit the route
2.
3. redirect user to the route they wanted to go before login

*/
const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <p>loading...</p>;
    }

    if (!user) {
        return <Navigate to='/login'
            state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default ProtectedRoutes;