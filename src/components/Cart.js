//CALL MODULES
import { useState, useEffect, useContext } from 'react';

//IMPORTING CONTEXT
import { OrderContext } from './context/CartContext';

//IMPORTING COMPONENTS
import { CartProduct } from './CartProduct';

//FUNCTIONS AND METHODS
export const Cart = () => {
    //USE CONTEXT - FUNCTIONS AND VALUES
    const { initialState } = useContext(OrderContext);

    //STATES
    const [orders, setOrders] = useState(initialState);

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from context
    useEffect(() => {
        setOrders(initialState);
    }, [initialState]);

    //RENDERING COMPONENT
    return (
        <div className='cartContainer'>
            <div className="row">
                <h1 className='display-4 cartTitle'>Shopping Cart</h1>

                <div className="col-md-9">
                    {orders.orders.map(orden => (
                        <CartProduct key={orden.id} orden={orden} />
                    ))}
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="finalPriceDetails">
                                <i className="fa-solid fa-cart-arrow-down"></i>
                                <div className="priceDetails__container">
                                    <p className="priceContainer__final">Precio Final</p>
                                    <p className="priceContainer__total">USD {Math.round((orders.totalPrice + Number.EPSILON)*100)/100}</p>
                                    <p className="priceContainer__taxes">Incluye Tasas e Impuestos</p>
                                </div>
                            </div>
                            <p className="mt-3 passangersNumber__paragraph">Cantidad Productos {orders.totalAmount}</p>
                            <div className="flightsPriceContainer">
                                <div className="subtotalContainer">
                                    <p className="subtotalContainer__flights">Valor pedidos</p>
                                    <p className="subtotalContainer__subt">USD ${Math.round(((orders.totalPrice - orders.totalIva) + Number.EPSILON)*100)/100}</p>
                                </div>
                                <div className="taxesContainer">
                                    <p className="taxesContainer__taxDetail">Tasas e Impuestos</p>
                                    <p className="taxesContainer__taxMoney">USD ${Math.round((orders.totalIva + Number.EPSILON)*100)/100}</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid mt-3 p-2">
                            <button className='btn btn-primary btn-lg text-center'>Pay Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};