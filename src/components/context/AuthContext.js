import { createContext, useEffect, useState } from 'react';
import { collection, getDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

import { auth, db } from '../firebase/firebase';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [usuarioActual, setUsuarioActual] = useState(null);
    const [userDetails, setUserDetails] = useState({});
    const [tokenAcceso, setTokenAcceso] = useState('');
    const [authErrors, setAuthErrors] = useState('');

    const initialStateUser = {
        userDetails,
        usuarioActual,
        tokenAcceso,
        authErrors
    };

    useEffect(() => {
        onAuthStateChanged(auth, async currentUser => {
            setUsuarioActual(currentUser);

            if(currentUser) {
                localStorage.setItem('token', currentUser.accessToken);
                setTokenAcceso(currentUser.accessToken);
            };

            try {
                const userRef = collection(db, 'users');

                const req = doc(userRef, currentUser.uid);
                const data = await getDoc(req);
                setUserDetails(
                    {
                        id: data.id,
                        ...data.data()
                    }
                );
            } catch(err) {
                if(!err.code) {
                    setAuthErrors('Favor registrese o inicie sesion');
                };
            };
        });
    }, []);

    const restartUserInfo = () => {
        setUserDetails({});
        setTokenAcceso('');
    };

    return (
        <AuthContext.Provider value={{
            initialStateUser,
            restartUserInfo
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;