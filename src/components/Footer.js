//CALL MODULES
import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { AuthContext } from './context/AuthContext';

//FUNCTIONS AND METHODS
export const Footer = () => {
    const { initialStateUser } = useContext(AuthContext);

    const [token, setToken] = useState(initialStateUser.tokenAcceso);

    useEffect(() => {
        setToken(initialStateUser.tokenAcceso);
    }, [initialStateUser]);

    //RENDERING COMPONENT
    return (
        <footer>
            <img className="footer__Logo" src="https://res.cloudinary.com/dukuzakaw/image/upload/v1646938165/SkyLimitAirlinesWebSite/logo/travelLogo_irlvue.webp" alt="Logo" />

            <div className="container__socialMedia">
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i className="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com/" rel="noreferrer" target="_blank"><i className="fab fa-twitter-square"></i></a>
                <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><i className="fab fa-instagram-square"></i></a>
                <a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><i className="fab fa-youtube"></i></a>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 col-sm-12 text-start">
                        <h5 className="text-white mb-5">Silther House</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to='/' className="text-white text-decoration-none">Home</Link>
                            </li>
                            <li className={`mb-2 ${(token) && 'cartIconContainer'}`}>
                                <Link to='/login' className="text-white text-decoration-none">SIGN IN</Link>
                            </li>

                            <li className={`mb-2 ${(token) && 'cartIconContainer'}`}>
                                <Link to="/signup" className="text-white text-decoration-none">SIGN UP</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12 text-start">
                        <h5 className="text-white mb-5">Orders</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/orders" className="text-white text-decoration-none">Orders</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/category/lunch" className="text-white text-decoration-none">Lunch</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/category/beverages" className="text-white text-decoration-none">Beverages</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/category/dinner" className="text-white text-decoration-none">Dinner</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12 text-start">
                        <h5 className="text-white mb-5">Contacto</h5>
                        <ul className="list-unstyled">
                            <p className="fs-6 mb-0 text-muted">USA</p>
                            <li className="mb-2">
                                <p className="text-white">+1 800 892-7800</p>
                            </li>
                            <p className="fs-6 mb-0 text-muted">Buenos Aires</p>
                            <li className="mb-2">
                                <p className="text-white">+54 11 6039-5632</p>
                            </li>
                            <p className="fs-6 mb-0 text-muted">E-mail</p>
                            <li className="mb-2">
                                <p className="text-white">ventas@siltherhouse.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};