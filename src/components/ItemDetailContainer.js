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
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    //Get Data
    const { id } = useParams();

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from DB
    useEffect(() => {
        const getData = () => {
            return new Promise(res => {
                setTimeout(() => {
                    id && res(allProducts.filter(products => products.id === id));
                }, 2000);
            });
        };

        const reqData = async () => {
            try {
                const data = await getData();
                setProduct(data[0]);
                setLoading(false);
            } catch(e) {
                console.log(e);
            };
        };

        reqData();
    }, [id]);

    //RENDERING COMPONENT
    return (
        <section>
            { (loading) ? (
                <div className='container'>
                    <h5 className='text-center'>Loading...</h5>
                </div>
            ) : (
                <ItemDetail itemProduct={product[0]} />
            ) }
        </section>
    )
};