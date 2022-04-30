//CALL MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//IMPORTING COMPONENTS
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer';


//FUNCTIONS AND METTHODS
function App() {
  //RENDER APP TO FRONTEND
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/item/:id' element={ <ItemDetailContainer /> } />
        <Route path='/category/:categoryProduct' element={ <ItemListContainer /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

//EXPORTING APP COMPONENT
export default App;