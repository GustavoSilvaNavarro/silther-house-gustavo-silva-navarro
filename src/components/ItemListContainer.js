//CALL MODULES
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

//IMPORT COMPONENTS
import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';

//DATABASE PRODUCTS
const foodTruckDB = [
    {
        id: uuidv4(),
        category: "Beverages",
        exist: true,
        url: 'https://res.cloudinary.com/dukuzakaw/image/upload/v1650761227/reactProjectCoder/eCommerceProducts/beer_ov0vbk.webp',
        name: "New England IPA Beer",
        description: "Harpoon IPA from Boston",
        price: 7
    },
    {
        id: uuidv4(),
        category: "Lunch",
        exist: true,
        url: 'https://res.cloudinary.com/dukuzakaw/image/upload/v1650761231/reactProjectCoder/eCommerceProducts/pizza_onle8t.webp',
        name: "Peperoni Pizza",
        description: "Delicious Large Peperoni Italian Pizza",
        price: 44
    },
    {
        id: uuidv4(),
        category: "Lunch",
        exist: true,
        url: 'https://res.cloudinary.com/dukuzakaw/image/upload/v1650761224/reactProjectCoder/eCommerceProducts/burger_mllkf5.webp',
        name: "American Burger",
        description: "Bacon Cheese Burger with Fries",
        price: 15
    },
    {
        id: uuidv4(),
        category: "Breakfast",
        exist: true,
        url: 'https://res.cloudinary.com/dukuzakaw/image/upload/v1650761225/reactProjectCoder/eCommerceProducts/falafel_ysfcio.webp',
        name: "Falafel",
        description: "Indian style falafel",
        price: 13
    }
];

//FUNCTIONS AND METHODS
export const ItemListContainer = ({ greeting }) => {
    //STATE
    const [mealOptions, setMealOptions] = useState([]);

    //USEEFFECT SHOW DATA WHEN I LOAD (Piece of code wich runs based on a condition)
    //Getting data from DB
    useEffect(() => {
        const getData = () => {
            return new Promise(res => {
                setTimeout(() => {
                    res(foodTruckDB);
                }, 2000);
            });
        };

        const requestData = async () => {
            try {
                const data = await getData();
                setMealOptions(data);
            } catch (err) {
                console.log('Error en obtener la data, ', err);
            };        
        };

        requestData();
    }, []);

    //FUNCTIONS
    const onAdd = numberAdded => {
        console.log(numberAdded)
    };

    //RENDERING COMPONENT
    return (
        <main>
            <section className='mt-3'>
                <ItemList mealOptions={mealOptions} emptyProduct="No se cuentan con Productos" />
            </section>
            <section>
                <h1 className="display-1 text-center">{greeting}</h1>
                <ItemCount stockProduct={10} initial="00" onAdd={onAdd} />
            </section>
        </main>
    )
};