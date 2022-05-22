//CALL MODULES AND METHODS
import { createContext, useEffect, useState } from 'react';
import { collection, getDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

import { auth, db } from '../firebase/firebase';

//CREATING CONTEXT
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [usuarioActual, setUsuarioActual] = useState(null);
    const [userDetails, setUserDetails] = useState({});
    const [tokenAcceso, setTokenAcceso] = useState('');

    //INITIAL STATE
    const initialStateUser = {
        userDetails,
        usuarioActual,
        tokenAcceso
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
                console.log(err.code);
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