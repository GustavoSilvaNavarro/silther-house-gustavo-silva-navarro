//CALL MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//IMPORTING CONTEXT
import CartContext from './components/context/CartContext';

//IMPORTING COMPONENTS
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';


//FUNCTIONS AND METTHODS
function App() {
  //RENDER APP TO FRONTEND
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/item/:id' element={ <ItemDetailContainer /> } />
            <Route path='/category/:categoryProduct' element={ <ItemListContainer /> } />
            <Route path='/cart' element={ <Cart /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

//EXPORTING APP COMPONENT
export default App;