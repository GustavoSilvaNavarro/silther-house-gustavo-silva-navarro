//CALL MODULES
import { v4 as uuidv4 } from 'uuid';

//DATABASE PRODUCTS
export const allProducts = [
    {
        id: uuidv4(),
        category: "beverages",
        exist: true,
        url: 'https://res.cloudinary.com/dukuzakaw/image/upload/v1650761227/reactProjectCoder/eCommerceProducts/beer_ov0vbk.webp',
        name: "New England IPA Beer",
        description: "Harpoon IPA from Boston",
        price: 7,
        stock: 10
    },
    {
        id: uuidv4(),
        category: "lunch",
        exist: true,
        url: 'https://res.cloudinary.com/dukuzakaw/image/upload/v1650761231/reactProjectCoder/eCommerceProducts/pizza_onle8t.webp',
        name: "Peperoni Pizza",
        description: "Delicious Large Peperoni Italian Pizza",
        price: 44,
        stock: 45
    },
    {
        id: uuidv4(),
        category: "lunch",
        exist: true,
        url: 'https://res.cloudinary.com/dukuzakaw/image/upload/v1650761224/reactProjectCoder/eCommerceProducts/burger_mllkf5.webp',
        name: "American Burger",
        description: "Bacon Cheese Burger with Fries",
        price: 15,
        stock: 10
    },
    {
        id: uuidv4(),
        category: "dinner",
        exist: true,
        url: 'https://res.cloudinary.com/dukuzakaw/image/upload/v1650761225/reactProjectCoder/eCommerceProducts/falafel_ysfcio.webp',
        name: "Falafel",
        description: "Indian style falafel",
        price: 13,
        stock: 18
    }
];