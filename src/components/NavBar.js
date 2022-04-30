//CALL MODULES
import { Link } from 'react-router-dom';

//IMPORTING COMPONENTS
import { CartWidget } from './CartWidget';

//FUNCTIONS AND METHODS
export const NavBar = () => {
    //RENDER THE COMPONENT
    return (
        <header className="travelHeader">
            {/* NAVBAR */}
            <div className="travelHeader__navBar">
                <nav className="headerNavBar__design">
                    <Link to='/' className="headerNavBar__link">
                        <img className="headerNavBar__logo img-fluid" src="https://res.cloudinary.com/dukuzakaw/image/upload/v1646938165/SkyLimitAirlinesWebSite/logo/travelLogo_irlvue.webp" alt="Travel Logo" />
                    </Link>

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
                            <li className="linksMenu__disappear"><Link to='/'>Home</Link></li>
                            <li className="linksMenu__disappear"><a href="#">My Orders</a></li>
                            <li className="linksMenu__disappear"><Link to="/category/lunch">Lunch</Link></li>
                            <li className="linksMenu__disappear"><Link to="/category/dinner">Dinner</Link></li>
                            <li className="linksMenu__disappear"><Link to="/category/beverages">Beverages</Link></li>
                            <CartWidget />
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
};