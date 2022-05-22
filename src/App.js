//CALL MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//IMPORTING CONTEXT
import CartContext from './components/context/CartContext';
import UserContext from './components/context/AuthContext';

//IMPORTING COMPONENTS
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Register } from './components/Register';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { ListOrders } from './components/ListOrders';


//FUNCTIONS AND METTHODS
function App() {
  //RENDER APP TO FRONTEND
  return (
    <UserContext>
      <CartContext>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={
                <ProtectedRoutes>
                  <ItemListContainer />
                </ProtectedRoutes>
              } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/signup' element={ <Register /> } />
              <Route path='/item/:id' element={
                <ProtectedRoutes>
                  <ItemDetailContainer />
                </ProtectedRoutes>
              } />
              <Route path='/category/:categoryProduct' element={
                <ProtectedRoutes>
                  <ItemListContainer />
                </ProtectedRoutes>
              } />
              <Route path='/cart' element={
                <ProtectedRoutes>
                  <Cart />
                </ProtectedRoutes>
              } />
              <Route path='/orders' element={
                <ProtectedRoutes>
                  <ListOrders />
                </ProtectedRoutes>
              } />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext>
    </UserContext>
  );
}

//EXPORTING APP COMPONENT
export default App;