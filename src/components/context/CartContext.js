import { createContext, useState } from 'react';

export const OrderContext = createContext();

const CartContext = ({ children }) => {
  const [ordersCart, setOrdersCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalIva, setTotalIva] = useState(0);

  const initialState = {
    orders: ordersCart,
    totalAmount,
    totalPrice,
    totalIva
  };

  const addProducts = (itemAdded, cantidadPedida, stockRestante) => {
    const itemDuplicado = isInCart(itemAdded.id);

    if(itemDuplicado) {
      const resultado = initialState.orders.map(item => {
        if(item.id === itemAdded.id) {
          item.amount += cantidadPedida;
          item.stock = stockRestante;
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
      itemAdded.stock = stockRestante;
      setOrdersCart([...ordersCart, itemAdded]);
      setTotalAmount(totalAmount + cantidadPedida);
      setTotalPrice(totalPrice + (itemAdded.price * cantidadPedida));
      setTotalIva(totalIva + (itemAdded.price * cantidadPedida * 0.21));
    };
  };

  const deleteProduct = id => {
    const rest = initialState.orders.filter(product => product.id !== id);
    let precioTot = 0;
    let totCantidad = 0;
    let ivaTot = 0;

    for(let i = 0; i < rest.length; i++) {
      precioTot += rest[i].amount * rest[i].price;
      totCantidad += rest[i].amount
      ivaTot += (rest[i].amount * rest[i].price)*0.21;
    };

    setOrdersCart(rest);
    setTotalPrice(precioTot)
    setTotalAmount(totCantidad)
    setTotalIva(ivaTot)
  };

  const isInCart = id => {
    const duplicados = initialState.orders.filter(item => item.id === id);
    if(duplicados.length > 0) {
      return true;
    } else {
      return false;
    };
  };

  const stockUpdated = (product) => {
    const res = initialState.orders.find(producto => producto.id === product.id);
    if(res) {
      return res.amount;
    } else {
      return 0
    }
  };

  const emptyCart = () => {
    setOrdersCart([]);
    setTotalPrice(0);
    setTotalIva(0);
    setTotalAmount(0);
  };

  return (
    <OrderContext.Provider value={{
      initialState,
      addProducts,
      deleteProduct,
      isInCart,
      stockUpdated,
      emptyCart
    }}>
      {children}
    </OrderContext.Provider>
  )
};

export default CartContext;