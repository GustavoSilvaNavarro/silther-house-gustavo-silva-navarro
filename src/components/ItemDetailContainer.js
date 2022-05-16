//CALL MODULES
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, documentId } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

//IMPORTING COMPONENTS
import { ItemDetail } from './ItemDetail';

//GET DATA
import { db } from './firebase/firebase';

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
        const getProductDetails = async () => {
            try {
                const dbRef = collection(db, 'allProducts');

                const consulta = query(dbRef, where(documentId(dbRef), "==", id));
                const data = await getDocs(consulta);
                setProduct(data.docs.map(doc => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                )));

                setLoading(false);
            } catch(err) {
                console.log('Error al consultar el dato', err);
            };
        };

        getProductDetails();
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