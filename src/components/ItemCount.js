//CALL MODULES
import { useState } from 'react';
import { Remove, Add } from '@mui/icons-material';

//FUNCTIONS AND METHODS
export const ItemCount = ({ ultimoPedido, stockProduct, initial, onAdd, updateStock }) => {
    //STATES
    const [stockAvailable, setStockAvailable] = useState(stockProduct);
    const [countProduct, setCountProduct] = useState(initial);
    const [cantidadPedida, setCantidadPedida] = useState(ultimoPedido);

    //FUNCTIONS
    const addOneProduct = () => {
        if(stockAvailable > 0) {
            let newNumber = parseInt(countProduct);
            let numberAdded = newNumber+1;
            setStockAvailable(stockAvailable-1);
            setCountProduct((numberAdded < 10) ? '0'+numberAdded.toString() : numberAdded.toString());
            setCantidadPedida(numberAdded);

            updateStock(stockAvailable-1);
        } else {
            console.log('Stock no disponible');
        }
    };
//onAdd(numberAdded);
    const removeOneProduct = () => {
        if(parseInt(countProduct) > 0) {
            let newNumber = parseInt(countProduct);
            let numberAdded = newNumber-1;
            setStockAvailable(stockAvailable+1);
            setCountProduct((numberAdded < 10) ? '0'+numberAdded.toString() : numberAdded.toString());
            setCantidadPedida(numberAdded);

            updateStock(stockAvailable+1);
        } else {
            console.log('No puede agregar valores negativos');
        };
    };

    //RENDERING COMPONENT
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
        </div>
    )
};