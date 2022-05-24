import { useState } from 'react';
import { Remove, Add } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';

export const ItemCount = ({ ultimoPedido, stockProduct, initial, onAdd, updateStock }) => {
    const [stockAvailable, setStockAvailable] = useState(stockProduct);
    const [countProduct, setCountProduct] = useState(initial);
    const [cantidadPedida, setCantidadPedida] = useState(ultimoPedido);

    const addOneProduct = () => {
        if(stockAvailable > 0) {
            let newNumber = parseInt(countProduct);
            let numberAdded = newNumber+1;
            setStockAvailable(stockAvailable-1);
            setCountProduct((numberAdded < 10) ? '0'+numberAdded.toString() : numberAdded.toString());
            setCantidadPedida(numberAdded);

            updateStock(stockAvailable-1);
        } else {
            toast.error('Stock no disponible', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const removeOneProduct = () => {
        if(parseInt(countProduct) > 0) {
            let newNumber = parseInt(countProduct);
            let numberAdded = newNumber-1;
            setStockAvailable(stockAvailable+1);
            setCountProduct((numberAdded < 10) ? '0'+numberAdded.toString() : numberAdded.toString());
            setCantidadPedida(numberAdded);

            updateStock(stockAvailable+1);
        } else {
            toast.error('No puede agregar valores negativos', {
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

    return (
        <div className='addCartProducts'>
            <div className="cartProducts__container">
                <div className='productCounterContainer mb-5'>
                    <span onClick={removeOneProduct}><Remove sx={{ fontSize: 30 }} /></span>
                    <span className='counterContainer__numberOrdered'>{countProduct}</span>
                    <span onClick={addOneProduct}><Add sx={{ fontSize: 30 }} /></span>
                </div>
                <div className='d-grid mb-3'>
                    <button type='button' onClick={() => onAdd(cantidadPedida, true)} className='btn btn-outline-info'>Add</button>
                </div>
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