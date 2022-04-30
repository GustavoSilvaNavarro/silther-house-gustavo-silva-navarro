//CALL MODULES
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//IMPORT COMPONENTS
import { ItemList } from './ItemList';

//Geting DB
import { allProducts } from './utils/productsDB';

//FUNCTIONS AND METHODS
export const ItemListContainer = () => {
    //STATE
    const [listProducts, setListProducts] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { categoryProduct } = useParams();

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from DB
    useEffect(() => {
        const getData = () => {
            return new Promise(res => {
                setTimeout(() => {
                    (categoryProduct) ? res(allProducts.filter(product => product.category == categoryProduct)) : res(allProducts);
                }, 2000);
            });
        };

        const requestData = async () => {
            try {
                const data = await getData();
                setListProducts(data);
                setCargando(false);
            } catch (err) {
                console.log('Error en obtener la data, ', err);
            };        
        };

        requestData();
    }, [categoryProduct]);

    //RENDERING COMPONENT
    return (
        <main>
            {(cargando) ? (
                <section className='mt-3'>
                    <h5 className="text-center">Loading...</h5>
                </section>
            ) : (
                <section className='mt-3'>
                    <ItemList products={listProducts} emptyProduct="No se cuentan con Productos" />
                </section>
            ) }
        </main>
    )
};