//CALL MODULES AND METHODS
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//IMPORTING CONTEXT
import { OrderContext } from './context/CartContext';

//FUNCTIONS AND METHODS
export const CartWidget = () => {
    //USE CONTEXT - FUNCTIONS AND VALUES
    const { initialState } = useContext(OrderContext);

    //STATES
    const [cantidadPedida, setCantidadPedida] = useState(initialState);

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from context
    useEffect(() => {
        setCantidadPedida(initialState);
    }, [initialState]);

    //RENDERING ICON COMPONENT
    return (
        <li className={`linksMenu__disappear ${(cantidadPedida.totalAmount <= 0) && 'cartIconContainer'}`}>
            <Link to="/cart" className='cartIconContainer__link'>
                <i className="fas fa-shopping-cart"></i>
                <p className='iconContainer__number'>{cantidadPedida.totalAmount}</p>
            </Link>
        </li>
    )
};