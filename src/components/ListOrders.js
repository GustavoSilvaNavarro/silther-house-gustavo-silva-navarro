import { useState, useEffect, useContext } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import { db } from './firebase/firebase';

import { Order } from './Order';

export const ListOrders = () => {
  const { initialStateUser } = useContext(AuthContext);

  const [listOrders, setListOrders] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const getOrdersData = async () => {
      const orderRef = collection(db, 'orders');

      try {
        const req = query(orderRef, where('idBuyer', "==", initialStateUser.userDetails.id));
        const data = await getDocs(req);
        setListOrders(data.docs.map(doc => (
          {
            id: doc.id,
            ...doc.data()
          }
        )));

        setLoadingData(false);
      } catch(err) {
        console.log(err);
      }
    };

    getOrdersData();
  }, [initialStateUser]);

  return (
    <main className='py-3'>
      {(loadingData) ? (
        <section className='mt-3'>
          <div className='d-flex justify-content-center'>
            <BeatLoader color='#000' loading={loadingData} />
          </div>
          <h5 className="text-center">Loading...</h5>
        </section>
      ) : (
        <>
          <h1 className='display-4 navyColor mb-3 px-3'>Welcome: {initialStateUser.userDetails.nameUser}</h1>
          {(listOrders.length > 0) ? (
            <section>
              <div className="container">
                {listOrders.map((order, index) => (
                  <div className="card mb-3 p-2" key={index}>
                    <h3>Pedido N° {order.id}</h3>
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <Order key={order.id} ordenes={order.newListProducts} />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <div className="card-body">
                            <div className="finalPriceDetails">
                              <i className="fa-solid fa-cart-arrow-down"></i>
                              <div className="priceDetails__container">
                                <p className="priceContainer__final">Precio Final Pagado</p>
                                <p className="priceContainer__total">USD {Math.round((order.totalPrice + Number.EPSILON)*100)/100}</p>
                                <p className="priceContainer__taxes">Incluye Tasas e Impuestos</p>
                              </div>
                            </div>
                            <p className="mt-3 passangersNumber__paragraph">Cantidad Productos {order.totalAmount}</p>
                            <div className="flightsPriceContainer">
                              <div className="subtotalContainer">
                                <p className="subtotalContainer__flights">Valor pedidos</p>
                                <p className="subtotalContainer__subt">USD ${Math.round(((order.totalPrice - order.totalIva) + Number.EPSILON)*100)/100}</p>
                              </div>
                              <div className="taxesContainer">
                                <p className="taxesContainer__taxDetail">Tasas e Impuestos</p>
                                <p className="taxesContainer__taxMoney">USD ${Math.round((order.totalIva + Number.EPSILON)*100)/100}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <div className='text-center mb-5 px-4'>
              <h2 className='display-4 fw-bold emptyCartContainer__title'>No cuenta con ordenes, redirigase a la ventana de productos y empiece a comprar!!</h2>
              <Link to='/' className='btn btn-dark btn-lg mt-3'>Comprar Productos</Link>
            </div>
          )}
        </>
      )}
    </main>
  )
};