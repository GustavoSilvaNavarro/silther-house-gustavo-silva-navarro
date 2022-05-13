//CALL MODULES
import { useState, useEffect, useContext } from 'react';

//IMPORTING CONTEXT
import { OrderContext } from './context/CartContext';

//FUNCTIONS AND METHODS
export const Cart = () => {
    //STATES
    const [orders, setOrders] = useState({});

    //USE CONTEXT - FUNCTIONS AND VALUES
    const { initialState } = useContext(OrderContext);

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from context
    useEffect(() => {
        setOrders(initialState);
    }, [orders, initialState]);

    //RENDERING COMPONENT
    return (
        <div className='container'>
            <div className="row">
                <h1 className='display-4 cartTitle'>Shopping Cart</h1>

                <div className="col-md-8">
                    <div className="card">
                        {orders.orders.map(orden => (
                            <div className="card">
                                <div className="card-body">
                                    <img src={orden.url} alt={orden.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};