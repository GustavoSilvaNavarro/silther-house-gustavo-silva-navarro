//CALL MODULES
import { useState } from 'react';
import { Remove, Add } from '@mui/icons-material';

//FUNCTIONS AND METHODS
export const ItemCount = ({ stockProduct, initial, onAdd }) => {
    //STATES
    const [stockAvailable, setStockAvailable] = useState(stockProduct);
    const [countProduct, setCountProduct] = useState(initial);

    //FUNCTIONS
    const addOneProduct = () => {
        if(stockAvailable > 0) {
            let newNumber = parseInt(countProduct);
            let numberAdded = newNumber+1;
            setStockAvailable(stockAvailable-1);
            setCountProduct((numberAdded < 10) ? '0'+numberAdded.toString() : numberAdded.toString());
        } else {
            console.log('Stock no disponible');
        }
    };

    const removeOneProduct = () => {
        if(parseInt(countProduct) > 0) {
            let newNumber = parseInt(countProduct);
            let numberAdded = newNumber-1;
            setStockAvailable(stockAvailable+1);
            setCountProduct((numberAdded < 10) ? '0'+numberAdded.toString() : numberAdded.toString());
        } else {
            console.log('No puede agregar valores negativos');
        };
    };

    onAdd();

    //RENDERING COMPONENT
    return (
        <div className='addCartProducts'>
            <div className="cartProducts__container">
                <p>Stock producto: {(stockAvailable != 0) ? stockAvailable : 'Fuera de stock'}</p>
                <div className='productCounterContainer mb-5'>
                    <span onClick={removeOneProduct}><Remove sx={{ fontSize: 30 }} /></span>
                    <span className='counterContainer__numberOrdered'>{countProduct}</span>
                    <span onClick={addOneProduct}><Add sx={{ fontSize: 30 }} /></span>
                </div>
                <div className='d-grid mb-3'>
                    <button type='button' className='btn btn-outline-info'>Add Cart</button>
                </div>
            </div>
        </div>
    )
};