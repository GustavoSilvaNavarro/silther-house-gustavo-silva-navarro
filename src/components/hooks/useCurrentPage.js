import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useCurrentPage = () => {
    const [locationUrl, setLocationUrl] = useState('');

    let location = useLocation();

    useEffect(() => {
        setLocationUrl(location.pathname);
    }, [location]);

    return locationUrl;
};