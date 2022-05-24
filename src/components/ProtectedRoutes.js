import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({ children }) => {
    const [tokenAccess, setTokenAccess] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setTokenAccess(localStorage.getItem('token'));
    }, [tokenAccess]);

    if(!tokenAccess) return <Navigate to="/login" />

    return <>{children}</>
};