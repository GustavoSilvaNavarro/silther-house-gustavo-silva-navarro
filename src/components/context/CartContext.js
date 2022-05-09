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
  const addProducts = (product, amount) => {
    let itemDuplicado = isInCart(product.id);

    const tax = 0.21;
    const newOrder = {product, amount};
    let newAmount = totalAmount + amount;
    let newTotal = totalPrice + (product.price * amount);
    let newTax = totalIva + (product.price * amount * tax);

    if(!itemDuplicado) {
      setOrdersCart([...ordersCart, newOrder]);
      setTotalAmount(newAmount);
      setTotalPrice(newTotal);
      setTotalIva(newTax);  
    } else {
      let updateAmount = [];
      initialState.orders.map(item => {
        if(item.product.id === product.id) {
          item.amount += amount;
          updateAmount.push(item);
        } else {
          updateAmount.push(item);
        };
      });
      setOrdersCart(updateAmount);
      setTotalAmount(newAmount);
      setTotalPrice(newTotal);
      setTotalIva(newTax);
    };
  };

  //Check the product is inside cart
  const isInCart = id => {
    const duplicados = initialState.orders.filter(item => item.product.id === id);
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