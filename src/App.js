//IMPORTING COMPONENTS
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';

//FUNCTIONS AND METTHODS
function App() {
  //RENDER APP TO FRONTEND
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Hola, Gustavo Silva, espero que estes disfrutando los productos de nuestras tiendas'} />
      <Footer />
    </>
  );
}

//EXPORTING APP COMPONENT
export default App;