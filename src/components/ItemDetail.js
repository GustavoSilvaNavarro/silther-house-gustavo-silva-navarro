//CALL MODULES
import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

//IMPORTING CONTEXT
import { OrderContext } from './context/CartContext';

//IMPORTING COMPONENTS
import { ItemCount } from './ItemCount';

//EXPORTING COMPONNET
export const ItemDetail = ({ itemProduct }) => {
    //STATES
    const [contadorStock, setContadorStock] = useState(itemProduct?.stock);
    const [dissapear, setDissapear] = useState(false);
    const [cantidadPedido, setCantidadPedido] = useState(0);
    const [valorInitial, setValorInitial] = useState('00');

    //USE CONTEXT - VALUES AND FUNCTIONS
    const { addProducts } = useContext(OrderContext);

    //FUNCTIONS
    //Modify stocks
    const updateStock = (stockActualizado) => {
        setContadorStock(stockActualizado);
    };

    const onAdd = (numberAdded, ocultar) => {
        if(numberAdded > 0) {
            setCantidadPedido(numberAdded);
            setDissapear(ocultar);
        } else {
            toast.info('Enter an amount', {
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

    const restartOrder = () => {
        setCantidadPedido(0);
        setValorInitial('00');
        setContadorStock(itemProduct.stock);
        setDissapear(false);
    };

    const seguirComprando = () => {
        setDissapear(false);
        const valorInicial = (cantidadPedido < 10) ? '0'+cantidadPedido.toString() : cantidadPedido.toString();
        setValorInitial(valorInicial);
    };

    //RENDERING COMPONENT
    return (
        <Container>
            <Typography align='center' variant='h2'>{itemProduct.name}</Typography>
            <Box className='mb-3 mt-2'>
                <Grid container spacing={2}>
                    <Grid textAlign='center' item xs={12} sm={6} md={6} lg={6}>
                        <img className='imageDetails' src={itemProduct.url} alt={itemProduct.name} loading='lazy' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Typography variant='h4'>{itemProduct.description}</Typography>
                        <Box className='d-flex flex-column'>
                            <Box className='d-flex align-items-center justify-content-around'>
                                <p className='fs-4'>Stock: <span>{contadorStock}</span></p>
                                <p className='fs-4'>Category: {itemProduct.category}</p>
                            </Box>
                            <p className='text-center fs-4'>Price: USD <span className='fw-bold'>{itemProduct.price}</span></p>
                            {(dissapear) ?
                                <div className='mt-5'>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button onClick={restartOrder} className='me-2 btn btn btn-outline-danger'>Cancelar</button>
                                        <Link to='/cart'><button className='btn btn-outline-info' onClick={() => addProducts(itemProduct, cantidadPedido)}>Add Cart</button></Link>
                                        <button onClick={seguirComprando} className='ms-2 btn btn-outline-info'>Seguir Comprando</button>
                                    </div>
                                </div> : <ItemCount stockProduct={contadorStock} initial={valorInitial} onAdd={onAdd} updateStock={updateStock} />
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
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
        </Container>
    )
};