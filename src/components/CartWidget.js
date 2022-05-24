import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { OrderContext } from './context/CartContext';

export const CartWidget = () => {
    const { initialState } = useContext(OrderContext);

    const [cantidadPedida, setCantidadPedida] = useState(initialState);

    useEffect(() => {
        setCantidadPedida(initialState);
    }, [initialState]);

    return (
        <li className={`linksMenu__disappear ${(cantidadPedida.totalAmount <= 0) && 'cartIconContainer'}`}>
            <NavLink to="/cart" className='cartIconContainer__link'>
                <i className="fas fa-shopping-cart"></i>
                <p className='iconContainer__number'>{cantidadPedida.totalAmount}</p>
            </NavLink>
        </li>
    )
};