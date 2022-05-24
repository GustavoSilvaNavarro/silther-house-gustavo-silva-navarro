//CALL MODULES
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

import { auth } from './firebase/firebase';
import { AuthContext } from './context/AuthContext';
import { OrderContext } from './context/CartContext';

//IMPORTING COMPONENTS
import { CartWidget } from './CartWidget';

//FUNCTIONS AND METHODS
export const NavBar = () => {
    const { restartUserInfo } = useContext(AuthContext);
    const { emptyCart } = useContext(OrderContext);

    const signout = async () => {
        localStorage.removeItem('token');
        try {
            await signOut(auth);
            restartUserInfo();
            emptyCart();
        } catch(err) {
            toast.error('Error al cerrar sesion', {
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

    //RENDER THE COMPONENT
    return (
        <header className="travelHeader">
            {/* NAVBAR */}
            <div className="travelHeader__navBar">
                <nav className="headerNavBar__design">
                    <NavLink to='/' className="headerNavBar__link">
                        <img className="headerNavBar__logo img-fluid" src="https://res.cloudinary.com/dukuzakaw/image/upload/v1646938165/SkyLimitAirlinesWebSite/logo/travelLogo_irlvue.webp" alt="Travel Logo" />
                    </NavLink>

                    <div className="headHeader__middle">
                        <div className="headHeader__search">
                            <i className="fas fa-search"></i>
                            <input className="headerSearch__input" type="text" placeholder="Search" />    
                        </div>
                    </div>

                    <div className="navBar__linksMenu">
                        <input type="checkbox" id="burgerMenu__checkBtn" />
                        <label htmlFor="burgerMenu__checkBtn" className="linksMenu__burgerMenu">
                            <i className="fas fa-bars"></i>
                        </label>

                        <ul>
                            <li className="linksMenu__disappear"><NavLink to='/'>Home</NavLink></li>
                            <li className="linksMenu__disappear"><NavLink to='/orders'>My Orders</NavLink></li>
                            <li className="linksMenu__disappear"><NavLink to="/category/lunch">Lunch</NavLink></li>
                            <li className="linksMenu__disappear"><NavLink to="/category/dinner">Dinner</NavLink></li>
                            <li className="linksMenu__disappear"><NavLink to="/category/beverages">Beverages</NavLink></li>
                            <li className={`linksMenu__disappear ${(!(localStorage.getItem('token'))) && 'cartIconContainer'}`}><NavLink to="/login" onClick={signout}>Sign Out</NavLink></li>
                            <CartWidget />
                        </ul>
                    </div>
                </nav>
            </div>
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
        </header>
    )
};