import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({ children }) => {
    const [tokenAccess] = useState(localStorage.getItem('token'));


    if(!tokenAccess) return <Navigate to="/login" />

    return <>{children}</>
}