//CALL MODULES AND HOOKS
import { createContext, useState } from 'react';

//CREATING CONTEXT
const OrderContext = createContext();

//FUNCTIONS AND METHODS
const CartContext = ({ children }) => {
    //STATES
    const [ordersCart, setOrdersCart] = useState([]);

    //CART STATE
    const initialState = {
        orders: ordersCart,
        totalAmount: 0,
        totalPrice: 0,
        totalIva: 0
    };

    //FUNCTIONS
    //RENDERING CONTEXT
  return (
    <OrderContext.Provider value={initialState}>
        {children}
    </OrderContext.Provider>
  )
};

//EXPORTING CONTEXT
export default CartContext;