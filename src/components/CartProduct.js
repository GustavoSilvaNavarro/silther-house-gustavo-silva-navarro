//CALL MODULES AND METHODS
import { useContext } from 'react';

//IMPORTING CONTEXT
import { OrderContext } from './context/CartContext';

//FUNCTIONS AND METHODS
export const CartProduct = ({ orden }) => {
    //USE CONTEXT - FUNCTIONS AND VALUES
    const { deleteProduct } = useContext(OrderContext);

    //RENDERING COMPONENT
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="fullInfor__container">
                    <img className='inFoContainer__img' src={orden.url} alt={orden.name} />
                    <div className="infoContainer__detailsContent ms-3">
                        <p className='fs-6 m-0'>{orden.description}</p>
                        <p className='m-0 fs-5 fw-bold'>USD ${orden.price}</p>
                        <div className='detailsContent__wrapper'>
                            <p className='detailsWrapper__category m-0 pe-5 fs-6'>{orden.category}</p>
                            <p className={`m-0 fs-6 ${(orden.stock > 0) ? 'detailsWrapper__stockAvailable' : 'detailsWrapper__stockNotAvailable'}`}>Stock: {orden.stock}</p>
                        </div>
                        <p className='m-0 fs-5 fw-bold'>Cantidad Pedida: {orden.amount}</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center infoContainer__subTotal'>
                                <p className='m-0 fs-5 fw-bold'>Sub Total: USD $</p>
                                <span className='fs-4 fw-bold'>{(orden.amount)*(orden.price)}</span>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-danger' onClick={() => deleteProduct(orden.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};