import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
    const [validacion, setValidacion] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setValidacion(localStorage.getItem('token'));
    }, [validacion]);

    if(validacion) return <Navigate to="/" />

    return <>{children}</>
};