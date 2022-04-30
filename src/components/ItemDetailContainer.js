//CALL MODULES
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

//IMPORTING COMPONENTS
import { ItemDetail } from './ItemDetail';

//DATA
import { allProducts } from './utils/productsDB';

//EXPORTING COMPONENTS
export const ItemDetailContainer = () => {
    //STATE
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    //Get Data
    const { id } = useParams();

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from DB
    useEffect(() => {
        const getData = () => {
            return new Promise(res => {
                setTimeout(() => {
                    const item = allProducts.find(products => products.id == id);
                    res(item);
                }, 2000);
            });
        };

        const reqData = async () => {
            try {
                const data = await getData();
                setProduct(data);
                setLoading(false);
            } catch(e) {
                console.log(e);
            }
        };

        reqData();
    }, []);

    //RENDERING COMPONENT
    return (
        <section>
            { (loading) ? (
                <div className='container'>
                    <h5 className='text-center'>Loading...</h5>
                </div>
            ) : (
                <ItemDetail itemProduct={product} />
            ) }
        </section>
    )
};