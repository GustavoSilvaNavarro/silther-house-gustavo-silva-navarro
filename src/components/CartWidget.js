//CALL MODULES AND METHODS
import { Link } from 'react-router-dom';

//FUNCTIONS AND METHODS
export const CartWidget = () => {
    //RENDERING ICON COMPONENT
    return (
        <li className="linksMenu__disappear">
            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        </li>
    )
};