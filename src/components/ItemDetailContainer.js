//CALL MODULES
import { useEffect, useState } from 'react';
import { collection, getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';

//IMPORTING COMPONENTS
import { ItemDetail } from './ItemDetail';

//GET DATA
import { db } from './firebase/firebase';

//EXPORTING COMPONENTS
export const ItemDetailContainer = () => {
    //STATE
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    //Get Data
    const { id } = useParams();

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from DB
    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const dbRef = collection(db, 'allProducts');

                const consulta = doc(dbRef, id);
                const data = await getDoc(consulta);
                setProduct(
                    {
                        id: data.id,
                        ...data.data()
                    }
                );

                setLoading(false);
            } catch(err) {
                toast.error('Error al consultar el dato', {
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

        getProductDetails();
    }, [id]);

    //RENDERING COMPONENT
    return (
        <section>
            { (loading) ? (
                <section className='container'>
                    <div className="d-flex justify-content-center">
                        <BeatLoader color='#000' loading={loading} />
                    </div>
                    <h5 className='text-center'>Loading...</h5>
                </section>
            ) : (
                <ItemDetail itemProduct={product} />
            ) }
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
        </section>
    )
};