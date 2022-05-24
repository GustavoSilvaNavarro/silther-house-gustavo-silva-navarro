import { useEffect, useState } from 'react';
import { collection, getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';

import { ItemDetail } from './ItemDetail';

import { db } from './firebase/firebase';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

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