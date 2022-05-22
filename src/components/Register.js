import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

import { auth, db } from './firebase/firebase';

export const Register = () => {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        nameUser: '',
        emailUser: '',
        passwordUser: '',
        celUser: '',
        addressUser: ''
    });

    const formChange = e => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    };

    const sendForm = async e => {
        e.preventDefault();
        let {passwordUser, ...user} = newUser;

        try {
            const userRegistered = await createUserWithEmailAndPassword(auth, newUser.emailUser, newUser.passwordUser);
            await setDoc(doc(db, 'users', userRegistered.user.uid), user);
            navigate('/');
        } catch(error) {
            toast.error(error.code, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        };
    };

    return (
        <main>
            <h1 className="text-center display-2 navyColor">Bienvenido a Silther House, favor registrarse para poder comprar en nuestra tienda virtual</h1>
            <section className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="display-4 text-center navyColor">Registrarse</h2>
                                <form className='mb-3' onSubmit={sendForm}>
                                    <div className="mb-3">
                                        <label htmlFor="nameBuyer" className="form-label">Name</label>
                                        <input type="text" name="nameUser" className="form-control" id="nameBuyer" placeholder="Name" onChange={formChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="emailBuyer" className="form-label">Email</label>
                                        <input type="email" name="emailUser" className="form-control" id="emailBuyer" placeholder="Email" onChange={formChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="passwordBuyer" className="form-label">Password</label>
                                        <input type="password" name="passwordUser" className="form-control" id="passwordBuyer" placeholder="Password" onChange={formChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneBuyer" className="form-label">Phone Number</label>
                                        <input type="tel" name="celUser" className="form-control" id="phoneBuyer" placeholder="Phone Number" onChange={formChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="addressBuyer" className="form-label">Address</label>
                                        <input type="text" name="addressUser" className="form-control" id="addressBuyer" placeholder="Address" onChange={formChange} />
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-dark btn-lg">Sign up</button>
                                    </div>
                                </form>

                                <div className="d-flex justify-content-end">
                                    <p className='m-0'>Already have an account, please <Link to='/login' className='text-decoration-none'>Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </main>
    )
};