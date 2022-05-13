//CALL MODULES AND HOOKS
import { createContext, useState } from 'react';

//CREATING CONTEXT
export const OrderContext = createContext();

//FUNCTIONS AND METHODS
const CartContext = ({ children }) => {
  //STATES
  const [ordersCart, setOrdersCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalIva, setTotalIva] = useState(0);

  //CART STATE
  const initialState = {
    orders: ordersCart,
    totalAmount,
    totalPrice,
    totalIva
  };

  //FUNCTIONS
  //Add producst to my list
  const addProducts = (itemAdded, cantidadPedida) => {
    const itemDuplicado = isInCart(itemAdded.id);

    if(itemDuplicado) {
      const resultado = initialState.orders.map(item => {
        if(item.id === itemAdded.id) {
          item.amount += cantidadPedida
          return item;
        } else {
          return item;
        };
      });
      setOrdersCart(resultado);
      setTotalAmount(totalAmount + cantidadPedida);
      setTotalPrice(totalPrice + (itemAdded.price * cantidadPedida));
      setTotalIva(totalIva + (itemAdded.price * cantidadPedida * 0.21));
    } else {
      itemAdded.amount = cantidadPedida;
      setOrdersCart([...ordersCart, itemAdded]);
      setTotalAmount(totalAmount + cantidadPedida);
      setTotalPrice(totalPrice + (itemAdded.price * cantidadPedida));
      setTotalIva(totalIva + (itemAdded.price * cantidadPedida * 0.21));
    };
  };

  //Check the product is inside cart
  const isInCart = id => {
    const duplicados = initialState.orders.filter(item => item.id === id);
    if(duplicados.length > 0) {
      return true;
    } else {
      return false;
    };
  };

  //RENDERING CONTEXT
  return (
    <OrderContext.Provider value={{
      initialState,
      addProducts,
      isInCart
    }}>
      {children}
    </OrderContext.Provider>
  )
};

//EXPORTING CONTEXT
export default CartContext;