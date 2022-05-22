import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

import { auth } from './firebase/firebase';


export const Login = () => {
    const navigate = useNavigate();

    const [newUsuario, setNewUsuario] = useState({
        emailUser: '',
        passwordUser: ''
    });

    const formChange = e => {
        setNewUsuario({...newUsuario, [e.target.name]: e.target.value});
    };

    const sendForm = async e => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, newUsuario.emailUser, newUsuario.passwordUser);
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
            <section className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="display-5 text-center navyColor">Iniciar Sesion</h2>
                                <form className='mb-3' onSubmit={sendForm}>
                                    <div className="mb-3">
                                        <label htmlFor="emailUser" className="form-label">Email</label>
                                        <input type="email" name="emailUser" className="form-control" id="emailUser" placeholder="Email" onChange={formChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="passwordUser" className="form-label">Password</label>
                                        <input type="password" name="passwordUser" className="form-control" id="passwordUser" placeholder="Password" onChange={formChange} />
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-dark btn-lg">Login</button>
                                    </div>
                                </form>
                                <Link to='/signup' className='text-decoration-none d-flex justify-content-end'>Create an account?</Link>
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