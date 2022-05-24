import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import { doc, addDoc, collection, Timestamp, updateDoc } from 'firebase/firestore';

import { OrderContext } from './context/CartContext';
import { AuthContext } from './context/AuthContext';

import { db } from './firebase/firebase';

import { CartProduct } from './CartProduct';

export const Cart = () => {
    const navigate = useNavigate();

    const { initialState, emptyCart } = useContext(OrderContext);
    const { initialStateUser } = useContext(AuthContext);

    const [orders, setOrders] = useState(initialState);

    useEffect(() => {
        setOrders(initialState);
    }, [initialState]);

    const setNewOrder = () => {
        const {id, ...buyer} = initialStateUser.userDetails;
        const {totalAmount, totalIva, totalPrice, ...listProducts} = orders;
        let productsUpdatedStock = []
        let newListProducts = [];
        for(let i = 0; i < listProducts.orders.length; i++) {
            const {exist, stock, ...newList} = listProducts.orders[i];
            newListProducts.push(newList)
        };

        for(let i = 0; i < listProducts.orders.length; i++) {
            const {amount, ...itemStockUpdated} = listProducts.orders[i];
            productsUpdatedStock.push(itemStockUpdated)
        };
        
        const nuevaOrden = {
            idBuyer: id,
            buyer,
            newListProducts,
            totalAmount,
            totalIva,
            totalPrice,
            date: Timestamp.now().toDate().toString()
        };

        Swal.fire({
            title: 'Comprar Order',
            text: `Favor proceda a pagar el monto de ${totalPrice}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#024',
            cancelButtonColor: '#d63031',
            confirmButtonText: 'Pay Order',
            cancelButtonText: 'Cancel'
        }).then(async result => {
            if(result.isConfirmed) {
                try {
                    for(let i=0; i< productsUpdatedStock.length; i++) {
                        await updateDoc(doc(db, 'allProducts', productsUpdatedStock[i].id), {stock: productsUpdatedStock[i].stock});
                    };

                    const ordenSet = await addDoc(collection(db, 'orders'), nuevaOrden);

                    emptyCart();

                    Swal.fire({
                        text: `Muchas Gracias, su numero de compra es ${ordenSet.id}`,
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    });

                    navigate('/orders');
                } catch(err) {
                    toast.info('Error al pagar la orden', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                };
            };
        });
    };

    return (
        <div className='cartContainer mb-5'>
            <div className="row">
                <h1 className='display-3 cartTitle'>Shopping Cart</h1>

                {(orders.orders.length > 0) ?
                    <>
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
                                    <button className='btn btn-primary btn-lg text-center' onClick={setNewOrder}>Set Order</button>
                                </div>
                            </div>
                        </div>
                    </> : <div className='text-center mb-5'>
                        <h2 className='display-4 fw-bold emptyCartContainer__title'>Carrito vacio, redirigase a la ventana de productos y empiece a comprar!!</h2>
                        <Link to='/' className='btn btn-dark btn-lg mt-3'>Comprar Productos</Link>
                    </div>
                }
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
};