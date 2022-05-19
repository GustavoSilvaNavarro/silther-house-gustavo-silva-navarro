//CALL MODULES
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

//IMPORT COMPONENTS
import { ItemList } from './ItemList';

//Geting DB
import { db } from './firebase/firebase';

//FUNCTIONS AND METHODS
export const ItemListContainer = () => {
    //STATE
    const [listProducts, setListProducts] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { categoryProduct } = useParams();

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from DB
    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsRef = collection(db, 'allProducts');

                if(categoryProduct) {
                    const req = query(productsRef, where('category', "==", categoryProduct));
                    const datos = await getDocs(req);
                    setListProducts(datos.docs.map(doc => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )));
                } else {
                    const dbData = await getDocs(productsRef);
                    setListProducts(dbData.docs.map(doc => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )));
                };

                setCargando(false);    
            } catch(err) {
                console.log('Lo sentimos no pudimos obtener los datos', err);
            };
        };

        getProducts();
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